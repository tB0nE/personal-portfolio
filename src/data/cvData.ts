import type { CVData } from '../types/cvTypes';

// Import Professional Assets
import paragonLogo from '../assets/paragon_logo_cut.webp';
import paragonCrop from '../assets/paragon_crop.png';
import mpesaCut from '../assets/m-pesa_cut.png';
import group4cCut from '../assets/4c_group_cut.jpg';
import cimsoCut from '../assets/cimso-cut.png';
import cimsoWebCut from '../assets/cimsoweb_cut_2.png';

export const cvDataEn: CVData = {
  name: "Tyrone Hattingh",
  title: "Senior Software Engineer",
  location: "Penne, Italy",
  phone: "+39 351 373 4420",
  email: "tyrone.hattingh@gmail.com",
  summary: "Senior software engineer with 20+ years of experience designing and delivering web-based systems across hospitality, telecommunications, fintech, and sustainability sectors. Experienced across the full software lifecycle including architecture design, backend services, frontend development, infrastructure deployment, and operational support. Comfortable working autonomously or within small senior teams, with experience contributing to systems ranging from startup platforms to financial APIs serving millions of users across multiple countries. Strong interest in modern AI-assisted workflows and creative technical development.",
  coreSkills: {
    languages: ["Python", "Django", "FastAPI", "JavaScript", "Node", "React", "MUI", "React Query", "React Hook Form"],
    infrastructure: ["Docker", "Git", "Linux Server Administration", "AWS", "API Design", "JSON Integration", "PostgreSQL", "MySQL"],
    additional: ["web2py", "Angular", "jQuery", "Bootstrap", "PHP", "Java (Spring)", "VB", "ASP", "Delphi", "WebSockets", "Apache", "Nginx", "Fabric", "Redmine", "SAFe / Agile"]
  },
  experience: [
    {
      company: "PARAGON IMPACT",
      role: "SENIOR SOFTWARE ENGINEER",
      period: "DECEMBER 2023 – PRESENT",
      description: "Working within a small senior engineering team developing an environmental impact assessment platform aligned with UN Sustainable Development Goals. Responsible primarily for frontend architecture and feature implementation.",
      bullets: [
        "Built and maintained complex React interfaces and workflows",
        "Implemented data management patterns using React Query",
        "Developed structured form systems using MUI and React Hook Form",
        "Integrated frontend with Django backend services",
        "Contributed to documentation and system clarity",
        "Maintained high production stability and low defect rates"
      ],
      technologies: ["React", "Python", "Django", "PostgreSQL", "Docker", "AWS"],
      images: [paragonLogo, paragonCrop]
    },
    {
      company: "4C GROUP - VODACOM",
      role: "SENIOR SOLUTIONS ENGINEER",
      period: "OCTOBER 2020 – NOVEMBER 2023",
      description: "Part of an API engineering team supporting mobile financial infrastructure powering M-Pesa payment systems across multiple countries and millions of users.",
      bullets: [
        "Designed logical API flows supporting wallet transaction systems",
        "Developed advanced SQL procedures and mediation logic",
        "Contributed to security and reliability improvements",
        "Participated in complex coordinated deployments",
        "Built and maintained React-based API portal frontend",
        "Provided technical support and guidance within team"
      ],
      technologies: ["SQL", "React", "Java Spring", "API Mediation"],
      images: [mpesaCut, group4cCut]
    },
    {
      company: "CIMSO DEVELOPMENT",
      role: "SOFTWARE ARCHITECT",
      period: "MAY 2011 – SEPTEMBER 2020",
      description: "Led web architecture and infrastructure for hospitality software provider serving global clients. Sole web specialist within development team.",
      bullets: [
        "Designed and delivered Cimsoweb v2 and v3 platforms",
        "Restructured database architecture and modernized codebase",
        "Implemented real-time socket communication booking system",
        "Eliminated polling conflict issues during high load",
        "Managed global multi-region server deployments",
        "Automated infrastructure tasks via Python scripting",
        "Supported traffic spikes exceeding 100k users"
      ],
      technologies: ["Python", "web2py", "Angular", "Socket Communication", "Linux"],
      images: [cimsoCut, cimsoWebCut]
    }
  ],
  projects: [
    {
      title: "Local LLM Assistant Platform",
      year: "2024",
      description: "Full-stack system supporting local and remote language models, tool integrations, memory experimentation, and image generation workflows using React, FastAPI, and llama-cpp.",
      images: ["https://placehold.co/600x400?text=LLM+Chat", "https://placehold.co/600x400?text=Assistant+Config"]
    },
    {
      title: "AI-Assisted Writing & Illustration Workflow",
      year: "2023",
      description: "Command-line driven writing environment integrating version-controlled text storage and image generation pipelines to accelerate creative output.",
      images: ["https://placehold.co/600x400?text=CLI+Workflow", "https://placehold.co/600x400?text=AI+Generated+Art"]
    },
    {
      title: "Automated Document Generation System",
      year: "2024",
      description: "Prototype converting structured prompt input into formatted DOCX output to streamline manual quoting workflows using LLM-based parsing.",
      images: ["https://placehold.co/600x400?text=Doc+Gen+Input", "https://placehold.co/600x400?text=Formatted+Output"]
    },
    {
      title: "Published Comic — FADE",
      year: "2019",
      description: "Independently created and published complete illustrated narrative work. This project served as the foundation for many of my subsequent technical creative projects, exploring character consistency and world-building.",
      images: ["https://placehold.co/600x400?text=FADE+Cover", "https://placehold.co/600x400?text=FADE+Interior"]
    },
    {
      title: "Interactive Narrative Game Prototype",
      year: "2021",
      description: "Playable point-and-click experience built in Godot exploring hybrid creative pipelines. Focused on integrating high-fidelity 2D art with interactive storytelling mechanics.",
      images: ["https://placehold.co/600x400?text=Godot+Gameplay", "https://placehold.co/600x400?text=Dialogue+System"]
    }
  ],
  education: [
    {
      degree: "DIPLOMA",
      year: "2002",
      institution: "WS&L COMPUTER TRAINING CENTER",
      bullets: [
        "NCC Education International Diploma in Computer Studies",
        "Specialising in Computer Programming"
      ]
    }
  ],
  languages: [
    { name: "English", level: "Native" },
    { name: "Italian", level: "Conversational (B1)" }
  ],
  interests: [
    "Creative storytelling and illustration",
    "Game development experimentation",
    "Camping, travel, wine exploration",
    "AI and interactive media"
  ]
};

