import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { theme } from '../../styles/theme';
import ServiceCard from '../../components/common/ServiceCard';
// import AnimatedSection from '@/components/common/AnimatedSection';
import Button from '../../components/common/Button';
import { SERVICE_IDS } from '../../types/service';

const ServicesSection = styled.section`
  padding: ${theme.spacing['5xl']} 0;
  position: relative;
  overflow: hidden;
  background-color: ${theme.colors.white};
`;

const ServicesContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing['3xl']};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.dark};
  
  .highlight {
    color: ${theme.colors.primary};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.6;
  color: ${theme.colors.gray};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ViewAllContainer = styled.div`
  text-align: center;
  margin-top: ${theme.spacing['3xl']};
`;

// SVG Icons for services
const SmsEmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LeadQualificationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const EcommerceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const MultilingualIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8h14M5 12h14M5 16h6"></path>
    <circle cx="18" cy="16" r="2"></circle>
    <path d="M12 3v18"></path>
  </svg>
);

const CustomDevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const SocialMediaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      // Section title and subtitle animation
      gsap.from('.services-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
      
      // Services cards staggered animation
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
      
      // View all button animation
      gsap.from('.view-all', {
        scrollTrigger: {
          trigger: '.view-all',
          start: 'top 90%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5,
      });
    }
  }, []);
  
  return (
    <ServicesSection ref={sectionRef} className="section-services">
      <ServicesContainer>
        <SectionHeader>
          <SectionTitle className="services-header">
            Our <span className="highlight">AI-Powered</span> Solutions
          </SectionTitle>
          <SectionSubtitle className="services-header">
            Discover how our AI chatbots and automation tools can transform your business communication and customer engagement strategies.
          </SectionSubtitle>
        </SectionHeader>
        
        <ServicesGrid className="services-grid">
          <ServiceCard 
            title="AI-Powered SMS & Email Automation"
            description="Automate your customer communications with intelligent AI that personalizes messages and responds naturally to inquiries."
            icon={<SmsEmailIcon />}
            path={`/services/${SERVICE_IDS.SMS_EMAIL}`}
            animationDelay={0}
            className="service-card"
          />
          
          <ServiceCard 
            title="AI Lead Qualification & CRM Integration"
            description="Qualify leads instantly and integrate with your CRM for seamless lead management and conversion tracking."
            icon={<LeadQualificationIcon />}
            path={`/services/${SERVICE_IDS.LEAD_QUALIFICATION}`}
            variant="gradient"
            animationDelay={0.1}
            className="service-card"
          />
          
          <ServiceCard 
            title="AI Virtual Assistant for E-Commerce"
            description="Enhance shopping experiences with AI assistants that help customers find products, answer questions, and process orders."
            icon={<EcommerceIcon />}
            path={`/services/${SERVICE_IDS.ECOMMERCE}`}
            animationDelay={0.2}
            className="service-card"
          />
          
          <ServiceCard 
            title="Multilingual AI Chatbots"
            description="Break language barriers with AI chatbots that communicate fluently in multiple languages to support global customers."
            icon={<MultilingualIcon />}
            path={`/services/${SERVICE_IDS.MULTILINGUAL}`}
            animationDelay={0.3}
            className="service-card"
          />
          
          <ServiceCard 
            title="Custom AI Chatbot Development"
            description="Build tailored AI solutions that align perfectly with your brand voice, business workflows, and specific industry needs."
            icon={<CustomDevIcon />}
            path={`/services/${SERVICE_IDS.CUSTOM}`}
            variant="dark"
            animationDelay={0.4}
            className="service-card"
          />
          
          <ServiceCard 
            title="Social Media Automation & AI Chatbots"
            description="Manage social media engagement with AI tools that respond to comments, messages, and create consistent brand experiences."
            icon={<SocialMediaIcon />}
            path={`/services/${SERVICE_IDS.SOCIAL_MEDIA}`}
            animationDelay={0.5}
            className="service-card"
          />
        </ServicesGrid>
        
        <ViewAllContainer className="view-all">
          <Button 
            variant="primary" 
            size="lg" 
            to="/services"
          >
            View All Services
          </Button>
        </ViewAllContainer>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;