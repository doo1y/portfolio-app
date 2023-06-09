import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { motion } from "framer-motion";

const ContactInfo = ({ name, email, location }) => {
	const [ref, inView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	return (
		<motion.div
			className='md:px-0 sm:px-10 px-5 w-full'
			ref={ref}
			initial={{ x: "10vw", opacity: 0 }}
			animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
			transition={{ duration: 0.4, ease: "easeInOut" }}>
			<h4 className='text-start pb-2.5 md:mb-6 mb-2 md:ml-0 ml-1 md:text-4xl text-2xl'>
				Contact Information
			</h4>
			<p className='mb-5 tracking-wider text-start md:text-xl text-md italic text-zinc-400 md:ml-0 ml-1 '>
				Open for opportunities. Let's connect!
			</p>
			<ul className='listInfo flex flex-col gap-y-8 md:mx-0 mx-6'>
				<li>
					<div className='flex items-center'>
						<span className='flex items-center px-[3px]'>
							<FontAwesomeIcon
								className='text-5xl text-sky-500'
								icon={solid("user")}
							/>
						</span>
						<div className='mediaWrap ml-7 flex flex-col items-start'>
							<h6 className='text-lg font-medium'>Name</h6>
							<span className='infoValue'>{name}</span>
						</div>
					</div>
				</li>
				<li className=''>
					<div className='flex items-center'>
						<span className='flex items-center px-[6px]'>
							<FontAwesomeIcon
								className='text-5xl text-sky-500'
								icon={solid("location-pin")}
							/>
						</span>
						<div className='mediaWrap ml-7 flex flex-col items-start'>
							<h6 className='text-lg font-medium'>Location</h6>
							<span className='infoValue'>{location}</span>
						</div>
					</div>
				</li>
				<li>
					<div className='flex items-center'>
						<span className='flex items-center'>
							<FontAwesomeIcon
								className='text-5xl text-sky-500'
								icon={solid("envelope")}
							/>
						</span>
						<div className='mediaWrap ml-7 flex flex-col items-start'>
							<h6 className='text-lg font-medium'>Email</h6>
							<span className='infoValue'>
								<a href={`mailto:${email}`}>{email}</a>
							</span>
						</div>
					</div>
				</li>
			</ul>
		</motion.div>
	);
};

export default ContactInfo;
