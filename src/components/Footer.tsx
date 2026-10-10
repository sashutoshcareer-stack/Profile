import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'
import { LinkedInIcon } from './icons'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-zinc-500 sm:flex-row sm:px-8 dark:text-zinc-400">
        <p>
          © {year} {profile.name}. Built with React, Tailwind &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:hover:text-white"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:hover:text-white"
          >
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
