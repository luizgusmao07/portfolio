export type Language = 'pt' | 'en'

export const languages = {
  pt: 'Português',
  en: 'English',
} as const

export const profile = {
  name: 'Luiz Gusmão',
  fullName: 'Luiz Guilherme Tristão Gusmão',
  initials: 'LG',
  location: 'São Paulo, Brazil',
  email: 'lgtgusmao@hotmail.com',
  links: {
    linkedIn: 'https://www.linkedin.com/in/luiz-guilherme-t-284716273/',
    github: 'https://github.com/luizgusmao07',
  },
  current: {
    role: 'Mobile Software Engineer',
    company: 'CloudWalk, Inc.',
  },
  photo: '/luiz-profile.jpg',
  focus: ['Flutter', 'Dart', 'Rust', 'InfinitePay', 'JIM US'],
} as const

export const siteContent = {
  pt: {
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Skills',
      education: 'Formação',
    },
    actions: {
      viewLinkedIn: 'Ver LinkedIn',
      sendEmail: 'Enviar email',
      viewGithub: 'GitHub',
      switchTo: 'Switch to English',
      switchTheme: 'Alternar tema',
    },
    hero: {
      title: 'Mobile Software Engineer na CloudWalk.',
      subtitle:
        'Trabalho na evolução de experiências mobile do InfinitePay e do JIM US, conectando Flutter, Dart e Rust a decisões práticas de produto.',
      detail:
        'Minha rotina mistura engenharia mobile, investigação de problemas reais de clientes e uso intencional de IA para acelerar desenvolvimento com qualidade.',
      availability: 'São Paulo, Brasil',
    },
    about: {
      label: 'Sobre',
      title: 'Perfil profissional',
      paragraphs: [
        'Atuo na construção e melhoria de experiências mobile em produtos da CloudWalk, especialmente InfinitePay e JIM US.',
        'Meu trabalho combina Flutter, Dart e Rust com investigação de problemas, cuidado com experiência do usuário e uso intencional de ferramentas de inteligência artificial.',
        'Tenho formação técnica em Desenvolvimento de Sistemas e curso Análise e Desenvolvimento de Sistemas na FATEC Ipiranga.',
      ],
    },
    experience: {
      label: 'Experiência',
      title: 'Trajetória na CloudWalk',
    },
    skills: {
      label: 'Skills',
      title: 'Tecnologias e foco atual',
      description:
        'O site prioriza as tecnologias e práticas que refletem o momento profissional atual.',
    },
    education: {
      label: 'Formação',
      title: 'Base acadêmica',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
    },
    actions: {
      viewLinkedIn: 'View LinkedIn',
      sendEmail: 'Send email',
      viewGithub: 'GitHub',
      switchTo: 'Mudar para Português',
      switchTheme: 'Toggle theme',
    },
    hero: {
      title: 'Mobile Software Engineer at CloudWalk.',
      subtitle:
        'I work on mobile product experiences for InfinitePay and JIM US, connecting Flutter, Dart and Rust with practical product decisions.',
      detail:
        'My day-to-day combines mobile engineering, investigation of real customer issues and intentional use of AI to move faster without losing quality.',
      availability: 'São Paulo, Brazil',
    },
    about: {
      label: 'About',
      title: 'Professional profile',
      paragraphs: [
        'I build and improve mobile experiences for CloudWalk products, especially InfinitePay and JIM US.',
        'My work combines Flutter, Dart and Rust with problem investigation, user experience care and intentional use of artificial intelligence tools.',
        'I have a technical background in Systems Development and I am currently pursuing an Associate Degree in Systems Analysis and Development at FATEC Ipiranga.',
      ],
    },
    experience: {
      label: 'Experience',
      title: 'CloudWalk journey',
    },
    skills: {
      label: 'Skills',
      title: 'Technologies and current focus',
      description:
        'The site prioritizes the technologies and practices that match the current profile.',
    },
    education: {
      label: 'Education',
      title: 'Academic background',
    },
  },
} as const

export const experiences = [
  {
    period: 'May 2026 - Present',
    title: profile.current.role,
    organization: profile.current.company,
    description: {
      pt: 'Construção e melhoria de experiências mobile em produtos como InfinitePay e JIM US, com Flutter, Dart, Rust e desenvolvimento assistido por IA.',
      en: 'Building and improving mobile experiences in products such as InfinitePay and JIM US with Flutter, Dart, Rust and AI-assisted development.',
    },
    current: true,
  },
  {
    period: 'Feb 2026 - May 2026',
    title: 'Customer Support Engineer II',
    organization: profile.current.company,
    description: {
      pt: 'Investigação de problemas, suporte a clientes e colaboração com times internos para melhorar processos e qualidade de produto.',
      en: 'Investigated issues, supported customers and collaborated with internal teams to improve processes and product quality.',
    },
  },
  {
    period: 'Sep 2025 - Jan 2026',
    title: 'Customer Support Engineer I',
    organization: profile.current.company,
    description: {
      pt: 'Atendimento a clientes, análise de problemas operacionais e contribuição para melhorias em ferramentas e experiência do cliente.',
      en: 'Supported customers, analyzed operational issues and contributed to improvements in internal tools and customer experience.',
    },
  },
  {
    period: 'Jun 2025 - Sep 2025',
    title: 'Customer Support Engineer Intern',
    organization: profile.current.company,
    description: {
      pt: 'Início da trajetória na CloudWalk com suporte a clientes, investigação de problemas e otimização de processos.',
      en: 'Started the journey at CloudWalk by supporting customers, investigating issues and optimizing processes.',
    },
  },
] as const

export const education = [
  {
    period: 'Jan 2025 - Dec 2026',
    title: {
      pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      en: 'Associate Degree in Systems Analysis and Development',
    },
    organization: 'FATEC Ipiranga Pastor Enéas Tognini',
  },
  {
    period: 'Feb 2022 - Dec 2024',
    title: {
      pt: 'Técnico em Desenvolvimento de Sistemas',
      en: 'Technical High School in Systems Development',
    },
    organization: 'ETEC Heliópolis',
  },
] as const

export const skillGroups = [
  {
    title: 'Mobile Engineering',
    skills: ['Flutter', 'Dart', 'Mobile Development', 'Product Experience'],
  },
  {
    title: 'Systems',
    skills: ['Rust', 'Debugging', 'Problem Investigation'],
  },
  {
    title: 'Product & Workflow',
    skills: ['Product Engineering', 'AI-assisted Development', 'Customer Experience'],
  },
] as const
