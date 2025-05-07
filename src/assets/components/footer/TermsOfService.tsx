import React from 'react';
import styled from 'styled-components';
import { theme } from './../../styles/theme';

// Tech-themed SVG icons
const ServicesIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V7.5C21 6.4 20.1 5.5 19 5.5H14.7C14.3 4.8 13.7 4.2 12.9 3.8C12.3 3.3 11.5 3 10.5 3C9.9 3.1 9.3 3.2 8.7 3.5C7.1 4.2 6 5.8 6 7.5C4.9 7.5 4 8.4 4 9.5V16C4 17.1 4.9 18 6 18H19C20.1 18 21 17.1 21 16ZM12.1 5.5C12.4 5.8 12.8 6.1 13 6.4C13.2 6.8 13.4 7.2 13.4 7.7C13.4 8.3 13.2 8.9 12.8 9.3C12.4 9.7 11.8 10 11.1 10C10.5 10 9.9 9.8 9.5 9.4C9.1 9 8.7 8.5 8.7 7.8C8.7 7.2 8.9 6.7 9.2 6.3C9.6 5.9 10.2 5.6 10.8 5.6C11.3 5.5 11.7 5.5 12.1 5.5ZM19 16H6V12H8.5V13.5H16.5V12H19V16Z" 
      fill="currentColor" opacity="0.7" />
  </svg>
);

const TermsIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" 
      fill="currentColor" opacity="0.7" />
  </svg>
);

const PaymentIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" 
      fill="currentColor" opacity="0.7" />
  </svg>
);

const TerminationIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z" 
      fill="currentColor" opacity="0.7" />
  </svg>
);

const ToSContainer = styled.div`
  background-color: ${theme.colors.white};
  min-height: 100vh;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background: linear-gradient(180deg, ${theme.colors.primary}22 0%, rgba(0,0,0,0) 100%);
    z-index: 0;
  }
`;

const ToSWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${theme.spacing['3xl']};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

const TechCard = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: ${theme.spacing['2xl']};
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ToSHeader = styled.header`
  margin-bottom: ${theme.spacing['2xl']};
  padding-bottom: ${theme.spacing.lg};
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  h1 {
    margin-bottom: ${theme.spacing.xs};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: ${theme.colors.primary};
      border-radius: ${theme.borderRadius.full};
    }
  }
  
  p {
    color: ${theme.colors.gray};
    margin-bottom: 0;
  }
`;

const SectionHeading = styled.h2`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: ${theme.spacing.sm};
    color: ${theme.colors.primary};
  }
`;

const ToSSection = styled.section`
  margin-bottom: ${theme.spacing['2xl']};
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.lg};
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0.06) 50%, rgba(0,0,0,0));
  }
`;

const ToSList = styled.ul`
  margin-bottom: ${theme.spacing.lg};
  list-style: none;
  padding-left: ${theme.spacing.lg};
`;

const ToSListItem = styled.li`
  margin-bottom: ${theme.spacing.md};
  position: relative;
  
  &::before {
    content: '•';
    color: ${theme.colors.primary};
    position: absolute;
    left: -${theme.spacing.lg};
    font-size: ${theme.typography.fontSize.lg};
  }
`;

const ContactSection = styled.section`
  margin-top: ${theme.spacing['3xl']};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.md};
  background: linear-gradient(120deg, ${theme.colors.primary}0A, ${theme.colors.secondary}1A);
  border: 1px solid rgba(0, 0, 0, 0.06);
  
  h2 {
    margin-bottom: ${theme.spacing.md};
  }
  
  a {
    font-weight: ${theme.typography.fontWeight.medium};
    border-bottom: 1px dashed ${theme.colors.primary}88;
    padding-bottom: 2px;
    
    &:hover {
      border-bottom-style: solid;
    }
  }
`;

const ToSFooter = styled.footer`
  margin-top: ${theme.spacing['3xl']};
  padding-top: ${theme.spacing.lg};
  text-align: center;
  color: ${theme.colors.gray};
  font-size: ${theme.typography.fontSize.sm};
`;

const EffectCircle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, ${theme.colors.primary}0A 0%, rgba(0,0,0,0) 70%);
  z-index: 0;
  opacity: 0.6;
  
  &.top-right {
    top: -100px;
    right: -100px;
  }
  
  &.bottom-left {
    bottom: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, ${theme.colors.secondary}0A 0%, rgba(0,0,0,0) 70%);
  }
`;

const TermsOfService = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <ToSContainer>
      <EffectCircle className="top-right" />
      <EffectCircle className="bottom-left" />
      
      <ToSWrapper className="container">
        <TechCard>
          <ToSHeader>
            <h1 className="text-gradient-primary">Terms of Service</h1>
            <p>Effective Date: {currentDate}</p>
          </ToSHeader>

          <p>By using OMEGASIS AI, you agree to the following terms:</p>

          <ToSSection>
            <SectionHeading>
              <ServicesIconSVG />
              1. Services Provided
            </SectionHeading>
            <p>
              We offer AI receptionist and automation services, including phone answering, 
              chatbot development, and lead capture integrations.
            </p>
          </ToSSection>

          <ToSSection>
            <SectionHeading>
              <TermsIconSVG />
              2. Usage Terms
            </SectionHeading>
            <ToSList>
              <ToSListItem>You must be 18+ and authorized to act on behalf of your business.</ToSListItem>
              <ToSListItem>You agree not to misuse or attempt to reverse-engineer our services.</ToSListItem>
              <ToSListItem>You retain ownership of your business content; we retain ownership of all AI/tech infrastructure.</ToSListItem>
            </ToSList>
          </ToSSection>

          <ToSSection>
            <SectionHeading>
              <PaymentIconSVG />
              3. Payments & Refunds
            </SectionHeading>
            <ToSList>
              <ToSListItem>Monthly subscriptions billed in advance.</ToSListItem>
              <ToSListItem>
                Refunds granted if services do not meet advertised expectations, in line with ACCC digital product rights.
                More info: <a href="https://www.accc.gov.au/consumers/consumer-rights-guarantees/digital-products" target="_blank" rel="noopener noreferrer">
                  https://www.accc.gov.au/consumers/consumer-rights-guarantees/digital-products
                </a>
              </ToSListItem>
            </ToSList>
          </ToSSection>

          <ToSSection>
            <SectionHeading>
              <TerminationIconSVG />
              4. Termination
            </SectionHeading>
            <p>
              We may suspend access for misuse or non-payment. You can cancel anytime with 7 days' notice before the next billing cycle.
            </p>
          </ToSSection>

          <ContactSection>
            <h2>Contact</h2>
            <p>Email: <a href="mailto:support@omegasis.ai">support@omegasis.ai</a></p>
          </ContactSection>

          <ToSFooter>
            <p>© {new Date().getFullYear()} OMEGASIS AI. All rights reserved.</p>
          </ToSFooter>
        </TechCard>
      </ToSWrapper>
    </ToSContainer>
  );
};

export default TermsOfService;