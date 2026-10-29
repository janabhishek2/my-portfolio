// Single source of truth for all portfolio content.
// Every fact here comes from the resume — edit this file to update the site.

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export interface Highlight {
  title: string;
  summary: string;
  tags: string[];
}

export interface Role {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  points: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export const profile = {
  name: 'Abhishek Jan',
  role: 'Senior Frontend Engineer',
  location: 'Faridabad, India',
  email: 'janabhishek2@gmail.com',
  github: 'https://github.com/janabhishek2',
  linkedin: 'https://linkedin.com/in/abhishek-jan-a01493a6',
  tagline:
    "Full-stack engineer (5 yrs), frontend-heavy. I own Brevo's Contacts platform serving 120K+ daily users and the shared React/TypeScript monorepo behind it.",
  focus: 'Frontend architecture, performance and observability, backed by Node.js / PHP / Go and SQL experience.',
};

export const metrics: Metric[] = [
  { value: '120K+', label: 'Daily users', detail: "on Brevo's Contacts & Lists platform" },
  { value: '40 → 85+', label: 'Lighthouse score', detail: 'via code splitting, lazy chunks, deferred analytics' },
  { value: '90%', label: 'Smaller translation bundle', detail: 'Node scripts that strip unused i18n keys' },
  { value: '10', label: 'Internal teams', detail: 'using the shared component monorepo & Storybook' },
  { value: '300+', label: 'Tests written', detail: 'Jest + React Testing Library on critical flows' },
  { value: '5 yrs', label: 'Experience', detail: 'React, TypeScript, Node.js, PHP, Go' },
];

export const highlights: Highlight[] = [
  {
    title: 'Contacts & Lists platform',
    summary:
      'Own contact management, list operations, and import/export for 120K+ daily users. Led architecture and delivery of Consent Groups, Attributes Migration, Geolocation Tracking and n8n integrations — all shipped behind feature flags with per-account permission models.',
    tags: ['Ownership', 'Feature flags', 'Permissions', 'Architecture'],
  },
  {
    title: 'Shared frontend monorepo',
    summary:
      'Built and maintain component packages plus a Storybook used by 10 internal teams, replacing duplicated implementations of buttons, tables and form primitives. Added Chromatic visual regression checks to CI.',
    tags: ['Monorepo', 'Storybook', 'Chromatic', 'Design System'],
  },
  {
    title: 'Performance: Lighthouse 40 → 85+',
    summary:
      'Bundle size reduction, code splitting, lazy-loaded chunks and deferred analytics. Node scripts strip unused translation keys, cutting 90% off the translation bundle. The optimizations were later picked up by other Brevo apps.',
    tags: ['Core Web Vitals', 'Code splitting', 'Bundle optimization'],
  },
  {
    title: 'Observability',
    summary:
      'Instrumented frontends with Elastic APM and Real User Monitoring, giving the team production error tracking and Core Web Vitals data from real users.',
    tags: ['Elastic APM', 'RUM', 'Error tracking'],
  },
  {
    title: 'Quality & accessibility',
    summary:
      'Wrote 300+ Jest and React Testing Library tests across contact and segmentation flows. Made the Contacts UI WCAG-compliant: semantic markup, full keyboard navigation and screen-reader support.',
    tags: ['Jest', 'RTL', 'WCAG 2.1 AA', 'ARIA'],
  },
  {
    title: 'Technical leadership',
    summary:
      'Mentor engineers on component patterns, build debugging and performance. Review frontend architecture proposals across teams, including a config-driven event renderer. Led a JavaScript → TypeScript migration using Claude Code for bulk conversion and type generation.',
    tags: ['Mentoring', 'Architecture review', 'TypeScript migration'],
  },
];

export const experience: Role[] = [
  {
    company: 'Brevo',
    title: 'Software Engineer, Frontend',
    location: 'Noida, India',
    start: 'Apr 2022',
    end: 'Present',
    points: [
      "Own Brevo's Contacts & Lists platform — contact management, list operations, and import/export — serving 120K+ daily users.",
      'Led architecture and delivery of Consent Groups, Attributes Migration, Geolocation Tracking, and n8n integrations, all shipped behind feature flags with per-account permission models.',
      "Built and maintain Brevo's shared frontend monorepo — component packages plus a Storybook used by 10 internal teams, replacing duplicated implementations of buttons, tables, and form primitives.",
      'Added Chromatic visual regression checks to CI and wrote Node scripts that strip unused translation keys, cutting 90% off the translation bundle.',
      'Improved Lighthouse scores from 40 to 85+ through bundle size reduction, code splitting, lazy-loaded chunks, and deferred analytics.',
      'Mentored engineers on the frontend monorepo — component patterns, debugging build failures, and the Lighthouse optimizations from Contacts, since picked up by other Brevo apps.',
      'Migrated React applications from JavaScript to TypeScript, using Claude Code for bulk conversion and type generation.',
      'Instrumented frontends with Elastic APM and Real User Monitoring, giving the team production error tracking and Core Web Vitals data.',
      'Wrote 300+ Jest and React Testing Library tests across critical contact and segmentation flows.',
      'Contributed reusable components and frontend standards to the Brevo Design System.',
      'Made contacts UI WCAG-compliant: semantic markup, full keyboard navigation, and screen-reader support.',
      'Reviewed frontend architecture proposals across teams, including event renderer for displaying events with a config driven UI.',
    ],
  },
  {
    company: 'IndiaMART',
    title: 'Associate Software Engineer',
    location: 'Noida, India',
    start: 'Aug 2021',
    end: 'Apr 2022',
    points: [
      'Built React dashboards and reporting views for sales teams, integrating backend APIs to surface key business metrics.',
      'Developed Yii2/PHP and Go based REST APIs powering these dashboards, including filtering, pagination and response contracts.',
      'Wrote SQL queries for Power BI analytics dashboards used for sales reporting.',
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    name: 'Frontend',
    items: [
      'React.js', 'TypeScript', 'JavaScript (ES6+)', 'Next.js', 'Redux', 'Redux Toolkit', 'React Hooks', 'RTK Query',
      'Zustand', 'Context API', 'React Router', 'GraphQL', 'HTML5', 'CSS3', 'SCSS', 'LESS', 'Tailwind CSS', 'Bootstrap',
    ],
  },
  {
    name: 'Architecture & APIs',
    items: [
      'Frontend Architecture', 'Component Architecture', 'Design Systems', 'Micro-frontends', 'Monorepo', 'Feature Flags',
      'State Management', 'REST APIs', 'WebSockets', 'SSE', 'Internationalization',
    ],
  },
  {
    name: 'Performance',
    items: ['Web Vitals', 'Lighthouse', 'Code Splitting', 'Lazy Loading', 'Bundle Optimization', 'Performance Monitoring'],
  },
  { name: 'Testing', items: ['Jest', 'React Testing Library', 'Enzyme', 'Storybook', 'Chromatic'] },
  {
    name: 'Build & Tooling',
    items: [
      'CI/CD', 'Webpack', 'Babel', 'Vite', 'NPM', 'Yarn', 'Turborepo', 'Lerna', 'Git', 'GitHub', 'GitHub Actions',
      'ESLint', 'Prettier',
    ],
  },
  {
    name: 'Observability',
    items: ['Elastic APM', 'Real User Monitoring (RUM)', 'Error Tracking', 'Core Web Vitals', 'Alerting', 'Production Debugging'],
  },
  { name: 'Accessibility', items: ['WCAG 2.1 AA', 'ARIA', 'Semantic HTML', 'Keyboard Navigation', 'Screen Readers'] },
  { name: 'Backend', items: ['Node.js', 'PHP', 'Go', 'C++', 'MongoDB', 'Oracle', 'PL/SQL', 'SQL'] },
  { name: 'System Design', items: ['Distributed Systems', 'Microservices Architecture'] },
];

export const education = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science and Engineering',
  school: 'University School of Information, Communication and Technology (USICT)',
  grade: 'CGPA 8.57',
  years: '2017 – 2021',
};

export const certifications = [
  { name: 'Advanced React For Enterprise: React for senior engineers', issuer: 'Udemy' },
  { name: 'Mastering TypeScript - 2026 Edition', issuer: 'Udemy' },
];
