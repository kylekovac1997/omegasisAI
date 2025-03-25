import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { theme } from '../styles/theme';
import ContactForm from '../components/common/ContactForm';
import AnimatedSection from '../components/common/AnimatedSection';

const ContactPageWrapper = styled.div`
  padding-top: 100px;
  background-color: ${theme.colors.lightGray};
  min-height: 100vh;
`;

const ContactHero = styled.section`
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

const ContactContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const ContactTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, ${theme.typography.fontSize['4xl']});
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  text-align: center;
`;

const ContactSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const ContactContent = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  margin-top: -100px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['3xl']};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

const ContactInfoTitle = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.dark};
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.md};
`;

const ContactIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 24px;
    color: ${theme.colors.primary};
  }
`;

const ContactInfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInfoLabel = styled.h3`
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.dark};
`;

const ContactInfoText = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray};
  margin: 0;
  line-height: 1.6;
  
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: ${theme.transitions.default};
    
    &:hover {
      color: ${theme.colors.secondary};
      text-decoration: underline;
    }
  }
`;

const ContactSocial = styled.div`
  margin-top: ${theme.spacing.xl};
`;

const SocialTitle = styled.h3`
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.dark};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
 
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${theme.colors.lightGray};
  color: ${theme.colors.primary};
  transition: ${theme.transitions.default};
  
  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    transform: translateY(-3px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const FormWrapper = styled.div`
  order: -1;
  
  @media (min-width: ${theme.breakpoints.lg}) {
    order: 0;
  }
`;

const Contact: React.FC = () => {
  const contactHeroRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Hero section animations
    if (contactHeroRef.current) {
      const heroTimeline = gsap.timeline();
      
      heroTimeline.from('.contact-title', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
      
      heroTimeline.from('.contact-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6');
    }
    
    // Contact info animations
    if (contactInfoRef.current) {
      gsap.from('.contact-info-item', {
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });
      
      gsap.from('.social-animation', {
        scrollTrigger: {
          trigger: '.contact-social',
          start: 'top 90%',
        },
        y: 20,
        opacity: 0.5,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        
      });
    }
  }, []);
  
  return (
    <ContactPageWrapper>
      <Helmet>
        <title>Contact Us | OMEGASIS AI</title>
        <meta name="description" content="Get in touch with OMEGASIS AI for custom AI chatbot solutions. Our team is ready to help transform your customer engagement strategy." />
      </Helmet>
      
      <ContactHero ref={contactHeroRef}>
        <ContactContainer>
          <ContactTitle className="contact-title">Get In Touch</ContactTitle>
          <ContactSubtitle className="contact-subtitle">
            Have questions about our AI solutions? Reach out to our team for a consultation or to schedule a demo.
          </ContactSubtitle>
        </ContactContainer>
      </ContactHero>
      
      <ContactContent>
        <ContactContainer>
          <ContactGrid>
            <ContactInfo ref={contactInfoRef}>
              <ContactInfoTitle>Contact Information</ContactInfoTitle>
              
              <ContactInfoItem className="contact-info-item">
                <ContactIconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </ContactIconWrapper>
                <ContactInfoContent>
                  <ContactInfoLabel>Phone</ContactInfoLabel>
                  <ContactInfoText>
                    <a href="tel:+1-800-123-4567">+61 422341522</a>
                  </ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem className="contact-info-item">
                <ContactIconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </ContactIconWrapper>
                <ContactInfoContent>
                  <ContactInfoLabel>Email</ContactInfoLabel>
                  <ContactInfoText>
                    <a href="mailto:info@omegasis-ai.com">info@omegasis-ai.com</a>
                  </ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem className="contact-info-item">
                <ContactIconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </ContactIconWrapper>
                <ContactInfoContent>
                  <ContactInfoLabel>Office</ContactInfoLabel>
                  <ContactInfoText>
                  Proudly Australian-owned<br />
                    {/* Suite 500<br /> */}
                    , based in Melbourne   
                  </ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem className="contact-info-item">
                <ContactIconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </ContactIconWrapper>
                <ContactInfoContent>
                  <ContactInfoLabel>Support Hours</ContactInfoLabel>
                  <ContactInfoText>
                    Monday - Sunday<br />
                    6:00 AM - 10:00 PM EST
                  </ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactSocial className="contact-social">
                <SocialTitle className="social-animation">Connect With Us</SocialTitle>
                <SocialLinks>
                  <SocialLink 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="social-animation"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </SocialLink>
                  <SocialLink 
                    href="https://facebook.com" 
                    target="facebook" 
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="social-animation"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </SocialLink>
                  <SocialLink 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="social-animation"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </SocialLink>
                  <SocialLink 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="social-animation"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </SocialLink>
                </SocialLinks>
              </ContactSocial>
            </ContactInfo>
            
            <FormWrapper>
              <AnimatedSection animation="fadeIn">
                <ContactForm />
              </AnimatedSection>
            </FormWrapper>
          </ContactGrid>
        </ContactContainer>
      </ContactContent>
    </ContactPageWrapper>
  );
};

export default Contact;