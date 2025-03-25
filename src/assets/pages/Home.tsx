import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Components
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonaials';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>OMEGASIS AI | AI-Powered Chatbots & Automation Solutions</title>
        <meta name="description" content="OMEGASIS AI delivers cutting-edge AI chatbots and automation solutions that enhance customer experiences, streamline operations, and drive revenue growth." />
        <meta name="keywords" content="AI chatbots, automation, customer engagement, artificial intelligence, AI solutions, lead qualification, multilingual chatbots" />
      
      </Helmet>
      
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Home;