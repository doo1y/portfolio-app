import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
const AboutMain = (props) => {
	return (
		<section
			id='about'
			className='flex flex-col items-center justify-center sm:items-end xsm:-mt-20 -mt-5 h-screen'>
			<div className='flex sm:w-auto w-5/6 sm:px-10 md:flex-row flex-col sm:mt-0 -mt-7 justify-center items-center'>
				<motion.div
					ref={props.xref}
					initial={{ x: "-10vw", opacity: 0 }}
					animate={
						props.inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }
					}
					transition={{ duration: 0.4, ease: "easeInOut" }}
					className='sm:w-2/4 xl:pl-11 md:pl-8 lg:mr-28 md:mr-14 lg:flex-grow flex flex-col mt-4 md:items-start md:text-left items-center text-center'>
					<h2 className='title-font lg:text-6xl md:text-4xl text-3xl lg:mt-10 md:mt-16 mt-10 md:mb-4 font-medium'>
						Hi, I'm Samuel.
						<br className='inline-block whitespace-nowrap' />
						<span className='xl:text-4xl md:text-2xl text-xl italic font-medium md:whitespace-nowrap'>
							I love to build amazing apps.
						</span>
					</h2>
					<div className='sm:hidden flex xsm:mt-5 w-2/3 mt-6 justify-center'>
						<img
							className='object-fill object-center rounded h-full w-full'
							alt='portrait of Samuel Park'
							src='/portrait_self_image.JPG'
						/>
					</div>
					<p className='md:leading-6 lg:leading-9 tracking-wide md:mb-8 md:mt-0 mt-7 lg:text-xl text-sm md:text-lg'>
						As a self-taught, full stack software developer, I am passionate
						about all aspects of software development. Furthermore, I am always
						open-minded to new concepts and seeking new opportunities to grow my
						capabilities and skills.
						<br />
						In my free time, I like to relax at the beach, grab coffee with
						friends, or go on a long drive.
					</p>
					<div className='group md:flex hidden h-24 lg:flex-row flex-row md:flex-row justify-center'>
						<a
							href='#contact'
							className='lg:mr-4 mr-4 md:mr-2 flex items-center justify-center text-white whitespace-nowrap xl:h-20 xl:w-64 lg:h-16 lg:w-52 h-12 w-44 bg-green-500 border-0 py-2 px-6  focus:outline-none hover:bg-green-600 rounded lg:text-2xl md:text-lg text-base'>
							Work With Me
						</a>
						<a
							href='#projects'
							onClick={props.scrollClick}
							onMouseEnter={(e) => props.setHovering(true)}
							onMouseLeave={(e) => props.setHovering(false)}
							className={
								"xl:h-20 xl:w-72 lg:h-16 lg:w-56 h-12 w-44 xl:hover:h-28 hover:h-16 transition-all duration-700 lg:ml-4 ml-4 md:ml-2 flex justify-center items-center flex-col whitespace-nowrap text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded lg:text-2xl md:text-lg text-base"
							}>
							View Coursework
							{props.hovering && (
								<span className='group-hover:block w-min h-min self-center'>
									<FontAwesomeIcon icon={solid("angles-down")} />
								</span>
							)}
						</a>
					</div>
				</motion.div>
				<div className='sm:flex hidden xsm:mt-5 mt-10 w-1/3 justify-center'>
					<img
						className='object-fill object-center rounded h-full w-full'
						alt='portrait of Samuel Park'
						src='/portrait_self_image.JPG'
					/>
				</div>
				<div className='md:hidden flex md:w-96 pt-5 pb-5 mt-2 lg:flex-row flex-row justify-center items-center'>
					<a
						href='#contact-2'
						className='flex items-center justify-center text-white whitespace-nowrap sm:h-16 sm:w-52 h-12 w-42 bg-green-500 border-0 py-2 px-6  focus:outline-none hover:bg-green-600 rounded md:text-base text-sm'>
						Work With Me
					</a>
					<a
						href='#projects-2'
						onClick={props.scrollClick}
						className={
							"lg:ml-4 ml-4 md:ml-0 flex justify-center flex-col whitespace-nowrap text-gray-400 h-12 w-42 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white items-center rounded md:text-base text-sm sm:h-16 sm:w-52"
						}>
						View Coursework
					</a>
				</div>
			</div>
		</section>
	);
};

export default AboutMain;
