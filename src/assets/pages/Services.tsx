import React, { useRef, useEffect, useState, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet-async';
import { theme } from '../styles/theme';
import { SERVICE_IDS } from '../types/service';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Define interfaces
interface ServiceRobot {
  id: string;
  title: string;
  description: string;
  color: string;
  darkColor: string;
  robotType: 'messenger' | 'analyst' | 'shopping' | 'translator' | 'engineer' | 'social';
  icon: ReactNode;
  features: {
    antennaType: string;
    eyeShape: string;
    mouthType: string;
    bodyShape: string;
  };
}

interface CyberneticRobotProps {
  robotData: ServiceRobot;
  isActive: boolean;
}

interface RobotCardProps {
  borderColor?: string;
  glowColor?: string;
  active?: boolean;
}

interface RobotHeadContainerProps {
  colorStart?: string;
  colorEnd?: string;
  scanColor?: string;
}

interface RobotInfoContainerProps {
  accentColor?: string;
}

interface RobotTitleProps {
  glowColor?: string;
  underlineColor?: string;
}

interface ActionButtonProps {
  colorStart?: string;
  colorEnd?: string;
  glowColor?: string;
}

// SVG Icons (keeping the original ones)
const SmsEmailIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LeadQualificationIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const EcommerceIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const MultilingualIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8h14M5 12h14M5 16h6"></path>
    <circle cx="18" cy="16" r="2"></circle>
    <path d="M12 3v18"></path>
  </svg>
);

const CustomDevIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const SocialMediaIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

// NEW Cybernetic Animation Keyframes
const CyberneticKeyframes = `
  @keyframes glitch {
    0% {
      clip-path: inset(40% 0 61% 0);
      transform: translate(-20px, -10px);
    }
    20% {
      clip-path: inset(92% 0 1% 0);
      transform: translate(20px, 10px);
    }
    40% {
      clip-path: inset(43% 0 1% 0);
      transform: translate(-20px, -10px);
    }
    60% {
      clip-path: inset(25% 0 58% 0);
      transform: translate(20px, 10px);
    }
    80% {
      clip-path: inset(54% 0 7% 0);
      transform: translate(-20px, -10px);
    }
    100% {
      clip-path: inset(58% 0 43% 0);
      transform: translate(20px, 10px);
    }
  }

  @keyframes scanUp {
    0% {
      height: 0;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    95% {
      height: 100%;
      opacity: 1;
    }
    100% {
      height: 100%;
      opacity: 0;
    }
  }

  @keyframes circuitPulse {
    0%, 100% {
      opacity: 0.2;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
  }

  @keyframes dataFlow {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  @keyframes borderGlow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3), inset 0 0 5px rgba(0, 255, 255, 0.5);
    }
    50% {
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 10px rgba(0, 255, 255, 0.8);
    }
  }

  @keyframes neonFlicker {
    0%, 100% {
      opacity: 1;
    }
    41% {
      opacity: 1;
    }
    42% {
      opacity: 0.8;
    }
    43% {
      opacity: 1;
    }
    45% {
      opacity: 0.3;
    }
    46% {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes waveform {
    0% {
      height: 5px;
    }
    50% {
      height: 20px;
    }
    100% {
      height: 5px;
    }
  }

  @keyframes rotateHue {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

// Redesigned Styled Components
const ServicesPageWrapper = styled.div`
  padding-top: 100px;
  background-color: #050510;
  color: #e0e0ff;
`;

const ServicesHero = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background: linear-gradient(135deg, #0f0f20, #1a1a35);
  color: #e0e0ff;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,15 L15,0 L30,15 L15,30 Z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E");
    z-index: 0;
  }
`;

const ServicesContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const ServicesTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, ${theme.typography.fontSize['4xl']});
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  text-align: center;
  color: #f0f0ff;
  text-shadow: 0 0 10px rgba(120, 120, 255, 0.5);
  position: relative;
  
  &::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: #00ffff;
    opacity: 0.8;
    z-index: -1;
    filter: blur(3px);
  }
`;

const ServicesSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  color: #c0c0ff;
`;

const ServicesContent = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(0, 30, 120, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(120, 0, 120, 0.2) 0%, transparent 50%);
    pointer-events: none;
  }
