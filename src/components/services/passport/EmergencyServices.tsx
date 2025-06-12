import React from 'react';
import { AlertTriangle, Clock, Phone, Mail } from 'lucide-react';

const EmergencyServices: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Passport Services</h2>
          <p className="text-lg text-gray-600">Quick assistance for urgent passport requirements</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-red-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Emergency Situations</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Lost or stolen passport while traveling</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Urgent travel due to medical emergencies</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Death of family member abroad</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Business emergency requiring immediate travel</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Required Documents</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Police report (for lost/stolen passports)</li>
                <li>• Proof of emergency (medical records, death certificate)</li>
                <li>• Travel itinerary</li>
                <li>• Identity proof</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Processing Time</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Tatkal Service</h4>
                  <p className="text-gray-600">Same day to 24 hours processing</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Express Service</h4>
                  <p className="text-gray-600">1-3 business days processing</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Phone className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">24/7 Support</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-500 mr-2" />
                  <a href="tel:+919136759842" className="text-gray-700 hover:text-green-600">
                    +919136759842
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-500 mr-2" />
                  <a href="mailto:connect@yatriguardian.in" className="text-gray-700 hover:text-green-600">
                    connect@yatriguardian.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyServices;