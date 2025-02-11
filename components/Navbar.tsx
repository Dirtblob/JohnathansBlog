import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useGlobalContext } from '@/context/GlobalContext';

const Navbar: React.FC = () => {
  const {
    isDarkMode,
    setIsDarkMode,
    activeSection,
    setActiveSection
  } = useGlobalContext();

  // For a mobile menu, keep local state if you want (only for showing/hiding menu)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav
      className={`fixed top-0 w-full shadow-sm z-50 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold"
          >
            Portfolio
          </motion.div>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Nav Buttons */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'blog', 'projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize ${
                    activeSection === section
                      ? 'text-blue-600 dark:text-blue-400'
                      : `${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        } hover:text-blue-600 dark:hover:text-blue-400`
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`md:hidden ${
            isDarkMode ? 'bg-gray-800' : 'bg-white text-gray-900'
          }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {['home', 'about', 'blog', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 capitalize ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;