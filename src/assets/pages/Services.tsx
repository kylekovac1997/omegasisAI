import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet-async';
import { theme } from '../styles/theme';
import ServiceCard from '../components/common/ServiceCard';
// import AnimatedSection from '@/components/common/AnimatedSection';
import Button from '../components/common/Button';
import { SERVICE_IDS } from '../types/service';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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

const ServicesPageWrapper = styled.div`
  padding-top: 100px;
  background-color: ${theme.colors.white};
`;

const ServicesHero = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background: ${theme.colors.gradient.primary};
  color: ${theme.colors.white};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='5'/%3E%3C/g%3E%3C/svg%3E");
    z-index: 0;
  }
`;

const ServicesContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const ServicesTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, ${theme.typography.fontSize['4xl']});
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  text-align: center;
`;

const ServicesSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const ServicesContent = styled.section`
  padding: ${theme.spacing['4xl']} 0;
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

const AdvantagesSection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background-color: ${theme.colors.lightGray};
`;

const AdvantagesTitle = styled.h2`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.xl};
  text-align: center;
  color: ${theme.colors.dark};
  
  .highlight {
    color: ${theme.colors.primary};
  }
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const AdvantageCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};
  text-align: center;
  transition: ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const AdvantageIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${theme.borderRadius.full};
  background: ${theme.colors.gradient.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing.md};
  
  svg {
    width: 30px;
    height: 30px;
    color: ${theme.colors.white};
  }
`;

const AdvantageTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.dark};
`;

const AdvantageDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray};
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  text-align: center;
  background: ${theme.colors.gradient.primary};
  color: ${theme.colors.white};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='5'/%3E%3C/g%3E%3C/svg%3E");
    z-index: 0;
  }
`;

const CTATitle = styled.h2`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  position: relative;
  z-index: 1;
`;

const CTADescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  margin-bottom: ${theme.spacing.xl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
`;

const CTAButton = styled(Button)`
  position: relative;
  z-index: 1;
`;

const Services: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!pageRef.current) return;
    
    gsap.from('.services-hero-text', {
      // y: 30,
      // opacity: 0,
      // duration: 0.8,
      // stagger: 0.2,
      // ease: 'power3.out',
    });
    
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
      },
      // y: 50,
      // opacity: 0,
      // duration: 0.8,
      // stagger: 0.15,
      // ease: 'power3.out',
    });

    gsap.from('.service-card-top', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 100%',
        },
        // y: 50,
        // opacity: 0,
        // duration: 0.8,
        // stagger: 0.15,
        // ease: 'power3.out',
      });
    
    gsap.from('.advantage-card', {
      scrollTrigger: {
        trigger: '.advantages-grid',
        start: 'top 80%',
      },
    //   y: 30,
    //   opacity: 0,
    //   duration: 0.8,
    //   stagger: 0.1,
    //   ease: 'power3.out',
    });
    
    gsap.from('.cta-element', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });
    
    return () => {
      // Cleanup scrollTriggers
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);
  
  return (
    <ServicesPageWrapper ref={pageRef}>
      <Helmet>
        <title>Our Services | OMEGASIS AI</title>
        <meta name="description" content="Explore our comprehensive suite of AI-powered communication solutions including chatbots, automation, lead qualification, and custom AI development." />
      </Helmet>
      
      <ServicesHero>
        <ServicesContainer>
          <ServicesTitle className="services-hero-text">Our AI Solutions</ServicesTitle>
          <ServicesSubtitle className="services-hero-text">
            Discover our comprehensive suite of AI-powered communication solutions designed to transform your business operations and customer engagement.
          </ServicesSubtitle>
        </ServicesContainer>
      </ServicesHero>
      
      <ServicesContent>
        <ServicesContainer>
          <ServicesGrid className="services-grid">
            <ServiceCard 
              title="AI-Powered SMS & Email Automation"
              description="Automate your customer communication through smart SMS and email campaigns. Messages are triggered based on user behavior, lead status, or scheduled intervals—helping you increase engagement and save time."
              icon={<SmsEmailIcon />}
              path={`/services/${SERVICE_IDS.SMS_EMAIL}`}
              className="service-card-top"
            />
            
            <ServiceCard 
              title="AI Lead Qualification & CRM Integration"
              description="Automatically qualify leads through intelligent conversations and seamlessly sync data into your existing CRM. This service filters out unqualified leads and sends only high-quality prospects to your sales team."
              icon={<LeadQualificationIcon />}
              path={`/services/${SERVICE_IDS.LEAD_QUALIFICATION}`}
            variant="dark"
              className="service-card-top"
            />
            
            <ServiceCard 
              title="AI Virtual Assistant for E-Commerce"
              description="A 24/7 smart assistant for online stores that can answer customer inquiries, track orders, recommend products, and handle FAQs. Designed to boost customer satisfaction and reduce support costs."
              icon={<EcommerceIcon />}
              path={`/services/${SERVICE_IDS.ECOMMERCE}`}
              className="service-card-top"
            />
            
            <ServiceCard 
              title="Multilingual AI Chatbots"
              description="Serve a global or diverse audience with AI chatbots that speak multiple languages. Ideal for businesses with multicultural customer bases or international reach, ensuring inclusive and accessible support."
              icon={<MultilingualIcon />}
              path={`/services/${SERVICE_IDS.MULTILINGUAL}`}
              className="service-card"
              variant="dark"
            />
            
            <ServiceCard 
              title="Custom AI Chatbot Development"
              description="Tailor-made chatbot solutions built to meet the specific needs of your business. Whether it's booking systems, support workflows, or industry-specific features, we design your AI from the ground up."
              icon={<CustomDevIcon />}
              path={`/services/${SERVICE_IDS.CUSTOM}`}
              
              className="service-card"
            />
            
            <ServiceCard 
              title="Social Media Automation & AI Chatbots"
              description="Automate your social media engagement with AI that responds to messages, comments, and DMs across platforms. Includes content scheduling and smart interactions to maintain an active online presence."
              icon={<SocialMediaIcon />}
              path={`/services/${SERVICE_IDS.SOCIAL_MEDIA}`}
              className="service-card"
              variant="dark"
            />
          </ServicesGrid>
        </ServicesContainer>
      </ServicesContent>
      
      <AdvantagesSection>
        <ServicesContainer>
          <AdvantagesTitle>
            Why Choose <span className="highlight">OMEGASIS AI</span> Solutions
          </AdvantagesTitle>
          
          <AdvantagesGrid className="advantages-grid">
            <AdvantageCard className="advantage-card">
              <AdvantageIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </AdvantageIcon>
              <AdvantageTitle>24/7 Availability</AdvantageTitle>
              <AdvantageDescription>
                Our AI solutions work around the clock, providing support and information to your customers even when your team is offline.
              </AdvantageDescription>
            </AdvantageCard>
            
            <AdvantageCard className="advantage-card">
              <AdvantageIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </AdvantageIcon>
              <AdvantageTitle>Advanced AI Technology</AdvantageTitle>
              <AdvantageDescription>
                Powered by cutting-edge AI and natural language processing for human-like conversations and continuous improvement.
              </AdvantageDescription>
            </AdvantageCard>
            
            <AdvantageCard className="advantage-card">
              <AdvantageIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
                  <line x1="23" y1="13" x2="23" y2="11"></line>
                </svg>
              </AdvantageIcon>
              <AdvantageTitle>Cost Efficiency</AdvantageTitle>
              <AdvantageDescription>
                Significantly reduce operational costs while handling a higher volume of inquiries and customer interactions.
              </AdvantageDescription>
            </AdvantageCard>
            
            <AdvantageCard className="advantage-card">
              <AdvantageIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </AdvantageIcon>
              <AdvantageTitle>Seamless Integration</AdvantageTitle>
              <AdvantageDescription>
                Our solutions integrate with your existing systems and workflows, providing a unified experience across all channels.
              </AdvantageDescription>
            </AdvantageCard>
          </AdvantagesGrid>
        </ServicesContainer>
      </AdvantagesSection>
      
      <CTASection className="cta-section">
        <ServicesContainer>
          <CTATitle className="cta-element">Ready to Transform Your Business?</CTATitle>
          <CTADescription className="cta-element">
            Let's discuss how our AI solutions can help you achieve your business goals and revolutionize your customer engagement strategy.
          </CTADescription>
          <CTAButton 
            variant="outline" 
            size="lg" 
            to="/contact"
            className="cta-element"
          >
            Get Started Today
          </CTAButton>
        </ServicesContainer>
      </CTASection>
    </ServicesPageWrapper>
  );
};

export default Services;