`;

// New Robot Grid Layout instead of Carousel
const RobotGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  perspective: 2000px;
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
`;

const RobotCard = styled.div<RobotCardProps>`
  position: relative;
  height: 380px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  background: linear-gradient(135deg, #151530, #0a0a20);
  border: 2px solid transparent;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(50px);
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: ${props => props.borderColor || '#00ffff'};
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 15px ${props => props.glowColor || 'rgba(0, 255, 255, 0.5)'};
    
    .circuit-pattern {
      opacity: 0.3;
    }
    
    .robot-head-container::after {
      opacity: 1;
    }
    
    .robot-info {
      transform: translateY(0);
    }
  }
  
  &.active {
    border-color: ${props => props.borderColor || '#00ffff'};
    animation: borderGlow 2s infinite;
    
    .circuit-pattern {
      opacity: 0.3;
      animation: circuitPulse 4s infinite;
    }
  }
`;

const CircuitPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10,10 L90,10 M10,30 L40,30 M60,30 L90,30 M10,50 L30,50 M70,50 L90,50 M10,70 L50,70 M50,70 L50,90 M70,70 L90,70 M10,90 L30,90 M50,90 L90,90 M30,10 L30,30 M70,10 L70,30 M90,30 L90,70' stroke='%2300ffff' stroke-width='1' fill='none' /%3E%3C/svg%3E");
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 1;
`;

const RobotHeadContainer = styled.div<RobotHeadContainerProps>`
  height: 65%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${props => `linear-gradient(to bottom, ${props.colorStart || '#151530'}, ${props.colorEnd || '#0a0a20'})`};
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15px;
    background: linear-gradient(90deg, transparent, ${props => props.scanColor || '#00ffff'}, transparent);
    opacity: 0.5;
    transform: translateY(-100%);
    animation: scanUp 3s linear infinite;
    pointer-events: none;
    opacity: 0.7;
    transition: opacity 0.5s ease;
  }
`;

const RobotInfoContainer = styled.div<RobotInfoContainerProps>`
  position: relative;
  height: 35%;
  background: linear-gradient(to bottom, #0a0a15, #151525);
  padding: 1rem;
  color: #f0f0ff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border-top: 1px solid rgba(0, 255, 255, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${props => props.accentColor || '#00ffff'}, transparent);
    animation: dataFlow 3s linear infinite;
    background-size: 200% 100%;
  }
`;

const RobotTitle = styled.h3<RobotTitleProps>`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: 0.5rem;
  position: relative;
  color: #f0f0ff;
  text-shadow: 0 0 5px ${props => props.glowColor || 'rgba(0, 255, 255, 0.5)'};
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 40px;
    height: 2px;
    background-color: ${props => props.underlineColor || '#00ffff'};
  }
`;

const RobotDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: #a0a0c0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ActionButton = styled.button<ActionButtonProps>`
  background: ${props => `linear-gradient(90deg, ${props.colorStart || '#00ffff'}50, ${props.colorEnd || '#00ffff'})`};
  color: #050510;
  border: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-radius: 4px;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: ${theme.typography.fontSize.sm};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px ${props => props.glowColor || 'rgba(0, 255, 255, 0.7)'};
  }
