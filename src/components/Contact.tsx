import { ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data/profile'
import { LinkedInIcon } from './icons'
import { Reveal } from './Reveal'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 px-6 py-16 text-center sm:px-12 sm:py-20 dark:border-zinc-800">
          <div aria-hidden="true" className="hero-orb absolute -top-32 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full opacity-40 blur-3xl" />
          <div aria-hidden="true" className="hero-grid hero-grid-dark absolute inset-0 opacity-60" />
          <div className="relative">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">Contact</p>
            <h2 id="contact-title" className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s build reliable AI together.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-300">
              Hiring for a senior AI or full-stack role, or need a production-grade GenAI platform? I&apos;d love to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-stretch overflow-hidden rounded-full bg-white text-zinc-900 shadow-lg">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
                >
                  <Mail size={16} aria-hidden="true" /> {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                  className="border-l border-zinc-200 px-4 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
                >
                  {copied ? (
                    <Check size={16} className="text-emerald-600" aria-hidden="true" />
                  ) : (
                    <Copy size={16} aria-hidden="true" />
                  )}
                </button>
              </div>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <LinkedInIcon size={16} /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <Download size={16} aria-hidden="true" /> Resume
              </a>
            </div>
            <p role="status" aria-live="polite" className="mt-4 h-5 text-sm text-emerald-300">
              {copied ? 'Email copied to clipboard' : ''}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
