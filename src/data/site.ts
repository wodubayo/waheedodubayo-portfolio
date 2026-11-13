export const links = {
  github: 'https://github.com/wodubayo',
  linkedin: 'https://linkedin.com/in/waheed-odubayo-853ba24b/',
  lagosRepo: 'https://github.com/wodubayo/lagos-flood-intelligence',
  thesis: 'https://digitalcommons.uri.edu/theses/2719/',
};

export const nav = [
  { label: 'Products', href: '/#products' },
  { label: 'Applied AI', href: '/#applied-ai' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '#contact' },
];

export interface Role {
  company: string;
  title: string;
  years: string;
  summary?: string;
}

export const experience: Role[] = [
  {
    company: 'LeanTaaS',
    title: 'Software Engineer',
    years: '2023 – present',
    summary:
      'Surgical scheduling SaaS. Architecture decisions on core scheduling features; leading client data migrations so hospitals go live on the new platform with their full history.',
  },
  {
    company: 'NASA (via SAIC)',
    title: 'Senior Software Engineer',
    years: '2015 – 2019',
    summary:
      'Aircraft Operations Division (AOD): built and maintained the parts ordering and inventory system that keeps the division’s aircraft supplied, in C# / .NET MVC and AngularJS under CMMI — feature delivery, code and design peer reviews, test plans, and defect resolution.',
  },
  {
    company: 'Cradle Solution',
    title: 'Software Engineer → Lead Engineer → Senior Engineer & Team Lead',
    years: '2010 – 2014, 2019 – 2023',
    summary:
      'Home health management software for home health agencies. Grew from building scalable C#/.NET systems (99%+ uptime), to leading the upgrade to CMS OASIS-C1 (the Medicare home health assessment standard), to running Scrum delivery for onshore and offshore teams while staying hands-on in React, Node, and ArangoDB on AWS.',
  },
  {
    company: 'Weatherford International',
    title: 'Software Support Analyst',
    years: '2014 – 2015',
  },
  {
    company: 'Early career, Nigeria',
    title: 'Software Engineer',
    years: '2003 – 2009',
    summary: 'Built a self-balancing sales ledger system for financial accounting.',
  },
];

export const stack = [
  'C# / .NET',
  'React',
  'Node.js',
  'Kotlin / Android',
  'MongoDB',
  'ArangoDB',
  'SQL Server',
  'AWS',
  'Docker',
  'Python',
  'OpenCV',
];

export const credentials = [
  'AWS Certified Developer',
  'BS Computer Science — UH-Downtown',
  'MS Oceanography — University of Rhode Island, 2026',
];
