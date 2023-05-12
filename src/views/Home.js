import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Home = (props) => {
	const [ref, inView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});

	const socialMediaIcons = [
		[
			"linkedin_icon.svg",
			"https://www.linkedin.com/in/sampark81",
			"m-0.5 h-10 w-10",
		],
		[
			"instagram_icon.svg",
			"https://www.instagram.com/sampark81",
			"m-0.5 h-10 w-10",
		],
		["github_icon.svg", "https://www.github.com/doo1y", "h-11 w-11"],
	];

	return (
		<section className='flex flex-col-reverse sm:flex-row items-center w-full justify-center lg:justify-center -mt-5'>
			<motion.div
				ref={ref}
				initial={{ x: "-10vw", opacity: 0 }}
				animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
				transition={{ duration: 0.4, ease: "easeInOut" }}
				className='flex mg:flex-row-reverse flex-col h-2/6 justify-between sm:mr-10 mr-0 flex-nowrap basis-1/2'>
				<span className='flex flex-col'>
					<h1 className='md:text-6xl text-5xl mt-3 sm:mt-0 font-light sm:self-end self-center'>
						Samuel Park
					</h1>
					<h3 className='text-1xl md:mt-5 mt-1 font-light sm:self-end self-center'>
						Full Stack Developer
					</h3>
				</span>
				<span className='mg:inline flex flex-row sm:justify-end justify-center'>
					{socialMediaIcons.map(([image, url, className], i) => (
						<a key={i} href={url} target='_blank' rel='noreferrer'>
							<img src={image} className={className} />
						</a>
					))}
				</span>
			</motion.div>
			<motion.div
				className='flex overflow-visible h-3/5 w-3/5 sm:justify-start justify-center basis-1/2 sm:ml-2'
				ref={ref}
				initial={{ x: "10vw", opacity: 0 }}
				animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
				transition={{ duration: 0.4, ease: "easeInOut" }}>
				<img
					className='object-cover sm:rounded-full rounded-lg sm:self-start self-center sm:w-96 sm:h-96 w-64 h-64'
					src='/self-image.png'
					alt='Photo of Samuel Park'
				/>
			</motion.div>
		</section>
	);
};

export default Home;
