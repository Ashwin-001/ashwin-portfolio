import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { motion } from 'framer-motion'

const socials = [
  {
    icon: <FaGithub />,
    link: 'https://github.com/Ashwin-001',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin />,
    link: 'https://linkedin.com/in/ashwinkumarrs',
    label: 'LinkedIn',
  },
  {
    icon: <SiLeetcode />,
    link: 'https://leetcode.com/u/Ashwin_Kumar_AK/',
    label: 'LeetCode',
  },
  {
    icon: <FaEnvelope />,
    link: 'mailto:ashwinkumarrs13@gmail.com',
    label: 'Email',
  },
  {
  icon: <FaInstagram />,
  link: 'https://instagram.com/ak_ashwinkumar_rs',
  label: 'Instagram',
}
]

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-10 px-6 bg-gray-100 dark:bg-gray-950 text-center relative">
      <motion.div
        className="flex justify-center gap-6 mb-4 text-2xl text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform transform hover:-translate-y-1"
            title={s.label}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            {s.icon}
          </motion.a>
        ))}
      </motion.div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        © {new Date().getFullYear()} Ashwin Kumar R S. All rights reserved.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
      
        Done by me with Dedication using React and Framer Motion.
      </p>

      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
        title="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  )
}

export default Footer
