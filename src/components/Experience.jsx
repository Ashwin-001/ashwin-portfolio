import { motion } from 'framer-motion'

function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-heading font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-blue-500">
            Summer Intern - SAP Labs India
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            IXP Internship (June 2025 – Present)
          </p>

          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Part of <strong>Cloud Lifecycle Management - Application Management</strong> team in which Provisioning and Enablement Team.
            </li>
            <li>
              Worked on SAP's <strong> Document Information Ectraction </strong> service in their Business Technology Platform (BTP).
            </li>
            <li>
              Using LLMs and Generative AI, creating a automation system to extract structured data from unstructured documents.
            </li>
            <li>
              Reduces the working time of developers working on Service Provider Cockpit (SPC) drastically by automating the data extraction process.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
