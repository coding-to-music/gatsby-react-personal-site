import React from "react";
import PropTypes from "prop-types";

import { useScrollUpdate } from "../../context/ScrollContext";

import {
  FixedBox,
  List,
  SideLink,
  SocialList,
  SideLinkSvg,
} from "./MenuListStyle";
import socials from "../../constants/socials";

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
            {socials.map((social) => {
              return (
                <li key={social.id}>
                  <SideLinkSvg
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </SideLinkSvg>
                </li>
              );
            })}
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
