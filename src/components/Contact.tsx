import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl"; // Import useIntl hook for translations

const Contact: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");
  const intl = useIntl(); // Get the intl object for translations

  // Fetching the translated address from the intl object
  const address = {
    street: intl.formatMessage({ id: "contact.address.street" }),
    city: intl.formatMessage({ id: "contact.address.city" }),
    state: intl.formatMessage({ id: "contact.address.state" }),
    zip: intl.formatMessage({ id: "contact.address.zip" }),
    phone: intl.formatMessage({ id: "contact.address.phone" }),
    email: intl.formatMessage({ id: "contact.address.email" }),
  };

  // Google Maps URL for embedding
  const mapUrl = "https://www.google.com/maps/embed/v1/place?q=123+Main+St,+Cityville,+ST+12345&key=YOUR_GOOGLE_MAPS_API_KEY"; // Replace with actual API key

  return (
    <section
      id="contact"
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-indigo-100 pt-20 px-6 ${
        theme === "dark" ? "dark:from-gray-900 dark:to-indigo-900 dark:text-white" : ""
      }`}
    >
      {/* Glassmorphism background */}
      <div
        className={`absolute inset-0 bg-white bg-opacity-40 backdrop-blur-sm z-0 ${
          theme === "dark" ? "dark:bg-gray-900 dark:bg-opacity-50" : ""
        }`}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 z-10">
        {/* Left side: Address and Contact Info */}
        <div
          className={`p-8 bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-2xl transform transition-transform hover:scale-105 duration-300 ease-in-out dark:bg-gray-800 dark:bg-opacity-80`}
        >
          <h1
            className={`text-4xl font-semibold mb-6 leading-tight ${
              theme === "light" ? "text-indigo-600" : "text-indigo-300"
            }`}
          >
            {intl.formatMessage({ id: "contact.title" })} {/* Translated title */}
          </h1>
          <p
            className={`text-lg mb-6 ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            {intl.formatMessage({ id: "contact.description" })} {/* Translated description */}
          </p>
          <div
            className={`text-lg ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <p>{address.street}</p>
            <p>
              {address.city}, {address.state} {address.zip}
            </p>
            <p>{intl.formatMessage({ id: "contact.address.phone" })}: {address.phone}</p>
            <p>
              {intl.formatMessage({ id: "contact.address.email" })}:{" "}
              <a href={`mailto:${address.email}`} className="text-indigo-500">
                {address.email}
              </a>
            </p>
          </div>
        </div>

        {/* Right side: Map */}
        <div
          className={`p-8 bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-2xl transform transition-transform hover:scale-105 duration-300 ease-in-out dark:bg-gray-800 dark:bg-opacity-80`}
        >
          <h2
            className={`text-3xl font-semibold mb-6 leading-tight ${
              theme === "light" ? "text-indigo-600" : "text-indigo-300"
            }`}
          >
            {intl.formatMessage({ id: "contact.locationTitle" })} {/* Translated location title */}
          </h2>
          <iframe
            title={intl.formatMessage({ id: "contact.mapAlt" })}  
            src={mapUrl}
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
