import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { theme } from '../../styles/theme';
import Button from './Button';

const NavbarContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${theme.zIndex.sticky};
  background-color: ${({ $isScrolled }) => ($isScrolled ? theme.colors.white : 'transparent')};
  box-shadow: ${({ $isScrolled }) => ($isScrolled ? theme.shadows.md : 'none')};
  transition: ${theme.transitions.default};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(10px)' : 'none')};
  padding: ${({ $isScrolled }) => ($isScrolled ? theme.spacing.sm : theme.spacing.md)} 0;
`;

const NavbarInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${theme.typography.fontFamily.secondary};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.dark};
  text-decoration: none;
  transition: ${theme.transitions.default};

  img {
    height: 40px;
    margin-right: ${theme.spacing.sm};
  }

  span.gradient {
    background: ${theme.colors.gradient.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? theme.colors.primary : theme.colors.gray)};
  text-decoration: none;
  font-weight: ${({ $isActive }) =>
    $isActive ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.medium};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  margin: 0 ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.md};
  transition: ${theme.transitions.default};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $isActive }) => ($isActive ? '30%' : '0')};
    height: 2px;
    background-color: ${theme.colors.primary};
    transition: ${theme.transitions.default};
    border-radius: ${theme.borderRadius.full};
  }

  &:hover {
    color: ${theme.colors.primary};

    &::after {
      width: 30%;
    }
  }
`;

const CTAButton = styled(Button)`
  margin-left: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const MobileMenuToggle = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  position: relative;
  z-index: ${theme.zIndex.dropdown + 10};

  @media (max-width: ${theme.breakpoints.lg}) {
    display: block;
  }

  .bar {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.tertiary};
    border-radius: ${theme.borderRadius.full};
    transition: ${theme.transitions.default};

    &:nth-child(1) {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none')};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
      margin: 6px 0;
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none')};
    }
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 350px;
  height: 100vh;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.xl};
  padding: ${theme.spacing['5xl']} ${theme.spacing.xl} ${theme.spacing.xl};
  z-index: ${theme.zIndex.dropdown};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;

  @media (max-width: ${theme.breakpoints.lg}) {
    display: block;
  }
`;

const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const MobileNavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? theme.colors.primary : theme.colors.dark)};
  text-decoration: none;
  font-weight: ${({ $isActive }) =>
    $isActive ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.medium};
  font-size: ${theme.typography.fontSize.lg};
  padding: ${theme.spacing.sm} 0;
  transition: ${theme.transitions.default};
  border-bottom: 1px solid ${theme.colors.lightGray};

  &:hover {
    color: ${theme.colors.primary};
    padding-left: ${theme.spacing.sm};
  }
`;

const MobileCTAButton = styled(Button)`
  margin-top: ${theme.spacing.xl};
`;

const Overlay = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${theme.zIndex.dropdown - 1};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  backdrop-filter: blur(5px);
`;

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (navbarRef.current) {
      gsap.from(navbarRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <>
      <NavbarContainer $isScrolled={isScrolled} ref={navbarRef}>
        <NavbarInner>
          <Logo to="/">
            <span className="gradient">OMEGASIS</span> <span className="gradient">-AI</span>
          </Logo>

          <NavLinks>
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} $isActive={pathname === link.path}>
                {link.name}
              </NavLink>
            ))}
          </NavLinks>

          <CTAButton variant="gradient" size="md" to="/contact">
            Get Started
          </CTAButton>

          <MobileMenuToggle
            $isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </MobileMenuToggle>
        </NavbarInner>
      </NavbarContainer>

      <MobileMenu $isOpen={isMenuOpen}>
        <MobileNavLinks>
          {navLinks.map((link) => (
            <MobileNavLink
              key={link.path}
              to={link.path}
              $isActive={pathname === link.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </MobileNavLink>
          ))}
        </MobileNavLinks>

        <MobileCTAButton
          variant="gradient"
          size="lg"
          to="/contact"
          fullWidth
          onClick={() => setIsMenuOpen(false)}
        >
          Get Started
        </MobileCTAButton>
      </MobileMenu>

      <Overlay $isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
