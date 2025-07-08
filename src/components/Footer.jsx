import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white p-4 text-center transition-colors duration-300">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/G-darshan-32" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"><FaGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/darshan-govindaraj-675a31349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"><FaLinkedin size={24} /></a>
        <a href="mailto:dg0230@srmist.edu.in" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"><FaEnvelope size={24} /></a>
      </div>
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">&copy; {new Date().getFullYear()} P.B.G.R. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer; 