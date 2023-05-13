import SocialIcons from "../components/SocialIcons";
import Form from "../components/Form";
import ContactInfo from "../components/ContactInfo";

const Contact = (props) => {
	const { name, email, location } = props.details;
	return (
		<section className='px-6 pt-16 mx-auto space-y-8 max-w-7xl md:space-y-16 md:pt-24 lg:pt-32'>
			<section id='contact-title' className='max-w-2xl mx-auto lg:mx-0'>
				<h1 className='text-4xl text-zinc-400 font-medium text-start'>
					Contact
				</h1>
			</section>
			<div className='flex md:flex-row flex-col md:gap-0 gap-8 md:mt-0 mt-10'>
				<div className='gap-6 flex'>
					<Form />
				</div>
				<div className='gap-6 flex'>
					<ContactInfo name={name} location={location} email={email} />
				</div>
			</div>
		</section>
	);
};

export default Contact;
