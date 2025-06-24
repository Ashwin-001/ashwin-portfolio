import { motion } from 'framer-motion'

function Skills() {
  const categories = {
    Languages: ['Python', 'Java', 'C', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    'Tools & Frameworks': [
      'React.js', 'Node.js', 'Spring Boot', 'Django', 'MongoDB',
      'Git & GitHub', 'Postman',
    ],
    Interests: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Full Stack Development',
      'Data Structures',
      'Algorithms',
    ],
  }

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-heading font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {Object.entries(categories).map(([category, items], idx) => (
            <motion.div
              key={category}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl dark:shadow-blue-900 transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">{category}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {items.map((item, i) => (
                  <li
                    key={i}
                    className="transition-all duration-300 hover:translate-x-1 hover:text-blue-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
