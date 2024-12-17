import React from 'react';

interface ThemeToggleProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, theme }) => {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="focus:outline-none transition-transform hover:scale-110"
    >
      {theme === 'light' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700" // Light theme color
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h1M3 12H2m15.536-7.464l-.707.707M5.464 18.536l-.707.707M18.536 18.536l-.707-.707M5.464 5.464l-.707-.707"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white" // Dark theme color
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h1M3 12H2m15.536-7.464l-.707.707M5.464 18.536l-.707.707M18.536 18.536l-.707-.707M5.464 5.464l-.707-.707"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
