export interface ServiceFeature {
    title: string;
    description: string;
    icon: React.ReactNode;
  }
  
  export interface ServiceBenefit {
    title: string;
    description: string;
    icon: React.ReactNode;
  }
  
  export interface UseCase {
    industry: string;
    description: string;
    results: string[];
  }
  
  export interface FAQ {
    question: string;
    answer: string;
  }
  
  export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    icon: React.ReactNode;
    features: ServiceFeature[];
    benefits: ServiceBenefit[];
    useCases: UseCase[];
    faqs: FAQ[];
    primaryImage: string;
    secondaryImage?: string;
    videoUrl?: string;
  }
  
  // Define service IDs as constants for easy reference
  export const SERVICE_IDS = {
    SMS_EMAIL: 'sms-email',
    LEAD_QUALIFICATION: 'lead-qualification',
    ECOMMERCE: 'ecommerce',
    MULTILINGUAL: 'multilingual',
    CUSTOM: 'custom',
    SOCIAL_MEDIA: 'social-media',
  };