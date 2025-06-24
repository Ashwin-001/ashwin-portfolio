import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="font-sans bg-white text-black dark:bg-gray-900 dark:text-white transition-all duration-500">
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
