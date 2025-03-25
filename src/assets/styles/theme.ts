export const theme = {
    colors: {
      primary: '#0147FF',          // Bright blue
      secondary: '#7231F5',        // Purple
      tertiary: '#00DBDE',         // Cyan
      accent: '#FC6767',           // Coral
      success: '#0CCE6B',          // Green
      warning: '#FF9500',          // Orange
      error: '#FF2D55',            // Red
      dark: '#131A29',             // Navy dark
      darkSecondary: '#1F2B48',    // Lighter navy
      gray: '#8A94A6',             // Medium gray
      lightGray: '#EEF1F8',        // Light gray
      white: '#FFFFFF',            // White
      black: '#000000',            // Black
      gradient: {
        primary: 'linear-gradient(135deg, #0147FF 0%, #7231F5 100%)',
        secondary: 'linear-gradient(135deg, #00DBDE 0%, #FC6767 100%)',
        dark: 'linear-gradient(135deg, #131A29 0%, #1F2B48 100%)'
      }
    },
    typography: {
      fontFamily: {
        primary: "'Inter', sans-serif",
        secondary: "'Poppins', sans-serif",
      },
      fontSize: {
        xs: '0.75rem',       // 12px
        sm: '0.875rem',      // 14px
        base: '1rem',        // 16px
        md: '1.125rem',      // 18px
        lg: '1.25rem',       // 20px
        xl: '1.5rem',        // 24px
        '2xl': '1.875rem',   // 30px
        '3xl': '2.25rem',    // 36px
        '4xl': '3rem',       // 48px
        '5xl': '4rem',       // 64px
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      }
    },
    spacing: {
      xs: '0.25rem',    // 4px
      sm: '0.5rem',     // 8px 
      md: '1rem',       // 16px
      lg: '1.5rem',     // 24px
      xl: '2rem',       // 32px
      '2xl': '2.5rem',  // 40px
      '3xl': '3rem',    // 48px
      '4xl': '4rem',    // 64px
      '5xl': '6rem',    // 96px
    },
    breakpoints: {
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1536px',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',   // 2px
      md: '0.375rem',   // 6px
      lg: '0.5rem',     // 8px
      xl: '0.75rem',    // 12px
      '2xl': '1rem',    // 16px
      '3xl': '1.5rem',  // 24px
      full: '9999px',   // Circle/Pill
    },
    transitions: {
      default: 'all 0.3s ease',
      fast: 'all 0.15s ease',
      slow: 'all 0.5s ease',
    },
    zIndex: {
      negative: -1,
      default: 1,
      dropdown: 1000,
      sticky: 1100,
      fixed: 1200,
      modal: 1300,
      popover: 1400,
      tooltip: 1500,
    }
  };
  
  // Types for the theme
  export type Theme = typeof theme;