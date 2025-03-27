import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { theme } from '../../styles/theme';
import Button from '../../components/common/Button';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Reuse the styled components from SMSEmailAutomation but with appropriate modifications
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

const UseCasesSection = styled.section`
  margin-bottom: ${theme.spacing['4xl']};
  padding: ${theme.spacing['3xl']} 0;
  background-color: ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.xl};
`;

const UseCasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const UseCaseCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};
  transition: ${theme.transitions.default};
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const UseCaseIndustry = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.primary};
`;

const UseCaseDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.dark};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
`;

const UseCaseResults = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const UseCaseResultItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
  
  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.success};
    flex-shrink: 0;
    margin-top: 3px;
  }
  
  span {
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.gray};
    line-height: 1.5;
  }
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

const LeadQualification: React.FC = () => {
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
        // opacity: 0,
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
        // opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })
    );
    
    // Use cases animations
    animations.push(
      gsap.from('.use-case-card', {
        scrollTrigger: {
          trigger: '.use-cases',
          start: 'top 80%',
          markers: false,
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
            AI <span className="highlight">Lead Qualification</span> & CRM Integration
          </ServiceTitle>
          <ServiceDescription className="service-header-anim">
            Turn every lead into an opportunity with our intelligent qualification system that ensures your sales team only focuses on the most promising prospects.
          </ServiceDescription>
        </ServiceHeader>
        
        <ServiceBanner>
          <BannerContent>
            <BannerTitle className="banner-anim">Filter, Qualify, Convert</BannerTitle>
            <BannerDescription className="banner-anim">
              Our AI-driven qualification system asks relevant questions, scores leads in real-time, and automatically feeds qualified contacts into your CRM — all working 24/7 to capture opportunities.
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
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Intelligent Lead Scoring</FeatureTitle>
              <FeatureDescription>
                Our AI analyzes conversations and assigns qualification scores based on interest level, budget, timeline, and other custom parameters you define.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Seamless CRM Integration</FeatureTitle>
              <FeatureDescription>
                Qualified leads are automatically entered into your CRM system with complete conversation history, qualification scores, and contact details.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Dynamic Conversation Flows</FeatureTitle>
              <FeatureDescription>
                Our AI adapts questioning paths based on previous answers, ensuring relevant information gathering without frustrating potential customers.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Real-time Notifications</FeatureTitle>
              <FeatureDescription>
                Get instant alerts when high-value leads are identified, allowing your sales team to follow up promptly while interest is at its peak.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"></path>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Performance Analytics</FeatureTitle>
              <FeatureDescription>
                Comprehensive dashboards showing qualification rates, conversion metrics, and insights to continuously improve your lead generation strategy.
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
              <FeatureTitle>Multi-platform Lead Capture</FeatureTitle>
              <FeatureDescription>
                Collect and qualify leads from your website, social media, email campaigns, and other channels with a unified qualification system.
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
                  <StepTitle>Initial Setup & Integration</StepTitle>
                  <StepDescription>
                    We integrate our AI system with your existing CRM and customize the qualification criteria based on your sales process and ideal customer profile.
                  </StepDescription>
                </StepContent>
              </Step>
              
              <Step className="step-anim">
                <StepNumber>2</StepNumber>
                <StepContent>
                  <StepTitle>Lead Engagement</StepTitle>
                  <StepDescription>
                    When potential leads interact with your website, forms, or other channels, our AI engages them in conversation to gather key qualification information.
                  </StepDescription>
                </StepContent>
              </Step>
              
              <Step className="step-anim">
                <StepNumber>3</StepNumber>
                <StepContent>
                  <StepTitle>Real-time Qualification</StepTitle>
                  <StepDescription>
                    The AI analyzes responses against your qualification criteria and assigns scores based on factors like budget, timeline, needs, and decision-making authority.
                  </StepDescription>
                </StepContent>
              </Step>
              
              <Step className="step-anim">
                <StepNumber>4</StepNumber>
                <StepContent>
                  <StepTitle>CRM Data Enrichment</StepTitle>
                  <StepDescription>
                    Qualified leads are automatically added to your CRM with complete contact details, qualification scores, and interaction history for seamless follow-up.
                  </StepDescription>
                </StepContent>
              </Step>
              
              <Step className="step-anim">
                <StepNumber>5</StepNumber>
                <StepContent>
                  <StepTitle>Sales Team Notification</StepTitle>
                  <StepDescription>
                    Your sales representatives receive alerts about high-scoring leads, allowing them to prioritize follow-up based on qualification level and interest.
                  </StepDescription>
                </StepContent>
              </Step>
              
              <Step className="step-anim">
                <StepNumber>6</StepNumber>
                <StepContent>
                  <StepTitle>Continuous Optimization</StepTitle>
                  <StepDescription>
                    We analyze performance data to refine qualification criteria and conversation flows, ensuring increasingly accurate lead qualification over time.
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
                <BenefitTitle>Focus on Quality Leads</BenefitTitle>
                <BenefitDescription>
                  Filter out general inquiries from serious prospects, ensuring your sales team only invests time in opportunities with real conversion potential.
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
                <BenefitTitle>Accelerate Sales Cycles</BenefitTitle>
                <BenefitDescription>
                  Speed up the qualification process and reduce the time from initial contact to closed deal with automated early-stage interactions.
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
                <BenefitTitle>Eliminate Manual Data Entry</BenefitTitle>
                <BenefitDescription>
                  Save hours of administrative work with automated contact information collection and direct CRM integration.
                </BenefitDescription>
                  </BenefitContent>
                </BenefitCard>
              </BenefitsGrid>
            </BenefitsSection>
            <CTASection className="cta-section">
          <CTAContent>
            <CTATitle className="cta-anim">Ready to Focus on High-Value Leads?</CTATitle>
            <CTADescription className="cta-anim">
              Let our AI qualification system transform your lead management process and help your sales team focus on what they do best: closing deals.
            </CTADescription>
            <CTAButtons>
              <Button 
                variant="outline" 
                size="lg" 
                to="/contact"
                className="cta-anim"
              >
                Schedule a Demo
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                to="/contact"
                className="cta-anim"
              >
                Contact Us
              </Button>
            </CTAButtons>
          </CTAContent>
        </CTASection>
      </ServiceContainer>
    </ServiceWrapper>
  );
};

export default LeadQualification;