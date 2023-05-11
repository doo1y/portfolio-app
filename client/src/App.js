import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./views/Navbar";

function App() {
	const [height, setHeight] = useState(0);
	const [menu, setMenu] = useState(false);

	const updateHeight = (value) => {
		setHeight(value);
	};

	const handleCloseClick = (e) => {
		setMenu(false);
	};

	const handleOpenClick = (e) => {
		setMenu(true);
	};

	return (
		<main className='h-screen'>
			<div id='header' className='sticky z-50 top-0 left-0 right-0'>
				<Navbar
					updateHeight={updateHeight}
					handleCloseClick={handleCloseClick}
					handleOpenClick={handleOpenClick}
					menu={menu}
				/>
			</div>
			<div
				id='content'
				onClick={handleCloseClick}
				style={{ height: `calc(100% - ${height}px)` }}
				className={`flex content-center items-center flex-col`}>
				<Outlet />
			</div>
			<footer></footer>
		</main>
	);
}

export default App;