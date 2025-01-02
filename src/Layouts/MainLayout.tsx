import React from "react";
import { Helmet } from "react-helmet";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      {/* Helmet for managing <head> */}
      <Helmet>
        <title>My Gatsby Site</title>
        <meta name="description" content="A description of your site." />
        <link
          href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Header or Navbar */}
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} My Gatsby Site</p>
      </footer>
    </>
  );
};

export default MainLayout;
