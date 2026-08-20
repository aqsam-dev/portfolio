import useTheme from './hooks/useTheme'
import ProgressBar from './components/ProgressBar'
import CursorGlow from './components/CursorGlow'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Work from './components/Work'
import Experience from './components/Experience'
import Footer from './components/Footer'
import CursorGreeting from './components/CursorGreeting'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-colors">
      <div className="noise-overlay" aria-hidden="true" />
      <CursorGlow />
      <ProgressBar />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Skills />
      <Work />
      <Experience />
      <Footer />
      <CursorGreeting/>
    </div>
  )
}
