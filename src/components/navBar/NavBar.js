import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import MenuList from "../MenuList/MenuList";
import { Nav, MenuBox, CloseMenu } from "./NavBarStyle";

const NavBar = ({ navColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuList isOpen={isOpen} />
      <Nav isOpen={isOpen} navColor={navColor}>
        <Link to="/about">
          <h3>
            AEK
            <br />
            ILIAS.
          </h3>
        </Link>
        <div>
          <h3>MENU</h3>
          <MenuBox
            isOpen={isOpen}
            navColor={navColor}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {!isOpen ? (
              <>
                <span />
                <span />
                <span />
              </>
            ) : (
              <CloseMenu />
            )}
          </MenuBox>
        </div>
      </Nav>
    </>
  );
};

NavBar.propTypes = {
  navColor: PropTypes.string,
};

NavBar.defaultProps = {
  navColor: "white",
};

export default NavBar;
