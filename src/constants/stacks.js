import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaJava,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiSass,
  SiMongodb,
  SiPostman,
  SiGatsby,
  SiGraphql,
} from "react-icons/si";
import ExpressJsIcon from "../assets/svgs/expressjs-icon.svg";
import ContentfulIcon from "../assets/svgs/contentful-svg.svg";

const stacks = [
  {
    id: 1,
    icon: <FaHtml5 />,
    title: "HTML",
  },
  {
    id: 2,
    icon: <FaCss3Alt />,
    title: "CSS",
  },
  {
    id: 3,
    icon: <SiJavascript />,
    title: "JavaScript",
  },
  {
    id: 4,
    icon: <SiSass />,
    title: "Sass",
  },
  {
    id: 5,
    icon: <FaReact />,
    title: "React",
  },
  {
    id: 6,
    icon: <FaNodeJs />,
    title: "Node.js",
  },
  {
    id: 7,
    icon: <ExpressJsIcon />,
    title: "Express",
  },
  {
    id: 8,
    icon: <SiMongodb />,
    title: "MongoDB",
  },
  {
    id: 9,
    icon: <SiGatsby />,
    title: "Gatsby",
  },
  {
    id: 10,
    icon: <SiGraphql />,
    title: "GraphQL",
  },
  {
    id: 11,
    icon: <ContentfulIcon />,
    title: "Contentful",
  },
  {
    id: 12,
    icon: <FaGitAlt />,
    title: "Git",
  },
  {
    id: 13,
    icon: <SiPostman />,
    title: "Postman",
  },
  {
    id: 14,
    icon: <FaJava />,
    title: "Java",
  },

  {
    id: 15,
    icon: <FaAws />,
    title: "AWS",
  },
];

export default stacks;
