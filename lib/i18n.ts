export type Language = 'en' | 'pt';

export interface Translations {
  // Header
  header: {
    home: string;
    ourServices: string;
    whyHackstle: string;
    aboutUs: string;
    blog: string;
    contactUs: string;
  };
  
  // Hero section
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    terminalTitle: string;
  };
  
  // Features Planet
  features: {
    title: string;
    services: {
      s1: {
        title: string;
        description: string;
      };
      s2: {
        title: string;
        description: string;
      };
      s3: {
        title: string;
        description: string;
      };
      s4: {
        title: string;
        description: string;
      };
      s5: {
        title: string;
        description: string;
      };
      s6: {
        title: string;
        description: string;
      };
      s7: {
        title: string;
        description: string;
      };
      s8: {
        title: string;
        description: string;
      };
      s9: {
        title: string;
        description: string;
      };
    };
    planetSignals: {
      criticalPortExposed: {
        title: string;
        detail: string;
        status: string;
        metric: string;
      };
      exploitChatterSpiking: {
        title: string;
        detail: string;
        status: string;
        metric: string;
      };
      freshCredentialDump: {
        title: string;
        detail: string;
        status: string;
        metric: string;
      };
      shadowServiceFound: {
        title: string;
        detail: string;
        status: string;
        metric: string;
      };
    };
  };
  
  // Business Categories
  businessCategories: {
    categories: {
      asset: string;
      alert: string;
      intel: string;
      zeroday: string;
      leaks: string;
      cve: string;
      iocs: string;
      ops: string;
    };
  };

  // Blog
  blog: {
    title: string;
    subtitle: string;
    viewAllPosts: string;
    readingTime: string;
    // Blog page specific
    pageTitle: string;
    pageSubtitle: string;
    readPost: string;
  };

  // Contact
  contact: {
    pageTitle: string;
    pageSubtitle: string;
    expectationsTitle: string;
    expectationsSubtitle: string;
    expectationsDescription: string;
    services: {
      darkwebTriage: {
        title: string;
        description: string;
      };
      attackSurfaceMapping: {
        title: string;
        description: string;
      };
      thirdPartyWatch: {
        title: string;
        description: string;
      };
    };
    urgentContact: string;
    form: {
      title: string;
      subtitle: string;
      name: string;
      workEmail: string;
      company: string;
      role: string;
      howCanWeHelp: string;
      messagePlaceholder: string;
      briefingRequest: string;
      submitButton: string;
      submitting: string;
      successMessage: string;
      // Placeholders
      namePlaceholder: string;
      emailPlaceholder: string;
      companyPlaceholder: string;
      rolePlaceholder: string;
    };
  };

  // Differentiators
  differentiators: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      tailoredIntelligence: {
        title: string;
        description: string;
      };
      signalOverNoise: {
        title: string;
        description: string;
      };
      clarityWithoutSprawl: {
        title: string;
        description: string;
      };
      reportingThatLands: {
        title: string;
        description: string;
      };
    };
  };

  whatWeOffer: {
    title: string;
    subtitle: string;
    services: {
      cti: {
        title: string;
        items: string[];
      };
      asm: {
        title: string;
        items: string[];
      };
      assessments: {
        title: string;
        items: string[];
      };
      audit: {
        title: string;
        items: string[];
      };
      redteam: {
        title: string;
        items: string[];
      };
      ciso: {
        title: string;
        items: string[];
      };
    };
  };
  // Certifications
  certifications: {
    badge: string;
    title: string;
    subtitle: string;
    certificatesTitle: string;
  };

  // CTA
  cta: {
    title: string;
    button: string;
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    retry: string;
    contact: string;
  };

  footer: {
    allRights: string;
    company: string;
    resources: string;
    social: string;
  }
}

export const defaultLanguage: Language = 'en';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
];