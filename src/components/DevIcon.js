const DevIcon = (props) => {
	return (
		<section className='flex flex-col items-center justify-center lg:justify-center'>
			<h2 className='pt-5 lg:text-6xl md:text-3xl text-3xl text-center'>
				Skills
			</h2>
			<div className='grid md:grid-cols-10 sm:grid-cols-6 grid-cols-5 xl:gap-5 place-items-center gap-2 lg:mb-11'>
				{props.icons.map((iconEl, i) => (
					<div
						className='md:p-6 p-3 border-2 rounded-xl border-transparent border-solid hover:border-yellow-400 duration-500'
						key={i}>
						{iconEl}
					</div>
				))}
			</div>
		</section>
	);
};

export default DevIcon;
