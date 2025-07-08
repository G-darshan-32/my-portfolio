import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (prefersDark) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      // Switch to light mode
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      // Switch to dark mode
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <motion.div 
      className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className={`mr-2 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-700 font-semibold'}`}>
        Light
      </span>
      <motion.button
        onClick={toggleTheme}
        className={`relative w-12 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${isDarkMode ? 'bg-teal-600' : 'bg-gray-300'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <motion.div 
          className={`absolute w-5 h-5 rounded-full transform transition-transform duration-300 flex items-center justify-center ${isDarkMode ? 'translate-x-6 bg-gray-900' : 'translate-x-1 bg-white'}`}
        >
          {isDarkMode ? (
            <FaMoon className="text-yellow-300" size={12} />
          ) : (
            <FaSun className="text-yellow-500" size={12} />
          )}
        </motion.div>
      </motion.button>
      <span className={`ml-2 text-sm font-medium ${isDarkMode ? 'text-gray-300 font-semibold' : 'text-gray-400'}`}>
        Dark
      </span>
    </motion.div>
  );
};

export default ThemeToggle; 