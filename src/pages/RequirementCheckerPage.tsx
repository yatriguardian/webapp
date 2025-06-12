import React from 'react';
import PageBanner from '../components/common/PageBanner';
import VisaRequirementChecker from '../components/interactive/VisaRequirementChecker';
import CostCalculator from '../components/interactive/CostCalculator';
import AppointmentScheduler from '../components/interactive/AppointmentScheduler';

const RequirementCheckerPage: React.FC = () => {
  return (
    <>
      <PageBanner 
        title="Visa Requirement Checker" 
        subtitle="Find out visa requirements for your destination" 
        imageSrc="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="container-custom section">
        <div className="max-w-4xl mx-auto">
          <VisaRequirementChecker />
          <div className="mt-16">
            <CostCalculator />
          </div>
          <div className="mt-16">
            <AppointmentScheduler />
          </div>
        </div>
      </div>
    </>
  );
};

export default RequirementCheckerPage;