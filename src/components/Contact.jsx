import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <FaLinkedin className="text-2xl" />, 
      url: "https://www.linkedin.com/in/darshan-govindaraj-675a31349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-400"
    },
    { 
      name: "GitHub", 
      icon: <FaGithub className="text-2xl" />, 
      url: "https://github.com/G-darshan-32",
      color: "hover:text-gray-400"
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-teal-600 dark:text-teal-400">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Feel free to reach out for opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white transition-colors duration-300">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaEnvelope className="text-3xl text-teal-400 mr-4" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300">Email</h4>
                  <a href="mailto:dg0230@srmist.edu.in" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300">
                    dg0230@srmist.edu.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-3xl text-teal-400 mr-4" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Potheri,Chennai</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white transition-colors duration-300">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-gray-700 dark:text-gray-300 ${link.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg mr-3 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 