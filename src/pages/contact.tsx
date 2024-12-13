import * as React from 'react';
import { useState } from 'react';
import { Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";

const ContactUs: React.FC<PageProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("Thank you for reaching out! We'll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-indigo-600 mb-6">Contact Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-4">
          We’d love to hear from you! Whether you have a question, feedback, or project request, don’t hesitate to reach out.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Fill out the form below, and we’ll get back to you as soon as possible.
        </p>
      </section>

      <section className="mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg text-gray-800 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg text-gray-800 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg text-gray-800 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-indigo-600 rounded-lg text-lg font-semibold transition-all hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>

        {formStatus && (
          <div className="mt-6 text-green-600 text-lg font-semibold">
            {formStatus}
          </div>
        )}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Info</h2>
        <p className="text-lg text-gray-700 mb-4">
          You can also reach us by the following methods:
        </p>
        <ul className="text-lg text-gray-700 space-y-2">
          <li>Email: <a href="mailto:contact@nexusstudio.com" className="text-indigo-600">contact@nexusstudio.com</a></li>
          <li>Phone: <span className="text-indigo-600">+1 (123) 456-7890</span></li>
          <li>Address: 123 Nexus Ave, Suite 100, City, Country</li>
        </ul>
      </section>

      <Link
        to="/"
        className="inline-block mt-8 px-6 py-3 text-white bg-indigo-600 rounded-lg text-lg font-semibold transition-all hover:bg-indigo-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ContactUs;

export const Head: HeadFC = () => <title>Contact Us - NexusStudio</title>;
