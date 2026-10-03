import { ProfileConfig, ProjectItem, ServiceItem, SkillItem, CurrentlyLearningItem, CertificationItem } from '../types';
import certAiSimplilearn from '../assets/images/certificate_ai_simplilearn.svg';
import certGenAiStudio from '../assets/images/certificate_generative_ai_studio.svg';
import projectPortfolioShowcase from '../assets/images/project_portfolio_showcase_1791024052281.jpg';
import projectFashionLanding from '../assets/images/project_fashion_landing_1791025478405.jpg';
import projectBusinessLanding from '../assets/images/project_business_landing_1791024065271.jpg';

export const DEFAULT_PROFILE: ProfileConfig = {
  name: 'Bakhtawar Zorain',
  title: 'Creative Web Designer & Developer',
  tagline: 'Building clean, modern and responsive digital experiences.',
  email: 'EMAIL_HERE',
  fiverrUrl: 'FIVERR_LINK_HERE',
  linkedinUrl: 'LINKEDIN_LINK_HERE',
  githubUrl: 'https://github.com/username',
  location: 'Remote · Worldwide',
  availability: 'Open for freelance web design & development projects',
};

export const APPROACH_ITEMS = [
  {
    number: '01',
    title: 'Clean Design',
    description:
      'Prioritizing clarity, visual harmony, and intentional whitespace. Every element serves a deliberate purpose, eliminating visual noise so your brand and message communicate with effortless elegance.',
    highlights: ['Minimal visual hierarchy', 'Curated typographic scales', 'Zero decorative fluff'],
  },
  {
    number: '02',
    title: 'Responsive Experience',
    description:
      'Engineered fluidly across all devices. Whether viewed on a high-density 4K monitor, iPad tablet, or modern smartphone, the layout, typography, and touch interactions adapt naturally.',
    highlights: ['Mobile-first architecture', 'Touch-friendly layout', 'Cross-browser stability'],
  },
  {
    number: '03',
    title: 'User-Focused Development',
    description:
      'Building performant, accessible, and intuitive digital interfaces. Fast load speeds, semantic markup, and friction-free user flows ensure your visitors convert into loyal clients.',
    highlights: ['Semantic HTML5 & ARIA', 'Lightweight performant code', 'Intuitive interactive feedback'],
  },
];

