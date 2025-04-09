import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { theme } from '../../styles/theme';
import Button from '../../components/common/Button';
// import AnimatedSection from '@/components/common/AnimatedSection';

const AboutSection = styled.section`
  padding: ${theme.spacing['5xl']} 0;
  background-color: ${theme.colors.lightGray};
  position: relative;
  overflow: hidden;
`;

const AboutContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${theme.spacing['3xl']};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    gap: ${theme.spacing.xl};
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const AboutContent = styled.div`
  flex: 1;
`;

const AboutTitle = styled.h2`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.dark};
  
  .highlight {
    color: ${theme.colors.primary};
  }
`;

const AboutDescription = styled.div`
  margin-bottom: ${theme.spacing.xl};
  
  p {
    margin-bottom: ${theme.spacing.md};
    font-size: ${theme.typography.fontSize.md};
    line-height: 1.7;
    color: ${theme.colors.dark};
  }
`;

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`;

const StatNumber = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray};
`;

const AboutImage = styled.div`
  position: relative;
  flex: 1;
  
  .main-image {
    width: 100%;
    border-radius: ${theme.borderRadius.xl};
    box-shadow: ${theme.shadows.lg};
    position: relative;
    z-index: 2;
  }
  
  .accent-shape {
    position: absolute;
    width: 200px;
    height: 200px;
    background: ${theme.colors.gradient.primary};
    border-radius: ${theme.borderRadius.lg};
    z-index: 1;
  }
  
  .shape1 {
    top: -30px;
    right: -30px;
    transform: rotate(15deg);
  }
  
  .shape2 {
    bottom: -30px;
    left: -30px;
    transform: rotate(-15deg);
  }
  
  .floating-card {
    position: absolute;
    bottom: 30px;
    right: -20px;
    background-color: ${theme.colors.white};
    padding: ${theme.spacing.md};
    border-radius: ${theme.borderRadius.lg};
    box-shadow: ${theme.shadows.lg};
    z-index: 3;
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
    max-width: 300px;
    
    .icon {
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      border-radius: ${theme.borderRadius.md};
      background-color: ${theme.colors.lightGray};
      display: flex;
      align-items: center;
      justify-content: center;
      
      svg {
        width: 30px;
        height: 30px;
        color: ${theme.colors.primary};
      }
    }
    
    .content {
      h4 {
        font-size: ${theme.typography.fontSize.md};
        font-weight: ${theme.typography.fontWeight.semibold};
        margin-bottom: ${theme.spacing.xs};
      }
      
      p {
        font-size: ${theme.typography.fontSize.sm};
        color: ${theme.colors.gray};
        margin: 0;
      }
    }
  }
`;

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const floatingCardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      // Content animation
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        });
      }
      
      // Stats animation
      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        });
      }
      
      // Image and shapes animation
      if (imageRef.current) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
          },
        });
        
        timeline.from('.accent-shape', {
          scale: 0,
          opacity: 0,
          rotation: '+=30',
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        });
        
        timeline.from('.main-image', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.7');
      }
      
      // Floating card animation
      if (floatingCardRef.current) {
        gsap.from(floatingCardRef.current, {
          scrollTrigger: {
            trigger: floatingCardRef.current,
            start: 'top 85%',
          },
          x: 50,
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.5,
        });
        
        gsap.to(floatingCardRef.current, {
          y: -10,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: 'sine.inOut',
          delay: 1,
        });
      }
    }
  }, []);
  
  return (
    <AboutSection ref={sectionRef}>
      <AboutContainer>
        <AboutContent ref={contentRef}>
          <AboutTitle>
            About <span className="highlight">OMEGASIS AI</span>
          </AboutTitle>
          <AboutDescription>
          <p>
  OMEGASIS AI delivers cutting-edge AI-powered chatbot and automation solutions that help businesses revolutionize customer engagement.
</p>
<p>
  Launched in 2025, we’re already partnering with forward-thinking businesses to streamline communication and boost efficiency through smart, scalable AI systems.
</p>
<p>
  Our dedicated team works hand-in-hand with clients to craft tailored solutions that solve real-world challenges and deliver measurable results.
</p>

          </AboutDescription>
          
          <AboutStats ref={statsRef}>
            <StatItem>
              <StatNumber>10+</StatNumber>
              <StatLabel>Clients Nationwide</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>98%</StatNumber>
              <StatLabel>Client Satisfaction</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>1M+</StatNumber>
              <StatLabel>Conversations Managed</StatLabel>
            </StatItem>
          </AboutStats>
          
          <Button variant="primary" size="lg" to="/about">
            Learn More About Us
          </Button>
        </AboutContent>
        
        <AboutImage ref={imageRef}>
        {/* <div className="accent-shape shape1"></div>
<div className="accent-shape shape2"></div> */}
{/* <img 
  src="/src/assets/images/about-img.jpg" 
  alt="OMEGASIS AI Team" 
  className="main-image"
/> */}
<div className="floating-card" ref={floatingCardRef}>
  <div className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  </div>
  <div className="content">
    <h4>Innovation in Progress</h4>
    <p>Delivering real-time AI receptionist solutions from day one</p>
  </div>
</div>

        </AboutImage>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;