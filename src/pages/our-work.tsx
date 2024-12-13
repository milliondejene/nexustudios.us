import * as React from "react";
import { Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";

const OurWork: React.FC<PageProps> = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-indigo-600 mb-6">Our Work</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          A Glimpse of Our Projects
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          At NexusStudio, we take pride in delivering top-notch web development and creative solutions. Here are some of our standout projects that showcase our skills and expertise.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Project 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Project One</h3>
            <p className="text-gray-700 mb-4">
              This project is a dynamic web solution for a modern business. We implemented a responsive design, integrated custom features, and ensured scalability.
            </p>
            <Link
              to="/project/1"
              className="text-indigo-600 hover:text-indigo-700 transition-all"
            >
              View Project
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Two</h3>
            <p className="text-gray-700 mb-4">
              A highly engaging media solution designed to improve user interaction. Our team focused on intuitive design and seamless user experience.
            </p>
            <Link
              to="/project/2"
              className="text-indigo-600 hover:text-indigo-700 transition-all"
            >
              View Project
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Three</h3>
            <p className="text-gray-700 mb-4">
              This project includes a custom-built website with an integrated e-commerce platform, delivering a seamless shopping experience.
            </p>
            <Link
              to="/project/3"
              className="text-indigo-600 hover:text-indigo-700 transition-all"
            >
              View Project
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12 text-center">
        <Link
          to="/contact"
          className="px-6 py-3 text-white bg-indigo-600 rounded-lg text-lg font-semibold transition-all hover:bg-indigo-700"
        >
          Start Your Project with Us
        </Link>
      </section>
    </div>
  );
};

export default OurWork;

export const Head: HeadFC = () => <title>Our Work - NexusStudio</title>;
