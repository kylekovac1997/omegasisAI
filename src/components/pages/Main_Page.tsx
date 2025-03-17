import React from 'react';
import Section from '../styles/Section_Styled';
import NavBar from '../nav_bar/Nav_bar';
import { CenteredImage, ImageWrapper } from '../styles/Logo_styled';
import OmegasisLogo from '/home/kylek/Website/omegasisAI/src/components/images/images/omegasislogo.png';
const Main_Page: React.FC = () => {
  return (
   
    <div >
      {/* Navbar */}
      <NavBar />
      <ImageWrapper> <CenteredImage src={OmegasisLogo}/></ImageWrapper>
     
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold">Welcome to Omgeasis AI</h1>
        <p className="text-lg mt-4 max-w-2xl">Next-gen AI chatbot solutions for businesses looking to automate and optimize communication.</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600">Get Started</button>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800 text-center">
        <h2 className="text-4xl font-semibold">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 container mx-auto px-4">
          {["AI Chatbots", "AI Receptionist", "Email Automation"].map(service => (
            <div key={service} className="p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl">
              <h3 className="text-2xl font-bold">{service}</h3>
              <p className="mt-2">Automate your business with intelligent AI solutions.</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Pricing Section */}
      <Section id="pricing" color='white' style={{ boxShadow: '0 0 50px pink' }}>
        <h2 className="text-4xl font-semibold">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 container mx-auto px-4">
          {["Basic", "Pro", "Enterprise"].map(plan => (
            <div key={plan} className="p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl">
              <h3 className="text-2xl font-bold">{plan} Plan</h3>
              <p className="text-lg mt-2">Starting at ${plan === "Basic" ? 49 : plan === "Pro" ? 99 : 199}/month</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600">Choose Plan</button>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Contact Section */}
      <Section id="contact" color='white' style={{ boxShadow: '0 0 10px white' }}>
        <h2 className="text-4xl font-semibold">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl mt-6">
          <input type="text" placeholder="Your Name" className="w-full p-3 bg-transparent border border-white mb-4 placeholder-white" />
          <input type="email" placeholder="Your Email" className="w-full p-3 bg-transparent border border-white mb-4 placeholder-white" />
          <textarea placeholder="Your Message" className="w-full p-3 bg-transparent border border-white mb-4 placeholder-white h-32"></textarea>
          <button className="w-full bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600">Send Message</button>
        </form>
      </Section>
      
      {/* Footer */}
      <footer className="bg-black bg-opacity-50 backdrop-blur-md text-center p-4">
        <p>&copy; 2025 Omgeasis AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Main_Page;
