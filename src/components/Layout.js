/* eslint-disable react/prop-types */
import React from "react";
import loadable from "@loadable/component";

import "../styles/_app.scss";
import "../assets/fonts/globalStyledFonts/global.scss";

import Footer from "./Footer";
import { GlobeProvider } from "../context/GlobeContext";

const Layout = ({ children }) => {
  return (
    <GlobeProvider>
      {children}
      <Footer />
    </GlobeProvider>
  );
};

export default Layout;
