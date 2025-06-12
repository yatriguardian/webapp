import React from 'react';
import PageBanner from '../components/common/PageBanner';
import ContactForm from '../components/contact/ContactForm';
import OfficeLocation from '../components/contact/OfficeLocation';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageBanner 
        title="Contact Us" 
        subtitle="Get in touch with our visa and travel experts" 
        imageSrc="https://images.pexels.com/photos/7709294/pexels-photo-7709294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="container-custom section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <OfficeLocation />
        </div>
      </div>
    </>
  );
};

export default ContactPage;