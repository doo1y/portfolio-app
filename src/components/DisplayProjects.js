import { useState, useEffect, isValidElement } from "react";
import { Octokit } from "octokit";

const DisplayProjects = (props) => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const retrieve = async () => {
			const octokit = new Octokit({
				userAgent: "my-app/v.1.0.0",
				auth: process.env.REACT_APP_AUTH_TOKEN,
				request: {
					agent: "sam-new-user",
				},
				baseURL: "https://api.github.com",
			});
			try {
				const result = await octokit.request("GET /user/repos", {
					owner: "doo1y",
				});

				const res = result.data.map((x, i) => ({
					title: x.name,
					url: x.html_url,
					description: x.description,
					created: x.created_at,
				}));

				const projectsJSX = res.map((x, i) => (
					<div
						key={`projects-${i}`}
						className='overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600'>
						<a href={x["url"]}>
							<article className='relative -z-30 h-full w-full p-4 md:p-8'>
								<div className='flex justify-between gap-2 items-center'>
									<time dateTime={x["created"]}></time>
								</div>
								<h2 className='mt-4 text-3xl font-bold text-zinc-400 group-hover:text-white sm:text-4xl font-display'>
									{x["title"]}
								</h2>
								<p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
									{x["description"]}
								</p>
								{!i ? (
									<div className='absolute -z-30 bottom-4 md:bottom-8'>
										<p className='text-zinc-200 hover:text-zinc-50 hidden lg:block'>
											Read more <span aria-hidden='true'>→</span>
										</p>
									</div>
								) : null}
							</article>
						</a>
					</div>
				));

				setProjects(projectsJSX);
			} catch (e) {
				console.log(e);
			}
		};

		retrieve();
	}, []);

	const loading = (
		<div className='overflow-hidden duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600'>
			<article className='h-full w-full p-4 md:p-8'>
				<div className='animate-pulse flex space-x-4'>
					<div className='rounded-full bg-zinc-400 h-10 w-10'></div>
					<div className='flex-1 space-y-6 py-1'>
						<div className='h-2 bg-zinc-400 rounded'></div>
						<div className='space-y-3'>
							<div className='grid grid-cols-3 gap-4'>
								<div className='h-2 bg-zinc-400 rounded col-span-2'></div>
								<div className='h-2 bg-zinc-400 rounded col-span-1'></div>
							</div>
							<div className='h-2 bg-zinc-400 rounded'></div>
						</div>
					</div>
				</div>
			</article>
		</div>
	);

	return (
		<>
			<div className='w-full h-px bg-zinc-800' />
			<section className='grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 '>
				{isValidElement(projects[0]) ? projects[0] : loading}
				<div className='flex flex-col w-full gap-8  mx-auto border-t border-gray-900/10  lg:mx-0  lg:border-t-0'>
					{isValidElement(projects[0]) ? projects[1] : loading}
					{isValidElement(projects[0]) ? projects[2] : loading}
				</div>
				<div className='grid  grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3'></div>
			</section>
			<div className='w-full h-px bg-zinc-800' />
			<section className='flex flex-col gap-8 '>
				{isValidElement(projects[0]) && projects.slice(3)}
			</section>
		</>
	);
};

export default DisplayProjects;
