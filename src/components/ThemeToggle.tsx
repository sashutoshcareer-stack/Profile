import { Moon, Sun } from 'lucide-react'
import { useTheme } from './useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="
        inline-flex items-center justify-center
        w-10 h-10 rounded-full
        border border-zinc-200 dark:border-zinc-700
        bg-zinc-100 dark:bg-zinc-800
        text-zinc-600 dark:text-zinc-300
        hover:bg-zinc-200 dark:hover:bg-zinc-700
        transition-colors duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
      "
    >
      {theme === 'dark' ? (
        <Sun size={18} aria-hidden="true" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
    </button>
  )
}
