import SocialIcons from "../components/SocialIcons";
import Form from "../components/Form";
import ContactInfo from "../components/ContactInfo";

const Contact = (props) => {
	const { name, email, location } = props.details;
	return (
		<section className='md:p-12 flex justify-center items-center w-full h-full'>
			<div className='flex md:flex-row flex-col w-full md:gap-0 gap-8 md:mt-0 mt-10'>
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
