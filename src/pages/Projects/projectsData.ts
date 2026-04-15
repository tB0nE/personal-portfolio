export type ProjectCategory = 'Web Applications' | 'DevOps' | 'AI Engineering' | 'Games & Comics';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  image?: string;
  link?: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  gallery?: string[];
  isCurrent?: boolean;
}

const getAssetUrl = (path: string) => {
  return new URL(`../../assets/${path}`, import.meta.url).href;
};

export const projects: Project[] = [
  {
    id: 'paragon',
    title: 'Paragon Impact',
    category: 'Web Applications',
    year: '2023-2026',
    image: getAssetUrl('paragon_logo_cut.webp'),
    link: 'https://paragonimpact.com/',
    shortDescription: 'An Impact Management and SDG Grading System',
    fullDescription: 'Working as a Senior Software Engineer within a small senior engineering team developing an environmental impact assessment platform aligned with UN Sustainable Development Goals. Responsible primarily for frontend architecture and feature implementation, building complex React interfaces, and integrating them with Django backend services while maintaining high production stability.',
    technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Docker', 'AWS', 'React Query', 'MUI'],
    gallery: []
  },
  {
    id: 'mpesa-dev',
    title: 'M-Pesa Development Portal',
    category: 'Web Applications',
    year: '2020-2023',
    image: getAssetUrl('m-pesa_cut.png'),
    link: 'https://www.m-pesa.africa/',
    shortDescription: 'Developer portal for M-Pesa APIs.',
    fullDescription: 'A developer portal that provides access to M-Pesa APIs, featuring documentation, testing sandboxes, and integration guides.',
    technologies: ['React', 'Java', 'Docker'],
    gallery: []
  },
  {
    id: 'cimsoweb',
    title: 'Cimsoweb',
    category: 'Web Applications',
    year: '2011-2020',
    image: getAssetUrl('cimsoweb_cut_2.png'),
    link: 'https://backoffice.cimso.com/software/details/cimsoweb',
    shortDescription: 'Hospitality management web application.',
    fullDescription: 'A web-based interface for Cimso hospitality management systems, streamlining operations for hotels and resorts.',
    technologies: ['Angular', 'API', 'Python', 'web2py', 'jquery', 'sqlite', 'postgres'],
    gallery: []
  },
  {
    id: 'housethat',
    title: 'Housethat',
    category: 'Web Applications',
    year: '2011',
    image: getAssetUrl('house_that_logo_1.png'),
    shortDescription: 'Real estate and housing platform.',
    fullDescription: 'A real estate platform that connects buyers and sellers, featuring advanced search capabilities and property management tools.',
    technologies: ['Python', 'web2py'],
    gallery: []
  },
  {
    id: 'franknet',
    title: 'Frank.net Wallboard',
    category: 'Web Applications',
    year: '2012',
    image: getAssetUrl('frank_logo_1.png'),
    shortDescription: 'Internal dashboard for Frank.net.',
    fullDescription: 'A real-time analytics and monitoring wallboard developed for Frank.net internal operations and performance tracking.',
    technologies: ['Python', 'web2py', 'SQL Server'],
    gallery: []
  },
  {
    id: 'cimso-devops',
    title: 'Cimso Development',
    category: 'DevOps',
    year: '2011-2020',
    image: getAssetUrl('cimso-cut.png'),
    link: 'https://www.cimso.com/',
    shortDescription: 'DevOps infrastructure for Cimso.',
    fullDescription: 'Implementation and management of CI/CD pipelines, cloud infrastructure, and deployment automation for Cimso software.',
    technologies: ['Redmine', 'postgres', 'apache', 'nginx', 'docker', 'fabric'],
    gallery: []
  },
  {
    id: 'vodacom-mpesa',
    title: 'Vodaphone - M-Pesa',
    category: 'DevOps',
    year: '2020-2023',
    image: getAssetUrl('m-pesa_cut.png'),
    link: 'https://www.m-pesa.africa/',
    shortDescription: 'A mobile wallet for Africa',
    fullDescription: 'DevOps engineering focused on scaling, monitoring, and maintaining the highly available infrastructure supporting M-Pesa services across multiple countries.',
    technologies: ['API', 'AWS', 'linux', 'ssh', 'git', 'mysql', 'cassandra', 'bash scripts'],
    gallery: []
  },
  {
    id: 'webdadi',
    title: 'Webdadi',
    category: 'DevOps',
    year: '2008-2010',
    image: getAssetUrl('webdadi_logo_1.png'),
    link: 'https://www.webdadi.com/',
    shortDescription: 'Property management system infrastructure.',
    fullDescription: 'Handled support, in house networking and IT support, did technical and training documentation, testing, and user training.',
    technologies: ['Windows', 'Helpdesk', 'CSS', 'Word', 'Excel', 'Technical Documentation'],
    gallery: []
  },
  {
    id: 'agentic-master',
    title: 'Agentic Master',
    category: 'AI Engineering',
    year: '2026',
    image: getAssetUrl('agentic_master_1.png'),
    link: 'https://github.com/tB0nE/am-core',
    shortDescription: 'An Agentic AI Framework',
    fullDescription: 'A modular agentic AI framework designed to be used as a foundation for building complex AI applications and projects. It features specialized modules for image generation, memory organization, text-to-speech (TTS), and more, allowing for highly customizable and extensible AI workflows.',
    technologies: ['React', 'Vector DB', 'LLM', 'TTS', 'Image Generation', 'Python', 'FastAPI'],
    gallery: [],
    isCurrent: true
  },
  {
    id: 'narrat-writer',
    title: 'Narrat Writer',
    category: 'AI Engineering',
    year: '2025',
    image: getAssetUrl('narrat_writer_1.png'),
    link: 'https://github.com/tB0nE/narrat_writer',
    shortDescription: 'AI-assisted creative writing tool.',
    fullDescription: 'A specialized tool leveraging LLMs to assist writers in world-building, character development, and narrative generation.',
    technologies: ['Python', 'React', 'Node.js', 'FastAPI'],
    gallery: [],
    isCurrent: true
  },
  {
    id: 'katrinbot',
    title: 'KatrinBot',
    category: 'AI Engineering',
    year: '2024',
    image: getAssetUrl('katrinbot_1.png'),
    shortDescription: 'Intelligent conversational AI.',
    fullDescription: 'A custom conversational AI bot designed for specific domain knowledge retrieval and interactive user assistance.',
    technologies: ['Agentic Master', 'Python', 'ComfyUI', 'TTS', 'React', 'FastAPI'],
    gallery: []
  },
  {
    id: 'fade-comic',
    title: 'FADE (Comic)',
    category: 'Games & Comics',
    year: '2020',
    image: getAssetUrl('fade_1.jpg'),
    link: 'https://www.bobshop.co.za/fade-prototype-hattingh-tyrone/p/642624398',
    shortDescription: 'Gritty sci-fi narrative comic.',
    fullDescription: 'A gritty science fiction comic book series blending traditional narrative storytelling with AI-assisted creative workflows.',
    technologies: ['Procreate', 'Photoshop', 'Illustration'],
    gallery: []
  },
  {
    id: 'fade-game',
    title: 'FADE (Game)',
    category: 'Games & Comics',
    year: '2022',
    image: getAssetUrl('fade_game_1.png'),
    link: 'https://github.com/tB0nE/fade-escoria',
    shortDescription: 'A point and click sci-fi game prototype',
    fullDescription: 'A game adaptation of the FADE comic universe, built using the Godot engine to explore interactive narrative experiences.',
    technologies: ['Godot', 'GDScript', 'Photoshop', 'Procreate'],
    gallery: []
  },
  {
    id: 'dunoon-game',
    title: 'Dunoon (Game)',
    category: 'Games & Comics',
    year: '2026',
    image: getAssetUrl('dunoon_1.png'),
    link: 'https://github.com/tB0nE/dunoon2056',
    shortDescription: 'A narrative visual novel game where choice matters',
    fullDescription: 'An upcoming thought provoking visual novel set in a dark future.',
    technologies: ['React', 'Narrat Engine', 'Procreate', 'Narrat Writer'],
    gallery: [],
    isCurrent: true
  }
];
