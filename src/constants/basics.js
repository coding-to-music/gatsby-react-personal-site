import React from "react";

import { FaPython } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import JuliaIcon from "../assets/svgs/julia-icon.svg";
import RIcon from "../assets/svgs/julia-icon.svg";
import SasIcon from "../assets/svgs/julia-icon.svg";

const basics = [
  {
    id: 1,
    icon: <JuliaIcon />,
    title: "Julia",
  },
  {
    id: 2,
    icon: <FaPython />,
    title: "Python",
  },
  {
    id: 3,
    icon: <RIcon />,
    title: "R",
  },
  {
    id: 4,
    icon: <SasIcon />,
    title: "SAS",
  },
  {
    id: 5,
    icon: <SiWebpack />,
    title: "WebPack",
  },
];

export default basics;
