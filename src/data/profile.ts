import type { Language, Metric, Profile } from './types'

export const profile: Profile = {
  name: 'Ashutosh Srivastava',
  title: 'Senior AI Engineer | Full Stack Engineer',
  tagline:
    'I architect and ship production Generative AI platforms, multi-agent systems and RAG pipelines for Fortune 500 enterprises.',
  location: 'Bengaluru, Karnataka, India',
  summary:
    'Senior AI Engineer and Full Stack Engineer with ~8 years of progressive experience architecting, building, and deploying enterprise-grade software products, distributed backend services, and production Generative AI platforms. Specialized in Azure AI Foundry, autonomous reliability multi-agent architectures, production RAG pipelines, AI evaluation & quality benchmarking, and AI red teaming across Energy & Utilities, Financial Services, LegalTech, Automotive, and Omnichannel Retail.',
  email: 'sashutosh.career@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ashutosh-srivastava-b683a210a',
  resumeUrl: `${import.meta.env.BASE_URL}Ashutosh_Srivastava_Resume.pdf`,
}

export const metrics: Metric[] = [
  { value: 8, suffix: '', label: 'Years experience', detail: 'Building enterprise software & AI platforms' },
  { value: 95, suffix: '%+', label: 'Extraction precision', detail: 'Production document ingestion & retrieval' },
  { value: 10, suffix: '+', label: 'Client engagements', detail: 'Fortune 500 & global enterprises' },
  { value: 3, suffix: '', label: 'Employers', detail: 'IBM · Ace Turtle · AuctionSoftware.com' },
]

export const coreFocus: string[] = [
  'Agentic AI',
  'Multi-Agent Systems',
  'Production RAG',
  'AI Evaluation',
  'AI Red Teaming',
  'Azure AI Foundry',
  'Full Stack',
]

export const clients: string[] = [
  'Shell',
  'General Motors',
  'EY',
  'Legal & General',
  'Halliburton',
  'Con Edison',
  'Southern California Edison',
  'Blackstone',
  'Ballard Spahr',
  'CliftonLarsonAllen',
  'PriceSpider',
]

export const domains: string[] = [
  'Energy & Utilities',
  'Financial Services',
  'LegalTech',
  'Automotive',
  'Insurance',
  'Omnichannel Retail',
]

export const languages: Language[] = [
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'Kannada', level: 'Basic' },
  { name: 'Tamil', level: 'Basic' },
]
