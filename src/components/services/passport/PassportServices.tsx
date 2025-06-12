import React from 'react';
import { FileText, Clock, Shield, UserCheck } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'New Passport',
    description: 'First-time passport application assistance',
    features: [
      'Document verification',
      'Application filling',
      'Appointment booking',
      'Status tracking'
    ]
  },
  {
    icon: Clock,
    title: 'Passport Renewal',
    description: 'Hassle-free passport renewal service',
    features: [
      'Renewal before expiry',
      'Express processing',
      'Document preparation',
      'Delivery tracking'
    ]
  },
  {
    icon: Shield,
    title: 'Lost Passport',
    description: 'Emergency assistance for lost passports',
    features: [
      'Police report assistance',
      'Quick replacement',
      'Emergency processing',
      'Travel guidance'
    ]
  },
  {
    icon: UserCheck,
    title: 'Document Authentication',
    description: 'Passport and document verification services',
    features: [
      'Document attestation',
      'Embassy verification',
      'Apostille services',
      'Legal certification'
    ]
  }
];

const PassportServices: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Passport Services</h2>
          <p className="text-lg text-gray-600">Comprehensive passport assistance for all your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PassportServices;