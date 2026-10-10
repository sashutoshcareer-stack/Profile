import type { Education } from './types'

export const education: Education[] = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    institution: 'Bharath Institute of Higher Education and Research, Chennai',
    period: '2014 – 2018',
    detail: 'Grade A (First Class)',
  },
  {
    degree: 'Database Developer Project & Research',
    institution: 'Indian Institute of Technology (IIT) Madras',
    period: '2016 – 2017',
    detail: 'Research project',
  },
  {
    degree: 'Senior Secondary (Class XII)',
    institution: 'PCM 89% · Overall 82%',
    period: '2014',
    detail: 'Science (Physics, Chemistry, Mathematics)',
  },
]

export const certifications: { name: string; issuer?: string }[] = [
  { name: 'Azure AI Foundry & Microsoft AI Ecosystem' },
  { name: 'Node.js Design Patterns', issuer: 'LinkedIn' },
  { name: 'Exploring & Mastering the Full Go Featureset', issuer: 'LinkedIn' },
  { name: 'Learning AWS for Developers' },
  { name: 'Docker Essential Training & Kubernetes' },
  { name: 'React & Advanced TypeScript' },
  { name: 'Java Data Structures & Algorithms', issuer: 'Pluralsight' },
]
