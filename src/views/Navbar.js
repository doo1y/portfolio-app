import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Navbar = (props) => {
	const ref = useRef(null);

	useEffect(() => {
		props.updateHeight(ref.current.clientHeight);
	});
	return (
		<header
			ref={ref}
			className='z-50 bg-slate-50 top-0 left-0 right-0 grid grid-cols-2 place-content-between px-3 pt-2 h-min'>
			<div className='logo pb-2'>
				<img
					className='object-contain self-center h-16 w-16 max-w-screen-sm'
					rel='portfolio logo'
					src='/dooly-bg_removed.png'
				/>
			</div>
			<nav className={`md:flex ${!props.menu ? "hidden" : null} justify-end`}>
				<ul className='md:flex sm:justify-end md:flex-end md:space-x-6'>
					{[
						["/", "Home"],
						["/about", "About"],
						["/projects", "Projects"],
						["/contact", "Contact"],
					].map(([href, title], i) => (
						<li
							key={i}
							className='flex md:self-center justify-end mr-1 rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>
							<Link className='mb-3' to={href} onClick={props.handleCloseClick}>
								{title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div
				onClick={props.handleOpenClick}
				className={`md:hidden ${
					props.menu ? "hidden" : "flex"
				} h-full justify-end items-center`}>
				<FontAwesomeIcon className='md:hidden h-12 w-12' icon={solid("fish")} />
			</div>
		</header>
	);
};

export default Navbar;
