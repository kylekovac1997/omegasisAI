import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { initAnimations } from '../../utils/animations';

interface LayoutProps {
  children: React.ReactNode;
}

const Main = styled.main`
  min-height: 100vh;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  // Initialize animations
  useEffect(() => {
    initAnimations();
  }, []);
  
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;