import { Building, Languages, Sparkles, Target } from 'lucide-react'
import { coreFocus, domains, languages, metrics, profile } from '../data/profile'
import { Counter } from './Counter'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  const [years, ...otherMetrics] = metrics

  return (
    <Section
      id="about"
      eyebrow="About & Impact"
      title="Production AI, built for the enterprise."
      description="I take complex AI applications from architecture to production, with measurable quality and reliability."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
        {/* Summary */}
        <Reveal className="bento-card md:col-span-6 lg:col-span-8 lg:row-span-2">
          <div className="flex h-full flex-col">
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Sparkles size={20} aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-50">Summary</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">{profile.summary}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              Delivered 95%+ document extraction precision and substantial cost savings for Fortune 500 enterprises
              including <strong className="font-semibold text-zinc-800 dark:text-zinc-200">Shell, General Motors, EY</strong>{' '}
              and <strong className="font-semibold text-zinc-800 dark:text-zinc-200">Legal &amp; General</strong>.
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {domains.map((d) => (
                <span key={d} className="chip">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Years - hero metric */}
        <Reveal delay={0.05} className="bento-card gradient-border relative overflow-hidden md:col-span-6 lg:col-span-4 lg:row-span-2">
          <div aria-hidden="true" className="hero-orb absolute -right-20 -bottom-24 h-64 w-64 rounded-full opacity-30 blur-3xl" />
          <div className="relative flex h-full flex-col justify-between">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{years.label}</p>
            <p className="my-6 font-display text-7xl font-bold tracking-tight sm:text-8xl">
              <span className="gradient-text">
                ~<Counter value={years.value} suffix={years.suffix} />
              </span>
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{years.detail}</p>
          </div>
        </Reveal>

        {/* Other metrics */}
        {otherMetrics.map((m, i) => (
          <Reveal key={m.label} delay={0.1 + i * 0.05} className="bento-card md:col-span-2 lg:col-span-4">
            <p className="font-display text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              <Counter value={m.value} suffix={m.suffix} />
            </p>
            <p className="mt-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">{m.label}</p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{m.detail}</p>
          </Reveal>
        ))}

        {/* Core focus */}
        <Reveal delay={0.1} className="bento-card md:col-span-4 lg:col-span-7">
          <div className="mb-4 flex items-center gap-2.5">
            <Target size={18} className="text-violet-500" aria-hidden="true" />
            <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">Core focus</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {coreFocus.map((f) => (
              <span
                key={f}
                className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-sm font-medium text-indigo-700 dark:text-indigo-300"
              >
                {f}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Languages */}
        <Reveal delay={0.15} className="bento-card md:col-span-2 lg:col-span-5">
          <div className="mb-4 flex items-center gap-2.5">
            <Languages size={18} className="text-cyan-500" aria-hidden="true" />
            <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">Languages</h3>
          </div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between gap-2 text-sm">
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{l.name}</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{l.level}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
            <Building size={13} aria-hidden="true" /> Based in Bengaluru, India
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
