import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { scrollAnimations } from '../../utils/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  animation?: 'fadeIn' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn' | 'staggered' | 'none';
  delay?: number;
  threshold?: string;
  tag?: keyof JSX.IntrinsicElements;
  staggerChildren?: string;
  staggerDelay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className,
  animation = 'fadeIn',
  delay = 0,
  threshold = 'top 80%',
  tag = 'div',
  staggerChildren,
  staggerDelay = 0.1,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const childrenRefs = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Clear any previously set timeout
    const timeoutId = setTimeout(() => {
      // Apply animation based on type
      switch (animation) {
        case 'fadeIn':
          scrollAnimations.fadeInOnScroll(sectionRef.current!, threshold);
          break;
        case 'fadeInLeft':
          scrollAnimations.fadeInLeftOnScroll(sectionRef.current!, threshold);
          break;
        case 'fadeInRight':
          scrollAnimations.fadeInRightOnScroll(sectionRef.current!, threshold);
          break;
        case 'zoomIn':
          scrollAnimations.zoomInOnScroll(sectionRef.current!, threshold);
          break;
        case 'staggered':
          if (staggerChildren && childrenRefs.current.length > 0) {
            // Filter out null refs
            const validRefs = childrenRefs.current.filter(ref => ref !== null) as HTMLElement[];
            scrollAnimations.staggerFadeInOnScroll(validRefs, staggerDelay, threshold);
          } else {
            // Fallback to regular fade in if no children refs
            scrollAnimations.fadeInOnScroll(sectionRef.current!, threshold);
          }
          break;
        case 'none':
        default:
          // No animation
          break;
      }
    }, delay);

    // Cleanup
    return () => clearTimeout(timeoutId);
  }, [animation, delay, threshold, staggerChildren, staggerDelay]);
  
  // Collect refs for children if using staggered animation
  useEffect(() => {
    if (animation === 'staggered' && staggerChildren) {
      if (sectionRef.current) {
        const childElements = sectionRef.current.querySelectorAll(staggerChildren);
        childrenRefs.current = Array.from(childElements) as HTMLElement[];
      }
    }
  }, [animation, staggerChildren, children]);
  
  // Dynamically render the specified HTML tag
  const SectionTag = styled(tag)<{ className?: string }>``;
  
  return (
    <SectionTag
      ref={sectionRef}
      id={id}
      className={className}
    >
      {children}
    </SectionTag>
  );
};

export default AnimatedSection;