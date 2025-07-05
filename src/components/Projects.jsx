import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Object Detection on Caltech-101',
    tech: ['PyTorch', 'ResNet', 'VGGNet'],
    description:
      'Implemented object classification using pretrained ResNet and VGGNet models. Achieved 74% accuracy across 101 diverse image categories.',
  },
  {
    title: 'Gains+ — Gym Management System',
    tech: ['React', 'PHP', 'MySQL'],
    description:
      'Built a gym portal with separate user and trainer dashboards. Included attendance tracking, exercise plans, diet suggestions, and feedback system.',
  },
  {
    title: 'Medita — Mental Health Web App',
    tech: ['React', 'Node.js', 'MongoDB'],
    description:
      'A full-stack personalized platform with chatbot, doctor portal, and user forums. Focused on improving mental health awareness through tech.',
  },
  
]

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-heading font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
  key={idx}
  className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: idx * 0.2, duration: 0.6 }}
>
  <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
    {project.title}
  </h3>
  <p className="text-sm mt-1 mb-2 text-gray-500 dark:text-gray-400">
    {project.tech.join(' • ')}
  </p>
  <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
</motion.div>

          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
