import { motion } from 'framer-motion'
import heroDark from '../asserts/hero-bg.jpg'
import heroLight from '../asserts/hero-light-bg.jpg'
import { useEffect, useState } from 'react'

function Hero() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true })
    setIsDark(document.documentElement.classList.contains('dark'))
    return () => observer.disconnect()
  }, [])

  const bgImage = isDark ? heroDark : heroLight

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center text-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-white dark:bg-black/80 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m Ashwin Kumar R S
        </motion.h1>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          A curious mind pursuing Computer Science with a spark for AI, ML & Web Experiences.
        </p>
      </motion.div>
    </section>
  )
}

export default Hero
