import React from 'react';

import ContactInformation from '../component/contactMe/ContactInformation';
import ContactInput from '../component/contactMe/ContactInput';
const ContactMe = () => {
	return (
     <div>
       <div className="contact">
         <ContactInformation/>
         <ContactInput/>
       </div>
     </div>
	);
}

export default ContactMe;
