export type ToolItem = {
  href: string;
  domain: string;
  title: string;
  description: string;
  tag: string;
  count?: string | number;
};

export const tools: ToolItem[] = [
  {
    href: '#',
    domain: 'cozystack.io',
    title: 'Cozystack',
    description: 'Open Source Cloud Platform on Kubernetes',
    tag: 'Cloud',
    count: '1,724',
  },
  {
    href: '#',
    domain: 'saltcorn.com',
    title: 'Saltcorn',
    description: 'No-code app builder, no compromises',
    tag: 'CMS',
    count: '1,949',
  },
  {
    href: '#',
    domain: 'github.com',
    title: 'Code',
    description: 'Supercharged AI coding CLI for developers',
    tag: 'Developer Tools',
    count: '2,177',
  },
  {
    href: '#',
    domain: 'univer.ai',
    title: 'Univer',
    description: 'Embed collaborative productivity tools anywhere',
    tag: 'Developer Tools',
    count: '11,375',
  },
  {
    href: '#',
    domain: 'docmost.com',
    title: 'Docmost',
    description: 'Collaborative wiki and docs platform',
    tag: 'Documentation',
    count: '17,635',
  },
  {
    href: '#',
    domain: 'rivet.gg',
    title: 'Rivet',
    description: 'Open-source serverless platform for all',
    tag: 'Backend service',
    count: '4,576',
  },
  {
    href: '#',
    domain: 'checkmarble.com',
    title: 'Marble',
    description: 'Open-source real-time fraud detection',
    tag: 'Cybersecurity',
    count: '410',
  },
  {
    href: '#',
    domain: 'hi.events',
    title: 'Hi.Events',
    description: 'Open-source event ticketing platform',
    tag: 'E-commerce',
    count: '3,233',
  },
  {
    href: '#',
    domain: 'formsflow.ai',
    title: 'formsflow.ai',
    description: 'Low-code forms, workflows, analytics platform',
    tag: 'Automation',
    count: '384',
  },
];

export default tools;
