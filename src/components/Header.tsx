import React, { useState } from 'react';
import { Link } from 'gatsby';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility on mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">
          NexusStudio
        </h1>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/our-work" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Our Work
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation (Hamburger Menu) */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white shadow-md md:hidden`}
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/our-work"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
