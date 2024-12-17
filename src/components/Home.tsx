import React from "react";
import { useIntl } from "gatsby-plugin-intl";

const Home: React.FC = () => {
  const intl = useIntl(); // Access current language translations

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 pt-20 px-6 dark:from-gray-900 dark:to-indigo-900 dark:text-white"
    >
      {/* Glassmorphism effect container */}
      <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-sm z-0 dark:bg-gray-900 dark:bg-opacity-50" />

      <div className="relative text-center p-8 bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-2xl z-10 transform transition-transform hover:scale-105 duration-300 ease-in-out dark:bg-gray-800 dark:bg-opacity-80">
        <h1 className="text-4xl font-semibold text-indigo-600 mb-4 leading-tight dark:text-indigo-300">
          {intl.formatMessage({ id: "home.welcomeMessage" })} {/* Dynamically fetch translations */}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
          {intl.formatMessage({ id: "home.description" })} {/* Dynamically fetch translations */}
        </p>
      </div>
    </section>
  );
};

export default Home;
