import React from 'react';
import { DollarSign, Clock, Shield, Award } from 'lucide-react';

const feeCategories = [
  {
    type: 'Tourist Visa',
    processing: ['Standard: $150', 'Express: $250', 'Premium: $350'],
    duration: '5-7 business days',
    features: ['Basic processing', 'Email support', 'Standard tracking']
  },
  {
    type: 'Business Visa',
    processing: ['Standard: $250', 'Express: $400', 'Premium: $550'],
    duration: '7-10 business days',
    features: ['Priority processing', 'Dedicated support', 'Real-time tracking']
  },
  {
    type: 'Student Visa',
    processing: ['Standard: $200', 'Express: $300', 'Premium: $450'],
    duration: '10-15 business days',
    features: ['Document review', 'Interview preparation', 'Application support']
  },
  {
    type: 'Work Visa',
    processing: ['Standard: $300', 'Express: $500', 'Premium: $700'],
    duration: '15-20 business days',
    features: ['Complete assistance', 'Legal review', 'Status monitoring']
  }
];

const FeeStructure: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visa Fee Structure</h2>
          <p className="text-lg text-gray-600">Transparent pricing for all visa categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {feeCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-blue-500 p-6 text-white">
                <h3 className="text-xl font-semibold text-center">{category.type}</h3>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-5 h-5 text-blue-500 mr-2" />
                    <h4 className="font-semibold">Processing Fees</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.processing.map((fee, idx) => (
                      <li key={idx} className="text-gray-600">{fee}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-blue-500 mr-2" />
                    <h4 className="font-semibold">Processing Time</h4>
                  </div>
                  <p className="text-gray-600">{category.duration}</p>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-blue-500 mr-2" />
                    <h4 className="font-semibold">Features</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <Award className="w-4 h-4 text-blue-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            * Additional fees may apply based on embassy charges and document requirements
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;