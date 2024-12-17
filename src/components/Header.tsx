import React, { useState } from 'react';
import { Link } from 'gatsby';
import ThemeToggle from './Themetoggle';

interface HeaderProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full ${
        theme === 'light' ? 'bg-white bg-opacity-80' : 'bg-gray-800 bg-opacity-90'
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
                About
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
                Our Work
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
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />

          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none transition-transform hover:scale-110"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${theme === 'light' ? 'text-black' : 'text-white'}`} // Conditional color for the menu icon
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
              About
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
              Our Work
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
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
