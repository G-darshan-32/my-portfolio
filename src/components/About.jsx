import { motion } from 'framer-motion';
import { FaBriefcase, FaDownload, FaGraduationCap } from 'react-icons/fa';
import resumePdf from '../media/darshan_govindaraj.pdf';
const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative"
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
            About Me
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm <strong> Darshan Govindaraj </strong>, An enthusiastic Software Developer and Data Science aspirant with a strong passion for building intelligent systems and innovative solutions using AI, Data Structures, and full-stack technologies. Currently pursuing a B.Tech at SRM Institute of Science and Technology, with a CGPA of 9.048.
          </p>
        </motion.div>

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center mb-12 border-l-4 border-teal-500"
        >
          <p className="text-lg italic text-gray-700 dark:text-gray-300">
            "I aim to bridge the gap between code and creativity through intelligent problem-solving."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Internships */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl"
          >
            <div className="flex items-center mb-6">
              <FaBriefcase className="text-3xl text-teal-400 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Internships</h3>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-teal-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Engineering Intern </h4>
                <p className="text-teal-400">Orbion pharmaceutical Pvt Ltd.</p>
                <p className="text-gray-500 dark:text-gray-400"> under Electrical and Instrumentation Department</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
                  <li> calibration of instruments like pressure gauges, temperature sensors.</li>
                  <li>daily inspection of power supply and control systems.</li>
                </ul>
              </div>

              <div className="border-l-2 border-teal-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Creatives head at Automation Club</h4>
                <p className="text-teal-400">Club at SRM University</p>
                <p className="text-gray-500 dark:text-gray-400">ongoing</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
                  <li>Collaborated with core team members to conceptualize and execute visually-driven campaigns and presentations for club initiatives.</li>
                  <li>Led the design and content strategy for technical events, workshops, and social media, ensuring engaging and informative outreach.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl"
          >
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-3xl text-emerald-400 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-emerald-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">B.Tech in Computer Science</h4>
                <p className="text-emerald-400">SRM Institute of Science and Technology</p>
                <p className="text-gray-500">5th Semester | CGPA: 9.04</p>
              </div>

              <div className="border-l-2 border-emerald-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">12th Grade</h4>
                <p className="text-emerald-400">Adhyapana School, CBSE </p>
                <p className="text-gray-500">86.4%</p>
              </div>

              <div className="border-l-2 border-emerald-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">10th Grade</h4>
                <p className="text-emerald-400">Adhyapana School, CBSE</p>
                <p className="text-gray-500">89%</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Download Resume */}
        <div className="flex justify-center mt-12">
          <motion.a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold py-3 px-8 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaDownload className="mr-2" /> Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
