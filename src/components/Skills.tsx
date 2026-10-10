import { Bot, Building, Cloud, Container, LayoutDashboard, Search, Server, type LucideIcon } from 'lucide-react'
import { skillGroups } from '../data/skills'
import { Reveal } from './Reveal'
import { Section } from './Section'

const icons: Record<string, LucideIcon> = {
  genai: Bot,
  retrieval: Search,
  backend: Server,
  frontend: LayoutDashboard,
  cloud: Cloud,
  devops: Container,
  domains: Building,
}

const spans: Record<string, string> = {
  genai: 'md:col-span-2 lg:col-span-2',
  retrieval: 'lg:col-span-1',
  backend: 'lg:col-span-1',
  frontend: 'lg:col-span-1',
  cloud: 'md:col-span-2 lg:col-span-2',
  devops: 'lg:col-span-1',
  domains: 'md:col-span-2 lg:col-span-4',
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A full-stack toolkit for AI systems."
      description="From agent orchestration and retrieval to cloud infrastructure and the UI on top."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.id] ?? Bot
          const featured = group.id === 'genai'
          return (
            <Reveal
              key={group.id}
              delay={(i % 4) * 0.06}
              className={`bento-card group ${featured ? 'gradient-border' : ''} ${spans[group.id] ?? ''}`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${
                    featured
                      ? 'gradient-bg text-white'
                      : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200'
                  }`}
                >
                  <Icon size={19} aria-hidden="true" />
                </span>
                <h3 className="font-display text-base font-semibold text-zinc-900 dark:text-zinc-50">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-1.5" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
