import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { theme } from '../styles/theme';
import Button from '../components/common/Button';
// import AnimatedSection from '@/components/common/AnimatedSection';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutPageWrapper = styled.div`
  padding-top: 100px;
  background-color: ${theme.colors.white};
`;

const AboutHero = styled.section`
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

const AboutContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const AboutTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, ${theme.typography.fontSize['4xl']});
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  text-align: center;
`;

const AboutSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const StorySection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['3xl']};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const StoryContent = styled.div`
  @media (max-width: ${theme.breakpoints.lg}) {
    order: 2;
  }
`;

const StoryTitle = styled.h2`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.dark};
  
  .highlight {
    color: ${theme.colors.primary};
  }
`;

const StoryText = styled.div`
  margin-bottom: ${theme.spacing.xl};
  
  p {
    margin-bottom: ${theme.spacing.md};
    font-size: ${theme.typography.fontSize.md};
    line-height: 1.7;
    color: ${theme.colors.dark};
  }
`;

const StoryImage = styled.div`
  position: relative;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    order: 1;
    margin-bottom: ${theme.spacing.xl};
  }
  
  img {
    width: 100%;
    border-radius: ${theme.borderRadius.xl};
    box-shadow: ${theme.shadows.lg};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100px;
    height: 100px;
    background: ${theme.colors.gradient.primary};
    border-radius: ${theme.borderRadius.lg};
    z-index: -1;
    transform: rotate(-15deg);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 150px;
    height: 150px;
    background: ${theme.colors.gradient.secondary};
    border-radius: ${theme.borderRadius.lg};
    z-index: -1;
    transform: rotate(15deg);
  }
`;

const MissionSection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background-color: ${theme.colors.lightGray};
`;

const MissionCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing['2xl']};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const MissionCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};
  text-align: center;
  transition: ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const MissionIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${theme.colors.gradient.primary};
  border-radius: ${theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing.lg};
  
  svg {
    width: 40px;
    height: 40px;
    color: ${theme.colors.white};
  }
`;

const MissionTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.dark};
`;

const MissionDescription = styled.p`
  font-size: ${theme.typography.fontSize.md};
  line-height: 1.6;
  color: ${theme.colors.gray};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.dark};
  text-align: center;
  
  .highlight {
    color: ${theme.colors.primary};
  }
`;

const TeamSection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamMemberImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: ${theme.borderRadius.full};
  overflow: hidden;
  margin: 0 auto ${theme.spacing.md};
  box-shadow: ${theme.shadows.md};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TeamMemberName = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.dark};
`;

const TeamMemberRole = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const TeamMemberBio = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray};
  line-height: 1.6;
`;

const ValuesSection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background-color: ${theme.colors.lightGray};
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  display: flex;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.sm};
  transition: ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.md};
  }
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing.md};
  flex-shrink: 0;
  
  svg {
    width: 30px;
    height: 30px;
    color: ${theme.colors.primary};
  }
`;

const ValueContent = styled.div`
  flex-grow: 1;
`;

const ValueTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.dark};
`;

const ValueDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray};
  line-height: 1.6;
  margin: 0;
`;

const CTASection = styled.section`
  text-align: center;
  padding: ${theme.spacing['4xl']} 0;
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
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
`;

const CTADescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  max-width: 700px;
  margin: 0 auto ${theme.spacing.xl};
  line-height: 1.6;
`;

