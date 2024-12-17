import * as React from "react";
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl"; // Import intl hook for internationalization

interface OurWorkProps {
  theme: 'light' | 'dark';
}

const OurWork: React.FC<OurWorkProps> = ({ theme }) => {
  const intl = useIntl(); // Use the useIntl hook for translations

  return (
    <div id="our-work" className="max-w-7xl mx-auto px-6 py-12">
      <h1
        className={`text-4xl font-semibold mb-6 text-center ${
          theme === 'light' ? 'text-indigo-600' : 'text-indigo-300'
        }`}
      >
        {intl.formatMessage({ id: "ourWork.title" })} {/* Translated title */}
      </h1>

      <section className="mb-8">
        <h2
          className={`text-2xl font-semibold mb-4 text-center ${
            theme === 'light' ? 'text-gray-800' : 'text-gray-200'
          }`}
        >
          {intl.formatMessage({ id: "ourWork.projectsGlimpse" })} {/* Translated subtitle */}
        </h2>
        <p
          className={`text-lg mb-4 text-center ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}
        >
          {intl.formatMessage({ id: "ourWork.projectsDescription" })} {/* Translated description */}
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Project 1 */}
        <div
          className={`bg-white rounded-lg shadow-xl overflow-hidden hover:scale-105 transform transition-all ease-in-out duration-300 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div
            className={`p-6 rounded-b-lg ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}
            >
              {intl.formatMessage({ id: "ourWork.project1.title" })} {/* Translated project title */}
            </h3>
            <p
              className={`mb-4 ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}
            >
              {intl.formatMessage({ id: "ourWork.project1.description" })} {/* Translated project description */}
            </p>
            <Link
              to="/project/1"
              className={`text-indigo-600 hover:text-indigo-700 transition-all ${
                theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'
              }`}
            >
              {intl.formatMessage({ id: "ourWork.viewProject" })} {/* Translated button text */}
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className={`bg-white rounded-lg shadow-xl overflow-hidden hover:scale-105 transform transition-all ease-in-out duration-300 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div
            className={`p-6 rounded-b-lg ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}
            >
              {intl.formatMessage({ id: "ourWork.project2.title" })} {/* Translated project title */}
            </h3>
            <p
              className={`mb-4 ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}
            >
              {intl.formatMessage({ id: "ourWork.project2.description" })} {/* Translated project description */}
            </p>
            <Link
              to="/project/2"
              className={`text-indigo-600 hover:text-indigo-700 transition-all ${
                theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'
              }`}
            >
              {intl.formatMessage({ id: "ourWork.viewProject" })} {/* Translated button text */}
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className={`bg-white rounded-lg shadow-xl overflow-hidden hover:scale-105 transform transition-all ease-in-out duration-300 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div
            className={`p-6 rounded-b-lg ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}
            >
              {intl.formatMessage({ id: "ourWork.project3.title" })} {/* Translated project title */}
            </h3>
            <p
              className={`mb-4 ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}
            >
              {intl.formatMessage({ id: "ourWork.project3.description" })} {/* Translated project description */}
            </p>
            <Link
              to="/project/3"
              className={`text-indigo-600 hover:text-indigo-700 transition-all ${
                theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'
              }`}
            >
              {intl.formatMessage({ id: "ourWork.viewProject" })} {/* Translated button text */}
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12 text-center">
        <Link
          to="/contact"
          className={`px-6 py-3 text-white bg-indigo-600 rounded-lg text-lg font-semibold transition-all hover:bg-indigo-700 ${
            theme === 'dark' ? 'bg-indigo-500' : 'bg-indigo-600'
          }`}
        >
          {intl.formatMessage({ id: "ourWork.contactButton" })} {/* Translated contact button text */}
        </Link>
      </section>
    </div>
  );
};

export default OurWork;
