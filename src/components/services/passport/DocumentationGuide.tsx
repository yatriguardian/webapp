import React from 'react';
import { FileText, FileCheck, AlertCircle, HelpCircle } from 'lucide-react';

const documents = [
  {
    category: 'Identity Proof',
    items: [
      'Aadhar Card',
      'PAN Card',
      'Voter ID',
      'Driving License'
    ]
  },
  {
    category: 'Address Proof',
    items: [
      'Utility Bills (not older than 3 months)',
      'Bank Statement',
      'Rental Agreement',
      'Property Documents'
    ]
  },
  {
    category: 'Additional Documents',
    items: [
      'Birth Certificate',
      'Educational Certificates',
      'Marriage Certificate (if applicable)',
      'Previous Passport (if any)'
    ]
  },
  {
    category: 'Photographs',
    items: [
      '4 Recent passport size photographs',
      'White background',
      'No glasses or head covering',
      'Neutral expression'
    ]
  }
];

const DocumentationGuide: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentation Guide</h2>
          <p className="text-lg text-gray-600">Essential documents required for passport services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {documents.map((doc, index) => {
            const icons = [FileText, FileCheck, AlertCircle, HelpCircle];
            const IconComponent = icons[index];
            
            return (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="w-6 h-6 text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">{doc.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {doc.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Important Notes:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• All documents must be original and self-attested</li>
                <li>• Documents in regional languages must be translated to English</li>
                <li>• Digital copies of all documents should be clear and readable</li>
                <li>• Additional documents may be required based on specific cases</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationGuide;