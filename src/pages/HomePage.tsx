import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';
import StatsCounter from '../components/home/StatsCounter';
import LatestNews from '../components/home/LatestNews';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FeaturedDestinations />
      <StatsCounter />
      <Testimonials />
      <LatestNews />
      <CTASection />
    </>
  );
};

export default HomePage;