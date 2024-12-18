import React, { Suspense, lazy, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurWork from "../components/our-work";
import Teams from "../components/Teams";
import { IntlProvider } from "gatsby-plugin-intl";
import { useIntl } from "gatsby-plugin-intl";

const Home = lazy(() => import("../components/Home"));
const About = lazy(() => import("../components/About"));
const Contact = lazy(() => import("../components/Contact"));

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const intl = useIntl(); // Get current language and translations

  // Check and set theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add('light'); // Default theme
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme preference
  };

  return (
    <IntlProvider locale={intl.locale} messages={intl.messages}>
      <div className={`font-sans min-h-screen ${theme === 'light' ? 'bg-gradient-to-b from-blue-50 to-white' : 'bg-gray-900 text-white'}`}>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main>
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <Home />
            <About theme={theme} />
            <OurWork theme={theme} />
            <Teams theme={theme} />
            <Contact />
          </Suspense>
        </main>
        <Footer theme={theme} />
      </div>
    </IntlProvider>
  );
};

export default App;
