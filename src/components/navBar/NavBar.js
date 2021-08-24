import React from "react";
import { Header } from "./NavBarStyle";

const NavBar = () => {
  return (
    <>
      <Header>
        <a href="/">
          <h3>
            AEK
            <br />
            ILIAS.
          </h3>
        </a>
        <div>
          <h3>MENU</h3>
        </div>
      </Header>
    </>
  );
};

export default NavBar;