export const cvDataIt: CVData = {
  ...cvDataEn,
  title: "Ingegnere del Software Senior",
  location: "Penne, Italia",
  summary: "Ingegnere del software senior con oltre 20 anni di esperienza nella progettazione e fornitura di sistemi basati sul web nei settori dell'ospitalità, delle telecomunicazioni, del fintech e della sostenibilità. Esperto nell'intero ciclo di vita del software, tra cui progettazione dell'architettura, servizi backend, sviluppo frontend, implementazione dell'infrastruttura e supporto operativo. Comodo lavorando in autonomia o all'interno di piccoli team senior, con esperienza nel contribuire a sistemi che vanno dalle piattaforme startup alle API finanziarie che servono milioni di utenti in più paesi. Forte interesse per i moderni flussi di lavoro assistiti dall'IA e lo sviluppo tecnico creativo.",
  coreSkills: {
    languages: ["Python", "Django", "FastAPI", "JavaScript", "Node", "React", "MUI", "React Query", "React Hook Form"],
    infrastructure: ["Docker", "Git", "Amministrazione Server Linux", "AWS", "Progettazione API", "Integrazione JSON", "PostgreSQL", "MySQL"],
    additional: ["web2py", "Angular", "jQuery", "Bootstrap", "PHP", "Java (Spring)", "VB", "ASP", "Delphi", "WebSockets", "Apache", "Nginx", "Fabric", "Redmine", "SAFe / Agile"]
  },
  experience: [
    {
      company: "PARAGON IMPACT",
      role: "INGEGNERE DEL SOFTWARE SENIOR",
      period: "DICEMBRE 2023 – PRESENTE",
      description: "Lavoro all'interno di un piccolo team di ingegneria senior sviluppando una piattaforma di valutazione dell'impatto ambientale allineata agli Obiettivi di Sviluppo Sostenibile delle Nazioni Unite. Responsabile principalmente dell'architettura frontend e dell'implementazione delle funzionalità.",
      bullets: [
        "Costruito e mantenuto interfacce e flussi di lavoro React complessi",
        "Implementato modelli di gestione dei dati utilizzando React Query",
        "Sviluppato sistemi di moduli strutturati utilizzando MUI e React Hook Form",
        "Integrato il frontend con i servizi backend Django",
        "Contribuito alla documentazione e alla chiarezza del sistema",
        "Mantenuto un'elevata stabilità di produzione e bassi tassi di difettosità"
      ],
      technologies: ["React", "Python", "Django", "PostgreSQL", "Docker", "AWS"],
      images: [paragonLogo, paragonCrop]
    },
    {
      company: "4C GROUP - VODACOM",
      role: "INGEGNERE DELLE SOLUZIONI SENIOR",
      period: "OTTOBRE 2020 – NOVEMBRE 2023",
      description: "Parte di un team di ingegneria API che supporta l'infrastruttura finanziaria mobile per i sistemi di pagamento M-Pesa in più paesi e milioni di utenti.",
      bullets: [
        "Progettato flussi API logici a supporto dei sistemi di transazione del portafoglio",
        "Sviluppato procedure SQL avanzate e logica di mediazione",
        "Contribuito a miglioramenti della sicurezza e dell'affidabilità",
        "Partecipato a implementazioni coordinate complesse",
        "Costruito e mantenuto il frontend del portale API basato su React",
        "Fornito supporto tecnico e guida all'interno del team"
      ],
      technologies: ["SQL", "React", "Java Spring", "Mediazione API"],
      images: [mpesaCut, group4cCut]
    },
    {
      company: "CIMSO DEVELOPMENT",
      role: "ARCHITETTO DEL SOFTWARE",
      period: "MAGGIO 2011 – SETTEMBRE 2020",
      description: "Responsabile dell'architettura web e dell'infrastruttura per un fornitore di software per l'ospitalità che serve clienti globali. Unico specialista web all'interno del team di sviluppo.",
      bullets: [
        "Progettato e consegnato le piattaforme Cimsoweb v2 e v3",
        "Ristrutturato l'architettura del database e modernizzato il codice",
        "Implementato un sistema di prenotazione con comunicazione socket in tempo reale",
        "Eliminato i problemi di conflitto di polling durante carichi elevati",
        "Gestito implementazioni di server multi-regione globali",
        "Attività infrastrutturali automatizzate tramite script Python",
        "Supportato picchi di traffico superiori a 100.000 utenti"
      ],
      technologies: ["Python", "web2py", "Angular", "Comunicazione Socket", "Linux"],
      images: [cimsoCut, cimsoWebCut]
    }
  ],
  projects: [
    {
      title: "Piattaforma Assistente LLM Locale",
      year: "2024",
      description: "Sistema full-stack che supporta modelli linguistici locali e remoti, integrazioni di strumenti, sperimentazione della memoria e flussi di lavoro di generazione di immagini utilizzando React, FastAPI e llama-cpp.",
      images: ["https://placehold.co/600x400?text=LLM+Chat", "https://placehold.co/600x400?text=Assistant+Config"]
    },
    {
      title: "Flusso di Lavoro di Scrittura e Illustrazione Assistito da IA",
      year: "2023",
      description: "Ambiente di scrittura guidato da riga di comando che integra l'archiviazione di testo con controllo di versione e pipeline di generazione di immagini.",
      images: ["https://placehold.co/600x400?text=CLI+Workflow", "https://placehold.co/600x400?text=AI+Generated+Art"]
    },
    {
      title: "Sistema di Generazione Automatica di Documenti",
      year: "2024",
      description: "Prototipo che converte l'input prompt strutturato in output DOCX formattato per semplificare i flussi di lavoro dei preventivi manuali.",
      images: ["https://placehold.co/600x400?text=Doc+Gen+Input", "https://placehold.co/600x400?text=Formatted+Output"]
    },
    {
      title: "Fumetto Pubblicato — FADE",
      year: "2019",
      description: "Opera narrativa illustrata completa creata e pubblicata in modo indipendente. Questo progetto ha gettato le basi per molti dei miei successivi progetti creativi tecnici.",
      images: ["https://placehold.co/600x400?text=FADE+Cover", "https://placehold.co/600x400?text=FADE+Interior"]
    },
    {
      title: "Prototipo di Gioco Narrativo Interattivo",
      year: "2021",
      description: "Esperienza punta e clicca giocabile costruita in Godot esplorando pipeline creative ibride. Focalizzato sull'integrazione di arte 2D ad alta fedeltà con meccaniche di narrazione interattiva.",
      images: ["https://placehold.co/600x400?text=Godot+Gameplay", "https://placehold.co/600x400?text=Dialogue+System"]
    }
  ],
  education: [
    {
      degree: "DIPLOMA",
      year: "2002",
      institution: "WS&L COMPUTER TRAINING CENTER",
      bullets: [
        "Diploma Internazionale NCC Education in Studi Informatici",
        "Specializzazione in Programmazione Informatica"
      ]
    }
  ],
  languages: [
    { name: "Inglese", level: "Madrelingua" },
    { name: "Italiano", level: "Conversazionale (B1)" }
  ],
  interests: [
    "Narrazione creativa e illustrazione",
    "Sperimentazione nello sviluppo di giochi",
    "Campeggio, viaggi, esplorazione del vino",
    "IA e media interattivi"
  ]
};
