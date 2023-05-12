const Footer = (props) => {
	return (
		<section>
			&#x24B8; 2023 Samuel Park
			<br />
			<span className='text-zinc-600'>
				Powered by{" "}
				<a href='https://react.dev/' className='text-sky-500'>
					React
				</a>{" "}
				and{" "}
				<a href='https://tailwindcss.com/' className='text-sky-500'>
					TailwindCSS
				</a>
			</span>
		</section>
	);
};

export default Footer;
