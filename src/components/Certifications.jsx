import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa';

const certifications = [
  {
    title: "Mastering Python From Beginner to Pro",
    organization: "udemy",
    link: "https://www.udemy.com/certificate/UC-d22996df-bf77-4935-8308-15fd9dd86906/"
  },
  {
    title: "Foundations of Coding Full-Stack",
    organization: "MICROSOFT",
    link: "https://www.coursera.org/account/accomplishments/certificate/BX3V3CYGLFJI"
  },
  {
    title: "Verilog HDL Fundamentals",
    organization: "Udemy",
    link: "https://www.udemy.com/certificate/UC-cad2e176-b27e-4860-9b9c-9c9212117865/"
  },
  {
    title: "UML Fundamentals",
    organization: "Udemy",
    link: "https://www.udemy.com/certificate/UC-6a3001cd-7b8c-4ab3-8dd9-fa3c905bb098/"
  }
];

const Certifications = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="certifications"
      className="py-20 px-4 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-teal-600 dark:text-teal-400">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Verified credentials that showcase my knowledge in software development, python , AI.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(20,184,166,0.3)"
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-teal-100 dark:border-teal-800 transition-all duration-300"
            >
              <div className="flex items-center mb-4 text-teal-500">
                <FaCertificate className="text-3xl mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.organization}
                  </p>
                </div>
              </div>

              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:underline mt-2"
                whileHover={{ scale: 1.05 }}
              >
                <FaExternalLinkAlt className="mr-2" /> View Certificate
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* LinkedIn CTA */}
        <div className="mt-12 text-center">
          <motion.a
            href="https://www.linkedin.com/in/darshan-govindaraj-675a31349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="mr-2" size={20} />
            Explore More Certifications
            <FaExternalLinkAlt className="ml-2" size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
