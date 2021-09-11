/* eslint-disable react/prop-types */
import React from "react";

import "../styles/_app.scss";
import "../assets/fonts/globalStyledFonts/global.scss";

import Footer from "./Footer";
import { GlobeProvider } from "../context/GlobeContext";
import { LoadingProvider } from "../context/LoadingContext";

const Layout = ({ children }) => {
  return (
    <LoadingProvider>
      <GlobeProvider>
        {children}
        <Footer />
      </GlobeProvider>
    </LoadingProvider>
  );
};

export default Layout;
