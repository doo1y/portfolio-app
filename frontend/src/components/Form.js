import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";

const Form = () => {
	const [ref, inView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});

	const [success, setSuccess] = useState(false);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
		access_key: "4f412a8f-0a11-4ba9-8e37-e12661f36602",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = JSON.stringify(formData);

		fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: data,
		})
			.then((res) => res.json())
			.then((data) => {
				setSuccess(true);
				setFormData({
					...formData,
					name: "",
					email: "",
					subject: "",
					message: "",
				});
				setTimeout(() => {
					setSuccess(false);
				}, 3000);
			})
			.catch((err) => console.log(err));
	};

	return (
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
					onChange={handleChange}
					value={formData.name}
					id='contactName'
					name='name'
					placeholder='Name'
					required
				/>
				<input
					type='email'
					className='focus:border-b-2 focus:border-solid focus:border-cyan-500 text-lg xl:w-72 w-full p-2.5 bg-gray-200 mb-5 border-solid border-2 border-gray-200 rounded-sm outline-transparent'
					onChange={handleChange}
					value={formData.email}
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
					onChange={handleChange}
					value={formData.subject}
					id='contactSubject'
					name='subject'
					placeholder='Subject'
					required
				/>
			</div>
			<div className=''>
				<textarea
					className='focus:border-b-2 focus:border-solid focus:border-cyan-500 text-lg w-full p-2.5 bg-gray-200 mb-5 border-solid border-2 border-gray-200 rounded-sm outline-transparent'
					onChange={handleChange}
					value={formData.message}
					name='message'
					id='contactMessage'
					rows='5'
					placeholder='Message'
					required></textarea>
			</div>
			<div className='col-12 pr-4 formSubmit'>
				<button className='text-xl bg-sky-500 hover:bg-sky-600 px-12 py-4 rounded-full'>
					{success ? "Message Sent" : "Send Message"}
				</button>
			</div>
		</motion.form>
	);
};

export default Form;
