import { useRef } from "react";
const Timeline = (props) => {
	return (
		<section ref={props.xref} id='timeline-section' className='px-5 -mt-20'>
			<div id='timeline-outer-div' className='justify-center'>
				<h2 className='mt-20 lg:text-6xl md:text-3xl text-3xl text-center'>
					Coursework
				</h2>
				<div id='timeline-mid-div'>
					<div id='timeline-last-div'>
						{props.timeline.map((x, i) => {
							return (
								<div
									key={i}
									className={`timeline-block ${props.switchSides()}`}>
									<div className='marker'></div>
									<div className='timeline-item'>
										<h2 className='mt-1 mb-1 md:text-2xl text-xl font-semibold md:font-medium'>
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
	);
};

export default Timeline;
7;
