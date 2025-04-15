import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { theme } from '../../styles/theme';
import Button from '../../components/common/Button';
import { SERVICE_IDS } from '../../types/service';

// New modern styled components
const ServicesSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background: linear-gradient(135deg, #f8fafc, #eef2ff);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(79, 70, 229, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(99, 102, 241, 0.03) 0%, transparent 50%);
    z-index: 0;
  }
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  pointer-events: none;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(99, 102, 241, 0.1));
    top: -150px;
    right: -100px;
    filter: blur(40px);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(79, 70, 229, 0.15));
    bottom: -100px;
    left: -80px;
    filter: blur(30px);
  }
`;

const ServicesContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #1e293b;
  line-height: 1.2;
  
  .highlight {
    background: linear-gradient(90deg, #4f46e5, #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 6px;
      background: linear-gradient(90deg, #4f46e5, #7c3aed);
      border-radius: 3px;
      transform: translateY(6px);
      opacity: 0.3;
    }
  }
`;

const SectionSubtitle = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  line-height: 1.7;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transform: translateY(30px);
  opacity: 0;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    
    .service-icon {
      transform: scale(1.1) rotate(10deg);
    }
    
    .service-bottom::before {
      width: 100%;
    }
  }
`;

const ServiceTop = styled.div<{ color: string }>`
  background: ${props => props.color};
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E");
    opacity: 0.7;
  }
`;
const handleIslandClick = (index: number): void => {
  setActiveIndex(index);
  // Navigate to the specific service detail page
  window.location.href = `/services/${serviceIslands[index].id}`;
};

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: white;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  
  svg {
    width: 35px;
    height: 35px;
    color: #4f46e5;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  position: relative;
  z-index: 1;
`;

const ServiceBottom = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 4px;
    background: linear-gradient(90deg, #4f46e5, #7c3aed);
    transition: width 0.3s ease;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #64748b;
  margin-bottom: 1.5rem;
`;

const LearnMoreLink = styled.a`
  font-size: 1rem;
  font-weight: 600;
  color: #4f46e5;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  margin-top: auto;
  
  &:hover {
    color: #7c3aed;
    transform: translateX(5px);
  }
  
  svg {
    margin-left: 0.5rem;
    width: 18px;
    height: 18px;
  }
`;

const ViewAllContainer = styled.div`
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
`;

// Service card colors
const cardColors = [
  'linear-gradient(135deg, #4f46e5, #7c3aed)',
  'linear-gradient(135deg, #3b82f6, #2563eb)',
  'linear-gradient(135deg, #ec4899, #c026d3)',
  'linear-gradient(135deg, #10b981, #059669)',
  'linear-gradient(135deg, #f59e0b, #d97706)',
  'linear-gradient(135deg, #6366f1, #4f46e5)'
];

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

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// Define all services
const allServices = [
  {
    id: SERVICE_IDS.SMS_EMAIL,
    title: "AI-Powered SMS & Email Automation",
    description: "Automate your customer communications with intelligent AI that personalizes messages and responds naturally to inquiries.",
    icon: <SmsEmailIcon />,
    color: cardColors[0]
  },
  {
    id: SERVICE_IDS.LEAD_QUALIFICATION,
    title: "AI Lead Qualification & CRM Integration",
    description: "Qualify leads instantly and integrate with your CRM for seamless lead management and conversion tracking.",
    icon: <LeadQualificationIcon />,
    color: cardColors[1]
  },
  {
    id: SERVICE_IDS.ECOMMERCE,
    title: "AI Virtual Assistant for E-Commerce",
    description: "Enhance shopping experiences with AI assistants that help customers find products, answer questions, and process orders.",
    icon: <EcommerceIcon />,
    color: cardColors[2]
  },
  {
    id: SERVICE_IDS.MULTILINGUAL,
    title: "Multilingual AI Chatbots",
    description: "Break language barriers with AI chatbots that communicate fluently in multiple languages to support global customers.",
    icon: <MultilingualIcon />,
    color: cardColors[3]
  },
  {
    id: SERVICE_IDS.CUSTOM,
    title: "Custom AI Chatbot Development",
    description: "Build tailored AI solutions that align perfectly with your brand voice, business workflows, and specific industry needs.",
    icon: <CustomDevIcon />,
    color: cardColors[4]
  },
  {
    id: SERVICE_IDS.SOCIAL_MEDIA,
    title: "Social Media Automation & AI Chatbots",
    description: "Manage social media engagement with AI tools that respond to comments, messages, and create consistent brand experiences.",
    icon: <SocialMediaIcon />,
    color: cardColors[5]
  }
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedServices, setSelectedServices] = useState<typeof allServices>([]);
  
  // Randomly select 3 services when component mounts
  useEffect(() => {
    const getRandomServices = () => {
      // Create a copy of all services to shuffle
      const shuffled = [...allServices].sort(() => 0.5 - Math.random());
      // Take the first 3
      return shuffled.slice(0, 3);
    };
    
    setSelectedServices(getRandomServices());
  }, []);
  
  useEffect(() => {
    if (sectionRef.current && selectedServices.length > 0) {
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
      gsap.to('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
      
      // View all button animation
      gsap.to('.view-all', {
        scrollTrigger: {
          trigger: '.view-all',
          start: 'top 90%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5,
      });
    }
  }, [selectedServices]);
  
  return (
    <ServicesSection ref={sectionRef} className="section-services">
      <BackgroundDecoration />
      
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
          {selectedServices.map((service, index) => (
            <ServiceCard key={service.id} className="service-card">
              <ServiceTop color={service.color}>
                <ServiceIcon className="service-icon">
                  {service.icon}
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
              </ServiceTop>
              
              <ServiceBottom>
                <ServiceDescription>{service.description}</ServiceDescription>
                <LearnMoreLink href={`/services/${service.id}`}>
                  Learn More <ArrowRightIcon />
                </LearnMoreLink>
              </ServiceBottom>
            </ServiceCard>
          ))}
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