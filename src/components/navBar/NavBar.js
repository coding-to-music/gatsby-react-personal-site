import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { animateScroll as scroll } from "react-scroll";

import MenuList from "../menuList/MenuList";
import { MenuBox, NavContainer, Nav, CloseMenu } from "./NavBarStyle";

const NavBar = ({ navColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 70) {
      return setIsScrolled(true);
    }
    return setIsScrolled(false);
  };

  function debounce(method, delay) {
    clearTimeout(method._tId);
    method._tId = setTimeout(function () {
      method();
    }, delay);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => debounce(listenScrollEvent, 1));
    return () => {
      window.removeEventListener("scroll", () =>
        debounce(listenScrollEvent, 1)
      );
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <MenuList isOpen={isOpen} />
      <NavContainer isScrolled={isScrolled} isOpen={isOpen}>
        <Nav isOpen={isOpen} navColor={navColor} isScrolled={isScrolled}>
          <div
            onClick={toggleHome}
            role="button"
            onKeyPress={toggleHome}
            tabIndex={0}
          >
            <h3>
              AEK
              <br />
              ILIAS.
            </h3>
          </div>
          <div>
            <h3>MENU</h3>
            <MenuBox
              isOpen={isOpen}
              navColor={navColor}
              isScrolled={isScrolled}
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
      </NavContainer>
    </>
  );
};

NavBar.propTypes = {
  navColor: PropTypes.string,
};

NavBar.defaultProps = {
  navColor: "var(--color-blue-dark)",
};

export default NavBar;
