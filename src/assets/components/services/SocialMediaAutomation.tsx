import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { theme } from '../../styles/theme';
import Button from '../../components/common/Button';
// Import Font Awesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faChartPie, 
  faRobot, 
  faHashtag, 
  faCommentDots,
  faUsers,
  faChartLine,
  faSearchDollar,
  faLightbulb,
  faClock,
  faGlobe,
  faImage,

} from '@fortawesome/free-solid-svg-icons';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Styled components
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

const PricingSection = styled.section`
  margin-bottom: ${theme.spacing['4xl']};
`;

const PricingGrid = styled.div`
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

const PricingCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};
  display: flex;
  flex-direction: column;
  transition: ${theme.transitions.default};
  border: 2px solid transparent;
  
  &.highlighted {
    border-color: ${theme.colors.primary};
    position: relative;
    transform: scale(1.05);
    
    @media (max-width: ${theme.breakpoints.md}) {
      transform: scale(1);
    }
    
    &::before {
      content: 'Most Popular';
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      font-size: ${theme.typography.fontSize.sm};
      font-weight: ${theme.typography.fontWeight.medium};
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      border-radius: ${theme.borderRadius.full};
    }
  }
  
  &:hover {
    transform: translateY(-10px);
  }
  
  &.highlighted:hover {
    transform: translateY(-10px) scale(1.05);
    
    @media (max-width: ${theme.breakpoints.md}) {
      transform: translateY(-10px) scale(1);
    }
  }
`;

const PricingHeader = styled.div`
  text-align: center;
  padding-bottom: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.lightGray};
`;

const PricingTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.dark};
`;

const PricingPrice = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xs};
  
  .currency {
    font-size: ${theme.typography.fontSize.lg};
    vertical-align: super;
  }
  
  .period {
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.gray};
    font-weight: ${theme.typography.fontWeight.regular};
  }
`;

const PricingDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray};
  margin-bottom: ${theme.spacing.lg};
`;

const PricingFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${theme.spacing.xl} 0;
  flex-grow: 1;
`;

