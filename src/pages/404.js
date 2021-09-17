import React from "react";

import Seo from "../components/Seo";
import NavBar from "../components/navBar/NavBar";

import { Container, Space404, HomeBtn } from "../styles/404Styles/404Style";

const errorPage = () => {
  return (
    <>
      <Seo title="Not Found" />
      <NavBar navColor="white" />
      <main>
        <Container>
          <article>
            <Space404 />
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <HomeBtn to="/">Back Home</HomeBtn>
          </article>
        </Container>
      </main>
    </>
  );
};

export default errorPage;
