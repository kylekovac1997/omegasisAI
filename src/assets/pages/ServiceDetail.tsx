import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SERVICE_IDS } from '../types/service';

// Import service components
// import SMSEmailAutomation from '@/components/services/SMSEmailAutomation';
import LeadQualification from '../components/services/LeadQualification';
import SMSEmailAutomation from '../components/services/SMSEmailAutomation';
// TODO: Import other service components as they are created
import EcommerceIntegration from '../components/services/EcommerceAssistant';
import MultilingualChatbots from '../components/services/MultilingualChatbots';
import CustomDevelopment from '../components/services/CustomDevelopment';
// import SocialMediaAutomation from '@/components/services/SocialMediaAutomation';

interface ServiceDetailParams {
  serviceId: string;
}

// Map service IDs to their respective titles for SEO
const serviceTitles: Record<string, string> = {
  [SERVICE_IDS.SMS_EMAIL]: 'AI-Powered SMS & Email Automation',
  [SERVICE_IDS.LEAD_QUALIFICATION]: 'AI Lead Qualification & CRM Integration',
  [SERVICE_IDS.ECOMMERCE]: 'AI Virtual Assistant for E-Commerce',
  [SERVICE_IDS.MULTILINGUAL]: 'Multilingual AI Chatbots',
  [SERVICE_IDS.CUSTOM]: 'Custom AI Chatbot Development',
  [SERVICE_IDS.SOCIAL_MEDIA]: 'Social Media Automation & AI Chatbots',
};

// Map service IDs to their respective descriptions for SEO
const serviceDescriptions: Record<string, string> = {
  [SERVICE_IDS.SMS_EMAIL]: 'Automate your customer engagement with intelligent SMS and email communication. Send appointment reminders, follow-ups, and responses to inquiries — all managed by AI.',
  [SERVICE_IDS.LEAD_QUALIFICATION]: 'Turn every lead into an opportunity with our AI-driven qualification system. Our bots can ask relevant questions, score leads, and automatically feed qualified contacts into your CRM.',
  [SERVICE_IDS.ECOMMERCE]: 'Enhance your online store\'s customer experience with an AI assistant that handles product recommendations, order tracking, FAQs, and more.',
  [SERVICE_IDS.MULTILINGUAL]: 'Break language barriers with intelligent bots that speak your customers\' language, making your business accessible to a global audience.',
  [SERVICE_IDS.CUSTOM]: 'We design fully customized chatbot solutions tailored to your business needs, complete with API and third-party integrations.',
  [SERVICE_IDS.SOCIAL_MEDIA]: 'Streamline your social media interactions with bots that respond to DMs, comments, and inquiries in real-time.',
};

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  // Redirect to services page if serviceId is invalid
  useEffect(() => {
    if (!serviceId || !Object.values(SERVICE_IDS).includes(serviceId)) {
      navigate('/services');
    }
  }, [serviceId, navigate]);
  
  // Render the appropriate service component based on serviceId
  const renderServiceComponent = () => {
    if (!serviceId) return null;
    
    switch (serviceId) {
      case SERVICE_IDS.SMS_EMAIL:
        return <SMSEmailAutomation />;
      case SERVICE_IDS.LEAD_QUALIFICATION:
        return <LeadQualification />;
      case SERVICE_IDS.ECOMMERCE:
        return <EcommerceIntegration />;
      case SERVICE_IDS.MULTILINGUAL:
        return <MultilingualChatbots />;
      case SERVICE_IDS.CUSTOM:
        return <CustomDevelopment />;
        return <div>Custom Development - Coming Soon</div>;
      case SERVICE_IDS.SOCIAL_MEDIA:
        // return <SocialMediaAutomation />;
        return <div>Social Media Automation - Coming Soon</div>;
      default:
        return null;
    }
  };
  
  return (
    <>
      <Helmet>
        <title>{serviceId ? `${serviceTitles[serviceId]} | OMEGASIS AI` : 'Our Services | OMEGASIS AI'}</title>
        <meta 
          name="description" 
          content={serviceId ? serviceDescriptions[serviceId] : 'Explore our comprehensive suite of AI-powered solutions.'} 
        />
      </Helmet>
      
      {renderServiceComponent()}
    </>
  );
};

export default ServiceDetail;