export const SKILL_ITEMS: SkillItem[] = [
  {
    id: 'html',
    title: 'HTML',
    category: 'core',
    level: 'Strong',
    shortDesc: 'Semantic markup, accessible page structure, and clean web foundations.',
    fullDesc:
      'Comfortable writing clean, semantic HTML5 markup. Understanding document structure, forms, basic accessibility tags (ARIA), and SEO meta tags.',
    focusArea: 'Semantic Structure & Accessibility',
    features: ['Semantic Elements (main, article, nav)', 'Accessible Document Structure', 'Form Inputs & Validation', 'SEO Meta Tags'],
    sampleCode: {
      language: 'HTML5',
      snippet: `<header class="site-header">
  <nav aria-label="Main Navigation">
    <a href="#projects" class="nav-item">Projects</a>
    <a href="#about" class="nav-item">About</a>
  </nav>
</header>`,
    },
  },
  {
    id: 'css',
    title: 'CSS',
    category: 'core',
    level: 'Strong',
    shortDesc: 'Modern layouts with Flexbox, CSS Grid, Tailwind CSS, and clean typography.',
    fullDesc:
      'Solid command of modern CSS styling including Flexbox, CSS Grid systems, custom properties, and utility-first Tailwind CSS for responsive styling.',
    focusArea: 'Layouts & Tailwind CSS',
    features: ['CSS Grid & Flexbox Layouts', 'Tailwind CSS Utility Styling', 'Responsive Media Queries', 'Custom Variables & Spacing'],
    sampleCode: {
      language: 'CSS3',
      snippet: `.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}`,
    },
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    category: 'engineering',
    level: 'Basic',
    shortDesc: 'Core programming basics, event listeners, and simple DOM manipulation.',
    fullDesc:
      'Basic understanding of JavaScript fundamentals including variables, functions, conditional logic, event handling, and dynamic DOM updates.',
    focusArea: 'Fundamentals & DOM Interaction',
    features: ['Variables, Functions & Loops', 'DOM Event Listeners (click, submit)', 'Basic Form Handling', 'Simple Array Methods'],
    sampleCode: {
      language: 'JavaScript',
      snippet: `const toggleMenu = document.querySelector('#menu-btn');
toggleMenu.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});`,
    },
  },
  {
    id: 'responsive-design',
    title: 'Responsive Web Design',
    category: 'design',
    level: 'Intermediate',
    shortDesc: 'Mobile-first layout construction, adaptive breakpoints, and fluid typography.',
    fullDesc:
      'Experienced in creating websites that adapt gracefully across mobile phones, tablets, and desktop displays using responsive units and breakpoint strategies.',
    focusArea: 'Mobile-First Adaptation',
    features: ['Mobile-First CSS Strategy', 'Viewport Breakpoints', 'Fluid Typography & Scaling', 'Touch-Friendly Navigation'],
    sampleCode: {
      language: 'CSS / Media Queries',
      snippet: `/* Mobile-first layout */
.layout-wrapper {
  padding: 1rem;
}
@media (min-width: 768px) {
  .layout-wrapper { padding: 2.5rem; }
}`,
    },
  },
  {
    id: 'ui-design',
    title: 'UI Design',
    category: 'design',
    level: 'Basic',
    shortDesc: 'Visual hierarchy, typography choices, intentional spacing, and clean layouts.',
    fullDesc:
      'Basic practical foundation in user interface aesthetics. Focused on clean typography, balanced contrast, whitespace distribution, and simple wireframes.',
    focusArea: 'Visual Structure & Typography',
    features: ['Typography Hierarchy & Contrast', 'Intentional Whitespace Layout', 'Clean Color Distribution', 'Basic Interface Prototyping'],
    sampleCode: {
      language: 'Design Tokens',
      snippet: `/* Clean Minimal Palette */
--canvas: #FAFAF8;
--surface: #FFFFFF;
--text: #121316;
--muted: #64748B;`,
    },
  },
  {
    id: 'website-development',
    title: 'Website Development',
    category: 'engineering',
    level: 'Learning',
    shortDesc: 'Front-end development processes, version control, and multi-page site assembly.',
    fullDesc:
      'Actively learning modern front-end development workflows, Git version control, component construction, and cross-browser testing for client-ready websites.',
    focusArea: 'Front-End Assembly & Workflows',
    features: ['Git Version Control Basics', 'Component Page Assembly', 'Cross-Browser Verification', 'Clean Code Organization'],
    sampleCode: {
      language: 'Workflow',
      snippet: `# Development pipeline
git status
npm run dev
# Testing layouts across screen sizes`,
    },
  },
];

export const CURRENTLY_LEARNING_ITEMS: CurrentlyLearningItem[] = [
  {
    title: 'JavaScript',
    description:
      'Deepening practical skills in modern ES6+ concepts, asynchronous operations (fetch/promises), and building dynamic interactive features.',
    focusTopics: ['Modern ES6+ Syntax', 'DOM Manipulation & Events', 'Async Programming & APIs'],
  },
  {
    title: 'Modern Web Development',
    description:
      'Learning component-driven architectures, modern front-end build tools, efficient modular code, and deployment practices.',
    focusTopics: ['Component Architecture', 'Tooling & Build Pipelines', 'Performance Optimization'],
  },
  {
    title: 'UI/UX Design',
    description:
      'Exploring user-friendly layout patterns, usability principles, design systems, and creating polished prototypes in Figma.',
    focusTopics: ['Design Systems & Spacing', 'Figma Prototyping', 'User-Centered Wireframing'],
  },
];

