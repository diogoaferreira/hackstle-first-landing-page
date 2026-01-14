import { Translations } from '../i18n';

export const en: Translations = {
  header: {
    home: 'Home',
    ourServices: 'Our Services',
    whyHackstle: 'Why Hackstle',
    aboutUs: 'About us',
    blog: 'Blog',
    contactUs: 'Contact us',
  },
  
  hero: {
    title: 'We Are Your Eyes Out There',
    subtitle: 'We transform Threat Intelligence into action. We hunt the dark web for leaks, exploits, and criminal chatter, then cut the noise and tell you exactly what to do about it. No experts needed from your side. No guessing. No bullsh*t.',
    cta: 'Request intelligence briefing',
    terminalTitle: 'hackstle.cmd',
  },
  
  features: {
    title: 'Threat intelligence combined with attack surface awareness',
    services: {
      s1: {
        title: 'External Asset Discovery & Shadow IT Mapping',
        description: 'Identify all internet-facing infrastructure, cloud services, SaaS systems, domains, subdomains, and unmanaged assets using active and passive intelligence methods.',
      },
      s2: {
        title: 'Exposure Enumeration & Service Assessment',
        description: 'Catalog open services, misconfigurations, weak protocols, outdated technologies, and insecure components across the perimeter and cloud environments.',
      },
      s3: {
        title: 'Dark Web Threat Monitoring',
        description: 'Monitor ransomware leaks, exploit sales, data dumps, credential exposures, and criminal chatter tied to your assets, employees, brands, and infrastructure.',
      },
      s4: {
        title: 'Leaked Credential & Identity Exposure Detection',
        description: 'Identify compromised credentials, access keys, tokens, and identity misuse across dark web markets, breach dumps, and credential harvesting ecosystems.',
      },
      s5: {
        title: 'Third-Party Incident Watch',
        description: 'Monitor supplier breaches and ransomware incidents to understand cascading supply chain risks.',
      },
      s6: {
        title: 'Brand, Domain & Infrastructure Abuse Monitoring',
        description: 'Detect phishing kits, clone sites, typosquats, and malicious domain activity, then coordinate rapid takedowns.',
      },
      s7: {
        title: 'Vulnerability & Exploit Prioritization',
        description: 'Rank exposures based on adversary interest, exploit maturity, business impact, and active threat intelligence — not CVSS alone.',
      },
      s8: {
        title: 'Threat-Led Exposure Validation & Continuous Risk Monitoring',
        description: 'Correlate exposures with real-world attacker behavior, validate exploitability and attack paths, and continuously track changes to keep high-risk findings controlled over time.',
      },
      s9: {
        title: 'Actionable Remediation Workflows',
        description: 'Deliver prioritized, intelligence-driven mitigation steps and automate alerts into SOC channels, ticketing systems, and takedown partners.',
      },
    },
    planetSignals: {
      criticalPortExposed: {
        title: 'Critical port exposed',
        detail: 'FTP on edge-gateway left open 32m',
        status: 'High risk',
        metric: 'Live signal',
      },
      exploitChatterSpiking: {
        title: 'Exploit chatter spiking',
        detail: 'CVE-2024-5039 mapped to app-core',
        status: 'Exploit',
        metric: '+18 mentions',
      },
      freshCredentialDump: {
        title: 'Fresh credential dump',
        detail: 'Finance ops bundle / 184 accounts',
        status: 'New',
        metric: 'Now indexing',
      },
      shadowServiceFound: {
        title: 'Shadow service found',
        detail: 'Untracked EDR + SSO provider',
        status: 'Investigate',
        metric: 'New asset',
      },
    },
  },
  
  businessCategories: {
    categories: {
      asset: 'ASSET',
      alert: 'Alert',
      intel: 'INTEL',
      zeroday: '0DAY',
      leaks: 'LEAKS',
      cve: 'CVE',
      iocs: 'IOCs',
      ops: 'OPS',
    },
  },

  blog: {
    title: 'Fresh intelligence from the Hackstle team',
    subtitle: 'Brief, actionable posts on darkweb monitoring, CVE correlation, credential leaks, and third-party incidents.',
    viewAllPosts: 'View all posts',
    readingTime: 'min read',
    // Blog page specific
    pageTitle: 'Hackstle intelligence briefings',
    pageSubtitle: 'Insights from our analysts on darkweb detections, attack surface findings, and how to respond with less noise and more action.',
    readPost: 'Read post',
  },

  // Contact
  contact: {
    pageTitle: 'Talk with Hackstle',
    pageSubtitle: 'Request a live briefing, schedule a platform walk-through, or drop details about a darkweb incident you need triaged fast.',
    expectationsTitle: 'What to expect',
    expectationsSubtitle: 'Fast response',
    expectationsDescription: 'A Hackstle analyst will reach out with next steps—log sources we can monitor, leaked data samples for validation, and a timeline for containment.',
    services: {
      darkwebTriage: {
        title: 'Darkweb leak triage',
        description: 'Rapid validation of paste sites, forums, and breach channels.',
      },
      attackSurfaceMapping: {
        title: 'Attack surface mapping',
        description: 'Exposed assets correlated with active exploits and CVEs.',
      },
      thirdPartyWatch: {
        title: 'Third-party incident watch',
        description: 'Visibility into suppliers and partners linked to your org.',
      },
    },
    urgentContact: 'Prefer to talk now? Email hello@hackstle.io for urgent issues.',
    form: {
      title: 'Send us a note',
      subtitle: 'We respond quickly to urgent leak notifications, credential exposures, and emerging CVEs tied to your assets.',
      name: 'Name',
      workEmail: 'Work email',
      company: 'Company',
      role: 'Role',
      howCanWeHelp: 'How can we help?',
      messagePlaceholder: 'Share the incident, assets, or CVEs you want us to monitor.',
      briefingRequest: 'Request a 30-minute threat briefing',
      submitButton: 'Submit request',
      submitting: 'Sending...',
      successMessage: 'Thank you—our team will reach out shortly.',
      // Placeholders
      namePlaceholder: 'Alex Ramirez',
      emailPlaceholder: 'alex@company.com',
      companyPlaceholder: 'Acme Security',
      rolePlaceholder: 'SOC Lead',
    },
  },

  differentiators: {
    badge: 'Why Hackstle',
    title: 'Why Hackstle',
    subtitle: 'Hackstle trims noise, tailors coverage to your environment, and turns darkweb intelligence into clear, decisive actions.',
    items: {
      tailoredIntelligence: {
        title: 'Tailored intelligence, not templates',
        description: 'Engagements are calibrated to your brands, attack surface, and industry context so analysts see only what matters to your organization.',
      },
      signalOverNoise: {
        title: 'Signal over noise',
        description: 'Noise-cutting triage and analyst validation eliminate false positives, keeping darkweb mentions, leaked creds, and CVEs trustworthy and actionable.',
      },
      clarityWithoutSprawl: {
        title: 'Clarity without dashboard sprawl',
        description: 'We ship insights in streamlined views instead of complex dashboards, so your SOC and executives get to outcomes faster.',
      },
      reportingThatLands: {
        title: 'Reporting that lands',
        description: 'Executive-ready reports summarize impact, urgency, and recommended actions so you can brief stakeholders with confidence.',
      },
    },
  },

  whatWeOffer: {
    title: 'What we offer',
    subtitle: 'We deliver actionable intelligence and exposure management across your internet-facing landscape.',
    services: {
      cti: {
        title: 'Cyber Threat Intelligence',
        items: [
          'Dark Web Intelligence: leaks, secrets exposure, criminal chatter',
          'Brand Monitoring & Protection',
          'Shadow IT Discovery',
          'Actionable impact analysis & mitigation guidance',
        ],
      },
      asm: {
        title: 'Attack Surface Management',
        items: [
          'External perimeter mapping',
          'Service & port exposure identification',
          'Continuous discovery of internet-facing risks',
        ],
      },
      assessments: {
        title: 'Security Assessments',
        items: [
          'Black, Grey, and White Box penetration testing',
          'Application, infrastructure, and internal system testing',
          'Exploit-driven validation of real-world risk',
        ],
      },
      audit: {
        title: 'Audit & Compliance',
        items: [
          'Gap assessments (ISO 27001, NIS2, SOC2, GDPR, PCI-DSS)',
          'Policy, process, and control alignment',
          'Remediation planning & implementation support',
        ],
      },
      redteam: {
        title: 'Red Team Operations',
        items: [
          'Adversary simulation',
          'Objective-based intrusions',
          'Detection and response stress-testing',
        ],
      },
      ciso: {
        title: 'CISO as a Service',
        items: [
          'Fractional CISO leadership',
          'Strategic cybersecurity roadmap',
          'Risk management, governance, and board reporting',
        ],
      },
    },
  },

  certifications: {
    badge: 'Deeply certified team',
    title: 'Elite practitioners behind every alert',
    subtitle: 'Hackstle analysts pair darkweb tradecraft with enterprise reporting discipline. From Red Team operators to threat intelligence frameworks, the team is certified to tackle complex incidents with confidence.',
    certificatesTitle: 'Certificates we bring into every investigation',
  },

  cta: {
    title: 'Stay ahead of darkweb threats with Hackstle',
    button: 'Schedule a threat briefing',
  },
  
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    retry: 'Try again',
    contact: 'Contact',
  },

  footer: {
    allRights: "All rights reserved",
    company: "Company",
    resources: "Resources",
    social: "Social"
  }
};