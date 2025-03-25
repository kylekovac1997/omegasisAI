import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    background-color: ${theme.colors.white};
    color: ${theme.colors.dark};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.secondary};
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: 1.2;
    margin-bottom: ${theme.spacing.md};
  }

  h1 {
    font-size: ${theme.typography.fontSize['4xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize['3xl']};
    }
  }

  h2 {
    font-size: ${theme.typography.fontSize['3xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize['2xl']};
    }
  }

  h3 {
    font-size: ${theme.typography.fontSize['2xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize.xl};
    }
  }

  h4 {
    font-size: ${theme.typography.fontSize.xl};
  }

  h5 {
    font-size: ${theme.typography.fontSize.lg};
  }

  h6 {
    font-size: ${theme.typography.fontSize.md};
  }

  p {
    margin-bottom: ${theme.spacing.md};
    font-size: ${theme.typography.fontSize.base};
    line-height: 1.7;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: ${theme.transitions.default};
    
    &:hover {
      color: ${theme.colors.secondary};
    }
  }

  img, svg {
    max-width: 100%;
    height: auto;
  }

  button, input, textarea, select {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    line-height: 1.5;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  ul, ol {
    margin-bottom: ${theme.spacing.md};
    padding-left: ${theme.spacing.xl};
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.lightGray};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray};
    border-radius: ${theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.darkSecondary};
  }

  /* Selection color */
  ::selection {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  /* Container classes */
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.lg};
    
    @media (max-width: ${theme.breakpoints.md}) {
      padding: 0 ${theme.spacing.md};
    }
  }

  .section {
    padding: ${theme.spacing['5xl']} 0;
    
    @media (max-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing['3xl']} 0;
    }
  }

  /* Utility classes */
  .text-center {
    text-align: center;
  }

  .text-gradient-primary {
    background: ${theme.colors.gradient.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-gradient-secondary {
    background: ${theme.colors.gradient.secondary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default GlobalStyles;