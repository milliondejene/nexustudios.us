import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `nexustudio.us`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-plugin-intl",
      options: {
        path: `${__dirname}/src/locales`, // Folder for language files
        languages: ["en", "am", "om", "sv"], // Supported languages
        defaultLanguage: "en", // Default language
        redirect: false, // Automatically redirect based on user's language preference
      },
    },
  ],
};

export default config;
