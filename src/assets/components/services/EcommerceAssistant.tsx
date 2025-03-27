import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { theme } from '../../styles/theme';
import Button from '../../components/common/Button';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Styled components (same as previous template)
const ServiceWrapper = styled.div`
  padding: ${theme.spacing['4xl']} 0;
`;

const ServiceContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const ServiceHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
`;

const ServiceTitle = styled.h1`
  font-size: clamp(2rem, 4vw, ${theme.typography.fontSize['4xl']});
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.dark};
  
  .highlight {
    color: ${theme.colors.primary};
  }
`;

const ServiceDescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: ${theme.colors.gray};
`;

const ServiceBanner = styled.div`
  position: relative;
  height: 400px;
  background: ${theme.colors.gradient.primary};
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  margin-bottom: ${theme.spacing['4xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  
  &::before {
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

const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: ${theme.spacing.xl};
`;

const BannerTitle = styled.h2`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.lg};
`;

const BannerDescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FeaturesSection = styled.section`
  margin-bottom: ${theme.spacing['4xl']};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.dark};
  text-align: center;
  
  .highlight {
    color: ${theme.colors.primary};
  }
`;

const FeaturesGrid = styled.div`
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

const FeatureCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};
  transition: ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.md};
  
  svg {
    width: 30px;
    height: 30px;
    color: ${theme.colors.primary};
  }
`;

const FeatureTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.dark};
`;

const FeatureDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray};
  line-height: 1.6;
`;

const HowItWorksSection = styled.section`
  margin-bottom: ${theme.spacing['4xl']};
  padding: ${theme.spacing['3xl']} 0;
  background-color: ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.xl};
`;

const StepsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const StepsList = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 24px;
    width: 2px;
    background-color: ${theme.colors.primary};
    
    @media (max-width: ${theme.breakpoints.md}) {
      left: 20px;
    }
  }
`;

const Step = styled.div`
  display: flex;
  margin-bottom: ${theme.spacing.xl};
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-right: ${theme.spacing.lg};
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${theme.breakpoints.md}) {
    width: 40px;
    height: 40px;
    font-size: ${theme.typography.fontSize.base};
  }
`;

const StepContent = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.sm};
  flex-grow: 1;
`;

const StepTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.dark};
`;

const StepDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray};
  line-height: 1.6;
  margin: 0;
`;

const BenefitsSection = styled.section`
  margin-bottom: ${theme.spacing['4xl']};
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.sm};
  transition: ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.md};
  }
`;

const BenefitIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 25px;
    height: 25px;
    color: ${theme.colors.primary};
  }
`;

const BenefitContent = styled.div`
  flex-grow: 1;
`;

const BenefitTitle = styled.h3`
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.dark};
`;

const BenefitDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray};
  line-height: 1.6;
  margin: 0;
`;

const CTASection = styled.section`
  text-align: center;
  padding: ${theme.spacing['3xl']};
  border-radius: ${theme.borderRadius.xl};
  background: ${theme.colors.gradient.primary};
  color: ${theme.colors.white};
  position: relative;
  overflow: hidden;
  
  &::before {
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

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
`;

const CTADescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  max-width: 700px;
  margin: 0 auto ${theme.spacing.xl};
  line-height: 1.6;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.md};
  }
