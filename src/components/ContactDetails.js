import React from "react";
import styled from "styled-components";

import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";

const Container = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 40;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a:first-of-type {
    margin-bottom: 2rem;
  }

  a:nth-of-type(2) {
    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

const SideLinkSvg = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;

  text-decoration: none;
  color: white;
  background-image: linear-gradient(
    76deg,
    var(--color-blue-dark),
    var(--color-blue-darker)
  );

  /* &:hover {
    transform: scale(1.1);
  } */

  svg {
    transition: all 0.2s linear;
    width: 2rem;
    height: 2rem;

    &:hover {
      fill: var(--color-blue-special);
    }
  }
`;

const ContactDetails = () => {
  return (
    <Container>
      <SideLinkSvg
        href="https://github.com/Allek97"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiGithubLine />
      </SideLinkSvg>
      <SideLinkSvg
        href="https://www.linkedin.com/in/ilias-allek"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </SideLinkSvg>
    </Container>
  );
};

export default ContactDetails;
