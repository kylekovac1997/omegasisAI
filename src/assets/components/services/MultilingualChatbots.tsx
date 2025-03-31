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

const MultilingualChatbots: React.FC = () => {
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
            Multilingual <span className="highlight">AI Chatbots</span>
          </ServiceTitle>
          <ServiceDescription className="service-header-anim">
            Break language barriers and expand your reach with chatbots that communicate fluently in over 100 languages.
          </ServiceDescription>
        </ServiceHeader>

        <ServiceBanner>
          <BannerContent>
            <BannerTitle className="banner-anim">AI That Speaks Your Customer's Language</BannerTitle>
            <BannerDescription className="banner-anim">
              Deliver localized experiences for global audiences with intelligent multilingual chatbot solutions.
            </BannerDescription>
          </BannerContent>
        </ServiceBanner>

        <FeaturesSection className="features-section">
          <SectionTitle>Key <span className="highlight">Features</span></SectionTitle>
          <FeaturesGrid>
            <FeatureCard className="feature-card">
              <FeatureIcon><i className="fas fa-language" /></FeatureIcon>
              <FeatureTitle>100+ Languages Supported</FeatureTitle>
              <FeatureDescription>
                From Spanish to Swahili — engage users in their preferred language automatically.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard className="feature-card">
              <FeatureIcon><i className="fas fa-globe" /></FeatureIcon>
              <FeatureTitle>Geo-Targeted Language Switching</FeatureTitle>
              <FeatureDescription>
                Automatically detect user location and browser language to deliver the right experience.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard className="feature-card">
              <FeatureIcon><i className="fas fa-exchange-alt" /></FeatureIcon>
              <FeatureTitle>Real-Time Translation</FeatureTitle>
              <FeatureDescription>
                Translate messages on the fly without delays or awkward phrasing.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard className="feature-card">
              <FeatureIcon><i className="fas fa-handshake" /></FeatureIcon>
              <FeatureTitle>Cultural Sensitivity</FeatureTitle>
              <FeatureDescription>
                Localized responses adapt to cultural norms, slang, and tone of voice.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard className="feature-card">
              <FeatureIcon><i className="fas fa-code-branch" /></FeatureIcon>
              <FeatureTitle>Multi-Language Flows</FeatureTitle>
              <FeatureDescription>
                Build separate conversation flows in different languages under one chatbot logic.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesSection>

        <HowItWorksSection className="how-it-works">
          <SectionTitle>How It <span className="highlight">Works</span></SectionTitle>
          <StepsContainer>
            <StepsList>
              <Step className="step-anim">
                <StepNumber>1</StepNumber>
                <StepContent>
                  <StepTitle>Language Detection</StepTitle>
                  <StepDescription>
                    AI detects the user's preferred language based on browser or input data.
                  </StepDescription>
                </StepContent>
              </Step>

              <Step className="step-anim">
                <StepNumber>2</StepNumber>
                <StepContent>
                  <StepTitle>Launch Relevant Flow</StepTitle>
                  <StepDescription>
                    The chatbot loads the correct conversation logic in that language.
                  </StepDescription>
                </StepContent>
              </Step>

              <Step className="step-anim">
                <StepNumber>3</StepNumber>
                <StepContent>
                  <StepTitle>Live Translation (If Needed)</StepTitle>
                  <StepDescription>
                    Replies are translated in real time if pre-built flows aren't available.
                  </StepDescription>
                </StepContent>
              </Step>

              <Step className="step-anim">
                <StepNumber>4</StepNumber>
                <StepContent>
                  <StepTitle>Track & Learn</StepTitle>
                  <StepDescription>
                    Monitor language-specific performance to improve future interactions.
                  </StepDescription>
                </StepContent>
              </Step>
            </StepsList>
          </StepsContainer>
        </HowItWorksSection>

        <BenefitsSection className="benefits-section">
          <SectionTitle>
            Global Reach, <span className="highlight">Local Touch</span>
          </SectionTitle>
          <BenefitsGrid>
            <BenefitCard className="benefit-card">
              <BenefitIcon><i className="fas fa-users" /></BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Serve a Broader Audience</BenefitTitle>
                <BenefitDescription>
                  Expand into new regions without hiring multi-lingual support staff.
                </BenefitDescription>
              </BenefitContent>
            </BenefitCard>

            <BenefitCard className="benefit-card">
              <BenefitIcon><i className="fas fa-comments" /></BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Improve Customer Satisfaction</BenefitTitle>
                <BenefitDescription>
                  Communicating in a customer's language increases trust and retention.
                </BenefitDescription>
              </BenefitContent>
            </BenefitCard>

            <BenefitCard className="benefit-card">
              <BenefitIcon><i className="fas fa-signal" /></BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Boost Engagement</BenefitTitle>
                <BenefitDescription>
                  Higher relevance = higher engagement and more conversions.
                </BenefitDescription>
              </BenefitContent>
            </BenefitCard>
          </BenefitsGrid>
        </BenefitsSection>

        <CTASection className="cta-section">
          <CTAContent>
            <CTATitle className="cta-anim">Ready to Go Global with AI?</CTATitle>
            <CTADescription className="cta-anim">
              Launch a chatbot that speaks to your audience — literally. Book a multilingual strategy call today.
            </CTADescription>
            <CTAButtons>
              <Button variant="outline" size="lg" to="/contact" className="cta-anim">
                Schedule Demo
              </Button>
              <Button variant="secondary" size="lg" to="/contact" className="cta-anim">
                Learn More
              </Button>
            </CTAButtons>
          </CTAContent>
        </CTASection>
      </ServiceContainer>
    </ServiceWrapper>
  );
};

export default MultilingualChatbots;
