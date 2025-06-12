import React from 'react';
import PageBanner from '../components/common/PageBanner';
import VisaCategories from '../components/services/visa/VisaCategories';
import ProcessTimeline from '../components/services/visa/ProcessTimeline';
import DocumentChecklists from '../components/services/visa/DocumentChecklists';
import FeeStructure from '../components/services/visa/FeeStructure';
import FAQ from '../components/common/FAQ';
import CTASection from '../components/home/CTASection';

const VisaServicesPage: React.FC = () => {
  return (
    <>
      <PageBanner 
        title="Visa Services" 
        subtitle="Expert visa assistance for over 100+ countries" 
        imageSrc="https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <VisaCategories />
      <ProcessTimeline />
      <DocumentChecklists />
      <FeeStructure />
      <FAQ 
        category="visa" 
        title="Frequently Asked Questions About Visa Services"
      />
      <CTASection />
    </>
  );
};

export default VisaServicesPage;