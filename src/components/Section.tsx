import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
