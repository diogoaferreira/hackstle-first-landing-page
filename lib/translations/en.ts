import { Translations } from '../i18n';

export const en: Translations = {
  header: {
    home: 'Home',
    ourServices: 'Our Services',
    aboutUs: 'About us',
    blog: 'Blog',
    contactUs: 'Contact us',
  },
  
  hero: {
    title: 'Darkweb threat intelligence that acts fast',
    subtitle: 'We hunt the dark web for leaks, exploits, and criminal chatter, then cut the noise and tell you exactly what to do about it. No experts needed from your side. No guessing. No bullsh*t.',
    cta: 'Request intelligence briefing',
    terminalTitle: 'hackstle.cmd',
  },
  
  features: {
    title: 'Threat intelligence fused with attack surface awareness',
    services: {
      darkwebThreatMonitoring: {
        title: 'Darkweb Threat Monitoring',
        description: 'Track ransomware posts, data leaks, and emerging threat actor chatter across marketplaces and forums mapped to your brands and executives.',
      },
      leakedCredentialTriage: {
        title: 'Leaked Credential Triage',
        description: 'Surface fresh credential drops, validate exposure, and push takedowns or resets before adversaries weaponize stolen access.',
      },
      cveExploitCorrelation: {
        title: 'CVE & Exploit Correlation',
        description: 'Link vulnerability chatter and proof-of-concept drops to the assets you own, with severity driven by exploitability and live darkweb intent.',
      },
      attackSurfaceManagement: {
        title: 'Attack Surface Management',
        description: 'Continuously map internet-facing assets, uncover shadow IT, and correlate exposures with intel so remediation hits what attackers see first.',
      },
      redTeamingOperations: {
        title: 'Red Teaming Operations',
        description: 'Simulate modern adversaries, chain together darkweb intel, and stress-test detections with live attack paths mapped to your environment.',
      },
      penetrationTesting: {
        title: 'Penetration Testing',
        description: 'Validate exploitable weaknesses with curated pentests that feed prioritized fixes back to engineering and governance teams.',
      },
      thirdPartyIncidentWatch: {
        title: 'Third-Party Incident Watch',
        description: 'Monitor breaches and supplier ransomware claims to understand cascading risk to your supply chain and customers.',
      },
      actionableWorkflows: {
        title: 'Actionable Workflows',
        description: 'Automate alerts to SOC channels, ticketing, and takedown partners with context that shortens investigation to minutes.',
      },
      brandProtectionTakedowns: {
        title: 'Brand Protection & Takedowns',
        description: 'Hunt sophisticated phishing kits, clone sites, and typosquats, then coordinate rapid domain takedowns to keep customer trust and brand equity intact.',
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
    badge: 'Why Hackstle is different',
    title: 'Built for teams that need precision, not another portal',
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
};