`;

// Cybernetic Robot Component
const CyberneticRobot: FC<CyberneticRobotProps> = ({ robotData, isActive }) => {
  const { color, darkColor, title, features } = robotData;
  
  return (
    <div style={{
      width: '160px',
      height: '160px',
      position: 'relative',
      margin: '0 auto'
    }}>
      {/* Robot Core Structure */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Head Core - Geometric Shape based on robot type */}
        <div style={{
          width: '80px',
          height: '80px',
          background: `linear-gradient(135deg, ${color}dd, ${darkColor})`,
          boxShadow: isActive ? `0 0 20px ${color}80` : `0 0 10px ${color}40`,
          position: 'relative',
          clipPath: getRobotShape(robotData.robotType),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '15px',
          transition: 'transform 0.3s ease'
        }}>
          {/* Central Core */}
          <div style={{
            width: '40px',
            height: '40px',
            background: '#0a0a15',
            clipPath: getRobotCoreShape(robotData.robotType),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Energy Core */}
            <div style={{
              width: '20px',
              height: '20px',
              background: color,
              borderRadius: '50%',
              boxShadow: `0 0 10px ${color}`
            }}></div>
            
            {/* Data Points based on robotType */}
            {renderDataPoints(robotData, color, isActive)}
          </div>
          
          {/* Interface Lines */}
          {renderInterfaceLines(robotData, color, isActive)}
        </div>
        
        {/* Lower Structure */}
        <div style={{
          width: '120px',
          height: '40px',
          background: `linear-gradient(to bottom, ${darkColor}, #0a0a15)`,
          position: 'relative',
          clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
          padding: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Status Indicators */}
          <div style={{
            width: '80%',
            height: '3px',
            background: '#151525',
            position: 'relative',
            overflow: 'hidden',
            marginTop: '3px'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: isActive ? '80%' : '30%',
              background: `linear-gradient(90deg, ${darkColor}, ${color})`,
              transition: 'width 0.5s ease'
            }}></div>
          </div>
          
          {/* Data Port */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4px',
            marginBottom: '3px'
          }}>
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{
                width: '4px',
                height: '12px',
                background: isActive && i % 2 === 0 ? color : '#151525',
                opacity: isActive ? 1 : 0.6
              }}></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Orbiting Elements */}
      {isActive && renderOrbitingElements(robotData, color)}
    </div>
  );
};

// Helper function to get robot shape based on type
const getRobotShape = (robotType: string): string => {
  switch (robotType) {
    case 'messenger':
      return 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)';
    case 'analyst':
      return 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)';
    case 'shopping':
      return 'circle(50% at 50% 50%)';
    case 'translator':
      return 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
    case 'engineer':
      return 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
    case 'social':
      return 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)';
    default:
      return 'circle(50% at 50% 50%)';
  }
};

const getRobotCoreShape = (robotType: string): string => {
  switch (robotType) {
    case 'messenger':
      return 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)';
    case 'analyst':
      return 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
    case 'shopping':
      return 'circle(50% at 50% 50%)';
    case 'translator':
      return 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
    case 'engineer':
      return 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)';
    case 'social':
      return 'circle(50% at 50% 50%)';
    default:
      return 'circle(50% at 50% 50%)';
  }
};

const renderDataPoints = (robotData: ServiceRobot, color: string, isActive: boolean): JSX.Element | null => {
  const { robotType } = robotData;
  
  switch (robotType) {
    case 'messenger':
      return (
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              backgroundColor: isActive ? color : '#333',
              borderRadius: '50%',
              top: `${10 + i * 10}px`,
              left: `${i % 2 === 0 ? 10 : 26}px`
            }}></div>
          ))}
        </div>
      );
    case 'analyst':
      return (
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '6px',
          top: '17px',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 5px'
        }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{
              width: '3px',
              height: isActive ? `${3 + i * 1}px` : '3px',
              backgroundColor: isActive ? color : '#333'
            }}></div>
          ))}
        </div>
      );
    case 'shopping':
      return (
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}>
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '16px',
            height: '2px',
            background: isActive ? color : '#333'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '16px',
            height: '2px',
            background: isActive ? color : '#333'
          }}></div>
        </div>
      );
    default:
      return null;
  }
};

const renderInterfaceLines = (robotData: ServiceRobot, color: string, isActive: boolean): JSX.Element | null => {
  const { robotType, features } = robotData;
  
  switch (robotType) {
    case 'messenger':
      return (
        <>
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            width: '60px',
            height: '1px',
            background: isActive ? color : '#333',
            transform: 'rotate(45deg)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            width: '60px',
            height: '1px',
            background: isActive ? color : '#333',
            transform: 'rotate(45deg)'
          }}></div>
        </>
      );
    case 'analyst':
      return (
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}>
          <div style={{
            position: 'absolute',
            top: '15px',
            left: '0',
            width: '100%',
            height: '1px',
            background: isActive ? `${color}80` : '#33333380'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '0',
            width: '100%',
            height: '1px',
            background: isActive ? `${color}80` : '#33333380'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '65px',
            left: '0',
            width: '100%',
            height: '1px',
            background: isActive ? `${color}80` : '#33333380'
          }}></div>
        </div>
      );
    case 'social':
      return (
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              top: `${20 + i * 20}px`,
              left: '5px',
              width: '70px',
              height: '1px',
              background: isActive ? `${color}80` : '#33333380'
            }}></div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

const renderOrbitingElements = (robotData: ServiceRobot, color: string): JSX.Element => {
  const { robotType } = robotData;
  
  return (
    <div style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none'
    }}>
      <div style={{
        position: 'absolute',
        width: '8px',
        height: '8px',
        backgroundColor: color,
        borderRadius: '50%',
        top: '10%',
        left: '80%',
        boxShadow: `0 0 10px ${color}`
      }}></div>
      <div style={{
        position: 'absolute',
        width: '5px',
        height: '5px',
        backgroundColor: color,
        borderRadius: '50%',
        top: '80%',
        left: '20%',
        boxShadow: `0 0 8px ${color}`
      }}></div>
      {robotType === 'analyst' && (
        <div style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          top: '40%',
          left: '85%',
          background: 'transparent',
          border: `1px solid ${color}`,
          transform: 'rotate(45deg)'
        }}></div>
      )}
      {robotType === 'social' && (
        <div style={{
          position: 'absolute',
          width: '30px',
          height: '1px',
          top: '65%',
          left: '80%',
          background: color,
          transform: 'rotate(-45deg)'
        }}></div>
      )}
    </div>
  );
};

// Robot Grid Component (replaces carousel)
const RobotGrid: FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const robotsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    robotsRef.current = robotsRef.current.slice(0, serviceRobots.length);
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.robot-card');
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }
    return () => {
      gsap.killTweensOf('.robot-card');
    };
  }, []);

  const handleCardClick = (index: number): void => {
    setActiveIndex(index);
    navigate(`/services/${serviceRobots[index].id}`);
  };

  return (
    <RobotGridContainer ref={gridRef}>
      {serviceRobots.map((robot, index) => {
        const isActive = index === activeIndex;
        return (
          <RobotCard
            key={robot.id}
            className={`robot-card ${isActive ? 'active' : ''}`}
            ref={el => robotsRef.current[index] = el}
            onClick={() => handleCardClick(index)}
            borderColor={robot.color}
            glowColor={`${robot.color}80`}
          >
            <CircuitPattern className="circuit-pattern" />
            <RobotHeadContainer 
              colorStart={robot.darkColor} 
              colorEnd="#0a0a15"
              scanColor={robot.color}
              className="robot-head-container"
            >
              <CyberneticRobot 
                robotData={robot} 
                isActive={isActive}
              />
            </RobotHeadContainer>
            <RobotInfoContainer 
              className="robot-info"
              accentColor={robot.color}
            >
              <div>
                <RobotTitle 
                  glowColor={`${robot.color}80`}
                  underlineColor={robot.color}
                >
                  {robot.title}
                </RobotTitle>
                <RobotDescription>
                  {robot.description}
                </RobotDescription>
              </div>
              <ActionButton
                colorStart={robot.color}
                colorEnd={robot.darkColor}
                glowColor={`${robot.color}80`}
              >
                Learn More
              </ActionButton>
            </RobotInfoContainer>
          </RobotCard>
        );
      })}
    </RobotGridContainer>
  );
};


// Restyled Advantage Section
const AdvantagesSection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background: linear-gradient(135deg, #0a0a20, #151525);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.5), transparent);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(0, 30, 120, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(120, 0, 120, 0.1) 0%, transparent 50%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L60,0 L60,60 L0,60 Z' fill='none' stroke='%23304060' stroke-width='0.5' stroke-opacity='0.1' /%3E%3C/svg%3E");
    z-index: 0;
  }
`;

const AdvantagesTitle = styled.h2`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.xl};
  text-align: center;
  color: #f0f0ff;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 10px rgba(120, 120, 255, 0.5);
  
  .highlight {
    color: #00ffff;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: #00ffff;
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    }
  }
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.xl};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const AdvantageCard = styled.div`
  background: linear-gradient(135deg, #151525, #0a0a20);
  border-radius: 8px;
  padding: ${theme.spacing.xl};
  text-align: center;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  border: 1px solid rgba(0, 255, 255, 0.1);
  overflow: hidden;
  opacity: 1;
  transform: translateY(50px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent, rgba(0, 255, 255, 0.05), transparent);
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(0, 255, 255, 0.3);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 255, 255, 0.1);
    
    &::before {
      opacity: 1;
    }
    
    .advantage-icon {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 255, 255, 0.5);
    }
  }
`;

const AdvantageIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: linear-gradient(135deg, #0a0a20, #151525);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing.md};
  border: 1px solid rgba(0, 255, 255, 0.3);
  position: relative;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent, rgba(0, 255, 255, 0.2));
    opacity: 0.5;
    border-radius: 8px;
  }
  
  svg {
    width: 30px;
    height: 30px;
    color: #00ffff;
    filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.5));
  }
`;

const AdvantageTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.sm};
  color: #f0f0ff;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background-color: #00ffff;
  }
`;

const AdvantageDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: #a0a0c0;
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  text-align: center;
  background: linear-gradient(135deg, #151530, #0a0a20);
  color: #f0f0ff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L40,0 L40,40 L0,40 Z' fill='none' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.03' /%3E%3C/svg%3E");
    z-index: 0;
  }
`;

const CTATitle = styled.h2`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  position: relative;
  z-index: 1;
  color: #f0f0ff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
`;

const CTADescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  margin-bottom: ${theme.spacing.xl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  color: #c0c0e0;
`;

const CTAButton = styled.button`
  position: relative;
  z-index: 1;
  background: linear-gradient(90deg, #00ffff, #0080ff);
  color: #050510;
  border: none;
  padding: 1rem 2rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: ${theme.typography.fontSize.lg};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5), 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
`;

// Service data with robot features
const serviceRobots: ServiceRobot[] = [
  {
    id: SERVICE_IDS.SMS_EMAIL,
    title: "AI-Powered SMS & Email Automation",
    description: "Automate customer communication through smart SMS and email campaigns triggered based on user behavior.",
    color: "#4F46E5",
    darkColor: "#3730A3",
    robotType: "messenger",
    icon: <SmsEmailIcon />,
    features: {
      antennaType: "satellite-dish",
      eyeShape: "rectangular",
      mouthType: "speaker",
      bodyShape: "slim"
    }
  },
  {
    id: SERVICE_IDS.LEAD_QUALIFICATION,
    title: "AI Lead Qualification & CRM Integration",
    description: "Automatically qualify leads through intelligent conversations and sync data with your CRM.",
    color: "#7C3AED",
    darkColor: "#5B21B6",
    robotType: "analyst",
    icon: <LeadQualificationIcon />,
    features: {
      antennaType: "dual",
      eyeShape: "scanner",
      mouthType: "graph",
      bodyShape: "square"
    }
  },
  {
    id: SERVICE_IDS.ECOMMERCE,
    title: "AI Virtual Assistant for E-Commerce",
    description: "A 24/7 smart assistant for online stores that answers inquiries and recommends products.",
    color: "#EC4899",
    darkColor: "#BE185D",
    robotType: "shopping",
    icon: <EcommerceIcon />,
    features: {
      antennaType: "heart",
      eyeShape: "round",
      mouthType: "smile",
      bodyShape: "rounded"
    }
  },
  {
    id: SERVICE_IDS.MULTILINGUAL,
    title: "Multilingual AI Chatbots",
    description: "Serve global audiences with AI chatbots that speak multiple languages for inclusive support.",
    color: "#10B981",
    darkColor: "#047857",
    robotType: "translator",
    icon: <MultilingualIcon />,
    features: {
      antennaType: "globe",
      eyeShape: "multiple",
      mouthType: "sound-wave",
      bodyShape: "international"
    }
  },
  {
    id: SERVICE_IDS.CUSTOM,
    title: "Custom AI Chatbot Development",
    description: "Tailor-made chatbot solutions for your specific business needs, from booking systems to support workflows.",
    color: "#F59E0B",
    darkColor: "#B45309",
    robotType: "engineer",
    icon: <CustomDevIcon />,
    features: {
      antennaType: "tool",
      eyeShape: "technical",
      mouthType: "grid",
      bodyShape: "mechanical"
    }
  },
  {
    id: SERVICE_IDS.SOCIAL_MEDIA,
    title: "Social Media Automation & AI Chatbots",
    description: "Automate social media engagement with AI that responds to messages and comments across platforms.",
    color: "#3B82F6",
    darkColor: "#1D4ED8",
    robotType: "social",
    icon: <SocialMediaIcon />,
    features: {
      antennaType: "network",
      eyeShape: "camera",
      mouthType: "emoji",
      bodyShape: "modern"
    }
  }
];

