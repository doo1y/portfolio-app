import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./views/Navbar";
import Footer from "./views/Footer";

function App() {
	const [height, setHeight] = useState(0);

	const updateHeight = (value) => {
		setHeight(value);
	};

	return (
		<>
			<header id='header' className='sticky z-50 top-0 left-0 right-0 w-screen'>
				<Navbar updateHeight={updateHeight} />
			</header>
			<main
				id='content'
				// style={{ height: `calc(100% - ${height}px)` }}
				className={`flex content-center items-center flex-col`}>
				<Outlet />
			</main>
			<footer id='footer' className='mb-3'>
				<Footer />
			</footer>
		</>
	);
}

export default App;
