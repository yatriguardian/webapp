import React from 'react';
import { Shield, Heart, Plane, AlertTriangle } from 'lucide-react';

const plans = [
  {
    icon: Shield,
    title: 'Basic Coverage',
    price: '$30',
    duration: 'per trip',
    features: [
      'Medical expenses up to $50,000',
      'Trip cancellation',
      'Lost baggage up to $500',
      'Travel delay coverage'
    ],
    recommended: false
  },
  {
    icon: Heart,
    title: 'Premium Coverage',
    price: '$50',
    duration: 'per trip',
    features: [
      'Medical expenses up to $100,000',
      'Trip cancellation & interruption',
      'Lost baggage up to $1,000',
      'Emergency evacuation',
      'Adventure sports coverage'
    ],
    recommended: true
  },
  {
    icon: Plane,
    title: 'Annual Multi-Trip',
    price: '$200',
    duration: 'per year',
    features: [
      'Unlimited trips within a year',
      'Medical expenses up to $100,000',
      'Business trip coverage',
      'Family coverage option',
      'Worldwide assistance'
    ],
    recommended: false
  }
];

const InsuranceOptions: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Travel Insurance Plans</h2>
          <p className="text-lg text-gray-600">Protect your journey with comprehensive coverage</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-lg shadow-lg overflow-hidden border-2 
                  ${plan.recommended ? 'border-blue-500' : 'border-transparent'}`}
              >
                {plan.recommended && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-center mb-2">{plan.title}</h3>
                  
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.duration}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <Shield className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 
                    ${plan.recommended 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Important Information</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Pre-existing conditions may affect coverage</li>
                <li>• Claims must be filed within 30 days of incident</li>
                <li>• 24/7 emergency assistance available</li>
                <li>• Coverage terms and conditions apply</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceOptions;