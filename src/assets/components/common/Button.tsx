import React, { ButtonHTMLAttributes, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { theme } from '../../styles/theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'gradient';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  external?: boolean;
  fullWidth?: boolean;
  hasHoverEffect?: boolean;
  hasRippleEffect?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  className?: string;
}

const getButtonStyles = ($variant: ButtonVariant) => {
  switch ($variant) {
    case 'primary':
      return css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border: none;

        &:hover:not(:disabled) {
          background-color: ${theme.colors.secondary};
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.md};
        }
      `;
    case 'secondary':
      return css`
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.white};
        border: none;

        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary};
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.md};
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border: 2px solid ${theme.colors.primary};

        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          transform: translateY(-2px);
        }
      `;
    case 'text':
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border: none;
        padding: 0.5rem 1rem;

        &:hover:not(:disabled) {
          color: ${theme.colors.secondary};
          text-decoration: underline;
        }
      `;
    case 'gradient':
      return css`
        background: ${theme.colors.gradient.primary};
        color: ${theme.colors.white};
        border: none;

        &:hover:not(:disabled) {
          background: ${theme.colors.gradient.secondary};
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.md};
        }
      `;
    default:
      return css``;
  }
};

const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: ${theme.typography.fontSize.sm};
        padding: 0.5rem 1rem;
      `;
    case 'md':
      return css`
        font-size: ${theme.typography.fontSize.base};
        padding: 0.75rem 1.5rem;
      `;
    case 'lg':
      return css`
        font-size: ${theme.typography.fontSize.lg};
        padding: 1rem 2rem;
      `;
    default:
      return css``;
  }
};

const StyledButton = styled.button.attrs((props: any) => ({
  as: props.as || 'button',
}))<{
  $variant: ButtonVariant;
  size: ButtonSize;
  $fullWidth: boolean;
  $hasIcon: boolean;
  $iconPosition: 'left' | 'right';
  $hasHoverEffect: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: ${theme.typography.fontFamily.primary};
  font-weight: ${theme.typography.fontWeight.medium};
  border-radius: ${theme.borderRadius.md};
  transition: ${theme.transitions.default};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;

  ${({ $variant }) => getButtonStyles($variant)}
  ${({ size }) => getButtonSize(size)}

  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $iconPosition }) =>
    $iconPosition === 'right' &&
    css`
      flex-direction: row-reverse;
    `}

  ${({ $hasHoverEffect }) =>
    $hasHoverEffect &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.1);
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }

      &:hover::before {
        transform: translateX(0);
      }
    `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    transform: scale(0);
    pointer-events: none;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  external,
  fullWidth = false,
  hasHoverEffect = true,
  hasRippleEffect = true,
  icon,
  iconPosition = 'left',
  disabled = false,
  className,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!hasRippleEffect || !buttonRef.current) return;

    const button = buttonRef.current;

    const handleRipple = (e: MouseEvent) => {
      if (disabled) return;

      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      button.appendChild(ripple);

      gsap.to(ripple, {
        startAt: { scale: 0, opacity: 1 },
        scale: 4,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        onComplete: () => {
          ripple.remove();
        },
      });
    };

    button.addEventListener('mousedown', handleRipple);
    return () => button.removeEventListener('mousedown', handleRipple);
  }, [hasRippleEffect, disabled]);

  const buttonContent = (
    <>
      {icon && <span className="icon">{icon}</span>}
      {children && <span className="text">{children}</span>}
    </>
  );

  const commonProps = {
    $variant: variant,
    size,
    $fullWidth: fullWidth,
    $hasIcon: !!icon,
    $iconPosition: iconPosition,
    $hasHoverEffect: hasHoverEffect,
    className,
    disabled,
    ref: buttonRef as any,
    ...props,
  };

  if (to) {
    return external ? (
      <StyledButton as="a" href={to} target="_blank" rel="noopener noreferrer" {...commonProps}>
        {buttonContent}
      </StyledButton>
    ) : (
      <StyledButton as={Link} to={to} {...commonProps}>
        {buttonContent}
      </StyledButton>
    );
  }

  return <StyledButton {...commonProps}>{buttonContent}</StyledButton>;
};

export default Button;
