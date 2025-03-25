import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

// Animation presets for elements
export const animations = {
  fadeIn: (element: string | Element, delay: number = 0, duration: number = 0.8) => {
    return gsap.from(element, {
      opacity: 0,
      y: 30,
      duration,
      delay,
      ease: 'power3.out',
    });
  },
  
  fadeInLeft: (element: string | Element, delay: number = 0, duration: number = 0.8) => {
    return gsap.from(element, {
      opacity: 0,
      x: -50,
      duration,
      delay,
      ease: 'power3.out',
    });
  },
  
  fadeInRight: (element: string | Element, delay: number = 0, duration: number = 0.8) => {
    return gsap.from(element, {
      opacity: 0,
      x: 50,
      duration,
      delay,
      ease: 'power3.out',
    });
  },
  
  fadeInUp: (element: string | Element, delay: number = 0, duration: number = 0.8) => {
    return gsap.from(element, {
      opacity: 0,
      y: 50,
      duration,
      delay,
      ease: 'power3.out',
    });
  },
  
  fadeInDown: (element: string | Element, delay: number = 0, duration: number = 0.8) => {
    return gsap.from(element, {
      opacity: 0,
      y: -50,
      duration,
      delay,
      ease: 'power3.out',
    });
  },
  
  bounce: (element: string | Element, delay: number = 0, duration: number = 1) => {
    return gsap.from(element, {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration,
      delay,
      ease: 'power1.inOut',
    });
  },
  
  pulse: (element: string | Element, delay: number = 0, duration: number = 1) => {
    return gsap.to(element, {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration,
      delay,
      ease: 'power1.inOut',
    });
  },
  
  typeWriter: (element: string | Element, text: string, delay: number = 0, duration: number = 2) => {
    return gsap.to(element, {
      duration,
      delay,
      text: {
        value: text,
        newClass: 'highlighted',
      },
      ease: 'none',
    });
  },
  
  staggerFadeIn: (elements: string | Element[], stagger: number = 0.1, delay: number = 0, duration: number = 0.8) => {
    return gsap.from(elements, {
      opacity: 0,
      y: 30,
      stagger,
      duration,
      delay,
      ease: 'power3.out',
    });
  },
  
  staggerFadeInLeft: (elements: string | Element[], stagger: number = 0.1, delay: number = 0, duration: number = 0.8) => {
    return gsap.from(elements, {
      opacity: 0,
      x: -50,
      stagger,
      duration,
      delay,
      ease: 'power3.out',
    });
  },
  
  staggerFadeInRight: (elements: string | Element[], stagger: number = 0.1, delay: number = 0, duration: number = 0.8) => {
    return gsap.from(elements, {
      opacity: 0,
      x: 50,
      stagger,
      duration,
      delay,
      ease: 'power3.out',
    });
  },
  
  flip: (element: string | Element, delay: number = 0, duration: number = 1) => {
    return gsap.from(element, {
      rotationY: 180,
      opacity: 0,
      duration,
      delay,
      ease: 'power3.out',
    });
  },
  
  zoomIn: (element: string | Element, delay: number = 0, duration: number = 0.8) => {
    return gsap.from(element, {
      scale: 0.5,
      opacity: 0,
      duration,
      delay,
      ease: 'back.out(1.7)',
    });
  },
  
  backgroundShift: (element: string | Element, startColor: string, endColor: string, delay: number = 0, duration: number = 1) => {
    return gsap.fromTo(element, 
      { backgroundColor: startColor },
      { backgroundColor: endColor, duration, delay, ease: 'power3.inOut' }
    );
  },
  
  reveal: (element: string | Element, delay: number = 0, duration: number = 1) => {
    const tl = gsap.timeline({ delay });
    
    tl.set(element, { autoAlpha: 1 });
    tl.from(element, {
      xPercent: -100,
      duration: duration / 2,
      ease: 'power2.inOut',
    });
    
    return tl;
  },
  
  float: (element: string | Element, delay: number = 0, duration: number = 2) => {
    return gsap.to(element, {
      y: '-=15',
      repeat: -1,
      yoyo: true,
      duration,
      delay,
      ease: 'sine.inOut',
    });
  },
};

