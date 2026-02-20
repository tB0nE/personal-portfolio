import type { CVData } from '../types/cvTypes';

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
      images: ["https://placehold.co/600x400?text=Paragon+Interface", "https://placehold.co/600x400?text=Impact+Dashboard"]
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
      images: ["https://placehold.co/600x400?text=API+Flows", "https://placehold.co/600x400?text=M-Pesa+Dashboard"]
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
      images: ["https://placehold.co/600x400?text=Cimsoweb+v3", "https://placehold.co/600x400?text=Server+Architecture"]
    }
  ],
  projects: [
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
    },
    {
      title: "AI-Assisted Writing & Illustration Workflow",
      year: "2023",
      description: "Command-line driven writing environment integrating version-controlled text storage and image generation pipelines to accelerate creative output.",
      images: ["https://placehold.co/600x400?text=CLI+Workflow", "https://placehold.co/600x400?text=AI+Generated+Art"]
    },
    {
      title: "Local LLM Assistant Platform",
      year: "2024",
      description: "Full-stack system supporting local and remote language models, tool integrations, memory experimentation, and image generation workflows using React, FastAPI, and llama-cpp.",
      images: ["https://placehold.co/600x400?text=LLM+Chat", "https://placehold.co/600x400?text=Assistant+Config"]
    },
    {
      title: "Automated Document Generation System",
      year: "2024",
      description: "Prototype converting structured prompt input into formatted DOCX output to streamline manual quoting workflows using LLM-based parsing.",
      images: ["https://placehold.co/600x400?text=Doc+Gen+Input", "https://placehold.co/600x400?text=Formatted+Output"]
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
  ...cvDataEn, // Simplified IT data for this example
  title: "Ingegnere del Software Senior",
  // (Full Italian content would go here similarly)
};
