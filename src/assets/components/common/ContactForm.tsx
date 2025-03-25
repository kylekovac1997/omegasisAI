import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { gsap } from 'gsap';
import { theme } from '../../styles/theme';
import Button from './Button';
import { animations } from '../../utils/animations';

interface FormValues {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const FormContainer = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: ${theme.colors.gradient.primary};
  }
`;

const FormTitle = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  text-align: center;
`;

const FormSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.md};
  color: ${theme.colors.gray};
  margin-bottom: ${theme.spacing.xl};
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const FormLabel = styled.label`
  display: block;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.dark};
`;

const FormInput = styled(Field)`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  transition: ${theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(1, 71, 255, 0.1);
  }
  
  &::placeholder {
    color: ${theme.colors.gray};
    opacity: 0.7;
  }
`;

const FormSelect = styled(Field)`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  transition: ${theme.transitions.default};
  background-color: ${theme.colors.white};
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%238A94A6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(1, 71, 255, 0.1);
  }
`;

const FormTextarea = styled(Field)`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  transition: ${theme.transitions.default};
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(1, 71, 255, 0.1);
  }
  
  &::placeholder {
    color: ${theme.colors.gray};
    opacity: 0.7;
  }
`;

const FormError = styled.div`
  color: ${theme.colors.error};
  font-size: ${theme.typography.fontSize.sm};
  margin-top: ${theme.spacing.xs};
`;

const FormSuccess = styled.div`
  background-color: ${theme.colors.success};
  color: ${theme.colors.white};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
  font-weight: ${theme.typography.fontWeight.medium};
`;

const FormError2 = styled.div`
  background-color: ${theme.colors.error};
  color: ${theme.colors.white};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
  font-weight: ${theme.typography.fontWeight.medium};
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: ${theme.spacing.lg};
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

// Validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  company: Yup.string()
    .min(2, 'Company name is too short')
    .max(50, 'Company name is too long'),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]*$/, 'Invalid phone number')
    .min(7, 'Phone number is too short'),
  service: Yup.string()
    .required('Please select a service'),
  message: Yup.string()
    .min(10, 'Message is too short')
    .max(1000, 'Message is too long')
    .required('Message is required'),
});

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formRef = useRef<HTMLDivElement>(null);
  
  // Animation when component mounts
  useEffect(() => {
    if (formRef.current) {
      animations.fadeIn(formRef.current, 0.3);
    }
  }, []);
  
  // Initial form values
  const initialValues: FormValues = {
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  };
  
  // Form submission handler
  const handleSubmit = async (values: FormValues, { resetForm }: { resetForm: () => void }) => {
    // Set form status to submitting
    setFormStatus('submitting');
    
    try {
      // In a real implementation, you would send the data to Airtable here
      // Example with fetch:
      
      // const response = await fetch('YOUR_AIRTABLE_API_ENDPOINT', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer YOUR_AIRTABLE_API_KEY`
      //   },
      //   body: JSON.stringify({
      //     fields: {
      //       Name: values.name,
      //       Email: values.email,
      //       Company: values.company,
      //       Phone: values.phone,
      //       Service: values.service,
      //       Message: values.message,
      //       Date: new Date().toISOString()
      //     }
      //   })
      // });
      
      // if (!response.ok) {
      //   throw new Error('Failed to submit form');
      // }
      
      // Simulate API call (remove in production)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Set form status to success
      setFormStatus('success');
      resetForm();
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      // Set form status to error
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };
  
  return (
    <FormContainer ref={formRef} className={className}>
      <FormTitle>Get In Touch</FormTitle>
      <FormSubtitle>
        Have questions about our AI solutions? Reach out to us and we'll get back to you shortly.
      </FormSubtitle>
      
      {formStatus === 'success' && (
        <FormSuccess>
          Thank you for contacting us! We'll get back to you soon.
        </FormSuccess>
      )}
      
      {formStatus === 'error' && (
        <FormError2>
          {errorMessage || 'An error occurred. Please try again later.'}
        </FormError2>
      )}
      
      <Formik
        initialValues={initialValues}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <FormRow>
              <FormGroup>
                <FormLabel htmlFor="name">Full Name *</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className={errors.name && touched.name ? 'error' : ''}
                />
                <ErrorMessage name="name" component={FormError} />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email Address *</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  className={errors.email && touched.email ? 'error' : ''}
                />
                <ErrorMessage name="email" component={FormError} />
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <FormLabel htmlFor="company">Company Name</FormLabel>
                <FormInput
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your Company"
                  className={errors.company && touched.company ? 'error' : ''}
                />
                <ErrorMessage name="company" component={FormError} />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <FormInput
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (123) 456-7890"
                  className={errors.phone && touched.phone ? 'error' : ''}
                />
                <ErrorMessage name="phone" component={FormError} />
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <FormLabel htmlFor="service">Service of Interest *</FormLabel>
              <FormSelect
                as="select"
                id="service"
                name="service"
                className={errors.service && touched.service ? 'error' : ''}
              >
                <option value="" disabled>Select a service</option>
                <option value="sms-email">AI-Powered SMS & Email Automation</option>
                <option value="lead-qualification">AI Lead Qualification & CRM Integration</option>
                <option value="ecommerce">AI Virtual Assistant for E-Commerce</option>
                <option value="multilingual">Multilingual AI Chatbots</option>
                <option value="custom">Custom AI Chatbot Development</option>
                <option value="social-media">Social Media Automation & AI Chatbots</option>
                <option value="other">Other / Not Sure</option>
              </FormSelect>
              <ErrorMessage name="service" component={FormError} />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Your Message *</FormLabel>
              <FormTextarea
                as="textarea"
                id="message"
                name="message"
                placeholder="Tell us about your project or ask us a question..."
                className={errors.message && touched.message ? 'error' : ''}
              />
              <ErrorMessage name="message" component={FormError} />
            </FormGroup>
            
            <SubmitButton
              type="submit"
              variant="gradient"
              size="lg"
              disabled={isSubmitting || formStatus === 'submitting'}
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default ContactForm;
