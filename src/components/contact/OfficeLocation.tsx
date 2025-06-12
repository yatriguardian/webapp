import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const OfficeLocation: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h3 className="text-2xl font-semibold mb-6">Our Office</h3>
        
        <div className="space-y-6">
          <div className="flex">
            <MapPin size={24} className="text-primary-600 flex-shrink-0 mr-4" />
            <div>
              <h4 className="font-medium mb-1">Mumbai Office</h4>
              <p className="text-gray-600">
                1501, 2B Paradise Heights CHS,<br />
                MHADA Complex, Opp. Witty International School,<br />
                Chikuwadi, Borivali West,<br />
                Mumbai 400067
              </p>
            </div>
          </div>
          
          <div className="flex">
            <Phone size={24} className="text-primary-600 flex-shrink-0 mr-4" />
            <div>
              <h4 className="font-medium mb-1">Phone</h4>
              <p className="text-gray-600">
                <a href="tel:+919136759842" className="hover:text-primary-600">+91 9136-759-842</a>
              </p>
            </div>
          </div>
          
          <div className="flex">
            <Mail size={24} className="text-primary-600 flex-shrink-0 mr-4" />
            <div>
              <h4 className="font-medium mb-1">Email</h4>
              <p className="text-gray-600">
                <a href="mailto:connect@yatriguardian.in" className="hover:text-primary-600">connect@yatriguardian.in</a>
              </p>
            </div>
          </div>
          
          <div className="flex">
            <Clock size={24} className="text-primary-600 flex-shrink-0 mr-4" />
            <div>
              <h4 className="font-medium mb-1">Business Hours</h4>
              <p className="text-gray-600">
                Monday - Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-grow rounded-lg overflow-hidden shadow-md h-80">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6793633736384!2d72.84661847499171!3d19.21893248202468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c8431cd667%3A0x3b9c37426b5b5ce2!2sParadise%20Heights%20CHS!5e0!3m2!1sen!2sin!4v1709655144202!5m2!1sen!2sin"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          title="Office location"
        ></iframe>
      </div>
    </div>
  );
};

export default OfficeLocation;