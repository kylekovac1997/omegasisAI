import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { theme } from '../styles/theme';
import Button from '../components/common/Button';
import { 
  Pen, 
  Users, 
  Bell, 
  Check, 
  Star, 
  Eye, 
  Clipboard, 
  ArrowRight, 
  UserPlus
} from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutPageWrapper = styled.div`
  background-color: ${theme.colors.white};
  overflow: hidden;
  padding-top: 0;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding-top: 0;
  }
`;

const AboutHero = styled.section`
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, #4a80ff 100%);
  color: ${theme.colors.white};
  overflow: hidden;
  padding: ${theme.spacing['4xl']} 0;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='5'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.6;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to top, ${theme.colors.white}, transparent);
    z-index: 1;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    min-height: 60vh;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;
  padding: 0 ${theme.spacing.lg};
`;

const HeroDecoration = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
  top: -250px;
  right: -250px;
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    bottom: -150px;
    left: -150px;
  }
`;

const AboutContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  position: relative;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const AboutTitle = styled.h1`
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.lg};
  background: linear-gradient(to right, #ffffff, #e0e0ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  line-height: 1.1;
`;

const AboutSubtitle = styled.p`
  font-size: clamp(${theme.typography.fontSize.lg}, 2.5vw, ${theme.typography.fontSize.xl});
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
  padding: ${theme.spacing['5xl']} 0;
  position: relative;
  display: block;
  width: 100%;
  overflow: visible;
  min-height: 200px;
  
  &:nth-child(even) {
    background-color: ${theme.colors.lightGray || '#f5f5f5'};
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['4xl']} 0;
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing['3xl']} 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(${theme.typography.fontSize['2xl']}, 4vw, ${theme.typography.fontSize['4xl']});
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing['2xl']};
  color: ${theme.colors.dark};
  text-align: center;
  position: relative;
  
  .highlight {
    color: ${theme.colors.primary};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 3px;
      background: ${theme.colors.primary};
      border-radius: 3px;
    }
  }
`;

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['2xl']};
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
`;

const StoryText = styled.div`
  position: relative;
  width: 100%;
  
  p {
    margin-bottom: ${theme.spacing.lg};
    font-size: ${theme.typography.fontSize.lg};
    line-height: 1.8;
    color: ${theme.colors.dark};
  }
  
  &::before {
    content: "\u201C"; /* Unicode for left double quotation mark */
    position: absolute;
    top: -40px;
    left: -20px;
    font-size: 120px;
    color: rgba(0, 0, 0, 0.05);
    font-family: serif;
    z-index: 0;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    &::before {
      top: -30px;
      left: -10px;
      font-size: 80px;
    }
  }
`;

const ButtonWrapper = styled.div`
  margin-top: ${theme.spacing.xl};
  text-align: center;
`;

const MissionWrapper = styled.div`
  padding: ${theme.spacing['4xl']} ${theme.spacing.xl};
  background-color: #f8f9fc;
  border-radius: ${theme.borderRadius.xl || '15px'};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: visible;
  width: 100%;
  display: block;
  min-height: 300px;
  margin-bottom: 20px;
  
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(66, 99, 235, 0.1) 0%, rgba(66, 99, 235, 0) 70%);
    top: -150px;
    right: -150px;
    z-index: 0;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(66, 99, 235, 0.1) 0%, rgba(66, 99, 235, 0) 70%);
    bottom: -100px;
    left: -100px;
    z-index: 0;
    pointer-events: none;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} ${theme.spacing.md};
  }
`;

const MissionCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl || '20px'};
  margin-top: ${theme.spacing.lg || '16px'};
  position: relative;
  z-index: 1;
  width: 100%;
  
  @media (max-width: ${theme.breakpoints.lg || '1024px'}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.md || '768px'}) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    gap: ${theme.spacing.lg || '16px'};
  }
`;

const MissionCard = styled.div`
  background-color: #ffffff;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 250px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing.lg};
    min-height: auto;
  }
`;

const MissionIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${theme.colors.primary};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.md};
  
  svg {
    width: 35px;
    height: 35px;
    color: #ffffff;
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 60px;
    height: 60px;
    
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const MissionTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.dark};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background: ${theme.colors.primary};
    border-radius: 3px;
  }
`;

const MissionDescription = styled.p`
  font-size: ${theme.typography.fontSize.md};
  line-height: 1.7;
  color: ${theme.colors.gray};
`;

const ValuesWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: ${theme.spacing['4xl']} ${theme.spacing.xl};
  background-color: #f8f9fc;
  border-radius: ${theme.borderRadius.xl || '15px'};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow: visible;
  display: block;
  min-height: 300px;
  margin-bottom: 20px;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(66, 99, 235, 0.1) 0%, rgba(66, 99, 235, 0) 70%);
    top: -150px;
    right: -150px;
    z-index: 0;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(66, 99, 235, 0.1) 0%, rgba(66, 99, 235, 0) 70%);
    bottom: -100px;
    left: -100px;
    z-index: 0;
    pointer-events: none;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} ${theme.spacing.md};
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl || '20px'};
  width: 100%;
  margin-top: ${theme.spacing.xl || '20px'};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${theme.breakpoints.lg || '1024px'}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg || '16px'};
  }
  
  @media (max-width: ${theme.breakpoints.md || '768px'}) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: ${theme.spacing.xl || '20px'} auto 0;
  }
`;

const ValueCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.lg} ${theme.borderRadius.lg} 0 0;
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing.md};
  }
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background-color: #f0f4fa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.md};
  
  svg {
    width: 30px;
    height: 30px;
    color: ${theme.colors.primary};
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 50px;
    height: 50px;
    
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

const ValueTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.dark};
`;

const ValueDescription = styled.p`
  font-size: ${theme.typography.fontSize.md};
  color: ${theme.colors.gray};
  line-height: 1.6;
  margin: 0;
`;

const CTASection = styled.section`
  position: relative;
  padding: ${theme.spacing['5xl']} 0;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, #4a80ff 100%);
  color: ${theme.colors.white};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='5'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.6;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
    top: -200px;
    right: -200px;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: clamp(${theme.typography.fontSize['2xl']}, 4vw, ${theme.typography.fontSize['4xl']});
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.2;
`;

const CTADescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  max-width: 700px;
  margin: 0 auto ${theme.spacing.xl};
  line-height: 1.6;
