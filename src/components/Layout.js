/* eslint-disable react/prop-types */
import React from "react";

import "../styles/_app.scss";
import "../assets/fonts/globalStyledFonts/global.scss";

import Footer from "./Footer";
import { GlobeProvider } from "../context/GlobeContext";
import { LoadingProvider } from "../context/LoadingContext";
import { ScrollProvider } from "../context/ScrollContext";

const Layout = ({ children }) => {
  return (
    <ScrollProvider>
      <LoadingProvider>
        <GlobeProvider>
          {children}
          <Footer />
        </GlobeProvider>
      </LoadingProvider>
    </ScrollProvider>
  );
};

export default Layout;
