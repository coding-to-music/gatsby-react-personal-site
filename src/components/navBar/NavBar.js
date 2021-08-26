import React, { useState } from "react";
import { Link } from "gatsby";

import { IoClose } from "react-icons/io5";

import MenuList from "../MenuList/MenuList";
import { Nav, MenuBox, CloseMenu } from "./NavBarStyle";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuList isOpen={isOpen} />
      <Nav isOpen={isOpen}>
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

export default NavBar;
