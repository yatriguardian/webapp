import React from 'react';
import PageBanner from '../components/common/PageBanner';
import TravelServices from '../components/services/travel/TravelServices';
import TravelPackages from '../components/services/travel/TravelPackages';
import InsuranceOptions from '../components/services/travel/InsuranceOptions';
import FAQ from '../components/common/FAQ';
import CTASection from '../components/home/CTASection';

const TravelServicesPage: React.FC = () => {
  return (
    <>
      <PageBanner 
        title="Travel Services" 
        subtitle="Complete travel solutions for your journey" 
        imageSrc="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <TravelServices />
      <TravelPackages />
      <InsuranceOptions />
      <FAQ 
        category="travel" 
        title="Frequently Asked Questions About Travel Services"
      />
      <CTASection />
    </>
  );
};

export default TravelServicesPage;