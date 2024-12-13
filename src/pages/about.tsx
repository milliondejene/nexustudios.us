import * as React from "react";
import { Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";

const AboutUs: React.FC<PageProps> = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-indigo-600 mb-6">About Us</h1>
      
      <section className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          NexusStudio is a creative agency specializing in innovative web development, multimedia solutions, and cutting-edge digital experiences. We work with businesses of all sizes to craft stunning websites, develop engaging digital content, and create impactful brands.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our team is passionate about pushing the boundaries of design and technology. We combine technical expertise with creative flair to deliver high-quality solutions that meet the needs of our clients and exceed their expectations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          At NexusStudio, our mission is to empower businesses through exceptional digital experiences that drive growth and engagement. We aim to build long-lasting relationships with our clients, helping them succeed in the fast-paced digital world.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Innovation: We embrace creativity and technology to bring fresh, exciting ideas to life.</li>
          <li>Collaboration: We believe in teamwork and working closely with our clients to achieve the best results.</li>
          <li>Excellence: We are committed to delivering high-quality solutions with every project.</li>
          <li>Integrity: We build trust through transparency, honesty, and strong business ethics.</li>
        </ul>
      </section>

      <Link
        to="/contact"
        className="inline-block mt-8 px-6 py-3 text-white bg-indigo-600 rounded-lg text-lg font-semibold transition-all hover:bg-indigo-700"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default AboutUs;

export const Head: HeadFC = () => <title>About Us - NexusStudio</title>;
