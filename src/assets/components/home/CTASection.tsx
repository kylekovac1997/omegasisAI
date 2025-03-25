import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { theme } from '../../styles/theme';
import Button from '../../components/common/Button';

const CTAWrapper = styled.section`
  padding: ${theme.spacing['5xl']} 0;
  background-color: ${theme.colors.white};
  position: relative;
  overflow: hidden;
`;

const CTAContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const CTAContent = styled.div`
  position: relative;
  background: ${theme.colors.gradient.primary};
  padding: ${theme.spacing['3xl']};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.xl};
  text-align: center;
  color: ${theme.colors.white};
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='5'/%3E%3C/g%3E%3C/svg%3E");
    z-index: -1;
    border-radius: ${theme.borderRadius.xl};
  }
`;

const CTATitle = styled.h2`
  font-size: clamp(1.875rem, 4vw, ${theme.typography.fontSize['4xl']});
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

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.md};
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.full};
  z-index: 0;
  
  &.element1 {
    width: 120px;
    height: 120px;
    top: -30px;
    left: 10%;
  }
  
  &.element2 {
    width: 80px;
    height: 80px;
    bottom: 20px;
    right: 15%;
  }
  
  &.element3 {
    width: 60px;
    height: 60px;
    top: 30%;
    right: 5%;
  }
  
  &.element4 {
    width: 40px;
    height: 40px;
    bottom: -10px;
    left: 30%;
  }
`;

const CTASection: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const floatingElements = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    if (ctaRef.current) {
      // Title and description animation
      gsap.from(['.cta-title', '.cta-description'], {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
      
      // Buttons animation
      gsap.from('.cta-buttons', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 70%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });
      
      // Floating elements animation
      if (floatingElements.current.length > 0) {
        floatingElements.current.forEach((element, index) => {
          // Initial animation
          gsap.from(element, {
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 80%',
            },
            scale: 0,
            opacity: 0,
            duration: 1,
            delay: 0.2 * index,
            ease: 'power3.out',
          });
          
          // Continuous floating animation
          gsap.to(element, {
            y: index % 2 === 0 ? '20px' : '-20px',
            x: index % 3 === 0 ? '10px' : '-10px',
            rotation: index % 2 === 0 ? 15 : -15,
            repeat: -1,
            yoyo: true,
            duration: 3 + index,
            ease: 'sine.inOut',
            delay: 0.2 * index,
          });
        });
      }
    }
  }, []);
  
  return (
    <CTAWrapper ref={ctaRef}>
      <CTAContainer>
        <CTAContent>
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
          <FloatingElement 
            className="element4" 
            ref={(el) => el && floatingElements.current.push(el)}
          />
          
          <CTATitle className="cta-title">
            Ready to Transform Your Customer Experience?
          </CTATitle>
          <CTADescription className="cta-description">
            Join the hundreds of businesses that have revolutionized their customer engagement with OMEGASIS AI's cutting-edge chatbot solutions. Get started today with a free consultation.
          </CTADescription>
          <CTAButtons className="cta-buttons">
            <Button variant="outline" size="lg" to="/contact">
              Schedule Demo
            </Button>
            <Button variant="secondary" size="lg" to="/contact">
              Contact Us
            </Button>
          </CTAButtons>
        </CTAContent>
      </CTAContainer>
    </CTAWrapper>
  );
};

export default CTASection;