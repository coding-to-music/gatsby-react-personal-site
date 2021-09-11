import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { fadeVertically } from "../abstracts/animations";
import onScreenIntersection from "../utils/onScreenIntersection";

const Container = styled.footer`
  padding: 3.5rem 0;
  margin: 0 auto;

  background-color: var(--color-grey-main);

  h4 {
    transition: all ease 0.4s;
    opacity: 0;
    transform: translateY(100%);
    ${(props) =>
      props.animateText &&
      css`
        animation: ${fadeVertically} 0.6s ease-out 0.1s 1 forwards;
      `};

    font-size: 1.8rem;
    font-family: NexaBold;
    font-weight: 400;
    color: #2b2d42;
    text-align: center;
  }
`;

const Footer = () => {
  const contactTextRef = useRef();
  const contactView = onScreenIntersection(contactTextRef, -20, false, 10);

  return (
    <Container ref={contactTextRef} animateText={contactView}>
      <h4>
        &copy; {new Date().getFullYear()} by Ilias Allek. All rights reserved.
      </h4>
    </Container>
  );
};

export default Footer;
