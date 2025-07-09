import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedEventsSection from '../components/FeaturedEventsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
          <HeroSection/> 
          <ServicesSection/>
          <FeaturedEventsSection/>
          <TestimonialsSection/>
          <CallToActionSection/>
          <ContactSection/>
    </>
  );
}

export default Home;
