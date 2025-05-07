import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

// Add some tech-themed SVG patterns and icons
const SecureIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" 
      fill="currentColor" opacity="0.7" />
  </svg>
);

const DataIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.58 21 12 21C16.42 21 20 19.21 20 17V7C20 4.79 16.42 3 12 3ZM12 5C16.41 5 18 6.21 18 7C18 7.79 16.41 9 12 9C7.59 9 6 7.79 6 7C6 6.21 7.59 5 12 5ZM6 9.13C7.86 10.13 10.18 10.5 12 10.5C13.82 10.5 16.14 10.13 18 9.13V12.13C17.86 12.22 17.73 12.31 17.59 12.39C16.14 13.12 14.2 13.5 12 13.5C9.8 13.5 7.86 13.12 6.41 12.39C6.27 12.31 6.14 12.22 6 12.13V9.13ZM6 14.13C7.86 15.13 10.18 15.5 12 15.5C13.82 15.5 16.14 15.13 18 14.13V17C18 17.79 16.41 19 12 19C7.59 19 6 17.79 6 17V14.13Z" 
      fill="currentColor" opacity="0.7" />
  </svg>
);

const RightsIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.39L12 4.14L18 6.39V11.09Z" 
      fill="currentColor" opacity="0.7" />
    <path d="M10 13L8 11L6.5 12.5L10 16L17 9L15.5 7.5L10 13Z" fill="currentColor" />
  </svg>
);

const PolicyContainer = styled.div`
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

const PolicyWrapper = styled.div`
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

const PolicyHeader = styled.header`
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

const PolicySection = styled.section`
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

const PolicyList = styled.ul`
  margin-bottom: ${theme.spacing.lg};
  list-style: none;
  padding-left: ${theme.spacing.lg};
`;

const PolicyListItem = styled.li`
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

const PolicyFooter = styled.footer`
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

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <PolicyContainer>
      <EffectCircle className="top-right" />
      <EffectCircle className="bottom-left" />
      
      <PolicyWrapper className="container">
        <TechCard>
          <PolicyHeader>
            <h1 className="text-gradient-primary">Privacy Policy</h1>
            <p>Last Updated: {currentDate}</p>
          </PolicyHeader>

          <PolicySection>
            <SectionHeading>
              <DataIconSVG />
              1. Information We Collect
            </SectionHeading>
            <PolicyList>
              <PolicyListItem>Contact information (name, email, phone)</PolicyListItem>
              <PolicyListItem>Business data you provide through our platform</PolicyListItem>
              <PolicyListItem>Usage data (browser, device, interaction logs)</PolicyListItem>
            </PolicyList>
          </PolicySection>

          <PolicySection>
            <SectionHeading>
              <DataIconSVG />
              2. How We Use Your Data
            </SectionHeading>
            <PolicyList>
              <PolicyListItem>To provide and improve our services</PolicyListItem>
              <PolicyListItem>Customer support and onboarding</PolicyListItem>
              <PolicyListItem>Communication (e.g. service updates, newsletters)</PolicyListItem>
              <PolicyListItem>Compliance with legal obligations</PolicyListItem>
            </PolicyList>
          </PolicySection>

          <PolicySection>
            <SectionHeading>
              <SecureIconSVG />
              3. Data Storage & Security
            </SectionHeading>
            <PolicyList>
              <PolicyListItem>Hosted securely on reputable platforms (e.g., Airtable, Twilio)</PolicyListItem>
              <PolicyListItem>Encrypted transmissions (HTTPS)</PolicyListItem>
              <PolicyListItem>Access restricted to authorized personnel</PolicyListItem>
            </PolicyList>
          </PolicySection>

          <PolicySection>
            <SectionHeading>
              <DataIconSVG />
              4. Sharing Data
            </SectionHeading>
            <p>
              We do not sell personal data. Third-party tools (e.g., CRM, email systems) are only used to support our services.
            </p>
          </PolicySection>

          <PolicySection>
            <SectionHeading>
              <RightsIconSVG />
              5. Your Rights
            </SectionHeading>
            <PolicyList>
              <PolicyListItem>Request access to your data</PolicyListItem>
              <PolicyListItem>Request correction or deletion</PolicyListItem>
              <PolicyListItem>Withdraw consent at any time</PolicyListItem>
            </PolicyList>
          </PolicySection>

          <ContactSection>
            <h2>Contact</h2>
            <p>Email: <a href="mailto:privacy@omegasis.ai">privacy@omegasis.ai</a></p>
            <p>
              More information: <a href="https://www.oaic.gov.au/privacy/privacy-legislation/the-privacy-act" target="_blank" rel="noopener noreferrer">
                https://www.oaic.gov.au/privacy/privacy-legislation/the-privacy-act
              </a>
            </p>
          </ContactSection>

          <PolicyFooter>
            <p>© {new Date().getFullYear()} OMEGASIS AI. All rights reserved.</p>
          </PolicyFooter>
        </TechCard>
      </PolicyWrapper>
    </PolicyContainer>
  );
};

export default PrivacyPolicy;