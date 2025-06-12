import React, { useState } from 'react';
import { FileCheck, FileText, FileImage, FileSpreadsheet } from 'lucide-react';

const visaTypes = [
  'Tourist Visa',
  'Business Visa',
  'Student Visa',
  'Work Visa',
  'Family Visa'
];

const documents = {
  'Tourist Visa': [
    { icon: FileText, name: 'Valid Passport', description: 'Minimum 6 months validity' },
    { icon: FileImage, name: 'Passport Size Photos', description: 'Recent photographs with white background' },
    { icon: FileSpreadsheet, name: 'Bank Statements', description: 'Last 3 months statements' },
    { icon: FileCheck, name: 'Travel Itinerary', description: 'Confirmed flight bookings' }
  ],
  'Business Visa': [
    { icon: FileText, name: 'Business Letter', description: 'Invitation from host company' },
    { icon: FileCheck, name: 'Company Registration', description: 'Proof of business registration' },
    { icon: FileSpreadsheet, name: 'Financial Documents', description: 'Company bank statements' },
    { icon: FileImage, name: 'Professional Profile', description: 'Resume and credentials' }
  ],
  'Student Visa': [
    { icon: FileCheck, name: 'Acceptance Letter', description: 'From educational institution' },
    { icon: FileSpreadsheet, name: 'Financial Proof', description: 'Proof of funds for study period' },
    { icon: FileText, name: 'Academic Records', description: 'Previous education certificates' },
    { icon: FileImage, name: 'Language Proficiency', description: 'IELTS/TOEFL scores' }
  ],
  'Work Visa': [
    { icon: FileText, name: 'Employment Contract', description: 'Signed job offer letter' },
    { icon: FileCheck, name: 'Work Permit', description: 'Approved work authorization' },
    { icon: FileSpreadsheet, name: 'Qualification Documents', description: 'Degrees and certificates' },
    { icon: FileImage, name: 'Professional References', description: 'Letters from previous employers' }
  ],
  'Family Visa': [
    { icon: FileText, name: 'Relationship Proof', description: 'Marriage/Birth certificates' },
    { icon: FileCheck, name: 'Sponsor Documents', description: 'Sponsor\'s residency proof' },
    { icon: FileSpreadsheet, name: 'Financial Documents', description: 'Income proof of sponsor' },
    { icon: FileImage, name: 'Family Photos', description: 'Recent family photographs' }
  ]
};

const DocumentChecklists: React.FC = () => {
  const [selectedType, setSelectedType] = useState(visaTypes[0]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Document Checklists</h2>
          <p className="text-lg text-gray-600">Required documents for different visa types</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {visaTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 
                ${selectedType === type 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents[selectedType].map((doc, index) => {
            const IconComponent = doc.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <IconComponent className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{doc.name}</h3>
                </div>
                <p className="text-gray-600">{doc.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DocumentChecklists;