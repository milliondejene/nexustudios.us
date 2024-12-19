// gatsby-ssr.js
import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="jersey"
      rel="preload"
      href="./public/fonts/Jersey10Charted-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />
  ]);
};
