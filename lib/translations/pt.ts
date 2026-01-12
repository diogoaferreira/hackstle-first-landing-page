import { Translations } from '../i18n';

export const pt: Translations = {
  header: {
    home: 'Início',
    ourServices: 'Os nossos serviços',
    whyHackstle: 'Porquê a Hackstle',
    aboutUs: 'Sobre nós',
    blog: 'Blog',
    contactUs: 'Contacte-nos',
  },
  
  hero: {
    title: 'Somos os seus olhos lá fora',
    subtitle: 'Transformamos Threat Intelligence em ação. Monitorizamos a dark web em busca de leaks, exploits e chatter criminoso, eliminamos o ruído e dizemos-lhe exatamente o que fazer. Sem necessidade de especialistas do seu lado. Sem suposições. Sem tretas.',
    cta: 'Solicitar briefing de intelligence',
    terminalTitle: 'hackstle.cmd',
  },
  
  features: {
    title: 'Threat Intelligence combinada com visibilidade da attack surface',
    services: {
      s1: {
        title: 'Descoberta de ativos externos & mapeamento de Shadow IT',
        description: 'Identifique toda a infraestrutura exposta à Internet, serviços cloud, sistemas SaaS, domínios, subdomínios e ativos não geridos usando métodos de intelligence ativos e passivos.',
      },
      s2: {
        title: 'Enumeração de exposições & avaliação de serviços',
        description: 'Catalogue serviços expostos, más configurações, protocolos fracos, tecnologias desatualizadas e componentes inseguros no perímetro e em ambientes cloud.',
      },
      s3: {
        title: 'Monitorização de ameaças na Dark Web',
        description: 'Monitorize leaks de ransomware, venda de exploits, dumps de dados, exposição de credenciais e chatter criminoso associado aos seus ativos, colaboradores, marcas e infraestrutura.',
      },
      s4: {
        title: 'Deteção de credenciais expostas & abuso de identidade',
        description: 'Identifique credenciais comprometidas, access keys, tokens e uso indevido de identidades em mercados da dark web, breach dumps e ecossistemas de credential harvesting.',
      },
      s5: {
        title: 'Monitorização de incidentes em terceiros',
        description: 'Acompanhe breaches de fornecedores e incidentes de ransomware para compreender riscos em cadeia na supply chain.',
      },
      s6: {
        title: 'Monitorização de abuso de marca, domínio & infraestrutura',
        description: 'Detete kits de phishing, sites clonados, typosquatting e atividade maliciosa em domínios, coordenando takedowns rápidos.',
      },
      s7: {
        title: 'Priorização de vulnerabilidades & exploits',
        description: 'Classifique exposições com base no interesse dos atacantes, maturidade do exploit, impacto no negócio e threat intelligence ativa — não apenas no CVSS.',
      },
      s8: {
        title: 'Validação de exposições orientada por ameaças & monitorização contínua de risco',
        description: 'Correlacione exposições com comportamento real de atacantes, valide explorabilidade e caminhos de ataque, e acompanhe alterações de forma contínua para manter riscos elevados sob controlo.',
      },
      s9: {
        title: 'Workflows de remediação acionáveis',
        description: 'Forneça passos de mitigação priorizados e orientados por intelligence, automatizando alertas para canais de SOC, sistemas de tickets e parceiros de takedown.',
      },
    },
    planetSignals: {
      criticalPortExposed: {
        title: 'Porta crítica exposta',
        detail: 'FTP no edge-gateway deixado aberto há 32m',
        status: 'Risco elevado',
        metric: 'Sinal ativo',
      },
      exploitChatterSpiking: {
        title: 'Aumento de chatter sobre exploits',
        detail: 'CVE-2024-5039 associado a app-core',
        status: 'Exploit',
        metric: '+18 menções',
      },
      freshCredentialDump: {
        title: 'Novo dump de credenciais',
        detail: 'Pacote finance ops / 184 contas',
        status: 'Novo',
        metric: 'A indexar',
      },
      shadowServiceFound: {
        title: 'Serviço shadow detetado',
        detail: 'EDR + fornecedor SSO não registados',
        status: 'Investigar',
        metric: 'Novo ativo',
      },
    },
  },
  
  businessCategories: {
    categories: {
      asset: 'ASSET',
      alert: 'Alerta',
      intel: 'INTEL',
      zeroday: '0DAY',
      leaks: 'LEAKS',
      cve: 'CVE',
      iocs: 'IOCs',
      ops: 'OPS',
    },
  },

  blog: {
    title: 'Intelligence recente da equipa Hackstle',
    subtitle: 'Artigos curtos e acionáveis sobre monitorização da dark web, correlação de CVEs, leaks de credenciais e incidentes em terceiros.',
    viewAllPosts: 'Ver todos os artigos',
    readingTime: 'min de leitura',
    // Blog page specific
    pageTitle: 'Briefings de intelligence da Hackstle',
    pageSubtitle: 'Insights dos nossos analistas sobre deteções na dark web, exposições na attack surface e como responder com menos ruído e mais ação.',
    readPost: 'Ler artigo',
  },

  // Contact
  contact: {
    pageTitle: 'Fale com a Hackstle',
    pageSubtitle: 'Solicite um briefing ao vivo, agende uma demonstração da plataforma ou partilhe detalhes de um incidente na dark web que precise de triagem urgente.',
    expectationsTitle: 'O que esperar',
    expectationsSubtitle: 'Resposta rápida',
    expectationsDescription: 'Um analista da Hackstle entrará em contacto com os próximos passos — fontes de logs que podemos monitorizar, amostras de dados expostos para validação e um cronograma para contenção.',
    services: {
      darkwebTriage: {
        title: 'Triagem de leaks na dark web',
        description: 'Validação rápida de paste sites, fóruns e canais de breach.',
      },
      attackSurfaceMapping: {
        title: 'Mapeamento da attack surface',
        description: 'Ativos expostos correlacionados com exploits ativos e CVEs.',
      },
      thirdPartyWatch: {
        title: 'Monitorização de incidentes em terceiros',
        description: 'Visibilidade sobre fornecedores e parceiros ligados à sua organização.',
      },
    },
    urgentContact: 'Prefere falar agora? Envie um email para hello@hackstle.io em casos urgentes.',
    form: {
      title: 'Envie-nos uma mensagem',
      subtitle: 'Respondemos rapidamente a notificações urgentes de leaks, exposições de credenciais e CVEs emergentes associados aos seus ativos.',
      name: 'Nome',
      workEmail: 'Email profissional',
      company: 'Empresa',
      role: 'Função',
      howCanWeHelp: 'Como podemos ajudar?',
      messagePlaceholder: 'Partilhe o incidente, ativos ou CVEs que pretende que monitorizemos.',
      briefingRequest: 'Solicitar briefing de ameaças de 30 minutos',
      submitButton: 'Enviar pedido',
      submitting: 'A enviar...',
      successMessage: 'Obrigado — a nossa equipa entrará em contacto brevemente.',
      // Placeholders
      namePlaceholder: 'Alex Ramirez',
      emailPlaceholder: 'alex@empresa.com',
      companyPlaceholder: 'Acme Security',
      rolePlaceholder: 'Responsável SOC',
    },
  },

  differentiators: {
    badge: 'Porquê a Hackstle',
    title: 'Porquê a Hackstle',
    subtitle: 'A Hackstle elimina ruído, adapta a cobertura ao seu ambiente e transforma intelligence da dark web em ações claras e decisivas.',
    items: {
      tailoredIntelligence: {
        title: 'Intelligence adaptada, não templates',
        description: 'Os engagements são ajustados às suas marcas, attack surface e contexto do setor, garantindo que os analistas veem apenas o que é relevante para a sua organização.',
      },
      signalOverNoise: {
        title: 'Sinal acima do ruído',
        description: 'Triagem focada e validação por analistas eliminam falsos positivos, tornando menções na dark web, credenciais expostas e CVEs fiáveis e acionáveis.',
      },
      clarityWithoutSprawl: {
        title: 'Clareza sem proliferação de dashboards',
        description: 'Entregamos insights em vistas simplificadas em vez de dashboards complexos, permitindo que SOCs e executivos cheguem mais rápido a decisões.',
      },
      reportingThatLands: {
        title: 'Relatórios que fazem sentido',
        description: 'Relatórios prontos para executivos resumem impacto, urgência e ações recomendadas, permitindo briefings com confiança.',
      },
    },
  },

  whatWeOffer: {
    title: 'O que oferecemos',
    subtitle: 'Entregamos intelligence acionável e gestão de exposições em toda a sua presença na Internet.',
    services: {
      cti: {
        title: 'Cyber Threat Intelligence',
        items: [
          'Dark Web Intelligence: leaks, exposição de segredos, chatter criminoso',
          'Monitorização e proteção de marca',
          'Descoberta de Shadow IT',
          'Análise de impacto acionável & orientação para mitigação',
        ],
      },
      asm: {
        title: 'Attack Surface Management',
        items: [
          'Mapeamento do perímetro externo',
          'Identificação de serviços e portas expostas',
          'Descoberta contínua de riscos expostos à Internet',
        ],
      },
      assessments: {
        title: 'Security Assessments',
        items: [
          'Testes de intrusão Black, Grey e White Box',
          'Testes a aplicações, infraestrutura e sistemas internos',
          'Validação de risco real orientada por exploits',
        ],
      },
      audit: {
        title: 'Auditoria & Compliance',
        items: [
          'Avaliações de gaps (ISO 27001, NIS2, SOC2, GDPR, PCI-DSS)',
          'Alinhamento de políticas, processos e controlos',
          'Planeamento de remediação & apoio à implementação',
        ],
      },
      redteam: {
        title: 'Operações de Red Team',
        items: [
          'Simulação de adversários',
          'Intrusões orientadas a objetivos',
          'Stress-testing de deteção e resposta',
        ],
      },
      ciso: {
        title: 'CISO as a Service',
        items: [
          'Liderança CISO fracionada',
          'Roadmap estratégico de cibersegurança',
          'Gestão de risco, governance e reporting ao board',
        ],
      },
    },
  },

  certifications: {
    badge: 'Equipa altamente certificada',
    title: 'Especialistas de elite por trás de cada alerta',
    subtitle: 'Os analistas da Hackstle combinam tradecraft da dark web com rigor de reporting empresarial. De operadores de Red Team a frameworks de threat intelligence, a equipa está certificada para lidar com incidentes complexos com confiança.',
    certificatesTitle: 'Certificações que trazemos para cada investigação',
  },

  cta: {
    title: 'Antecipe-se às ameaças da dark web com a Hackstle',
    button: 'Agendar briefing de ameaças',
  },
  
  common: {
    loading: 'A carregar...',
    error: 'Ocorreu um erro',
    retry: 'Tentar novamente',
    contact: 'Contacto',
  },
};