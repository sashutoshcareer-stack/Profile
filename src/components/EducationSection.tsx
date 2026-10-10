import { Award, GraduationCap } from 'lucide-react'
import { certifications, education } from '../data/education'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function EducationSection() {
  return (
    <Section id="education" eyebrow="Education & Certifications" title="Foundations and continuous learning.">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <Reveal className="bento-card lg:col-span-2">
          <div className="mb-5 flex items-center gap-2.5">
            <GraduationCap size={20} className="text-indigo-500" aria-hidden="true" />
            <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">Education</h3>
          </div>
          <ol className="space-y-5">
            {education.map((e) => (
              <li key={e.degree} className="border-l-2 border-zinc-200 pl-4 dark:border-zinc-800">
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{e.period}</p>
                <p className="mt-0.5 font-semibold text-zinc-900 dark:text-zinc-100">{e.degree}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{e.institution}</p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">{e.detail}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.08} className="bento-card lg:col-span-3">
          <div className="mb-5 flex items-center gap-2.5">
            <Award size={20} className="text-violet-500" aria-hidden="true" />
            <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">Certifications</h3>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white/50 p-3.5 transition-colors hover:border-indigo-500/40 dark:border-zinc-800 dark:bg-zinc-950/40"
              >
                <span className="gradient-bg mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg text-white">
                  <Award size={14} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-medium leading-snug text-zinc-800 dark:text-zinc-200">{c.name}</span>
                  {c.issuer && <span className="text-xs text-zinc-500 dark:text-zinc-400">{c.issuer}</span>}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
