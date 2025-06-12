import React from 'react';
import { Globe, Sun, Mountain, Building } from 'lucide-react';

const packages = [
  {
    icon: Globe,
    title: 'International Tours',
    destinations: ['Europe', 'USA', 'Australia', 'Southeast Asia'],
    features: [
      'All-inclusive packages',
      'Guided tours',
      'Luxury accommodations',
      'International flights'
    ],
    duration: '7-15 days',
    price: 'Starting from $1,999'
  },
  {
    icon: Sun,
    title: 'Beach Getaways',
    destinations: ['Maldives', 'Bali', 'Thailand', 'Goa'],
    features: [
      'Beach resorts',
      'Water activities',
      'Spa treatments',
      'Island hopping'
    ],
    duration: '5-10 days',
    price: 'Starting from $999'
  },
  {
    icon: Mountain,
    title: 'Adventure Tours',
    destinations: ['Nepal', 'New Zealand', 'Switzerland', 'Canada'],
    features: [
      'Trekking expeditions',
      'Adventure sports',
      'Camping',
      'Expert guides'
    ],
    duration: '7-12 days',
    price: 'Starting from $1,499'
  },
  {
    icon: Building,
    title: 'City Breaks',
    destinations: ['Dubai', 'Singapore', 'London', 'New York'],
    features: [
      'City tours',
      'Shopping trips',
      'Cultural experiences',
      'Local cuisine'
    ],
    duration: '4-7 days',
    price: 'Starting from $799'
  }
];

const TravelPackages: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Travel Packages</h2>
          <p className="text-lg text-gray-600">Curated travel experiences for every type of traveler</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-500 p-6 text-white">
                  <div className="flex items-center justify-center mb-4">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-center">{pkg.title}</h3>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Popular Destinations</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.destinations.map((dest, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Includes</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center text-gray-600">
                      <span>{pkg.duration}</span>
                      <span className="font-semibold text-blue-600">{pkg.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;