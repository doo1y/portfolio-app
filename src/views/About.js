import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import DevIcon from "../components/DevIcon";
import Timeline from "../components/Timeline";
import AboutMain from "../components/AboutMain";

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

	const iconsArr = [
		<i className='xl: text-4xl devicon-coffeescript-original 2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-css3-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-docker-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-devicon-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-discordjs-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-express-original  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-flask-original  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-git-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-github-original  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-graphql-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-html5-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-javascript-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-linux-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-mocha-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-mongodb-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-mysql-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-nodejs-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-npm-original-wordmark  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-postgresql-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-python-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-react-original  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-redux-original  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-selenium-original  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-sequelize-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-sqlalchemy-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-sqlite-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-swift-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-tailwindcss-original-wordmark  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-typescript-plain  2xl:text-8xl'></i>,
		<i className='xl: text-4xl devicon-pytest-plain  2xl:text-8xl'></i>,
	];

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

	const timeline = [
		{
			title: "University of California, San Diego",
			from: "June, 2018",
			to: "July, 2021",
			courseWork: ["BA in Sociology", "Minor in Philosophy"],
		},
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
		<section className='h-full flex flex-col text-zinc-400'>
			<AboutMain
				xref={ref}
				inView={inView}
				scrollClick={scrollClick}
				hovering={hovering}
				setHovering={setHovering}
			/>
			<Timeline xref={xref} timeline={timeline} switchSides={switchSides} />
			<DevIcon icons={iconsArr} />
		</section>
	);
};

export default About;
