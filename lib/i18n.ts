export type Language = 'en' | 'pt';

export interface Translations {
  // Header
  header: {
    home: string;
    ourServices: string;
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
      darkwebThreatMonitoring: {
        title: string;
        description: string;
      };
      leakedCredentialTriage: {
        title: string;
        description: string;
      };
      cveExploitCorrelation: {
        title: string;
        description: string;
      };
      attackSurfaceManagement: {
        title: string;
        description: string;
      };
      redTeamingOperations: {
        title: string;
        description: string;
      };
      penetrationTesting: {
        title: string;
        description: string;
      };
      thirdPartyIncidentWatch: {
        title: string;
        description: string;
      };
      actionableWorkflows: {
        title: string;
        description: string;
      };
      brandProtectionTakedowns: {
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
}

export const defaultLanguage: Language = 'en';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
];