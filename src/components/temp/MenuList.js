import React from "react";
import PropTypes from "prop-types";

import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

import {
  FixedBox,
  List,
  SideLink,
  SocialList,
  SideLinkSvg,
  socialSvgStyle,
} from "./MenuListStyle";

const MenuList = ({ isOpen }) => {
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
              <SideLink href="/">Home</SideLink>
            </li>

            <li>
              <SideLink href="/">About</SideLink>
            </li>

            <li>
              <SideLink href="/">Projects</SideLink>
            </li>
            <li>
              <SideLink href="/">Contact</SideLink>
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
};

export default MenuList;
