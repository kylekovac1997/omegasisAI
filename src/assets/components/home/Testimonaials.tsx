import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { theme } from '../../styles/theme';
// import AnimatedSection from '@/components/common/AnimatedSection';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar?: string;
  quote: string;
  rating: number;
}

const TestimonialsSection = styled.section`
  padding: ${theme.spacing['5xl']} 0;
  background: ${theme.colors.gradient.dark};
  color: ${theme.colors.white};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const TestimonialsContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${theme.spacing['3xl']};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  
  .highlight {
    color: ${theme.colors.tertiary};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.6;
  color: ${theme.colors.lightGray};
`;

const TestimonialsSlider = styled.div`
  position: relative;
  overflow: hidden;
  padding: ${theme.spacing.lg} 0;
`;

const SliderTrack = styled.div<{ $translateX: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${({ $translateX }) => $translateX}px);
`;

const TestimonialCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  margin: 0 ${theme.spacing.md};
  min-width: 350px;
  max-width: 350px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    min-width: 280px;
    max-width: 280px;
  }
`;

const QuoteIcon = styled.div`
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.tertiary};
  
  svg {
    width: 40px;
    height: 40px;
    opacity: 0.6;
  }
`;

const TestimonialQuote = styled.p`
  font-size: ${theme.typography.fontSize.md};
  line-height: 1.7;
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.white};
  min-height: 150px;
`;

const TestimonialRating = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};
  
  svg {
    width: 18px;
    height: 18px;
    color: ${theme.colors.warning};
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${theme.borderRadius.full};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h4`
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin: 0;
`;

const AuthorPosition = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray};
  margin: 0;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
`;

const SliderButton = styled.button<{ direction: 'prev' | 'next' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${theme.borderRadius.full};
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: ${theme.transitions.default};
  
  svg {
    width: 24px;
    height: 24px;
    color: ${theme.colors.white};
    transition: ${theme.transitions.default};
    transform: rotate(${({ direction }) => (direction === 'prev' ? '180deg' : '0deg')});
  }
  
  &:hover {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    
    svg {
      transform: translateX(${({ direction }) => (direction === 'prev' ? '-5px' : '5px')}) rotate(${({ direction }) => (direction === 'prev' ? '180deg' : '0deg')});
    }
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
      
      svg {
        transform: rotate(${({ direction }) => (direction === 'prev' ? '180deg' : '0deg')});
      }
    }
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.md};
`;

const SliderDot = styled.button<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${({ $active }) => ($active ? theme.colors.primary : 'rgba(255, 255, 255, 0.2)')};
  border: none;
  cursor: pointer;
  transition: ${theme.transitions.default};
  
  &:hover {
    background-color: ${({ $active }) => ($active ? theme.colors.primary : 'rgba(255, 255, 255, 0.4)')};
  }
`;

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'kyle',
    position: ' Director',
    company: 'KKFLOORING',
    avatar: '/src/assets/images/testimonials/avatar1.jpg',
    quote: 'The AI chatbot from OMEGASIS AI has completely transformed how we engage with customers. Response times have decreased by 80%, and customer satisfaction rates have soared.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    position: 'Owner',
    company: 'Kvatch',
    avatar: '/src/assets/images/testimonials/avatar2.jpg',
    quote: 'Implementing the AI Virtual Assistant for our online shopify store has increased our conversion rates by 45%. The personalized product recommendations are spot on!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    position: 'Owner',
    company: 'MicPlumbing',
    avatar: '/src/assets/images/testimonials/avatar3.jpg',
    quote: 'The  capabilities of OMEGASIS chatbots allowed us to expand  without hiring additional support staff. Our customers can now get 24/7.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Micheal Dellar',
    position: ' Director',
    company: 'DCK Electrical',
    avatar: '/src/assets/images/testimonials/avatar4.jpg',
    quote: "The 24/7 AI receptionist has completely streamlined our front desk. Calls are answered instantly, bookings are handled automatically, and our staff can now focus on delivering better service — it's like having a perfect employee who never sleeps.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Calculate number of visible cards based on screen width
  useEffect(() => {
    const calculateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    
    calculateCardsPerView();
    
    // Calculate slide width
    if (sliderRef.current) {
      const cardWidth = 350 + 16 * 2; // Card width + margins
      setSlideWidth(cardWidth);
    }
    
    window.addEventListener('resize', calculateCardsPerView);
    
    return () => {
      window.removeEventListener('resize', calculateCardsPerView);
    };
  }, []);
  
  // Animation for section elements
  useEffect(() => {
    if (sectionRef.current) {
      // Section header animation
      gsap.from('.testimonials-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
      
      // Testimonial cards animation
    //   gsap.from('.testimonial-card', {
    //     scrollTrigger: {
    //       trigger: sliderRef.current,
    //       start: 'top 80%',
    //     },
    //     // y: 50,
    //     // opacity: 0,
    //     // duration: 0.8,
    //     // stagger: 0.15,
    //     // ease: 'power3.out',
    //   });
      
      // Controls animation
      gsap.from('.slider-controls', {
        scrollTrigger: {
          trigger: '.slider-controls',
          start: 'top 90%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5,
      });
    }
  }, []);
  
  const totalSlides = testimonials.length - cardsPerView + 1;
  
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };
  
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : totalSlides - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <TestimonialRating>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={i < rating ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        ))}
      </TestimonialRating>
    );
  };
  
  return (
    <TestimonialsSection ref={sectionRef}>
      <TestimonialsContainer>
        <SectionHeader>
          <SectionTitle className="testimonials-header">
            What Our <span className="highlight">Clients</span> Say
          </SectionTitle>
          <SectionSubtitle className="testimonials-header">
            Discover how our AI-powered solutions have helped businesses across various industries enhance their customer engagement and streamline operations.
          </SectionSubtitle>
        </SectionHeader>
        
        <TestimonialsSlider ref={sliderRef}>
          <SliderTrack $translateX={-currentSlide * slideWidth}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} className="testimonial-card">
                <QuoteIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>
                </QuoteIcon>
                <TestimonialQuote>"{testimonial.quote}"</TestimonialQuote>
                <StarRating rating={testimonial.rating} />
                <TestimonialAuthor>
                  {/* <AuthorAvatar>
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </AuthorAvatar> */}
                  <AuthorInfo>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorPosition>
                      {testimonial.position}, {testimonial.company}
                    </AuthorPosition>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </SliderTrack>
        </TestimonialsSlider>
        
        <SliderControls className="slider-controls">
          <SliderButton
            direction="prev"
            onClick={handlePrevSlide}
            disabled={currentSlide === 0}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </SliderButton>
          <SliderButton
            direction="next"
            onClick={handleNextSlide}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </SliderButton>
        </SliderControls>
        
        <SliderDots>
          {[...Array(totalSlides)].map((_, i) => (
            <SliderDot
              key={i}
              $active={i === currentSlide}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </SliderDots>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;