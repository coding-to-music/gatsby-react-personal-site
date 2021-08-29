/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

import NexaBold from "../assets/fonts/globalStyledFonts/NexaBoldGlobal";
import NexaLight from "../assets/fonts/globalStyledFonts/NexaLightGlobal";
import Manrope from "../assets/fonts/globalStyledFonts/ManropeGlobal";
import ManropeLight from "../assets/fonts/globalStyledFonts/ManropeLightGlobal";
import PoppinsBlack from "../assets/fonts/globalStyledFonts/PoppinsBlackGlobal";
import PoppinsRegular from "../assets/fonts/globalStyledFonts/PoppinsRegularGlobal";
import Roboto from "../assets/fonts/globalStyledFonts/RobotoGlobal";

import "../styles/_app.scss";

const Layout = ({ children }) => {
  //   console.log(children);
  return (
    <>
      <NexaBold />
      <NexaLight />
      <Manrope />
      <ManropeLight />
      <PoppinsBlack />
      <PoppinsRegular />
      <Roboto />
      {children}
    </>
  );
};

export default Layout;
