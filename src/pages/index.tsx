import * as React from "react";
import { Link } from "gatsby";
import Footer from "../components/Footer"; // Import the Header component
import Header from "../components/Header"; // Import the Footer component
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="relative">
      <Header /> {/* Include Header */}

      {/* Hero Section */}
      <main className="flex justify-center items-center min-h-screen bg-gray-100 text-gray-900 pt-20">
        <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-lg w-full">
          <h1 className="text-4xl font-semibold text-indigo-600 mb-4">
            Welcome to NexusStudio
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Innovating with every project—your go-to platform for next-generation web development and media solutions.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg text-lg font-semibold transition-all hover:bg-indigo-700"
          >
            Learn More About Us
          </Link>
        </div>
      </main>
      <Footer /> {/* Include Footer */}
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Welcome to NexusStudio</title>;