`;

const EcommerceAssistant: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Store animations for cleanup
    const animations: gsap.core.Tween[] = [];
    
    // Header animations
    animations.push(
      gsap.from('.service-header-anim', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })
    );
    
    // Banner animations
    animations.push(
      gsap.from('.banner-anim', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
        ease: 'power3.out',
      })
    );
    
    // Features animations
    animations.push(
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 80%',
          markers: false,
        },
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })
    );
    
    // How it works animations
    animations.push(
      gsap.from('.step-anim', {
        scrollTrigger: {
          trigger: '.how-it-works',
          start: 'top 80%',
          markers: false,
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })
    );
    
    // Benefits animations
    animations.push(
      gsap.from('.benefit-card', {
        scrollTrigger: {
          trigger: '.benefits-section',
          start: 'top 80%',
          markers: false,
        },
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })
    );
    
    // CTA animations
    animations.push(
      gsap.from('.cta-anim', {
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
          markers: false,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })
    );
    
    // Proper cleanup function
    return () => {
      // Kill all animations
      animations.forEach(anim => anim?.kill());
      
      // Kill ScrollTrigger instances with safety check
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);
  
  return (
    <ServiceWrapper ref={sectionRef}>
      <ServiceContainer>
        <ServiceHeader>
          <ServiceTitle className="service-header-anim">
            E-commerce <span className="highlight">Integration</span> Solutions
          </ServiceTitle>
          <ServiceDescription className="service-header-anim">
            Seamlessly connect and optimize your online store with our comprehensive e-commerce integration platform, designed to streamline operations and boost sales.
          </ServiceDescription>
        </ServiceHeader>
        
        <ServiceBanner>
          <BannerContent>
            <BannerTitle className="banner-anim">Connect. Optimize. Grow.</BannerTitle>
            <BannerDescription className="banner-anim">
              Transform your e-commerce ecosystem with intelligent integrations that connect your sales channels, inventory, and customer data into a unified, powerful platform.
            </BannerDescription>
          </BannerContent>
        </ServiceBanner>
        
        <FeaturesSection className="features-section">
          <SectionTitle>
            Key <span className="highlight">Features</span>
          </SectionTitle>
          
          <FeaturesGrid>
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Multi-Platform Synchronization</FeatureTitle>
              <FeatureDescription>
                Seamlessly sync inventory, orders, and product data across multiple e-commerce platforms and sales channels.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                  <path d="M9 12h12"></path>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Real-time Inventory Management</FeatureTitle>
              <FeatureDescription>
                Automatically update stock levels, prevent overselling, and manage cross-platform inventory in real-time.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Customer Data Unification</FeatureTitle>
              <FeatureDescription>
                Consolidate customer profiles, purchase history, and interactions across all sales channels.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"></path>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Advanced Analytics</FeatureTitle>
              <FeatureDescription>
                Comprehensive dashboards tracking sales, customer behavior, and performance across all integrated platforms.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Payment Gateway Integration</FeatureTitle>
              <FeatureDescription>
                Seamless connections with multiple payment processors to expand global payment options.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Shipping Automation</FeatureTitle>
              <FeatureDescription>
                Integrate with multiple shipping carriers, automate label creation, and track deliveries seamlessly.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesSection>
        
        <HowItWorksSection className="how-it-works">
          <SectionTitle>
            How It <span className="highlight">Works</span>
          </SectionTitle>
          
          <StepsContainer>
            <StepsList>
              <Step className="step-anim">
                <StepNumber>1</StepNumber>
                <StepContent>
                  <StepTitle>Platform Assessment</StepTitle>
                  <StepDescription>
                    Comprehensive analysis of your existing e-commerce ecosystem and integration requirements.
                  </StepDescription>
                </StepContent>
              </Step>
              
              <Step className="step-anim">
                <StepNumber>2</StepNumber>
                <StepContent>
                  <StepTitle>Custom Integration Design</StepTitle>
                  <StepDescription>
                    Develop a tailored integration strategy matching your specific business needs and tech stack.
                  </StepDescription>
                </StepContent>
              </Step>
              
              <Step className="step-anim">
                <StepNumber>3</StepNumber>
                <StepContent>
                  <StepTitle>Data Mapping</StepTitle>
                  <StepDescription>
                    Precisely map data fields across different platforms to ensure smooth information transfer.
                  </StepDescription>
                </StepContent>
              </Step>
              
              <Step className="step-anim">
                <StepNumber>4</StepNumber>
                <StepContent>
                  <StepTitle>Implementation</StepTitle>
                  <StepDescription>
                    Seamless integration of platforms with minimal disruption to existing operations.
                  </StepDescription>
                </StepContent>
              </Step>
              
              <Step className="step-anim">
                <StepNumber>5</StepNumber>
                <StepContent>
                  <StepTitle>Testing & Validation</StepTitle>
                  <StepDescription>
                    Rigorous testing to ensure data accuracy, real-time synchronization, and system reliability.
                  </StepDescription>
                </StepContent>
              </Step>
              
              <Step className="step-anim">
                <StepNumber>6</StepNumber>
                <StepContent>
                  <StepTitle>Ongoing Support</StepTitle>
                  <StepDescription>
                    Continuous monitoring, optimization, and support to maintain peak integration performance.
                  </StepDescription>
                </StepContent>
              </Step>
            </StepsList>
          </StepsContainer>
        </HowItWorksSection>
        
        <BenefitsSection className="benefits-section">
          <SectionTitle>
            Key <span className="highlight">Benefits</span>
          </SectionTitle>
          
          <BenefitsGrid>
            <BenefitCard className="benefit-card">
              <BenefitIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Operational Efficiency</BenefitTitle>
                <BenefitDescription>
                  Reduce manual work, minimize errors, and streamline complex e-commerce operations across multiple platforms.
                </BenefitDescription>
              </BenefitContent>
            </BenefitCard>
            
            <BenefitCard className="benefit-card">
              <BenefitIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Enhanced Customer Experience</BenefitTitle>
                <BenefitDescription>
                  Provide consistent, accurate information and smooth shopping experiences across all sales channels.
                </BenefitDescription>
              </BenefitContent>
            </BenefitCard>
            
            <BenefitCard className="benefit-card">
              <BenefitIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Real-time Business Intelligence</BenefitTitle>
                <BenefitDescription>
                  Gain comprehensive insights into sales performance, inventory, and customer behavior instantly.
                </BenefitDescription>
              </BenefitContent>
            </BenefitCard>
          </BenefitsGrid>
        </BenefitsSection>
        
        <CTASection className="cta-section">
          <CTAContent>
            <CTATitle className="cta-anim">Ready to Optimize Your E-commerce Ecosystem?</CTATitle>
            <CTADescription className="cta-anim">
              Transform your online business with our comprehensive e-commerce integration solutions. Let's unlock your full sales potential.
            </CTADescription>
            <CTAButtons>
              <Button 
                variant="outline" 
                size="lg" 
                to="/contact"
                className="cta-anim"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                to="/contact"
                className="cta-anim"
              >
                Learn More
              </Button>
            </CTAButtons>
          </CTAContent>
        </CTASection>
      </ServiceContainer>
    </ServiceWrapper>
  );
};

export default EcommerceAssistant;