import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";

const Form = () => {
	const [ref, inView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const [result, setResult] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		setResult("Sending....");

		const formData = new FormData(e.target);
		formData.append("access_key", process.env.REACT_APP_FORM_TOKEN);

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		}).then((res) => res.json());

		if (res.success) {
			console.log("Success", res);
			setResult(res.message);
		} else {
			console.log("Error", res);
			setResult(res.message);
		}
	};

	return (
		<>
			<motion.form
				action=''
				ref={ref}
				className=''
				initial={{ x: "-10vw", opacity: 0 }}
				animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
				transition={{ duration: 0.4, ease: "easeInOut" }}
				onSubmit={handleSubmit}>
				<h4 className='text-start pb-2.5 mb-6 text-4xl'>Message Me</h4>
				<div className='flex flex-row gap-2'>
					<input
						type='text'
						className='focus:border-b-2 focus:border-solid focus:border-cyan-500 text-lg xl:w-72 w-full p-2.5 bg-gray-200 mb-5 border-solid border-2 border-gray-200 rounded-sm outline-transparent'
						id='contactName'
						name='name'
						placeholder='Name'
						required
					/>
					<input
						type='email'
						className='focus:border-b-2 focus:border-solid focus:border-cyan-500 text-lg xl:w-72 w-full p-2.5 bg-gray-200 mb-5 border-solid border-2 border-gray-200 rounded-sm outline-transparent'
						id='contactEmail'
						name='email'
						placeholder='Email'
						required
					/>
				</div>
				<div className=''>
					<input
						type='text'
						className='focus:border-b-2 focus:border-solid focus:border-cyan-500 text-lg w-full p-2.5 bg-gray-200 mb-5 border-solid border-2 border-gray-200 rounded-sm outline-transparent'
						id='contactSubject'
						name='subject'
						placeholder='Subject'
						required
					/>
				</div>
				<div className=''>
					<textarea
						className='focus:border-b-2 focus:border-solid focus:border-cyan-500 text-lg w-full p-2.5 bg-gray-200 mb-5 border-solid border-2 border-gray-200 rounded-sm outline-transparent'
						name='message'
						id='contactMessage'
						rows='5'
						placeholder='Message'
						required></textarea>
				</div>
				<div className='col-12 pr-4 formSubmit'>
					<button className='text-xl bg-sky-500 hover:bg-sky-600 px-12 py-4 rounded-full'>
						Send Message
					</button>
				</div>
			</motion.form>
			<span>{result}</span>
		</>
	);
};

export default Form;
