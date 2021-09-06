import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  padding: 3.5rem 0;
  margin: 0 auto;

  background-color: var(--color-grey-main);

  h4 {
    font-size: 1.8rem;
    font-family: NexaBold;
    font-weight: 400;
    color: #2b2d42;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <Container>
      <h4>
        &copy; {new Date().getFullYear()} by Ilias Allek. All rights reserved.
      </h4>
    </Container>
  );
};

export default Footer;
