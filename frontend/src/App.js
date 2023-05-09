import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Octokit } from "octokit";
import Navbar from "./views/Navbar";

function App() {
	const [height, setHeight] = useState(0);
	const [menu, setMenu] = useState(false);

	const octokit = new Octokit({
		auth: process.env.REACT_APP_AUTH_TOKEN,
	});

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
		<main className='h-screen '>
			<div id='header' className='sticky top-0 left-0 right-0'>
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
				className={`flex justify-center content-center items-center flex-col`}>
				<Outlet context={octokit} />
			</div>
		</main>
	);
}

export default App;