// Scroll-triggered animations
export const scrollAnimations = {
  fadeInOnScroll: (element: string | Element, start: string = 'top 80%', end?: string, scrub: boolean = false) => {
    return gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: scrub ? 1 : false,
        toggleActions: scrub ? undefined : 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
    });
  },
  
  fadeInLeftOnScroll: (element: string | Element, start: string = 'top 80%', end?: string, scrub: boolean = false) => {
    return gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: scrub ? 1 : false,
        toggleActions: scrub ? undefined : 'play none none none',
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power3.out',
    });
  },
  
  fadeInRightOnScroll: (element: string | Element, start: string = 'top 80%', end?: string, scrub: boolean = false) => {
    return gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: scrub ? 1 : false,
        toggleActions: scrub ? undefined : 'play none none none',
      },
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: 'power3.out',
    });
  },
  
  zoomInOnScroll: (element: string | Element, start: string = 'top 80%', end?: string, scrub: boolean = false) => {
    return gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: scrub ? 1 : false,
        toggleActions: scrub ? undefined : 'play none none none',
      },
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    });
  },
  
  staggerFadeInOnScroll: (elements: string | Element[], stagger: number = 0.1, start: string = 'top 80%', end?: string, scrub: boolean = false) => {
    return gsap.from(elements, {
      scrollTrigger: {
        trigger: elements[0],
        start,
        end,
        scrub: scrub ? 1 : false,
        toggleActions: scrub ? undefined : 'play none none none',
      },
      opacity: 0,
      y: 50,
      stagger,
      duration: 0.8,
      ease: 'power3.out',
    });
  },
  
  parallaxOnScroll: (element: string | Element, distance: number = 100, start: string = 'top bottom', end: string = 'bottom top') => {
    return gsap.fromTo(
      element, 
      { y: 0 }, 
      {
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub: true,
        },
        y: distance,
        ease: 'none',
      }
    );
  },
  
  progressBarOnScroll: (element: string | Element, start: string = 'top top', end: string = 'bottom bottom') => {
    return gsap.fromTo(
      element, 
      { width: '0%' }, 
      {
        scrollTrigger: {
          trigger: 'body',
          start,
          end,
          scrub: 1,
        },
        width: '100%',
        ease: 'none',
      }
    );
  },
  
  revealTextOnScroll: (
    element: string | Element, 
    text: string, 
    start: string = 'top 80%', 
    end?: string
  ) => {
    return gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start,
        end,
        toggleActions: 'play none none none',
      },
      duration: 2,
      text: {
        value: text,
      },
      ease: 'none',
    });
  },
  
  rotateOnScroll: (
    element: string | Element, 
    rotation: number = 360, 
    start: string = 'top bottom', 
    end: string = 'bottom top'
  ) => {
    return gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: true,
      },
      rotation,
      ease: 'none',
    });
  },
  
  scaleOnScroll: (
    element: string | Element, 
    startScale: number = 0.8,
    endScale: number = 1, 
    start: string = 'top bottom', 
    end: string = 'bottom top'
  ) => {
    return gsap.fromTo(
      element, 
      { scale: startScale }, 
      {
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub: true,
        },
        scale: endScale,
        ease: 'none',
      }
    );
  },
  
  pinSection: (
    element: string | Element, 
    start: string = 'top top', 
    end: string = '+=100%',
    pinSpacing: boolean = true
  ) => {
    return ScrollTrigger.create({
      trigger: element,
      start,
      end,
      pin: true,
      pinSpacing,
    });
  },
};

// Initialize GSAP and ScrollTrigger defaults
export const initAnimations = () => {
  // Set defaults
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  });
  
  // ScrollTrigger defaults
  ScrollTrigger.defaults({
    toggleActions: 'play none none none',
    // markers: process.env.NODE_ENV === 'development',
  });
  
  // Match media queries for responsive animations
  ScrollTrigger.matchMedia({
    '(min-width: 992px)': function() {
      // Desktop animations
    },
    '(max-width: 991px)': function() {
      // Tablet animations - may be less intense
    },
    '(max-width: 767px)': function() {
      // Mobile animations - should be simpler
    },
    'all': function() {
      // Animations for all devices
    }
  });
  
  // Smoother scroll
  gsap.to(window, {
    duration: 0.1,
    scrollTo: {
      y: '#root',
      autoKill: false,
      offsetY: 0,
    },
  });
};

// Service-specific animations
export const serviceAnimations = {
  smsEmail: (element: string | Element) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      }
    });
    
    tl.from(`${element} .icon-container`, {
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    })
    .from(`${element} .message-bubble`, {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
    }, '-=0.4')
    .from(`${element} .content`, {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.2');
    
    return tl;
  },
  
  leadQualification: (element: string | Element) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      }
    });
    
    tl.from(`${element} .icon-container`, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)',
    })
    .from(`${element} .lead-path`, {
      strokeDashoffset: 300,
      duration: 1.5,
      ease: 'power2.out',
    }, '-=0.5')
    .from(`${element} .lead-dot`, {
      scale: 0,
      stagger: 0.2,
      duration: 0.4,
      ease: 'back.out(1.7)',
    }, '-=1.2')
    .from(`${element} .content`, {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.8');
    
    return tl;
  },
  
  ecommerce: (element: string | Element) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      }
    });
    
    tl.from(`${element} .icon-container`, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    })
    .from(`${element} .cart-item`, {
      x: -50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.5')
    .from(`${element} .assistant-bubble`, {
      scale: 0,
      opacity: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.5)',
    }, '-=0.3')
    .from(`${element} .content`, {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.4');
    
    return tl;
  },
  
  multilingual: (element: string | Element) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      }
    });
    
    tl.from(`${element} .icon-container`, {
      rotation: -180,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
    .from(`${element} .language-bubble`, {
      scale: 0,
      opacity: 0,
      stagger: 0.12,
      duration: 0.5,
      ease: 'back.out(1.7)',
    }, '-=0.5')
    .from(`${element} .content`, {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.3');
    
    return tl;
  },
  
  customDevelopment: (element: string | Element) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      }
    });
    
    tl.from(`${element} .icon-container`, {
      opacity: 0,
      scale: 0.5,
      duration: 0.8,
      ease: 'power3.out',
    })
    .from(`${element} .code-line`, {
      width: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.inOut',
    }, '-=0.5')
    .from(`${element} .gear`, {
      rotation: -90,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      ease: 'back.out(1.7)',
    }, '-=0.8')
    .from(`${element} .content`, {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.4');
    
    return tl;
  },
  
  socialMedia: (element: string | Element) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      }
    });
    
    tl.from(`${element} .icon-container`, {
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
    .from(`${element} .social-platform`, {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.5,
      ease: 'back.out(1.7)',
    }, '-=0.5')
    .from(`${element} .message-dot`, {
      scale: 0,
      opacity: 0,
      stagger: 0.08,
      duration: 0.4,
    }, '-=0.7')
    .from(`${element} .content`, {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.3');
    
    return tl;
  },
};