// Updated Main Services Component
const Services: FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!pageRef.current) return;
    
    // Title entrance animation
    gsap.from('.services-hero-text', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });
    
    // Advantage cards animation
    gsap.from('.advantage-card', {
      scrollTrigger: {
        trigger: '.advantages-grid',
        start: 'top 80%',
      },
      opacity: 1,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    });
    
    // CTA section animation
    gsap.from('.cta-element', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });
    
    return () => {
      // Cleanup scrollTriggers
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);
  
  return (
    <ServicesPageWrapper ref={pageRef}>
      <Helmet>
        <title>Our Services | OMEGASIS AI</title>
        <meta name="description" content="Explore our comprehensive suite of AI-powered communication solutions including chatbots, automation, lead qualification, and custom AI development." />
        <style>
          {CyberneticKeyframes}
        </style>
      </Helmet>
      
      <ServicesHero>
        <ServicesContainer>
          <ServicesTitle 
            className="services-hero-text"
            data-text="Our AI Solutions"
          >
            Our AI Solutions
          </ServicesTitle>
          <ServicesSubtitle className="services-hero-text">
            Discover our comprehensive suite of AI-powered communication solutions designed to transform your business operations and customer engagement.
          </ServicesSubtitle>
        </ServicesContainer>
      </ServicesHero>
      
      <ServicesContent>
        <ServicesContainer>
          <RobotGrid />
        </ServicesContainer>
      </ServicesContent>
      
      <AdvantagesSection>
        <ServicesContainer>
          <AdvantagesTitle>
            Why Choose <span className="highlight">OMEGASIS AI</span> Solutions
          </AdvantagesTitle>
          
          <AdvantagesGrid className="advantages-grid">
            <AdvantageCard className="advantage-card">
              <AdvantageIcon className="advantage-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </AdvantageIcon>
              <AdvantageTitle>24/7 Availability</AdvantageTitle>
              <AdvantageDescription>
                Our AI solutions work around the clock, providing support and information to your customers even when your team is offline.
              </AdvantageDescription>
            </AdvantageCard>
            
            <AdvantageCard className="advantage-card">
              <AdvantageIcon className="advantage-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </AdvantageIcon>
              <AdvantageTitle>Advanced AI Technology</AdvantageTitle>
              <AdvantageDescription>
                Powered by cutting-edge AI and natural language processing for human-like conversations and continuous improvement.
              </AdvantageDescription>
            </AdvantageCard>
            
            <AdvantageCard className="advantage-card">
              <AdvantageIcon className="advantage-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
                  <line x1="23" y1="13" x2="23" y2="11"></line>
                </svg>
              </AdvantageIcon>
              <AdvantageTitle>Cost Efficiency</AdvantageTitle>
              <AdvantageDescription>
                Significantly reduce operational costs while handling a higher volume of inquiries and customer interactions.
              </AdvantageDescription>
            </AdvantageCard>
            
            <AdvantageCard className="advantage-card">
              <AdvantageIcon className="advantage-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </AdvantageIcon>
              <AdvantageTitle>Seamless Integration</AdvantageTitle>
              <AdvantageDescription>
                Our solutions integrate with your existing systems and workflows, providing a unified experience across all channels.
              </AdvantageDescription>
            </AdvantageCard>
          </AdvantagesGrid>
        </ServicesContainer>
      </AdvantagesSection>
      
      <CTASection className="cta-section">
        <ServicesContainer>
          <CTATitle className="cta-element">Ready to Transform Your Business?</CTATitle>
          <CTADescription className="cta-element">
            Let's discuss how our AI solutions can help you achieve your business goals and revolutionize your customer engagement strategy.
          </CTADescription>
          <CTAButton className="cta-element">
            Get Started Today
          </CTAButton>
        </ServicesContainer>
      </CTASection>
    </ServicesPageWrapper>
  );
};

export default Services;