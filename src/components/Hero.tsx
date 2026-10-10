import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Mail, MapPin } from 'lucide-react'
import { clients, profile } from '../data/profile'
import { LinkedInIcon } from './icons'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  const [first, ...rest] = profile.name.split(' ')

  return (
    <section id="top" aria-label="Introduction" className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Background accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid absolute inset-0" />
        <div className="hero-orb absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl dark:opacity-30" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div initial="hidden" animate="show" className="max-w-4xl">
          <motion.div
            custom={0}
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-zinc-600 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Building agentic AI platforms at IBM
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white"
          >
            {first} <span className="gradient-text">{rest.join(' ')}</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="mt-5 font-display text-xl font-medium text-zinc-700 sm:text-2xl dark:text-zinc-300"
          >
            {profile.title}
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400"
          >
            <MapPin size={15} aria-hidden="true" /> {profile.location}
          </motion.p>

          <motion.div custom={4} variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="gradient-bg inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/40 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
            >
              <Download size={16} aria-hidden="true" /> Download Resume
            </a>
            <a href={`mailto:${profile.email}`} className="btn-secondary">
              <Mail size={16} aria-hidden="true" /> Email me
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              <LinkedInIcon size={16} /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        {/* Client strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
            Trusted by teams at <span className="normal-case tracking-normal font-normal">· engagements delivered through IBM</span>
          </p>
          <div className="marquee relative overflow-hidden">
            <ul className="marquee-track flex w-max gap-3">
              {[...clients, ...clients].map((client, i) => (
                <li
                  key={`${client}-${i}`}
                  aria-hidden={i >= clients.length ? 'true' : undefined}
                  className="whitespace-nowrap rounded-full border border-zinc-200 bg-white/60 px-4 py-2 font-display text-sm font-semibold text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300"
                >
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
