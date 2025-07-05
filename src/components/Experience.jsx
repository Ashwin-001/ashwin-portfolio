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
    SAP Labs India Pvt. Ltd. – iXp Summer Intern, CLM AM Provisioning and Enablement
  </h3>
  <p className="text-gray-600 dark:text-gray-300 mt-1">
    
    <span className="text-sm text-gray-500 dark:text-gray-400">
      May 2025 – July 2025
    </span>
    <br />
    Project: Support the Team in GenAI for Communication Configuration and Documents
  </p>

  <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
    <li>
      Built a <strong>GenAI-based automated information extraction service</strong> for SAP communication configuration documents, leveraging SAP BTP Document Information Extraction for high-accuracy parameter extraction.
    </li>
    <li>
      Designed modular data pipelines in <strong>Python</strong> to process extracted data, perform canonical mapping, assign parameters to Communication Arrangement (CA), Communication System (CS), or Communication User (CU), and infer operational context (landscape/environment).
    </li>
    <li>
      Developed robust post-processing logic for <strong>data cleaning, deduplication, contextual grouping, and error handling</strong> — significantly reducing manual effort for developers in the SPC environment and improving consistency across SAP’s provisioning tools.
    </li>
  </ul>
</motion.div>

      </div>
    </section>
  )
}

export default Experience
