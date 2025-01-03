import React, { Suspense, lazy, useEffect, useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurWork from "../components/our-work";
import Teams from "../components/Teams";
import { IntlProvider } from "gatsby-plugin-intl";
import { useIntl } from "gatsby-plugin-intl";

// Lazy-loaded components
const Home = lazy(() => import("../components/Home"));
const About = lazy(() => import("../components/About"));
const Contact = lazy(() => import("../components/Contact"));

const IndexPage: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const intl = useIntl(); // Localization handler from gatsby-plugin-intl

  // Load the theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    const defaultTheme = savedTheme || "light";
    setTheme(defaultTheme);
    document.documentElement.classList.add(defaultTheme);
  }, []);

  // Toggle the theme and save the preference
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.replace(theme, newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <IntlProvider locale={intl.locale} messages={intl.messages}>
      <div
        className={`font-sans min-h-screen ${
          theme === "light"
            ? "bg-gradient-to-b from-blue-50 to-white"
            : "bg-gray-900 text-white"
        }`}
      >
        {/* Header */}
        <Header toggleTheme={toggleTheme} theme={theme} />

        {/* Navigation links */}

        {/* Main Content */}
        <main>
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About theme={theme} />
            </section>
            <section id="ourwork">
              <OurWork theme={theme} />
            </section>
            <section id="teams">
              <Teams theme={theme} />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </Suspense>
        </main>

        {/* Footer */}
        <Footer theme={theme} />
      </div>
    </IntlProvider>
  );
};

export default IndexPage;
