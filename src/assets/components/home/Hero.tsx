import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { theme } from '../../styles/theme';
import Button from '../../components/common/Button';
import AnimatedBg from '../common/AnimatedBg';

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: ${theme.colors.dark};
  padding: ${theme.spacing['4xl']} 0;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['5xl']} 0 ${theme.spacing['3xl']};
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  position: relative;
  z-index: 2;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 650px;
  color: ${theme.colors.white};
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, ${theme.typography.fontSize['5xl']});
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.2;
  margin-bottom: ${theme.spacing.xl};
  
  .gradient-text {
    background: ${theme.colors.gradient.secondary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.125rem, 2vw, ${theme.typography.fontSize.xl});
  line-height: 1.6;
  margin-bottom: ${theme.spacing['2xl']};
  color: ${theme.colors.lightGray};
`;

const HeroButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing['2xl']};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

const HeroFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
`;

const HeroFeature = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  
  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.tertiary};
  }
  
  span {
    font-size: ${theme.typography.fontSize.md};
    font-weight: ${theme.typography.fontWeight.medium};
    color: ${theme.colors.lightGray};
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    opacity: 0.3;
    width: 100%;
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, ${theme.colors.primary} 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.15;
  
  &.element1 {
    top: 10%;
    right: 20%;
  }
  
  &.element2 {
    bottom: 15%;
    right: 30%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, ${theme.colors.secondary} 0%, transparent 70%);
  }
  
  &.element3 {
    top: 40%;
    right: 10%;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, ${theme.colors.tertiary} 0%, transparent 70%);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  
  .text {
    color: ${theme.colors.lightGray};
    font-size: ${theme.typography.fontSize.sm};
    margin-bottom: ${theme.spacing.sm};
  }
  
  .arrow {
    width: 30px;
    height: 30px;
    border: 2px solid ${theme.colors.lightGray};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 16px;
      height: 16px;
      color: ${theme.colors.lightGray};
    }
  }
`;

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const floatingElements = useRef<HTMLDivElement[]>([]);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Hero animations
    const timeline = gsap.timeline();
    
    // Title animation
    if (titleRef.current) {
      timeline.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }
    
    // Subtitle animation
    if (subtitleRef.current) {
      timeline.from(
        subtitleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      );
    }
    
    // Buttons animation
    if (buttonsRef.current) {
      timeline.from(
        buttonsRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }
    
    // Features animation
    if (featuresRef.current) {
      const features = featuresRef.current.children;
      timeline.from(
        features,
        {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.2'
      );
    }
    
    // Floating elements animation
    if (floatingElements.current.length > 0) {
      floatingElements.current.forEach((element, index) => {
        const delay = index * 0.2;
        
        gsap.from(element, {
          opacity: 0,
          scale: 0.5,
          duration: 1.5,
          delay: 0.5 + delay,
          ease: 'power3.out',
        });
        
        gsap.to(element, {
          y: `${(index % 2 === 0 ? '+' : '-')}30`,
          x: `${(index % 3 === 0 ? '+' : '-')}20`,
          rotation: index % 2 === 0 ? 10 : -10,
          repeat: -1,
          yoyo: true,
          duration: 4 + index,
          ease: 'sine.inOut',
          delay: delay,
        });
      });
    }
    
    // Scroll indicator animation
    if (scrollIndicatorRef.current) {
      gsap.from(scrollIndicatorRef.current, {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 1.5,
        ease: 'power3.out',
      });
      
      gsap.to(scrollIndicatorRef.current.querySelector('.arrow'), {
        y: 5,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'sine.inOut',
      });
    }
    
    return () => {
      timeline.kill();
    };
  }, []);
  
  const handleScrollDown = () => {
    const nextSection = document.querySelector('.section-services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <HeroSection>
      <HeroContainer>
        <AnimatedBg />
        <HeroContent>
            
          <HeroTitle ref={titleRef}>
            Transforming Business Communication with <span className="gradient-text">AI-Powered Chatbots</span>
          </HeroTitle>
          <HeroSubtitle ref={subtitleRef}>
            OMEGASIS AI delivers cutting-edge conversational AI solutions that enhance customer experiences, streamline operations, and drive revenue growth.
          </HeroSubtitle>
          <HeroButtons ref={buttonsRef}>
            <Button variant="gradient" size="lg" to="/services">
              Explore Solutions
            </Button>
            <Button variant="outline" size="lg" to="/contact">
              Request Demo
            </Button>
          </HeroButtons>
          <HeroFeatures ref={featuresRef}>
            <HeroFeature>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>24/7 Customer Support</span>
            </HeroFeature>
            <HeroFeature>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Multilingual Capabilities</span>
            </HeroFeature>
            <HeroFeature>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Custom AI Solutions</span>
            </HeroFeature>
          </HeroFeatures>
        </HeroContent>
      </HeroContainer>
      
      <HeroBackground>
        <FloatingElement 
          className="element1" 
          ref={(el) => el && floatingElements.current.push(el)}
        />
        <FloatingElement 
          className="element2" 
          ref={(el) => el && floatingElements.current.push(el)}
        />
        <FloatingElement 
          className="element3" 
          ref={(el) => el && floatingElements.current.push(el)}
        />
      </HeroBackground>
      
      <ScrollIndicator ref={scrollIndicatorRef} onClick={handleScrollDown}>
        <span className="text">Scroll Down</span>
        <span className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;