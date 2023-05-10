import SocialIcons from "../components/SocialIcons";
import Form from "../components/Form";
import ContactInfo from "../components/ContactInfo";

const Contact = (props) => {
	const { name, email, location } = props.details;
	return (
		<section className='lg:p-12 flex flex-col justify-center items-center h-full'>
			<div className='flex flex-row'>
				<div className='gap-6 flex'>
					<Form />
				</div>
				<div className='gap-6 flex mx-11'>
					<ContactInfo name={name} location={location} email={email} />
				</div>
			</div>
		</section>
	);
};

export default Contact;
