import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { theme } from '../../styles/theme';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  variant?: 'light' | 'dark' | 'gradient';
  animationDelay?: number;
  className?: string;
}

const CardContainer = styled.div<{ $variant: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  transition: ${theme.transitions.default};
  height: 100%;

  ${({ $variant }) => {
    switch ($variant) {
      case 'dark':
        return `
          background-color: ${theme.colors.dark};
          color: ${theme.colors.white};
          box-shadow: ${theme.shadows.lg};
        `;
      case 'gradient':
        return `
          background: ${theme.colors.gradient.primary};
          color: ${theme.colors.white};
          box-shadow: ${theme.shadows.lg};
        `;
      case 'light':
        return `
          background-color: ${theme.colors.white};
          color: ${theme.colors.dark};
          border: 1px solid ${theme.colors.lightGray};
          box-shadow: ${theme.shadows.md};
        `;
      default:
        return `
          background-color: ${theme.colors.white};
          color: ${theme.colors.dark};
          border: 1px solid ${theme.colors.lightGray};
          box-shadow: ${theme.shadows.md};
        `;
    }
  }}

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.shadows.xl};

    .icon-wrapper {
      transform: scale(1.1) rotate(5deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 90% 10%, rgba(255, 255, 255, 0.1) 0%, transparent 40%);
    pointer-events: none;
  }
`;

const IconWrapper = styled.div<{ $variant: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: ${theme.borderRadius.full};
  margin-bottom: ${theme.spacing.lg};
  transition: ${theme.transitions.default};

  ${({ $variant }) => {
    switch ($variant) {
      case 'dark':
        return `
          background-color: ${theme.colors.darkSecondary};
          color: ${theme.colors.tertiary};
        `;
      case 'gradient':
        return `
          background-color: rgba(255, 255, 255, 0.2);
          color: ${theme.colors.white};
        `;
      case 'light':
      default:
        return `
          background-color: ${theme.colors.lightGray};
          color: ${theme.colors.primary};
        `;
    }
  }}

  svg {
    width: 40px;
    height: 40px;
  }
`;

const Title = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
`;

const Description = styled.p`
  font-size: ${theme.typography.fontSize.base};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.xl};
  flex-grow: 1;
`;

const CardFooter = styled.div`
  margin-top: auto;
`;

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  path,
  variant = 'light',
  animationDelay = 0,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.set(cardRef.current, { opacity: 0, y: 50 });

      gsap.to(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: animationDelay,
        ease: 'power3.out',
      });
    }
  }, [animationDelay]);

  return (
    <CardContainer $variant={variant} ref={cardRef} className={className}>
      <IconWrapper $variant={variant} className="icon-wrapper">
        {icon}
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CardFooter>
        <Button
          variant={variant === 'light' ? 'primary' : 'outline'}
          size="md"
          to={path}
        >
          Learn More
        </Button>
      </CardFooter>
    </CardContainer>
  );
};

export default ServiceCard;
