import { MotionConfig } from 'framer-motion'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { EducationSection } from './components/EducationSection'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills'
import { ThemeProvider } from './components/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-900 focus:shadow-lg"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <EducationSection />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App
