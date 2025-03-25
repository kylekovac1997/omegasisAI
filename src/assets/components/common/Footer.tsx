import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { theme } from '../../styles/theme';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

const FooterContainer = styled.footer`
  background: ${theme.colors.gradient.dark};
  color: ${theme.colors.white};
  padding: ${theme.spacing['4xl']} 0 ${theme.spacing.xl};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const FooterInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing['3xl']};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${theme.typography.fontFamily.secondary};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.white};
  text-decoration: none;
  margin-bottom: ${theme.spacing.md};
  
  img {
    height: 40px;
    margin-right: ${theme.spacing.sm};
  }
  
  span.gradient {
    background: ${theme.colors.gradient.secondary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FooterDescription = styled.p`
  font-size: ${theme.typography.fontSize.md};
  color: ${theme.colors.lightGray};
  margin-bottom: ${theme.spacing.lg};
  max-width: 400px;
  line-height: 1.6;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.full};
  color: ${theme.colors.white};
  transition: ${theme.transitions.default};
  
  &:hover {
    background-color: ${theme.colors.primary};
    transform: translateY(-3px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const FooterHeading = styled.h4`
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.white};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${theme.colors.secondary};
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLinkItem = styled.li`
  margin-bottom: ${theme.spacing.md};
`;

const FooterLink = styled(Link)`
  color: ${theme.colors.lightGray};
  text-decoration: none;
  transition: ${theme.transitions.default};
  display: inline-block;
  
  &:hover {
    color: ${theme.colors.white};
    transform: translateX(5px);
  }
`;

const ExternalLink = styled.a`
  color: ${theme.colors.lightGray};
  text-decoration: none;
  transition: ${theme.transitions.default};
  display: inline-block;
  
  &:hover {
    color: ${theme.colors.white};
    transform: translateX(5px);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing.md};
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${theme.colors.gray};
  font-size: ${theme.typography.fontSize.sm};
  margin: 0;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`;

const FooterBottomLink = styled(Link)`
  color: ${theme.colors.gray};
  font-size: ${theme.typography.fontSize.sm};
  text-decoration: none;
  transition: ${theme.transitions.default};
  
  &:hover {
    color: ${theme.colors.white};
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${theme.colors.white};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.sm};
  flex: 1;
  min-width: 0;
  transition: ${theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary};
    background-color: rgba(255, 255, 255, 0.15);
  }
  
  &::placeholder {
    color: ${theme.colors.gray};
  }
`;

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (footerRef.current) {
      // Animate footer elements when in view
      gsap.from('.footer-animate', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }
  }, []);
  
  return (
    <FooterContainer ref={footerRef}>
      <FooterInner>
        <FooterGrid>
          <FooterColumn className="footer-animate">
            <FooterLogo to="/">
              <span className="gradient">OMEGASIS</span> <span>AI</span>
            </FooterLogo>
            <FooterDescription>
              Revolutionizing business communication with AI-powered chatbots and automation solutions tailored for various industries.
            </FooterDescription>
            <SocialIcons>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </SocialIcon>
            </SocialIcons>
          </FooterColumn>
          
          <FooterColumn className="footer-animate">
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinks>
              <FooterLinkItem>
                <FooterLink to="/">Home</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/about">About Us</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/services">Our Services</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/contact">Contact Us</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/blog">Blog</FooterLink>
              </FooterLinkItem>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn className="footer-animate">
            <FooterHeading>Our Services</FooterHeading>
            <FooterLinks>
              <FooterLinkItem>
                <FooterLink to="/services/sms-email">SMS & Email Automation</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/services/lead-qualification">Lead Qualification</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/services/ecommerce">E-Commerce Assistant</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/services/multilingual">Multilingual Chatbots</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/services/custom">Custom Development</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/services/social-media">Social Media Automation</FooterLink>
              </FooterLinkItem>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn className="footer-animate">
            <FooterHeading>Subscribe</FooterHeading>
            <FooterDescription>
              Get the latest news and updates from OMEGASIS AI delivered directly to your inbox.
            </FooterDescription>
            <NewsletterForm onSubmit={(e) => e.preventDefault()}>
              <NewsletterInput 
                type="email" 
                placeholder="Enter your email" 
                aria-label="Email for newsletter"
                required
              />
              <Button variant="secondary" size="md" type="submit">
                Subscribe
              </Button>
            </NewsletterForm>
          </FooterColumn>
        </FooterGrid>
        
        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} OMEGASIS AI. All rights reserved.
          </Copyright>
          <FooterBottomLinks>
            <FooterBottomLink to="/privacy">Privacy Policy</FooterBottomLink>
            <FooterBottomLink to="/terms">Terms of Service</FooterBottomLink>
            <FooterBottomLink to="/cookies">Cookie Policy</FooterBottomLink>
          </FooterBottomLinks>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;