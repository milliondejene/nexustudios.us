import React from 'react';
import { useIntl } from 'gatsby-plugin-intl'; // Import intl hook for internationalization

interface AboutProps {
  theme: 'light' | 'dark';
}

const About: React.FC<AboutProps> = ({ theme }) => {
  const intl = useIntl(); // Use the useIntl hook for translations

  return (
    <section
      id="about"
      className={`relative min-h-screen py-20 px-6 ${
        theme === 'light' ? 'bg-gradient-to-r from-purple-50 to-blue-100' : 'bg-gradient-to-r from-gray-800 to-black'
      }`}
    >
      {/* Glassmorphism background container */}
      <div
        className={`absolute inset-0 ${
          theme === 'light' ? 'bg-white bg-opacity-40' : 'bg-gray-800 bg-opacity-50'
        } backdrop-blur-sm z-0`}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <h1
          className={`text-4xl font-semibold ${
            theme === 'light' ? 'text-indigo-600' : 'text-white'
          } mb-6 leading-tight`}
        >
          {intl.formatMessage({ id: 'aboutUs.title' })} {/* Translated title */}
        </h1>
        <p
          className={`text-lg ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          } mb-6 max-w-3xl mx-auto`}
        >
          {intl.formatMessage({ id: 'aboutUs.description' })} {/* Translated description */}
        </p>

        <h2
          className={`text-2xl font-semibold ${
            theme === 'light' ? 'text-gray-800' : 'text-gray-200'
          } mb-4`}
        >
          {intl.formatMessage({ id: 'aboutUs.mission' })} {/* Translated mission title */}
        </h2>
        <p
          className={`text-lg ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          } max-w-3xl mx-auto`}
        >
          {intl.formatMessage({ id: 'aboutUs.missionDescription' })} {/* Translated mission description */}
        </p>
      </div>
    </section>
  );
};

export default About;
