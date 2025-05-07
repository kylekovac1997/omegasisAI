import React from 'react';
import styled from 'styled-components';
import { theme } from './../../styles/theme';

// Tech-themed SVG icons
const CookieIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.95 10.99C21.17 6.4 17.6 2.83 13.01 2.05C12.86 2.02 12.71 2 12.55 2C12.18 2 11.84 2.22 11.69 2.56C11.55 2.87 11.45 3.15 11.38 3.43C11.3 3.71 11.13 3.86 10.92 3.63C10.73 3.42 10.52 3.25 10.3 3.1C9.93 2.87 9.46 2.87 9.13 3.16C8.7 3.59 8.53 4.25 8.83 4.83C9.09 5.35 9.09 5.92 8.83 6.45C8.61 6.9 8.1 7.1 7.65 6.89L7.53 6.83C6.97 6.64 6.36 6.95 6.16 7.51C6.04 7.83 6.07 8.18 6.24 8.47C6.42 8.78 6.5 9.15 6.5 9.5C6.5 10.33 5.83 11 5 11C4.67 11 4.35 10.89 4.09 10.71C3.59 10.36 2.91 10.42 2.49 10.83C2.08 11.24 2.02 11.92 2.36 12.43C2.64 12.83 2.79 13.36 2.64 13.97C2.58 14.24 2.63 14.51 2.77 14.74C3.26 15.6 3.83 16.4 4.49 17.1C6.54 19.25 9.64 20.4 12.76 20.4C16.41 20.4 19.82 18.58 21.95 15.46C22.01 15.37 22.07 15.28 22.07 15.17C22.06 13.8 22.19 12.43 21.95 10.99ZM7.5 10C7.78 10 8 9.78 8 9.5C8 9.22 7.78 9 7.5 9C7.22 9 7 9.22 7 9.5C7 9.78 7.22 10 7.5 10ZM9 6.5C9 6.22 9.22 6 9.5 6C9.78 6 10 6.22 10 6.5C10 6.78 9.78 7 9.5 7C9.22 7 9 6.78 9 6.5ZM9.5 13C9.22 13 9 12.78 9 12.5C9 12.22 9.22 12 9.5 12C9.78 12 10 12.22 10 12.5C10 12.78 9.78 13 9.5 13ZM10.5 7.5C10.78 7.5 11 7.72 11 8C11 8.28 10.78 8.5 10.5 8.5C10.22 8.5 10 8.28 10 8C10 7.72 10.22 7.5 10.5 7.5ZM12.5 18C12.22 18 12 17.78 12 17.5C12 17.22 12.22 17 12.5 17C12.78 17 13 17.22 13 17.5C13 17.78 12.78 18 12.5 18ZM10.5 16C10.22 16 10 15.78 10 15.5C10 15.22 10.22 15 10.5 15C10.78 15 11 15.22 11 15.5C11 15.78 10.78 16 10.5 16ZM14 15.5C14 15.78 13.78 16 13.5 16C13.22 16 13 15.78 13 15.5C13 15.22 13.22 15 13.5 15C13.78 15 14 15.22 14 15.5ZM12.5 13C12.22 13 12 12.78 12 12.5C12 12.22 12.22 12 12.5 12C12.78 12 13 12.22 13 12.5C13 12.78 12.78 13 12.5 13ZM15.5 14C15.5 14.28 15.28 14.5 15 14.5C14.72 14.5 14.5 14.28 14.5 14C14.5 13.72 14.72 13.5 15 13.5C15.28 13.5 15.5 13.72 15.5 14ZM17 10.5C17 10.78 16.78 11 16.5 11C16.22 11 16 10.78 16 10.5C16 10.22 16.22 10 16.5 10C16.78 10 17 10.22 17 10.5ZM14.5 9C14.22 9 14 8.78 14 8.5C14 8.22 14.22 8 14.5 8C14.78 8 15 8.22 15 8.5C15 8.78 14.78 9 14.5 9Z" 
      fill="currentColor" opacity="0.7" />
  </svg>
);

const OptionsIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.48C21.34 9.34 21.39 9.07 21.28 8.87L19.36 5.55C19.24 5.33 18.99 5.26 18.77 5.33L16.38 6.29C15.88 5.91 15.35 5.59 14.76 5.35L14.4 2.81C14.36 2.57 14.16 2.4 13.92 2.4H10.08C9.84 2.4 9.65 2.57 9.61 2.81L9.25 5.35C8.66 5.59 8.12 5.92 7.63 6.29L5.24 5.33C5.02 5.25 4.77 5.33 4.65 5.55L2.74 8.87C2.62 9.08 2.66 9.34 2.86 9.48L4.89 11.06C4.84 11.36 4.8 11.69 4.8 12C4.8 12.31 4.82 12.64 4.87 12.94L2.84 14.52C2.66 14.66 2.61 14.93 2.72 15.13L4.64 18.45C4.76 18.67 5.01 18.74 5.23 18.67L7.62 17.71C8.12 18.09 8.65 18.41 9.24 18.65L9.6 21.19C9.65 21.43 9.84 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.09 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.4 13.98 8.4 12C8.4 10.02 10.02 8.4 12 8.4C13.98 8.4 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z" 
      fill="currentColor" opacity="0.7" />
  </svg>
);

const InfoIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" 
      fill="currentColor" opacity="0.7" />
  </svg>
);

const CookiePolicyContainer = styled.div`
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

const CookiePolicyWrapper = styled.div`
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

const CookiePolicyHeader = styled.header`
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
`;

const SectionHeading = styled.h2`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: ${theme.spacing.sm};
    color: ${theme.colors.primary};
  }
`;

const CookiePolicySection = styled.section`
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

const CookiePolicyList = styled.ul`
  margin-bottom: ${theme.spacing.lg};
  list-style: none;
  padding-left: ${theme.spacing.lg};
`;

const CookiePolicyListItem = styled.li`
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

const InfoSection = styled.section`
  margin-top: ${theme.spacing['3xl']};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.md};
  background: linear-gradient(120deg, ${theme.colors.primary}0A, ${theme.colors.secondary}1A);
  border: 1px solid rgba(0, 0, 0, 0.06);
  
  h2 {
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacing.md};
    
    svg {
      margin-right: ${theme.spacing.sm};
      color: ${theme.colors.primary};
    }
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

const CookiePolicyFooter = styled.footer`
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

const CookiePolicy = () => {
  return (
    <CookiePolicyContainer>
      <EffectCircle className="top-right" />
      <EffectCircle className="bottom-left" />
      
      <CookiePolicyWrapper className="container">
        <TechCard>
          <CookiePolicyHeader>
            <h1 className="text-gradient-primary">Cookie Policy</h1>
          </CookiePolicyHeader>

          <p>OMEGASIS AI uses cookies to enhance your experience.</p>

          <CookiePolicySection>
            <SectionHeading>
              <CookieIconSVG />
              What We Use
            </SectionHeading>
            <CookiePolicyList>
              {/* <CookiePolicyListItem>Session cookies (to keep you logged in)</CookiePolicyListItem> */}
              <CookiePolicyListItem>Analytics cookies (e.g., Google Analytics)</CookiePolicyListItem>
              <CookiePolicyListItem>Functionality cookies (to remember preferences)</CookiePolicyListItem>
            </CookiePolicyList>
          </CookiePolicySection>

          <CookiePolicySection>
            <SectionHeading>
              <OptionsIconSVG />
              Your Options
            </SectionHeading>
            <CookiePolicyList>
              <CookiePolicyListItem>You can disable cookies in your browser</CookiePolicyListItem>
              <CookiePolicyListItem>Some features may be limited without cookies</CookiePolicyListItem>
            </CookiePolicyList>
          </CookiePolicySection>

          <InfoSection>
            <h2>
              <InfoIconSVG />
              More Information
            </h2>
            <p>
              <a href="https://www.oaic.gov.au/privacy/guidance-and-advice/cookies-and-other-online-tracking" target="_blank" rel="noopener noreferrer">
                https://www.oaic.gov.au/privacy/guidance-and-advice/cookies-and-other-online-tracking
              </a>
            </p>
          </InfoSection>

          <CookiePolicyFooter>
            <p>© {new Date().getFullYear()} OMEGASIS AI. All rights reserved.</p>
          </CookiePolicyFooter>
        </TechCard>
      </CookiePolicyWrapper>
    </CookiePolicyContainer>
  );
};

export default CookiePolicy;