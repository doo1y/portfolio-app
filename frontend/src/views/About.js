import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const About = (props) => {
	const [hovering, setHovering] = useState(false);
	const xref = useRef(null);
	let sides = useRef("timeline-left");
	const [ref, inView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});

	const switchSides = () => {
		const mem = sides.current;
		if (sides.current === "timeline-left") sides.current = "timeline-right";
		else sides.current = "timeline-left";
		return mem;
	};

	const colorArr = [
		"#201923",
		"#fcff5d",
		"#7dfc00",
		"#0ec434",
		"#228c68",
		"#8ad8e8",
		"#235b54",
		"#29bdab",
		"#3998f5",
		"#37294f",
		"#277da7",
		"#3750db",
		"#f22020",
		"#991919",
		"#ffcba5",
		"#e68f66",
		"#c56133",
		"#96341c",
		"#632819",
		"#ffc413",
		"#f47a22",
		"#2f2aa0",
		"#b732cc",
		"#772b9d",
		"#f07cab",
		"#d30b94",
		"#edeff3",
		"#c3a5b4",
		"#946aa2",
		"#5d4c86",
	];

	const scrollClick = (e) => {
		e.preventDefault();
		const timelineSection = xref.current;
		const divNode = timelineSection.querySelector("div");
		divNode.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	const iconsArr = [
		<i className='devicon-coffeescript-original text-8xl'></i>,
		<i className='devicon-css3-plain text-8xl'></i>,
		<i className='devicon-docker-plain text-8xl'></i>,
		<i className='devicon-devicon-plain text-8xl'></i>,
		<i className='devicon-discordjs-plain text-8xl'></i>,
		<i className='devicon-express-original text-8xl'></i>,
		<i className='devicon-flask-original text-8xl'></i>,
		<i className='devicon-git-plain text-8xl'></i>,
		<i className='devicon-github-original text-8xl'></i>,
		<i className='devicon-graphql-plain text-8xl'></i>,
		<i className='devicon-html5-plain text-8xl'></i>,
		<i className='devicon-javascript-plain text-8xl'></i>,
		<i className='devicon-linux-plain text-8xl'></i>,
		<i className='devicon-mocha-plain text-8xl'></i>,
		<i className='devicon-mongodb-plain text-8xl'></i>,
		<i className='devicon-mysql-plain text-8xl'></i>,
		<i className='devicon-nodejs-plain text-8xl'></i>,
		<i className='devicon-npm-original-wordmark text-8xl'></i>,
		<i className='devicon-postgresql-plain text-8xl'></i>,
		<i className='devicon-python-plain text-8xl'></i>,
		<i className='devicon-react-original text-8xl'></i>,
		<i className='devicon-redux-original text-8xl'></i>,
		<i className='devicon-selenium-original text-8xl'></i>,
		<i className='devicon-sequelize-plain text-8xl'></i>,
		<i className='devicon-sqlalchemy-plain text-8xl'></i>,
		<i className='devicon-sqlite-plain text-8xl'></i>,
		<i className='devicon-swift-plain text-8xl'></i>,
		<i className='devicon-tailwindcss-original-wordmark text-8xl'></i>,
		<i className='devicon-typescript-plain text-8xl'></i>,
		<i className='devicon-pytest-plain text-8xl'></i>,
	];

	const timeline = [
		{
			title: "CS50X",
			from: "April, 2022",
			to: "June, 2022",
			courseWork: [
				"Scratch",
				"C",
				"Arrays",
				"Algorithms",
				"Memory",
				"Data Structures",
				"Python",
				"SQL",
				"HTML, CSS, and Javascript",
				"Cybersecurity",
				"Flask",
				"Emoji",
			],
		},
		{
			title: "App Academy Open",
			from: "July, 2022",
			to: "January, 2023",
			courseWork: [
				"Web Development Fundamentals",
				"JavaScript Fundamentals",
				"Intermediate JavaScript",
				"TDD and OOP",
				"Data Structures and Algorithms",
				"HTML and CSS",
				"Servers, APIs, and Promises",
				"Frontend JavaScript",
				"Express & SQL",
				"Express & Sequelize",
				"Web Security and Authentication",
				"React",
				"Redux and Authentication",
				"Python",
				"Flask, SQLAlchemy, and Forms",
				"Docker and Microservices",
			],
		},
	];

	return (
		<section className='h-full flex flex-col'>
			<section
				id='about'
				className='xl:pr-5 flex flex-col items-end justify-center'>
				<div className='mx-auto flex px-10 pt-20 md:flex-row flex-col items-center'>
					<div className='xl:pl-11 md:pl-8 lg:flex-grow w-2/4 flex flex-col md:items-start md:text-left md:mb-16 mb-0 items-center text-center'>
						<h2 className='title-font lg:text-6xl md:text-4xl text-2xl lg:mt-10 md:mt-16 mt-10 md:mb-4 font-medium'>
							Hi, I'm Samuel.
							<br className='inline-block whitespace-nowrap' />
							<span className='lg:text-5xl md:text-3xl lg:whitespace-normal font-medium md:whitespace-nowrap'>
								I love to build amazing apps.
							</span>
						</h2>
						<p className='md:leading-6 lg:leading-9 md:mb-8 md:mt-0 mt-7 lg:text-xl md:text-sm text-lg'>
							As a self-taught, full stack software developer, I am passionate
							about all aspects of software development. Self-motivated to
							further my knowledge in the field of Computer Science, I am always
							open-minded to new concepts and seeking a chance to grow my
							capabilities and skills.
							<br />
							In my free time, I like to relax at the beach, grab coffee with
							friends, or go on a long drive.
						</p>
						<div className='group md:flex hidden h-24 lg:flex-row flex-row md:flex-row justify-center'>
							<a
								href='#contact'
								className='lg:mr-4 mr-4 md:mr-2 flex items-center justify-center text-white whitespace-nowrap xl:h-20 xl:w-64 md:h-16 md:w-52 h-14 w-52 bg-green-500 border-0 py-2 px-6  focus:outline-none hover:bg-green-600 rounded md:text-2xl text-base'>
								Work With Me
							</a>
							<a
								href='#projects'
								onClick={scrollClick}
								onMouseEnter={(e) => setHovering(true)}
								onMouseLeave={(e) => setHovering(false)}
								className={
									"xl:h-20 xl:w-72 md:h-16 md:w-52 h-14 w-56 xl:hover:h-28 hover:h-16 transition-all duration-700 lg:ml-4 ml-4 md:ml-2 flex justify-center items-center flex-col whitespace-nowrap text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded md:text-2xl text-base"
								}>
								View Coursework
								{hovering && (
									<span className='group-hover:block w-min h-min self-center'>
										<FontAwesomeIcon icon={solid("angles-down")} />
									</span>
								)}
							</a>
						</div>
					</div>
					<div className='flex lg:justify-center md:mt-0 xsm:mt-5 mt-10 w-1/3 justify-center'>
						<img
							className='object-fill object-center rounded h-full w-full'
							alt='portrait of Samuel Park'
							src='/portrait_self_image.JPG'
						/>
					</div>
					<div className='md:hidden flex md:w-96 pt-5 pb-5 lg:flex-row flex-row justify-center items-center'>
						<a
							href='#contact-2'
							className='flex items-center justify-center text-white whitespace-nowrap h-16 w-52 bg-green-500 border-0 py-2 px-6  focus:outline-none hover:bg-green-600 rounded md:text-base text-sm'>
							Work With Me
						</a>
						<a
							href='#projects-2'
							onClick={scrollClick}
							className={
								"lg:ml-4 ml-4 md:ml-0 flex justify-center flex-col whitespace-nowrap text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white items-center rounded md:text-base text-sm h-16 w-52"
							}>
							View Coursework
						</a>
					</div>
				</div>
			</section>
			<section ref={xref} id='timeline-section' className='p-10'>
				<div id='timeline-outer-div' className='mt-20 justify-center'>
					<h2 className='text-6xl text-center'>Coursework</h2>
					<div id='timeline-mid-div'>
						<div id='timeline-last-div'>
							{timeline.map((x, i) => {
								return (
									<div key={i} className={`timeline-block ${switchSides()}`}>
										<div className='marker'></div>
										<div className='timeline-item'>
											<h2 className='mt-1 mb-1 text-2xl font-medium'>
												{x["title"]}
											</h2>
											<span className='period inline text-base'>
												<h4>
													{x["from"]} - {x["to"]}
												</h4>
											</span>
											<ul className='list-disc'>
												{x["courseWork"].map((y, j) => (
													<li className='timeline-list-item' key={`${i}-${j}`}>
														{y}
													</li>
												))}
											</ul>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
			<section className='flex flex-col items-center w-full justify-center lg:justify-center'>
				<h2 className='text-6xl mb-10'>Skills</h2>
				<div className='grid grid-cols-10 gap-5 mb-11'>
					{iconsArr.map((iconEl, i) => (
						<div
							className='w-full h-full p-6 border-2 rounded-xl border-transparent border-solid hover:border-yellow-400 duration-500'
							key={i}>
							{iconEl}
						</div>
					))}
				</div>
			</section>
		</section>
	);
};

export default About;
