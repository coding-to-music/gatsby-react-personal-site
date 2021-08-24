/* eslint-disable react/prop-types */
import React from "react";

import Nexa from "../assets/fonts/globalStyledFonts/NexaGlobal";
import Manrope from "../assets/fonts/globalStyledFonts/ManropeGlobal";
import Poppins from "../assets/fonts/globalStyledFonts/PoppinsGlobal";
import Roboto from "../assets/fonts/globalStyledFonts/RobotoGlobal";

import "../styles/_app.scss";

const Layout = ({ children }) => {
  //   console.log(children);
  return (
    <>
      <Nexa />
      <Manrope />
      <Poppins />
      <Roboto />

      {children}
    </>
  );
};

export default Layout;
