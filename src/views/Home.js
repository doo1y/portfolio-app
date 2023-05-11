const Home = (props) => {
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
		<section className='h-full flex flex-col-reverse sm:flex-row items-center w-full justify-center lg:justify-center'>
			<div className='flex flex-row-reverse h-2/6 justify-between sm:mr-10 mr-0 flex-nowrap basis-1/2'>
				<span className='flex flex-col'>
					<h1 className='md:text-6xl text-5xl mt-3 sm:mt-0 font-light sm:self-end self-center'>
						Samuel Park
					</h1>
					<h3 className='text-1xl md:mt-5 mt-1 font-light sm:self-end self-center'>
						Full Stack Developer
					</h3>
				</span>
				<span>
					{socialMediaIcons.map(([image, url, className], i) => (
						<a key={i} href={url} target='_blank' rel='noreferrer'>
							<img src={image} className={className} />
						</a>
					))}
				</span>
			</div>
			<div className='flex overflow-visible h-3/5 w-3/5 sm:justify-start justify-center basis-1/2 sm:ml-2'>
				<img
					className='object-cover sm:rounded-full rounded-lg sm:self-start self-center sm:w-96 sm:h-96 w-64 h-64'
					src='/self-image.png'
					alt='Photo of Samuel Park'
				/>
			</div>
		</section>
	);
};

export default Home;
