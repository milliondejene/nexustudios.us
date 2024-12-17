import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useIntl, changeLocale } from 'gatsby-plugin-intl';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const intl = useIntl(); // Access the current language
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'sv', name: 'Swedish' },
    { code: 'om', name: 'Oromo' },
    { code: 'am', name: 'Amharic' },
  ]; // Available languages with full names
  const currentLanguage = intl.locale; // Get the current language

  // Handle language change
  const handleLanguageChange = (language: string) => {
    changeLocale(language); // Change the language
    setIsLangDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <footer
      className={`relative w-full py-8 px-6 flex justify-center items-center ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-gray-900 to-indigo-900 text-white'
          : 'bg-gradient-to-r from-indigo-50 to-indigo-100 text-gray-900' // Adjust light theme gradient
      }`}
    >
      {/* Glassmorphism effect container */}
      <div
        className={`absolute inset-0 bg-white bg-opacity-40 backdrop-blur-sm z-0 ${
          theme === 'dark' ? 'dark:bg-gray-900 dark:bg-opacity-50' : ''
        }`}
      />

      <div
        className={`relative text-center p-6 bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg z-10 transform transition-transform hover:scale-105 duration-300 ease-in-out ${
          theme === 'dark' ? 'dark:bg-gray-800 dark:bg-opacity-80' : 'dark:bg-opacity-70'
        } max-w-2xl w-full`}
      >
        <p className="text-sm mb-4">
          <FormattedMessage
            id="footer.copyright"
            values={{ year: new Date().getFullYear(), company: 'NexusStudio' }}
          />
        </p>

        {/* Language Selector Dropdown */}
        <div className="relative inline-block">
          <button
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            className="text-sm px-4 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition duration-300"
          >
            {languages.find((lang) => lang.code === currentLanguage)?.name || 'Language'}
          </button>

          {isLangDropdownOpen && (
            <div className="absolute bottom-full mb-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg transition-all duration-300">
              <ul className="space-y-2 p-2">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => handleLanguageChange(lang.code)}
                      className="w-full text-left text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-2 rounded-lg transition duration-200"
                    >
                      {lang.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Optional social links or other footer content */}
        <div className="space-x-6 mt-4">
          <a
            href="#"
            className={`${
              theme === 'dark' ? 'text-gray-400 hover:text-indigo-500' : 'text-gray-600 hover:text-indigo-500'
            } transition duration-200`}
          >
            <FormattedMessage id="footer.facebook" />
          </a>
          <a
            href="#"
            className={`${
              theme === 'dark' ? 'text-gray-400 hover:text-indigo-500' : 'text-gray-600 hover:text-indigo-500'
            } transition duration-200`}
          >
            <FormattedMessage id="footer.twitter" />
          </a>
          <a
            href="#"
            className={`${
              theme === 'dark' ? 'text-gray-400 hover:text-indigo-500' : 'text-gray-600 hover:text-indigo-500'
            } transition duration-200`}
          >
            <FormattedMessage id="footer.instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
