import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaTools } from 'react-icons/fa';

const skillCategories = [
  {
    category: "Programming",
    icon: <FaCode className="text-5xl text-teal-400" />,
    skills: ["Python", "C++", "C", "JavaScript"]
  },
  {
    category: "Frameworks & Libraries",
    icon: <FaBrain className="text-5xl text-emerald-400" />,
    skills: [
      "GCC", "G++","STL" , "Scikit-learn", "Hugging Face", 
      "LangChain", "LangGraph", "LangSmith", "FAISS", 
      "ChromaDB", "Streamlit","Bootstrap"
    ]
  },
  {
    category: "Tools",
    icon: <FaTools className="text-5xl text-teal-400" />,
    skills: ["Jupyter Notebook", "GitHub","HTML","CSS","VScode"]
  },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-teal-600 dark:text-teal-400">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            My professional toolkit includes a wide range of technologies and frameworks for software development, AI, machine learning, and web development.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-xl transition-colors duration-300"
              variants={item}
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="mr-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(20, 184, 166, 0.2)",
                        color: "#14b8a6" 
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
