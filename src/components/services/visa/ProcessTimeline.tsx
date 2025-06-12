import React from 'react';
import { ClipboardCheck, FileText, UserCheck, Calendar, CreditCard, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Initial Consultation',
    description: 'Free assessment of your visa requirements'
  },
  {
    icon: FileText,
    title: 'Document Collection',
    description: 'Gathering and verification of required documents'
  },
  {
    icon: UserCheck,
    title: 'Application Review',
    description: 'Thorough review of your visa application'
  },
  {
    icon: Calendar,
    title: 'Submission',
    description: 'Application submission to relevant authorities'
  },
  {
    icon: CreditCard,
    title: 'Processing',
    description: 'Visa processing and status tracking'
  },
  {
    icon: CheckCircle,
    title: 'Approval & Collection',
    description: 'Visa approval and passport collection'
  }
];

const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visa Process Timeline</h2>
          <p className="text-lg text-gray-600">Your journey to visa approval in 6 simple steps</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full md:w-1/2 p-4">
                    <div className={`bg-white rounded-lg shadow-lg p-6 ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'}`}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white relative z-10">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="flex-1 w-full md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;