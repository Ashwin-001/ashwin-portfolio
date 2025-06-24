import { motion } from 'framer-motion'

function Education() {
  const items = [
    {
      title: 'B.E. CSE (AI & ML)',
      institution: 'PSG College of Technology, Coimbatore',
      date: '2022 – Present',
      cgpa: 'CGPA: 9.05',
    },
    {
      title: 'Higher Secondary Education',
      institution: 'Suguna RIP V School, Coimbatore',
      date: '2020 – 2022',
    },
  ]

  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-heading font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="relative border-l-4 border-blue-500 pl-6 pr-2 space-y-10">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative group p-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="absolute w-4 h-4 left-[-10px] top-2 animate-pulse" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {item.institution}
              </p>
              <p className="text-md text-gray-500 dark:text-gray-400">{item.date}</p>
              {item.cgpa && (
                <p className="text-md font-medium text-green-600 dark:text-green-400 mt-1">
                  {item.cgpa}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
