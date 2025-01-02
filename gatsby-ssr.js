// gatsby-ssr.js
import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="preconnect" rel="preconnect" href="https://fonts.gstatic.com" />,
    <link
      key="google-fonts"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap"
    />
  ]);
};