export const CERTIFICATION_ITEMS: CertificationItem[] = [
  {
    id: 'cert-ai',
    field: 'Artificial Intelligence',
    certificateName: 'Introduction to Artificial Intelligence',
    issuer: 'Simplilearn SkillUp',
    date: '3rd October 2026',
    code: '10828449',
    image: certAiSimplilearn,
    certificateUrl: certAiSimplilearn,
    description:
      'Certificate of Completion awarded to Bakhtawar Zorain for successfully completing the online course Introduction to Artificial Intelligence on Simplilearn SkillUp.',
    skillsCovered: ['AI Fundamentals', 'Intelligent Systems', 'Core Principles', 'Code: 10828449'],
  },
  {
    id: 'cert-ai-tools',
    field: 'AI Tools / AI-Generated Content',
    certificateName: 'Introduction to Generative AI Studio',
    issuer: 'Powered by Google Cloud · Simplilearn SkillUp',
    date: '3rd October 2026',
    code: '10827594',
    image: certGenAiStudio,
    certificateUrl: certGenAiStudio,
    description:
      'Declaration of Completion awarded to Bakhtawar Zorain for successfully completing the online course Introduction to Generative AI Studio on Google Cloud & Simplilearn SkillUp.',
    skillsCovered: ['Generative AI Studio', 'Prompt Engineering', 'AI Content Workflows', 'Code: 10827594'],
  },
];

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: 'project-01',
    title: 'Personal Portfolio Website',
    subtitle: 'Personal Project · 01',
    category: 'portfolio',
    image: projectPortfolioShowcase,
    shortDesc:
      'A modern responsive portfolio website created to showcase my web design and development skills.',
    fullDesc:
      'A modern responsive portfolio website concept created to showcase my web design and development skills. Features a clean typographic hierarchy, interactive project previews, and an adaptable mobile-first layout structure.',
    techTags: ['HTML', 'CSS', 'JavaScript'],
    deliverables: [
      'Responsive multi-device layout',
      'Interactive project modal viewer',
      'Structured contact & inquiry flow',
      'Clean semantic code foundations',
    ],
    client: 'Personal Project',
    year: 'Concept Project',
    liveUrl: 'PROJECT_1_URL_HERE',
    features: [
      'Mobile-first responsive architecture',
      'Clean typography and intentional whitespace',
      'Touch-friendly interactive navigation',
      'Handcrafted HTML, CSS and JavaScript structure',
    ],
    colorTheme: '#121316',
  },
  {
    id: 'project-02',
    title: 'Fashion Landing Page',
    subtitle: 'Concept Project · 02',
    category: 'landing',
    image: projectFashionLanding,
    shortDesc:
      'A modern fashion website concept with an elegant layout, product-focused sections and responsive design.',
    fullDesc:
      'A modern fashion website concept with an elegant layout, product-focused sections and responsive design. Designed around editorial product presentation, balanced visual pacing, and fluid layouts for fashion and lifestyle brands.',
    techTags: ['HTML', 'CSS', 'JavaScript'],
    deliverables: [
      'Editorial lookbook showcase area',
      'Curated product highlight grid',
      'Responsive mobile & desktop navigation',
      'Visual hierarchy emphasizing imagery and typography',
    ],
    client: 'Concept Project',
    year: 'Concept Project',
    liveUrl: 'PROJECT_2_URL_HERE',
    features: [
      'Editorial typography and image framing',
      'Mobile and tablet responsive adaptations',
      'Clean product showcase layout',
      'Modern front-end structure',
    ],
    colorTheme: '#1E293B',
  },
  {
    id: 'project-03',
    title: 'Creative Business Website',
    subtitle: 'Concept Project · 03',
    category: 'concept',
    image: projectBusinessLanding,
    shortDesc:
      'A clean business website concept designed with a modern interface and responsive layout.',
    fullDesc:
      'A clean business website concept designed with a modern interface and responsive layout. Created to present business solutions and offerings with clear messaging, structured sections, and a welcoming inquiry interface.',
    techTags: ['HTML', 'CSS', 'JavaScript'],
    deliverables: [
      'Structured business solutions breakdown',
      'Clean service presentation sections',
      'Inquiry form and contact flow',
      'Fluid cross-device responsiveness',
    ],
    client: 'Concept Project',
    year: 'Concept Project',
    liveUrl: 'PROJECT_3_URL_HERE',
    features: [
      'Visual hierarchy guiding user attention',
      'Fluid mobile-first responsiveness',
      'Distraction-free interface styling',
      'Clean modular HTML, CSS and JavaScript',
    ],
    colorTheme: '#0F172A',
  },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'portfolio-websites',
    number: '01',
    title: 'Portfolio Websites',
    description:
      'Modern and responsive personal portfolio websites designed to showcase skills, projects and professional profiles.',
    tag: 'Personal Brands & Portfolios',
  },
  {
    id: 'landing-pages',
    number: '02',
    title: 'Landing Pages',
    description:
      'Clean and engaging landing pages with clear layouts, responsive design and modern visual presentation.',
    tag: 'High-Impact Presentation',
  },
  {
    id: 'business-websites',
    number: '03',
    title: 'Business Websites',
    description:
      'Simple and professional websites for small businesses, brands and personal projects.',
    tag: 'Brands & Small Businesses',
  },
  {
    id: 'responsive-web-design',
    number: '04',
    title: 'Responsive Web Design',
    description:
      'Web pages designed to work smoothly across desktops, tablets and mobile devices.',
    tag: 'Fluid Across All Screens',
  },
  {
    id: 'website-redesign',
    number: '05',
    title: 'Website Redesign',
    description:
      'Modernizing existing website layouts with cleaner structure, improved visual hierarchy and responsive design.',
    tag: 'Layout Modernization',
  },
];
