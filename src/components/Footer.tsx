import React from 'react';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer
      className={`relative w-full py-8 px-6 flex justify-center items-center ${
        theme === 'dark' ? 'bg-gradient-to-r from-gray-900 to-indigo-900 text-white' : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white'
      }`}
    >
      {/* Glassmorphism effect container */}
      <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-sm z-0 dark:bg-gray-900 dark:bg-opacity-50" />

      <div className="relative text-center p-6 bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg z-10 transform transition-transform hover:scale-105 duration-300 ease-in-out dark:bg-gray-800 dark:bg-opacity-80 max-w-2xl w-full">
        <p className="text-sm mb-4">
          &copy; 2024 <span className="font-semibold">NexusStudio</span>. All Rights Reserved.
        </p>

        {/* Optional social links or other footer content */}
        <div className="space-x-6">
          <a
            href="#"
            className={`${
              theme === 'dark' ? 'text-gray-400 hover:text-indigo-500' : 'text-gray-400 hover:text-indigo-500'
            } transition duration-200`}
          >
            Facebook
          </a>
          <a
            href="#"
            className={`${
              theme === 'dark' ? 'text-gray-400 hover:text-indigo-500' : 'text-gray-400 hover:text-indigo-500'
            } transition duration-200`}
          >
            Twitter
          </a>
          <a
            href="#"
            className={`${
              theme === 'dark' ? 'text-gray-400 hover:text-indigo-500' : 'text-gray-400 hover:text-indigo-500'
            } transition duration-200`}
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
