import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Navbar = (props) => {
	const [toggled, setToggled] = useState(false);
	const ref = useRef(null);
	// 			${!props.menu ? "hidden" : null}
	useEffect(() => {
		props.updateHeight(ref.current.clientHeight);
	});
	return (
		<div
			ref={ref}
			className='bg-slate-100 top-0 left-0 right-0 grid grid-cols-2 place-content-between px-3 pt-2 h-min'>
			<div className='logo pb-2'>
				<img
					className='object-contain self-center md:h-16 md:w-16 w-12 h-12 max-w-screen-sm'
					rel='portfolio logo'
					src='/dooly-bg_removed.png'
				/>
			</div>
			<div
				onClick={() => setToggled(!toggled)}
				className={`${
					toggled ? "hamburger close" : "hamburger"
				} md:hidden block place-self-end self-center md:pb-0 mb-2`}>
				<span className='meat'></span>
				<span className='meat'></span>
				<span className='meat'></span>
				<span className='meat'></span>
			</div>
			<nav className={`md:flex justify-end col-start-2`}>
				<ul
					className={[
						"menu flex md:flex-row flex-col md:max-h-none max-h-0 sm:justify-end md:flex-end overflow-hidden md:space-x-6",
						toggled && "active",
					]
						.filter(Boolean)
						.join(" ")}>
					{[
						["/", "Home"],
						["/about", "About"],
						["/projects", "Projects"],
						["/contact", "Contact"],
					].map(([href, title], i) => (
						<li
							key={i}
							className='flex md:self-center justify-end mr-1 rounded-lg px-3 py-2 text-zinc-500 font-medium hover:bg-slate-100 hover:text-slate-900'>
							<Link
								className='mb-3'
								to={href}
								onClick={() => setToggled(!toggled)}>
								{title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
