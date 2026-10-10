import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Briefcase, ChevronDown, MapPin } from 'lucide-react'
import { useRef, useState } from 'react'
import { experience } from '../data/experience'
import type { Engagement } from '../data/types'
import { Reveal } from './Reveal'
import { Section } from './Section'

function EngagementCard({ item, defaultOpen }: { item: Engagement; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = `eng-${item.client.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`

  return (
    <div className="bento-card overflow-hidden p-0!">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500 sm:p-6"
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <h4 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">{item.client}</h4>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{item.project}</p>
          </div>
          <span className="shrink-0 text-xs font-medium text-zinc-500 sm:pt-1.5 dark:text-zinc-400">{item.period}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.highlight}</p>
        <div className="mt-4 flex items-end justify-between gap-4">
          <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
            {item.stack.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
          <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {open ? 'Less' : 'Details'}
            <ChevronDown
              size={16}
              aria-hidden="true"
              className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="space-y-2.5 border-t border-zinc-200 px-5 py-5 sm:px-6 dark:border-zinc-800">
              {item.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  <span aria-hidden="true" className="gradient-bg mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Experience() {
  const railRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: railRef, offset: ['start 70%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="~8 years, 3 employers, 10+ enterprise engagements."
      description="Click any engagement to see the full details."
    >
      <div ref={railRef} className="relative">
        {/* Rail */}
        <div aria-hidden="true" className="absolute top-2 bottom-2 left-[15px] w-px bg-zinc-200 sm:left-[19px] dark:bg-zinc-800" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY }}
          className="gradient-bg absolute top-2 bottom-2 left-[15px] w-px origin-top sm:left-[19px]"
        />

        <ol className="space-y-16">
          {experience.map((employer, ei) => (
            <li key={employer.company} className="relative pl-12 sm:pl-16">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 grid h-8 w-8 place-items-center rounded-full border border-zinc-200 bg-white text-indigo-600 shadow-sm sm:h-10 sm:w-10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-indigo-400"
              >
                <Briefcase size={16} />
              </span>

              <Reveal className="mb-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {employer.company}
                  </h3>
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{employer.period}</span>
                </div>
                <p className="mt-1 text-base font-medium text-zinc-700 dark:text-zinc-300">{employer.role}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} aria-hidden="true" /> {employer.location}
                  </span>
                  {employer.note && (
                    <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:text-indigo-300">
                      {employer.note}
                    </span>
                  )}
                </div>
              </Reveal>

              <div className="space-y-4">
                {employer.engagements.map((eng, i) => (
                  <Reveal key={eng.client} delay={Math.min(i, 3) * 0.04}>
                    <EngagementCard item={eng} defaultOpen={ei === 0 && i === 0} />
                  </Reveal>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