const PricingFeature = styled.li`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.dark};
  padding: ${theme.spacing.xs} 0;
  display: flex;
  align-items: center;
  
  &::before {
    content: '✓';
    color: ${theme.colors.success};
    margin-right: ${theme.spacing.sm};
    font-weight: ${theme.typography.fontWeight.bold};
  }
  
  &.not-included {
    color: ${theme.colors.gray};
    text-decoration: line-through;
    
    &::before {
      content: '✕';
      color: ${theme.colors.error};
    }
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

const SocialMediaAutomation = () => {
  const sectionRef = useRef(null);
  
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
        // y: 50,
        // opacity: 0,
        // duration: 0.8,
        // stagger: 0.1,
        // ease: 'power3.out',
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
        // y: 30,
        // opacity: 0,
        // duration: 0.8,
        // stagger: 0.1,
        // ease: 'power3.out',
      })
    );
    
    // Pricing animations
    animations.push(
      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: '.pricing-section',
          start: 'top 80%',
          markers: false,
        },
        // y: 50,
        // opacity: 0,
        // duration: 0.8,
        // stagger: 0.15,
        // ease: 'power3.out',
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
        // y: 30,
        // opacity: 0,
        // duration: 0.8,
        // stagger: 0.2,
        // ease: 'power3.out',
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
            Social Media <span className="highlight">Automation</span>
          </ServiceTitle>
          <ServiceDescription className="service-header-anim">
            Save time and boost engagement with intelligent social media automation tools that publish, analyze, and optimize your content across multiple platforms.
          </ServiceDescription>
        </ServiceHeader>

        <ServiceBanner>
          <BannerContent>
            <BannerTitle className="banner-anim">Your Social Media on Autopilot</BannerTitle>
            <BannerDescription className="banner-anim">
              Schedule, publish, and analyze your social media content across all major platforms with smart AI-powered tools.
            </BannerDescription>
          </BannerContent>
        </ServiceBanner>

        <FeaturesSection className="features-section">
          <SectionTitle>Key <span className="highlight">Features</span></SectionTitle>
          <FeaturesGrid>
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </FeatureIcon>
              <FeatureTitle>Smart Content Scheduling</FeatureTitle>
              <FeatureDescription>
                Plan and schedule your content weeks in advance with intelligent time recommendations for maximum engagement.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard className="feature-card">
              <FeatureIcon>
                <FontAwesomeIcon icon={faChartPie} />
              </FeatureIcon>
              <FeatureTitle>Advanced Analytics</FeatureTitle>
              <FeatureDescription>
                Track performance metrics across all platforms with unified reporting and actionable insights.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard className="feature-card">
              <FeatureIcon>
                <FontAwesomeIcon icon={faRobot} />
              </FeatureIcon>
              <FeatureTitle>AI Content Suggestions</FeatureTitle>
              <FeatureDescription>
                Get intelligent content recommendations based on your audience and trending topics in your industry.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard className="feature-card">
              <FeatureIcon>
                <FontAwesomeIcon icon={faHashtag} />
              </FeatureIcon>
              <FeatureTitle>Automatic Hashtag Research</FeatureTitle>
              <FeatureDescription>
                Discover trending and relevant hashtags that increase your content visibility and reach.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard className="feature-card">
              <FeatureIcon>
                <FontAwesomeIcon icon={faCommentDots} />
              </FeatureIcon>
              <FeatureTitle>Engagement Automation</FeatureTitle>
              <FeatureDescription>
                Automate responses to common messages and comments with AI that matches your brand voice.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard className="feature-card">
              <FeatureIcon>
                <FontAwesomeIcon icon={faImage} />
              </FeatureIcon>
              <FeatureTitle>Visual Content Creation</FeatureTitle>
              <FeatureDescription>
                Create on-brand social media graphics, videos, and animations with easy-to-use templates.
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
                  <StepTitle>Connect Your Platforms</StepTitle>
                  <StepDescription>
                    Link all your social media accounts to our dashboard with secure, one-click integrations.
                  </StepDescription>
                </StepContent>
              </Step>

              <Step className="step-anim">
                <StepNumber>2</StepNumber>
                <StepContent>
                  <StepTitle>Create & Schedule Content</StepTitle>
                  <StepDescription>
                    Use our content creation tools to design posts, then schedule them at optimal times.
                  </StepDescription>
                </StepContent>
              </Step>

              <Step className="step-anim">
                <StepNumber>3</StepNumber>
                <StepContent>
                  <StepTitle>Automate Engagement</StepTitle>
                  <StepDescription>
                    Set up smart auto-responses and engagement rules to keep your audience interacting.
                  </StepDescription>
                </StepContent>
              </Step>

              <Step className="step-anim">
                <StepNumber>4</StepNumber>
                <StepContent>
                  <StepTitle>Analyze & Optimize</StepTitle>
                  <StepDescription>
                    Review performance data and implement AI-recommended improvements to your strategy.
                  </StepDescription>
                </StepContent>
              </Step>
            </StepsList>
          </StepsContainer>
        </HowItWorksSection>

        <BenefitsSection className="benefits-section">
          <SectionTitle>
            Business <span className="highlight">Benefits</span>
          </SectionTitle>
          <BenefitsGrid>
            <BenefitCard className="benefit-card">
              <BenefitIcon>
                <FontAwesomeIcon icon={faClock} />
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Save 15+ Hours Per Week</BenefitTitle>
                <BenefitDescription>
                  Reclaim valuable time by automating repetitive social media management tasks.
                </BenefitDescription>
              </BenefitContent>
            </BenefitCard>

            <BenefitCard className="benefit-card">
              <BenefitIcon>
                <FontAwesomeIcon icon={faUsers} />
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Increase Audience Engagement</BenefitTitle>
                <BenefitDescription>
                  Boost likes, comments, and shares with consistent posting at optimal times.
                </BenefitDescription>
              </BenefitContent>
            </BenefitCard>

            <BenefitCard className="benefit-card">
              <BenefitIcon>
                <FontAwesomeIcon icon={faGlobe} />
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Expand Your Reach</BenefitTitle>
                <BenefitDescription>
                  Grow your follower count with higher visibility and better-targeted content.
                </BenefitDescription>
              </BenefitContent>
            </BenefitCard>

            <BenefitCard className="benefit-card">
              <BenefitIcon>
                <FontAwesomeIcon icon={faChartLine} />
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Data-Driven Strategy</BenefitTitle>
                <BenefitDescription>
                  Make smarter decisions with comprehensive analytics across all platforms.
                </BenefitDescription>
              </BenefitContent>
            </BenefitCard>

            <BenefitCard className="benefit-card">
              <BenefitIcon>
                <FontAwesomeIcon icon={faSearchDollar} />
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Reduce Marketing Costs</BenefitTitle>
                <BenefitDescription>
                  Do more with fewer resources by consolidating your social media toolset.
                </BenefitDescription>
              </BenefitContent>
            </BenefitCard>

            <BenefitCard className="benefit-card">
              <BenefitIcon>
                <FontAwesomeIcon icon={faLightbulb} />
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Overcome Creative Blocks</BenefitTitle>
                <BenefitDescription>
                  Never run out of content ideas with AI-powered suggestions and templates.
                </BenefitDescription>
              </BenefitContent>
            </BenefitCard>
          </BenefitsGrid>
        </BenefitsSection>

        <PricingSection className="pricing-section">
          <SectionTitle>Choose Your <span className="highlight">Plan</span></SectionTitle>
          <PricingGrid>
            <PricingCard className="pricing-card">
              <PricingHeader>
                <PricingTitle>Starter</PricingTitle>
                <PricingPrice>
                  <span className="currency">$</span>49<span className="period">/month</span>
                </PricingPrice>
                <PricingDescription>Perfect for solopreneurs and small businesses</PricingDescription>
              </PricingHeader>
              <PricingFeatures>
                <PricingFeature>5 social media accounts</PricingFeature>
                <PricingFeature>150 scheduled posts per month</PricingFeature>
                <PricingFeature>Basic analytics dashboard</PricingFeature>
                <PricingFeature>Content calendar</PricingFeature>
                <PricingFeature>Hashtag suggestions</PricingFeature>
                <PricingFeature className="not-included">AI content generation</PricingFeature>
                <PricingFeature className="not-included">Custom reports</PricingFeature>
              </PricingFeatures>
              <Button variant="outline" size="lg" style={{ width: '100%' }}>Get Started</Button>
            </PricingCard>

            <PricingCard className="pricing-card highlighted">
              <PricingHeader>
                <PricingTitle>Professional</PricingTitle>
                <PricingPrice>
                  <span className="currency">$</span>99<span className="period">/month</span>
                </PricingPrice>
                <PricingDescription>Ideal for growing businesses and marketing teams</PricingDescription>
              </PricingHeader>
              <PricingFeatures>
                <PricingFeature>15 social media accounts</PricingFeature>
                <PricingFeature>500 scheduled posts per month</PricingFeature>
                <PricingFeature>Advanced analytics & reports</PricingFeature>
                <PricingFeature>Content calendar with team collaboration</PricingFeature>
                <PricingFeature>AI-powered content suggestions</PricingFeature>
                <PricingFeature>Response automation</PricingFeature>
                <PricingFeature className="not-included">White-label reports</PricingFeature>
              </PricingFeatures>
              <Button variant="primary" size="lg" style={{ width: '100%' }}>Get Started</Button>
            </PricingCard>

            <PricingCard className="pricing-card">
              <PricingHeader>
                <PricingTitle>Enterprise</PricingTitle>
                <PricingPrice>
                  <span className="currency">$</span>249<span className="period">/month</span>
                </PricingPrice>
                <PricingDescription>For agencies and large businesses</PricingDescription>
              </PricingHeader>
              <PricingFeatures>
                <PricingFeature>Unlimited social media accounts</PricingFeature>
                <PricingFeature>Unlimited scheduled posts</PricingFeature>
                <PricingFeature>Custom analytics & white-label reports</PricingFeature>
                <PricingFeature>Advanced team collaboration tools</PricingFeature>
                <PricingFeature>Advanced AI content generation</PricingFeature>
                <PricingFeature>Priority support</PricingFeature>
                <PricingFeature>API access</PricingFeature>
              </PricingFeatures>
              <Button variant="outline" size="lg" style={{ width: '100%' }}>Contact Sales</Button>
            </PricingCard>
          </PricingGrid>
        </PricingSection>

        <CTASection className="cta-section">
          <CTAContent>
            <CTATitle className="cta-anim">Ready to Revolutionize Your Social Media Strategy?</CTATitle>
            <CTADescription className="cta-anim">
              Join thousands of businesses saving time and boosting engagement with our social media automation platform.
            </CTADescription>
            <CTAButtons>
              <Button variant="secondary" size="lg" to="/demo" className="cta-anim">
                Schedule a Demo
              </Button>
              <Button variant="outline" size="lg" to="/signup" className="cta-anim">
                Start Free Trial
              </Button>
            </CTAButtons>
          </CTAContent>
        </CTASection>
      </ServiceContainer>
    </ServiceWrapper>
  );
};

export default SocialMediaAutomation;