export interface Profile {
  name: string
  title: string
  tagline: string
  location: string
  summary: string
  email: string
  linkedin: string
  resumeUrl: string
}

export interface Metric {
  value: number
  suffix: string
  label: string
  detail: string
}

export interface SkillGroup {
  id: string
  title: string
  skills: string[]
}

export interface Engagement {
  client: string
  project: string
  period: string
  highlight: string
  bullets: string[]
  stack: string[]
}

export interface Employer {
  company: string
  role: string
  period: string
  location: string
  note?: string
  engagements: Engagement[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  detail: string
}

export interface Language {
  name: string
  level: string
}
