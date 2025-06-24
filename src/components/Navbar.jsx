import { FaMoon, FaSun } from 'react-icons/fa'

function Navbar({ toggleTheme, darkMode }) {
  const navItems = ['About', 'Education', 'Skills', 'Experience', 'Projects']
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-heading font-semibold">
          Ashwin Kumar R S
        </h1>
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-500 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="text-xl p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Theme"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
