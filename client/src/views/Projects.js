import DisplayProjects from "../components/DisplayProjects";

const Projects = (props) => {
	return (
		<section className='px-6 pt-16 mx-auto space-y-8 max-w-7xl md:space-y-16 md:pt-24 lg:pt-32"'>
			<section id='projects-title' className='max-w-2xl mx-auto lg:mx-0'>
				<h1 className='text-4xl text-zinc-400 font-medium text-start'>
					Projects
				</h1>
				<h2 className='italic mt-4 text-zinc-400 text-start'>
					Some were developed with provided instructions for educational
					purposes <br /> Some I modeled and developed from scratch
				</h2>
			</section>
			<DisplayProjects />
		</section>
	);
};

export default Projects;
