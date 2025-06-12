import React from 'react';
import { Plane, Globe, Building2, GraduationCap, Briefcase, Heart } from 'lucide-react';

const categories = [
  {
    icon: Plane,
    title: 'Tourist Visa',
    description: 'For leisure travel and sightseeing purposes',
    features: ['Multiple entry options', 'Fast processing', '24/7 support']
  },
  {
    icon: Globe,
    title: 'Business Visa',
    description: 'For business meetings and conferences',
    features: ['Priority processing', 'Multiple entry', 'Extended stay options']
  },
  {
    icon: Building2,
    title: 'Work Visa',
    description: 'For employment opportunities abroad',
    features: ['Long-term stays', 'Family inclusion', 'Employment verification']
  },
  {
    icon: GraduationCap,
    title: 'Student Visa',
    description: 'For international education pursuits',
    features: ['Study permit assistance', 'Institution support', 'Extended validity']
  },
  {
    icon: Briefcase,
    title: 'Immigration',
    description: 'For permanent residency applications',
    features: ['Complete documentation', 'Legal assistance', 'Status tracking']
  },
  {
    icon: Heart,
    title: 'Family Visa',
    description: 'For family reunification purposes',
    features: ['Family sponsorship', 'Multiple applicants', 'Relationship verification']
  }
];

const VisaCategories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visa Categories</h2>
          <p className="text-lg text-gray-600">Choose the right visa type for your travel needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
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

export default VisaCategories;