`;

const CTAButton = styled(Button)`
  position: relative;
  background: transparent;
  border: 2px solid ${theme.colors.white};
  color: ${theme.colors.white};
  font-weight: ${theme.typography.fontWeight.bold};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const About: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!pageRef.current) return;
    
    // Store animations for cleanup
    const animations: gsap.core.Tween[] = [];
    
    // Hero section animations
    animations.push(
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
      })
    );
    
    // Story section animations
    animations.push(
      gsap.from('.story-content', {
        scrollTrigger: {
          trigger: '.story-section',
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
    );
    
    // Mission cards animations
    animations.push(
      gsap.from('.mission-card', {
        scrollTrigger: {
          trigger: '.mission-section',
          start: 'top 75%',
        },
        // y: 50,
        // opacity: 1,
        // duration: 0.8,
        // stagger: 0.2,
        // ease: 'power3.out',
      })
    );
    
    // Values animations
    animations.push(
      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: '.values-section',
          start: 'top 75%',
        },
        // y: 30,
        // opacity: 0,
        // duration: 0.8,
        // stagger: 0.1,
        // ease: 'power3.out',
      })
    );
    
    // CTA section animations
    animations.push(
      gsap.from('.cta-content > *', {
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })
    );
    
    // Return cleanup function
    return () => {
      // Kill all animations
      animations.forEach(anim => {
        if (anim) anim.kill();
      });
      
      // Clean up ScrollTrigger instances
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);
  
  return (
    <AboutPageWrapper ref={pageRef}>
      <Helmet>
        <title>About OMEGASIS AI | Leading AI Chatbot & Automation Solutions</title>
        <meta name="description" content="Learn about OMEGASIS AI, our mission, our team, and our commitment to transforming business communication through cutting-edge AI solutions." />
      </Helmet>
      
      <AboutHero>
        <HeroDecoration />
        <HeroContent className="hero-content">
          <AboutTitle>About OMEGASIS AI</AboutTitle>
          <AboutSubtitle>
            We're on a mission to revolutionize business communication through intelligent AI solutions that enhance customer engagement and drive growth.
          </AboutSubtitle>
        </HeroContent>
      </AboutHero>
      
      <Section className="story-section">
        <AboutContainer>
          <SectionTitle>
            Our <span className="highlight">Story</span>
          </SectionTitle>
          <StoryContainer className="story-content">
            <StoryText>
              <p>
                OMEGASIS AI was founded in 2025 with a bold mission — to make powerful AI accessible to everyday businesses. What started as a solo venture quickly gained traction by solving a common challenge: missed calls, unanswered queries, and lost opportunities.
              </p>
              <p>
                As the founder, I wear many hats — from developing chatbots to meeting with clients — ensuring each solution is tailored to real business needs.
              </p>
              <p>
                Our services may be lean right now, but they're mighty — and growing fast. With every client we help, OMEGASIS AI moves one step closer to becoming Australia's most trusted name in AI-powered business automation.
              </p>
            </StoryText>
            <ButtonWrapper>
              <Button 
                variant="primary" 
                size="lg" 
                to="/contact"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '12px 28px',
                  borderRadius: '30px',
                  boxShadow: '0 10px 20px rgba(66, 99, 235, 0.2)'
                }}
              >
                Get to Know Us
                <ArrowRight size={18} />
              </Button>
            </ButtonWrapper>
          </StoryContainer>
        </AboutContainer>
      </Section>
      
      {/* Mission Section */}
      <Section className="mission-section" style={{ backgroundColor: '#f9f9f9' }}>
        <AboutContainer>
          <SectionTitle>
            Our <span className="highlight">Mission</span>
          </SectionTitle>
          
          <MissionWrapper style={{ border: '1px solid #eee' }}>
            <MissionCards>
              <MissionCard className="mission-card">
                <MissionIcon>
                  <Pen size={30} />
                </MissionIcon>
                <MissionTitle>Innovate</MissionTitle>
                <MissionDescription>
                  We're committed to pushing the boundaries of what's possible with AI, continuously enhancing our technologies to create smarter, more intuitive solutions for our clients.
                </MissionDescription>
              </MissionCard>
              
              <MissionCard className="mission-card">
                <MissionIcon>
                  <Users size={30} />
                </MissionIcon>
                <MissionTitle>Empower</MissionTitle>
                <MissionDescription>
                  We believe in democratizing AI technology, making it accessible and actionable for businesses of all sizes to enhance their customer engagement strategies.
                </MissionDescription>
              </MissionCard>
              
              <MissionCard className="mission-card">
                <MissionIcon>
                  <Bell size={30} />
                </MissionIcon>
                <MissionTitle>Transform</MissionTitle>
                <MissionDescription>
                  Our mission is to transform how businesses communicate, replacing outdated systems with intelligent solutions that adapt and scale to meet evolving customer expectations.
                </MissionDescription>
              </MissionCard>
            </MissionCards>
          </MissionWrapper>
        </AboutContainer>
      </Section>
      
      {/* Values Section */}
      <Section className="values-section" style={{ backgroundColor: '#f5f5f5' }}>
        <AboutContainer>
          <SectionTitle>
            Our <span className="highlight">Values</span>
          </SectionTitle>
          
          <ValuesWrapper style={{ border: '1px solid #eee' }}>
            <ValuesGrid>
              <ValueCard className="value-card">
                <ValueIcon>
                  <Check size={25} />
                </ValueIcon>
                <ValueTitle>Excellence</ValueTitle>
                <ValueDescription>
                  We're committed to delivering the highest quality AI solutions that exceed client expectations and drive meaningful results.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard className="value-card">
                <ValueIcon>
                  <Star size={25} />
                </ValueIcon>
                <ValueTitle>Innovation</ValueTitle>
                <ValueDescription>
                  We continuously push the boundaries of AI technology, staying ahead of industry trends to provide cutting-edge solutions.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard className="value-card">
                <ValueIcon>
                  <Eye size={25} />
                </ValueIcon>
                <ValueTitle>Transparency</ValueTitle>
                <ValueDescription>
                  We believe in open communication about our technologies, processes, and results, building trust with clients through honesty.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard className="value-card">
                <ValueIcon>
                  <Clipboard size={25} />
                </ValueIcon>
                <ValueTitle>Responsibility</ValueTitle>
                <ValueDescription>
                  We develop AI with a strong ethical foundation, ensuring our technology is used responsibly and benefits society.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard className="value-card">
                <ValueIcon>
                  <ArrowRight size={25} />
                </ValueIcon>
                <ValueTitle>Adaptability</ValueTitle>
                <ValueDescription>
                  We embrace change and continuously evolve our solutions to meet emerging challenges and opportunities in AI technology.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard className="value-card">
                <ValueIcon>
                  <UserPlus size={25} />
                </ValueIcon>
                <ValueTitle>Collaboration</ValueTitle>
                <ValueDescription>
                  We work closely with our clients as partners, combining our AI expertise with their industry knowledge to create optimal solutions.
                </ValueDescription>
              </ValueCard>
            </ValuesGrid>
          </ValuesWrapper>
        </AboutContainer>
      </Section>
      
      <CTASection className="cta-section">
        <AboutContainer>
          <CTAContent className="cta-content">
            <CTATitle>Ready to Transform Your Business with AI?</CTATitle>
            <CTADescription>
              Let's discuss how our team of experts can help you implement AI solutions that drive real business results.
            </CTADescription>
            <CTAButton 
              variant="outline" 
              size="lg" 
              to="/contact"
            >
              Get Started Today
            </CTAButton>
          </CTAContent>
        </AboutContainer>
      </CTASection>
    </AboutPageWrapper>
  );
};

export default About;