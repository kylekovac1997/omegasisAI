import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { theme } from '../../styles/theme';
import Button from '../../components/common/Button';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
  padding: ${theme.spacing['4xl']} 0;
  background-color: ${theme.colors.white};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, ${theme.typography.fontSize['4xl']});
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.dark};

  .highlight {
    color: ${theme.colors.primary};
  }
`;

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray};
  max-width: 800px;
  margin: 0 auto;
`;

const Banner = styled.section`
  margin: ${theme.spacing['4xl']} 0;
  padding: ${theme.spacing['3xl']};
  background: ${theme.colors.gradient.primary};
  border-radius: ${theme.borderRadius.xl};
  color: ${theme.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing['3xl']};
`;

const FeatureCard = styled.div`
  background: ${theme.colors.white};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const FeatureTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.dark};
  margin-bottom: ${theme.spacing.sm};
`;

const FeatureDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.dark};
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
`;

const CTASection = styled.section`
  text-align: center;
  margin-top: ${theme.spacing['4xl']};
`;

const CTAHeading = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.dark};
  margin-bottom: ${theme.spacing.md};
`;

const CTADescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray};
  margin-bottom: ${theme.spacing.xl};
`;

const SMSEmailAutomation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.from(sectionRef.current.querySelectorAll('.fade-in'), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Wrapper ref={sectionRef}>
      <Container>
        <Header>
          <Title className="fade-in">
            AI-Powered <span className="highlight">SMS & Email Automation</span>
          </Title>
          <Subtitle className="fade-in">
            Streamline your customer communication with smart, behavior-driven automation.
          </Subtitle>
        </Header>

        <Banner className="fade-in">
          <h2>Communicate Smarter</h2>
          <p>
            Our automation platform sends timely, personalized messages based on customer behavior, improving engagement and saving you time.
          </p>
        </Banner>

        <SectionTitle className="fade-in">
          Key <span className="highlight">Features</span>
        </SectionTitle>

        <FeaturesGrid>
          <FeatureCard className="fade-in">
            <FeatureTitle>Behavior Triggers</FeatureTitle>
            <FeatureDescription>
              Send messages based on user actions like sign-ups, purchases, or inactivity.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard className="fade-in">
            <FeatureTitle>Scheduled Campaigns</FeatureTitle>
            <FeatureDescription>
              Plan campaigns in advance and deliver them at optimal times.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard className="fade-in">
            <FeatureTitle>Dynamic Personalization</FeatureTitle>
            <FeatureDescription>
              Personalize messages using user data, preferences, and activity history.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard className="fade-in">
            <FeatureTitle>Multi-Channel Support</FeatureTitle>
            <FeatureDescription>
              Send messages via SMS and email in one seamless platform.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard className="fade-in">
            <FeatureTitle>AI-Driven Insights</FeatureTitle>
            <FeatureDescription>
              Analyze performance and optimize campaigns automatically.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard className="fade-in">
            <FeatureTitle>Smart Replies</FeatureTitle>
            <FeatureDescription>
              Auto-respond to common queries with contextual AI responses.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>

        <CTASection className="fade-in">
          <CTAHeading>Get Started with Automation</CTAHeading>
          <CTADescription>
            Experience the power of personalized AI messaging. Engage your customers like never before.
          </CTADescription>
          <Button variant="gradient" size="lg" to="/contact">
            Talk to Us
          </Button>
        </CTASection>
      </Container>
    </Wrapper>
  );
};

export default SMSEmailAutomation;
