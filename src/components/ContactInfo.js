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
			className='contactInfo'
			ref={ref}
			initial={{ x: "10vw", opacity: 0 }}
			animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
			transition={{ duration: 0.4, ease: "easeInOut" }}>
			<h4 className='text-start pb-2.5 text-4xl'>Contact Information</h4>
			<p className='mb-5 mt-3 text-start text-xl italic'>
				Open for opportunities. Let's connect!
			</p>
			<ul className='listInfo flex flex-col gap-y-8'>
				<li>
					<div className='flex items-center'>
						<span className='flex items-center'>
							<FontAwesomeIcon
								className='text-5xl text-sky-500'
								icon={solid("user")}
							/>
						</span>
						<div className='mediaWrap'>
							<h6 className='text-lg'>Name</h6>
							<span className='infoValue'>{name}</span>
						</div>
					</div>
				</li>
				<li>
					<div className='flex items-center'>
						<span className='flex px-1 items-center'>
							<FontAwesomeIcon
								className='text-5xl text-sky-500'
								icon={solid("location-pin")}
							/>
						</span>
						<div className='mediaWrap'>
							<h6 className='text-lg'>Location</h6>
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
						<div className='mediaWrap'>
							<h6 className='text-lg'>Email</h6>
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
