import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useIntl, changeLocale } from 'gatsby-plugin-intl'; // Import for internationalization
import ThemeToggle from './Themetoggle';

interface HeaderProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const intl = useIntl(); // Use the useIntl hook to access current language and translations

  // Define the available languages with their codes and full names
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'sv', name: 'Swedish' },
    { code: 'om', name: 'Oromo' },
    { code: 'am', name: 'Amharic' }
  ];

  const currentLanguage = intl.locale; // Get the current language

  // Toggle the mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle language change
  const handleLanguageChange = (language: string) => {
    changeLocale(language); // Change the language
    setIsLangDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full ${
        theme === 'light' ? 'bg-white bg-opacity-80' : 'bg-gray-800 bg-opacity-80'
      } backdrop-blur-sm shadow-lg z-50`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className={`text-3xl font-bold ${
            theme === 'light' ? 'text-indigo-600' : 'text-white'
          } tracking-wide`}
        >
          Nexustudio
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="#about"
                className={`${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                } hover:${
                  theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'
                } transition-colors`}
              >
                {intl.formatMessage({ id: 'header.about' })}
              </Link>
            </li>
            <li>
              <Link
                to="#our-work"
                className={`${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                } hover:${
                  theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'
                } transition-colors`}
              >
                {intl.formatMessage({ id: 'header.ourWork' })}
              </Link>
            </li>
            <li>
              <Link
                to="#teams"
                className={`${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                } hover:${
                  theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'
                } transition-colors`}
              >
                {intl.formatMessage({ id: 'header.teams' })}
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className={`${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                } hover:${
                  theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'
                } transition-colors`}
              >
                {intl.formatMessage({ id: 'header.contact' })}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Language Switcher (Desktop: Right of Theme Toggle) */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="text-sm text-gray-700 dark:text-gray-300"
            >
              {
                // Find the full language name based on the current language code
                languages.find((lang) => lang.code === currentLanguage)?.name || currentLanguage.toUpperCase()
              }
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg">
                <ul className="space-y-2 p-2">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => handleLanguageChange(lang.code)}
                        className="w-full text-left text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        {lang.name} {/* Full name of the language */}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Theme Toggle Button */}
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />

          {/* Language Switcher (Mobile: In Between Menu and Theme Toggle) */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="text-sm text-gray-700 dark:text-gray-300"
            >
              {
                // Show the current language name in the mobile version as well
                languages.find((lang) => lang.code === currentLanguage)?.name || currentLanguage.toUpperCase()
              }
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg">
                <ul className="space-y-2 p-2">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => handleLanguageChange(lang.code)}
                        className="w-full text-left text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        {lang.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleMenu}
            className="focus:outline-none transition-transform hover:scale-110"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full ${
          theme === 'light' ? 'bg-white' : 'bg-gray-800'
        } bg-opacity-90 backdrop-blur-sm shadow-md md:hidden`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li>
            <Link
              to="#about"
              className={`${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              } hover:${
                theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {intl.formatMessage({ id: 'header.about' })}
            </Link>
          </li>
          <li>
            <Link
              to="#our-work"
              className={`${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              } hover:${
                theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {intl.formatMessage({ id: 'header.ourWork' })}
            </Link>
          </li>
          <li>
            <Link
              to="#teams"
              className={`${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              } hover:${
                theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {intl.formatMessage({ id: 'header.teams' })}
            </Link>
          </li>
          <li>
            <Link
              to="#contact"
              className={`${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              } hover:${
                theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {intl.formatMessage({ id: 'header.contact' })}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
