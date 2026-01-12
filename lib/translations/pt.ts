import { Translations } from '../i18n';

export const pt: Translations = {
  header: {
    home: 'Início',
    ourServices: 'Os Nossos Serviços',
    whyHackstle: 'Why Hackstle',
    aboutUs: 'Sobre nós',
    blog: 'Blog',
    contactUs: 'Contacte-nos',
  },
  
  hero: {
    title: 'Inteligência de ameaças da darkweb que age rápido',
    subtitle: 'Caçamos a dark web por vazamentos, exploits e conversas criminosas, depois cortamos o ruído e dizemos exatamente o que fazer. Não precisa de especialistas do seu lado. Sem adivinhação. Sem enrolação.',
    cta: 'Solicitar briefing de inteligência',
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
      asset: 'ATIVO',
      alert: 'Alerta',
      intel: 'INTEL',
      zeroday: '0DAY',
      leaks: 'VAZAMENTOS',
      cve: 'CVE',
      iocs: 'IOCs',
      ops: 'OPS',
    },
  },

  blog: {
    title: 'Inteligência fresca da equipe Hackstle',
    subtitle: 'Posts breves e acionáveis sobre monitoramento da darkweb, correlação de CVE, vazamentos de credenciais e incidentes de terceiros.',
    viewAllPosts: 'Ver todos os posts',
    readingTime: 'min de leitura',
    // Blog page specific
    pageTitle: 'Briefings de inteligência Hackstle',
    pageSubtitle: 'Insights de nossos analistas sobre detecções da darkweb, descobertas de superfície de ataque e como responder com menos ruído e mais ação.',
    readPost: 'Ler post',
  },

  // Contact
  contact: {
    pageTitle: 'Fale com a Hackstle',
    pageSubtitle: 'Solicite um briefing ao vivo, agende uma demonstração da plataforma ou compartilhe detalhes sobre um incidente da darkweb que precisa ser triado rapidamente.',
    expectationsTitle: 'O que esperar',
    expectationsSubtitle: 'Resposta rápida',
    expectationsDescription: 'Um analista da Hackstle entrará em contato com os próximos passos—fontes de log que podemos monitorar, amostras de dados vazados para validação e um cronograma para contenção.',
    services: {
      darkwebTriage: {
        title: 'Triagem de vazamentos da darkweb',
        description: 'Validação rápida de sites de paste, fóruns e canais de violação.',
      },
      attackSurfaceMapping: {
        title: 'Mapeamento de superfície de ataque',
        description: 'Ativos expostos correlacionados com exploits ativos e CVEs.',
      },
      thirdPartyWatch: {
        title: 'Monitoramento de incidentes de terceiros',
        description: 'Visibilidade de fornecedores e parceiros vinculados à sua organização.',
      },
    },
    urgentContact: 'Prefere falar agora? Envie um email para hello@hackstle.io para questões urgentes.',
    form: {
      title: 'Envie-nos uma mensagem',
      subtitle: 'Respondemos rapidamente a notificações urgentes de vazamentos, exposições de credenciais e CVEs emergentes vinculados aos seus ativos.',
      name: 'Nome',
      workEmail: 'Email corporativo',
      company: 'Empresa',
      role: 'Cargo',
      howCanWeHelp: 'Como podemos ajudar?',
      messagePlaceholder: 'Compartilhe o incidente, ativos ou CVEs que você quer que monitoremos.',
      briefingRequest: 'Solicitar briefing de ameaças de 30 minutos',
      submitButton: 'Enviar solicitação',
      submitting: 'Enviando...',
      successMessage: 'Obrigado—nossa equipe entrará em contato em breve.',
      // Placeholders
      namePlaceholder: 'Alex Ramirez',
      emailPlaceholder: 'alex@empresa.com',
      companyPlaceholder: 'Acme Security',
      rolePlaceholder: 'Líder SOC',
    },
  },

  differentiators: {
    badge: 'Por que a Hackstle é diferente',
    title: 'Construída para equipes que precisam de precisão, não de outro portal',
    subtitle: 'A Hackstle corta o ruído, adapta a cobertura ao seu ambiente e transforma inteligência da darkweb em ações claras e decisivas.',
    items: {
      tailoredIntelligence: {
        title: 'Inteligência personalizada, não templates',
        description: 'Engajamentos são calibrados para suas marcas, superfície de ataque e contexto da indústria para que analistas vejam apenas o que importa para sua organização.',
      },
      signalOverNoise: {
        title: 'Sinal sobre ruído',
        description: 'Triagem que corta ruído e validação de analistas eliminam falsos positivos, mantendo menções da darkweb, credenciais vazadas e CVEs confiáveis e acionáveis.',
      },
      clarityWithoutSprawl: {
        title: 'Clareza sem proliferação de dashboards',
        description: 'Entregamos insights em visualizações simplificadas em vez de dashboards complexos, para que seu SOC e executivos cheguem aos resultados mais rápido.',
      },
      reportingThatLands: {
        title: 'Relatórios que fazem impacto',
        description: 'Relatórios prontos para executivos resumem impacto, urgência e ações recomendadas para que você possa briefar stakeholders com confiança.',
      },
    },
  },

  certifications: {
    badge: 'Equipe profundamente certificada',
    title: 'Profissionais de elite por trás de cada alerta',
    subtitle: 'Analistas da Hackstle combinam tradecraft da darkweb com disciplina de relatórios empresariais. De operadores de Red Team a frameworks de inteligência de ameaças, a equipe é certificada para lidar com incidentes complexos com confiança.',
    certificatesTitle: 'Certificações que trazemos para cada investigação',
  },

  whatWeOffer: {
    title: 'O que oferecemos',
    subtitle: 'Fornecemos inteligência acionável e gestão de exposição em toda a sua paisagem voltada para a internet.',
    services: {
      cti: {
        title: 'Inteligência de Ameaças Cibernéticas',
        items: [
          'Inteligência da Dark Web: vazamentos, exposição de segredos, conversas criminosas',
          'Monitoramento e Proteção de Marca',
          'Descoberta de Shadow IT',
          'Análise de impacto acionável e orientação de mitigação',
        ],
      },
      asm: {
        title: 'Gestão de Superfície de Ataque',
        items: [
          'Mapeamento de perímetro externo',
          'Identificação de exposição de serviços e portas',
          'Descoberta contínua de riscos voltados para a internet',
        ],
      },
      assessments: {
        title: 'Avaliações de Segurança',
        items: [
          'Testes de penetração Black, Grey e White Box',
          'Testes de aplicação, infraestrutura e sistemas internos',
          'Validação orientada por exploits de risco do mundo real',
        ],
      },
      audit: {
        title: 'Auditoria e Conformidade',
        items: [
          'Avaliações de lacunas (ISO 27001, NIS2, SOC2, GDPR, PCI-DSS)',
          'Alinhamento de políticas, processos e controles',
          'Planejamento de remediação e suporte à implementação',
        ],
      },
      redteam: {
        title: 'Operações de Red Team',
        items: [
          'Simulação de adversários',
          'Intrusões baseadas em objetivos',
          'Teste de stress de detecção e resposta',
        ],
      },
      ciso: {
        title: 'CISO como Serviço',
        items: [
          'Liderança CISO fracionária',
          'Roteiro estratégico de cibersegurança',
          'Gestão de riscos, governança e relatórios para o conselho',
        ],
      },
    },
  },

  cta: {
    title: 'Fique à frente das ameaças da darkweb com a Hackstle',
    button: 'Agendar briefing de ameaças',
  },
  
  common: {
    loading: 'Carregando...',
    error: 'Ocorreu um erro',
    retry: 'Tentar novamente',
    contact: 'Contato',
  },
};