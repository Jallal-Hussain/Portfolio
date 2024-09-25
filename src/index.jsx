/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App.jsx";
import ThemeContextProvider from "./contexts/ThemeContext.jsx";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