const About: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!pageRef.current) return;
    
    // Store animations for cleanup
    const animations: gsap.core.Tween[] = [];
    
    // Hero section animations
    animations.push(
      gsap.from('.about-hero-text', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
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
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
    );
    
    animations.push(
      gsap.from('.story-image', {
        scrollTrigger: {
          trigger: '.story-section',
          start: 'top 75%',
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      })
    );
    
    // Mission cards animations
    animations.push(
      gsap.from('.mission-card', {
        scrollTrigger: {
          trigger: '.mission-section',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })
    );
    
    // Team members animations
    animations.push(
      gsap.from('.team-member', {
        scrollTrigger: {
          trigger: '.team-section',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })
    );
    
    // Values animations
    animations.push(
      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: '.values-section',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
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
      animations.forEach(anim => anim?.kill());
      
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
        <AboutContainer>
          <AboutTitle className="about-hero-text">About OMEGASIS AI</AboutTitle>
          <AboutSubtitle className="about-hero-text">
            We're on a mission to revolutionize business communication through intelligent AI solutions that enhance customer engagement and drive growth.
          </AboutSubtitle>
        </AboutContainer>
      </AboutHero>
      
      <StorySection className="story-section">
        <AboutContainer>
          <StoryGrid>
            <StoryContent className="story-content">
              <StoryTitle>
                Our <span className="highlight">Story</span>
              </StoryTitle>
              <StoryText>
                <p>
                  OMEGASIS AI was founded in 2022 by a team of AI enthusiasts, developers, and business strategists who recognized the transformative potential of conversational AI for businesses of all sizes.
                </p>
                <p>
                  What began as a research project quickly evolved into a full-service AI solution provider as we witnessed the challenges businesses faced in adapting to rapidly changing customer communication needs.
                </p>
                <p>
                  Today, we're proud to serve hundreds of clients worldwide, helping them leverage the power of AI to create meaningful connections with their customers, streamline operations, and drive business growth.
                </p>
                <p>
                  Our team combines deep technical expertise in natural language processing and machine learning with a passion for customer experience, enabling us to deliver AI solutions that feel remarkably human while delivering measurable business results.
                </p>
              </StoryText>
              <Button variant="primary" size="lg" to="/contact">
                Get to Know Us
              </Button>
            </StoryContent>
            
            <StoryImage className="story-image">
              <img src="/src/assets/images/about-team.jpg" alt="OMEGASIS AI Team" />
            </StoryImage>
          </StoryGrid>
        </AboutContainer>
      </StorySection>
      
      <MissionSection className="mission-section">
        <AboutContainer>
          <SectionTitle>
            Our <span className="highlight">Mission</span>
          </SectionTitle>
          
          <MissionCards>
            <MissionCard className="mission-card">
              <MissionIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </MissionIcon>
              <MissionTitle>Innovate</MissionTitle>
              <MissionDescription>
                We're committed to pushing the boundaries of what's possible with AI, continuously enhancing our technologies to create smarter, more intuitive solutions for our clients.
              </MissionDescription>
            </MissionCard>
            
            <MissionCard className="mission-card">
              <MissionIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </MissionIcon>
              <MissionTitle>Empower</MissionTitle>
              <MissionDescription>
                We believe in democratizing AI technology, making it accessible and actionable for businesses of all sizes to enhance their customer engagement strategies.
              </MissionDescription>
            </MissionCard>
            
            <MissionCard className="mission-card">
              <MissionIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </MissionIcon>
              <MissionTitle>Transform</MissionTitle>
              <MissionDescription>
                Our mission is to transform how businesses communicate, replacing outdated systems with intelligent solutions that adapt and scale to meet evolving customer expectations.
              </MissionDescription>
            </MissionCard>
          </MissionCards>
        </AboutContainer>
      </MissionSection>
      
      <TeamSection className="team-section">
        <AboutContainer>
          <SectionTitle>
            Meet Our <span className="highlight">Team</span>
          </SectionTitle>
          
          <TeamGrid>
            <TeamMember className="team-member">
              <TeamMemberImage>
                <img src="/src/assets/images/team/member1.jpg" alt="Team Member" />
              </TeamMemberImage>
              <TeamMemberName>Michael Thompson</TeamMemberName>
              <TeamMemberRole>CEO & Co-Founder</TeamMemberRole>
              <TeamMemberBio>
                AI visionary with 15+ years of experience in tech leadership and product development.
              </TeamMemberBio>
            </TeamMember>
            
            <TeamMember className="team-member">
              <TeamMemberImage>
                <img src="/src/assets/images/team/member2.jpg" alt="Team Member" />
              </TeamMemberImage>
              <TeamMemberName>Sarah Chen</TeamMemberName>
              <TeamMemberRole>CTO & Co-Founder</TeamMemberRole>
              <TeamMemberBio>
                Machine learning expert with previous experience at leading AI research labs.
              </TeamMemberBio>
            </TeamMember>
            
            <TeamMember className="team-member">
              <TeamMemberImage>
                <img src="/src/assets/images/team/member3.jpg" alt="Team Member" />
              </TeamMemberImage>
              <TeamMemberName>David Rodriguez</TeamMemberName>
              <TeamMemberRole>Head of Product</TeamMemberRole>
              <TeamMemberBio>
                Product strategist focused on creating AI solutions that solve real business challenges.
              </TeamMemberBio>
            </TeamMember>
            
            <TeamMember className="team-member">
              <TeamMemberImage>
                <img src="/src/assets/images/team/member4.jpg" alt="Team Member" />
              </TeamMemberImage>
              <TeamMemberName>Emily Nguyen</TeamMemberName>
              <TeamMemberRole>Director of Customer Success</TeamMemberRole>
              <TeamMemberBio>
                Dedicated to ensuring clients achieve measurable results with our AI solutions.
              </TeamMemberBio>
            </TeamMember>
          </TeamGrid>
        </AboutContainer>
      </TeamSection>
      
      <ValuesSection className="values-section">
        <AboutContainer>
          <SectionTitle>
            Our <span className="highlight">Values</span>
          </SectionTitle>
          
          <ValuesGrid>
            <ValueCard className="value-card">
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </ValueIcon>
              <ValueContent>
                <ValueTitle>Excellence</ValueTitle>
                <ValueDescription>
                  We're committed to delivering the highest quality AI solutions that exceed client expectations and drive meaningful results.
                </ValueDescription>
              </ValueContent>
            </ValueCard>
            
            <ValueCard className="value-card">
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ValueIcon>
              <ValueContent>
                <ValueTitle>Innovation</ValueTitle>
                <ValueDescription>
                  We continuously push the boundaries of AI technology, staying ahead of industry trends to provide cutting-edge solutions.
                </ValueDescription>
              </ValueContent>
            </ValueCard>
            
            <ValueCard className="value-card">
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </ValueIcon>
              <ValueContent>
                <ValueTitle>Transparency</ValueTitle>
                <ValueDescription>
                  We believe in open communication about our technologies, processes, and results, building trust with clients through honesty.
                </ValueDescription>
              </ValueContent>
            </ValueCard>
            
            <ValueCard className="value-card">
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
              </ValueIcon>
              <ValueContent>
                <ValueTitle>Responsibility</ValueTitle>
                <ValueDescription>
                  We develop AI with a strong ethical foundation, ensuring our technology is used responsibly and benefits society.
                </ValueDescription>
              </ValueContent>
            </ValueCard>
            
            <ValueCard className="value-card">
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8l4 4-4 4M8 12h7"></path>
                </svg>
              </ValueIcon>
              <ValueContent>
                <ValueTitle>Adaptability</ValueTitle>
                <ValueDescription>
                  We embrace change and continuously evolve our solutions to meet emerging challenges and opportunities in AI technology.
                </ValueDescription>
              </ValueContent>
            </ValueCard>
            
            <ValueCard className="value-card">
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </ValueIcon>
              <ValueContent>
                <ValueTitle>Collaboration</ValueTitle>
                <ValueDescription>
                  We work closely with our clients as partners, combining our AI expertise with their industry knowledge to create optimal solutions.
                </ValueDescription>
              </ValueContent>
            </ValueCard>
          </ValuesGrid>
        </AboutContainer>
      </ValuesSection>
      
      <CTASection className="cta-section">
        <AboutContainer>
          <CTAContent>
            <CTATitle>Ready to Transform Your Business with AI?</CTATitle>
            <CTADescription>
              Let's discuss how our team of experts can help you implement AI solutions that drive real business results.
            </CTADescription>
            <Button variant="outline" size="lg" to="/contact">
              Get Started Today
            </Button>
          </CTAContent>
        </AboutContainer>
      </CTASection>
    </AboutPageWrapper>
  );
};

export default About;