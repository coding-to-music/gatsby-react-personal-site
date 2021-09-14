import React from "react";
import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";

import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

import { useScrollUpdate } from "../../context/ScrollContext";

import {
  FixedBox,
  List,
  SideLink,
  SocialList,
  SideLinkSvg,
  socialSvgStyle,
} from "./MenuListStyle";

const MenuList = ({ isOpen, setIsOpen }) => {
  const setScollSection = useScrollUpdate();
  return (
    <div>
      <FixedBox isOpen={isOpen}>
        {/* <IoClose
          style={CloseSvgStyle}
          onClick={() => {
            setIsOpen(false);
          }}
        /> */}
        <div>
          <List isOpen={isOpen}>
            <li>
              <SideLink
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  setScollSection("homeSection");
                }}
              >
                Home
              </SideLink>
            </li>

            <li>
              <SideLink
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  setScollSection("aboutSection");
                }}
              >
                About
              </SideLink>
            </li>

            <li>
              <SideLink
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  setScollSection("projectSection");
                }}
              >
                Projects
              </SideLink>
            </li>
            <li>
              <SideLink
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  setScollSection("contactSection");
                }}
              >
                Contact
              </SideLink>
            </li>
          </List>

          <SocialList isOpen={isOpen}>
            <li>
              <SideLinkSvg href="/">
                <FaTwitterSquare
                  style={socialSvgStyle}
                  className="media-svg-effect"
                />
              </SideLinkSvg>
            </li>
            <li>
              <SideLinkSvg href="/">
                <FaGithubSquare
                  style={socialSvgStyle}
                  className="media-svg-effect"
                />
              </SideLinkSvg>
            </li>
            <li>
              <SideLinkSvg href="/">
                <FaFacebookSquare
                  style={socialSvgStyle}
                  className="media-svg-effect"
                />
              </SideLinkSvg>
            </li>
            <li>
              <SideLinkSvg href="/">
                <FaLinkedin
                  style={socialSvgStyle}
                  className="media-svg-effect"
                />
              </SideLinkSvg>
            </li>
            <li>
              <SideLinkSvg href="/">
                <FaInstagramSquare
                  style={socialSvgStyle}
                  className="media-svg-effect"
                />
              </SideLinkSvg>
            </li>
          </SocialList>
        </div>
      </FixedBox>
    </div>
  );
};

MenuList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MenuList;
