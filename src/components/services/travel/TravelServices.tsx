import React from 'react';
import { Plane, Hotel, Shield, MapPin } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Flight Bookings',
    description: 'International and domestic flight reservations',
    features: [
      'Best fare guarantees',
      'Multiple airlines',
      'Flexible booking options',
      'Group travel discounts'
    ]
  },
  {
    icon: Hotel,
    title: 'Hotel Reservations',
    description: 'Worldwide accommodation bookings',
    features: [
      'Luxury to budget options',
      'Instant confirmation',
      'Free cancellation',
      'Best price guarantee'
    ]
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive travel protection plans',
    features: [
      'Medical coverage',
      'Trip cancellation',
      'Lost baggage protection',
      'Emergency assistance'
    ]
  },
  {
    icon: MapPin,
    title: 'Package Tours',
    description: 'Curated travel packages worldwide',
    features: [
      'All-inclusive options',
      'Customized itineraries',
      'Local experiences',
      'Group discounts'
    ]
  }
];

const TravelServices: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Travel Services</h2>
          <p className="text-lg text-gray-600">Comprehensive travel solutions for your journey</p>
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

export default TravelServices;