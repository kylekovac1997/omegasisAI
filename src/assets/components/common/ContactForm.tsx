import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
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

const FormInput = styled.input`
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
  
  &.error {
    border-color: ${theme.colors.error};
  }
`;

const FormSelect = styled.select`
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
  
  &.error {
    border-color: ${theme.colors.error};
  }
`;

const FormTextarea = styled.textarea`
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
  
  &.error {
    border-color: ${theme.colors.error};
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

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLDivElement>(null);
  
  // Form state
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  
  // Animation when component mounts
  useEffect(() => {
    if (formRef.current) {
      animations.fadeIn(formRef.current, 0.3);
    }
  }, []);
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear the error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Form validation
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    // Validate name
    if (!formValues.name || formValues.name.trim().length < 2) {
      errors.name = 'Name is required and must be at least 2 characters';
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email || !emailRegex.test(formValues.email)) {
      errors.email = 'A valid email is required';
    }
    
    // Validate company (optional)
    if (formValues.company && formValues.company.trim().length < 2) {
      errors.company = 'Company name must be at least 2 characters';
    }
    
    // Validate phone (optional)
    if (formValues.phone) {
      const phoneRegex = /^[0-9+\-\s()]*$/;
      if (!phoneRegex.test(formValues.phone) || formValues.phone.trim().length < 7) {
        errors.phone = 'Please enter a valid phone number';
      }
    }
    
    // Validate service
    if (!formValues.service) {
      errors.service = 'Please select a service';
    }
    
    // Validate message
    if (!formValues.message || formValues.message.trim().length < 10) {
      errors.message = 'Message is required and must be at least 10 characters';
    }
    
    // Set errors and return validation result
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      console.log('Form validation failed:', formErrors);
      return;
    }
    
    // Set form status to submitting
    setFormStatus('submitting');
    console.log('Submitting form with values:', formValues);
    
    try {
      // Send data to Airtable
      const response = await fetch('https://api.airtable.com/v0/appp6d2N3R6a8fyGr/Table%201', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer patA0ixgQWRkliSZP.acce0942c11e1bb08ef486734d7f476392bf00cb90cfee76f49ef5139200bb26` // Replace with your actual API key
        },
        body: JSON.stringify({
          fields: {
            Name: formValues.name,
            Email: formValues.email,
            Company: formValues.company || '',
            Phone: formValues.phone || '',
            Select: formValues.service, // Note: This matches the Airtable field name
            Message: formValues.message,
            Date: new Date().toISOString().split('T')[0] // Format as YYYY-MM-DD
          }
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Airtable error response:', errorData);
        throw new Error(errorData.error?.message || 'Failed to submit form');
      }
      
      // Successfully submitted
      console.log('Form submitted successfully');
      setFormStatus('success');
      
      // Reset form
      setFormValues({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      // Error handling
      console.error('Form submission error:', error);
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
      
      <form onSubmit={handleSubmit}>
        <FormRow>
          <FormGroup>
            <FormLabel htmlFor="name">Full Name *</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formValues.name}
              onChange={handleChange}
              className={formErrors.name ? 'error' : ''}
            />
            {formErrors.name && <FormError>{formErrors.name}</FormError>}
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email Address *</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              value={formValues.email}
              onChange={handleChange}
              className={formErrors.email ? 'error' : ''}
            />
            {formErrors.email && <FormError>{formErrors.email}</FormError>}
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
              value={formValues.company}
              onChange={handleChange}
              className={formErrors.company ? 'error' : ''}
            />
            {formErrors.company && <FormError>{formErrors.company}</FormError>}
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <FormInput
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (123) 456-7890"
              value={formValues.phone}
              onChange={handleChange}
              className={formErrors.phone ? 'error' : ''}
            />
            {formErrors.phone && <FormError>{formErrors.phone}</FormError>}
          </FormGroup>
        </FormRow>
        
        <FormGroup>
          <FormLabel htmlFor="service">Service of Interest *</FormLabel>
          <FormSelect
            id="service"
            name="service"
            value={formValues.service}
            onChange={handleChange}
            className={formErrors.service ? 'error' : ''}
          >
            <option value="">Select a service</option>
            <option value="AI-Powered SMS & Email Automation">AI-Powered SMS & Email Automation</option>
            <option value="AI Lead Qualification & CRM Integration">AI Lead Qualification & CRM Integration</option>
            <option value="AI Virtual Assistant for E-Commercet">AI Virtual Assistant for E-Commerce</option>
            <option value="Multilingual AI Chatbots">Multilingual AI Chatbots</option>
            <option value="Custom AI Chatbot Development">Custom AI Chatbot Development</option>
            <option value="Social Media Automation & AI Chatbots">Social Media Automation & AI Chatbots</option>
            <option value="Other">Other / Not Sure</option>
          </FormSelect>
          {formErrors.service && <FormError>{formErrors.service}</FormError>}
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="message">Your Message *</FormLabel>
          <FormTextarea
            id="message"
            name="message"
            placeholder="Tell us about your project or ask us a question..."
            value={formValues.message}
            onChange={handleChange}
            className={formErrors.message ? 'error' : ''}
          />
          {formErrors.message && <FormError>{formErrors.message}</FormError>}
        </FormGroup>
        
        <SubmitButton
          type="submit"
          variant="gradient"
          size="lg"
          disabled={formStatus === 'submitting'}
        >
          {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </form>
      
      {/* Debug info */}
      <div style={{ marginTop: '20px', padding: '10px', background: '#f9f9f9', borderRadius: '4px', display: 'none' }}>
        <details>
          <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Debug Form State</summary>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            <strong>Values:</strong> {JSON.stringify(formValues, null, 2)}
            <br />
            <strong>Errors:</strong> {JSON.stringify(formErrors, null, 2)}
          </pre>
        </details>
      </div>
    </FormContainer>
  );
};

export default ContactForm;