import { Translations } from '../i18n';

export const pt: Translations = {
  header: {
    home: 'Início',
    ourServices: 'Os Nossos Serviços',
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
    title: 'Inteligência de ameaças integrada com consciência da superfície de ataque',
    services: {
      darkwebThreatMonitoring: {
        title: 'Monitoramento de Ameaças da Darkweb',
        description: 'Rastreie posts de ransomware, vazamentos de dados e conversas de atores de ameaças emergentes em marketplaces e fóruns mapeados para suas marcas e executivos.',
      },
      leakedCredentialTriage: {
        title: 'Triagem de Credenciais Vazadas',
        description: 'Identifique novos vazamentos de credenciais, valide a exposição e promova takedowns ou resets antes que adversários utilizem o acesso roubado.',
      },
      cveExploitCorrelation: {
        title: 'Correlação de CVE e Exploits',
        description: 'Conecte conversas sobre vulnerabilidades e drops de proof-of-concept aos ativos que você possui, com severidade baseada na explorabilidade e intenção ativa da darkweb.',
      },
      attackSurfaceManagement: {
        title: 'Gerenciamento de Superfície de Ataque',
        description: 'Mapeie continuamente ativos voltados para a internet, descubra shadow IT e correlacione exposições com inteligência para que a remediação atinja o que os atacantes veem primeiro.',
      },
      redTeamingOperations: {
        title: 'Operações de Red Team',
        description: 'Simule adversários modernos, combine inteligência da darkweb e teste detecções com caminhos de ataque ativos mapeados para seu ambiente.',
      },
      penetrationTesting: {
        title: 'Testes de Penetração',
        description: 'Valide fraquezas exploráveis com pentests curados que alimentam correções priorizadas de volta para equipes de engenharia e governança.',
      },
      thirdPartyIncidentWatch: {
        title: 'Monitoramento de Incidentes de Terceiros',
        description: 'Monitore violações e reivindicações de ransomware de fornecedores para entender o risco em cascata para sua cadeia de suprimentos e clientes.',
      },
      actionableWorkflows: {
        title: 'Fluxos de Trabalho Acionáveis',
        description: 'Automatize alertas para canais SOC, ticketing e parceiros de takedown com contexto que reduz a investigação para minutos.',
      },
      brandProtectionTakedowns: {
        title: 'Proteção de Marca e Takedowns',
        description: 'Caçe kits de phishing sofisticados, sites clones e typosquats, depois coordene takedowns rápidos de domínios para manter a confiança do cliente e o valor da marca intactos.',
      },
    },
    planetSignals: {
      criticalPortExposed: {
        title: 'Porta crítica exposta',
        detail: 'FTP no edge-gateway deixado aberto há 32m',
        status: 'Alto risco',
        metric: 'Sinal ao vivo',
      },
      exploitChatterSpiking: {
        title: 'Conversa sobre exploit aumentando',
        detail: 'CVE-2024-5039 mapeado para app-core',
        status: 'Exploit',
        metric: '+18 menções',
      },
      freshCredentialDump: {
        title: 'Novo dump de credenciais',
        detail: 'Pacote de ops financeiras / 184 contas',
        status: 'Novo',
        metric: 'Indexando agora',
      },
      shadowServiceFound: {
        title: 'Serviço sombra encontrado',
        detail: 'EDR + provedor SSO não rastreado',
        status: 'Investigar',
        metric: 'Novo ativo',
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