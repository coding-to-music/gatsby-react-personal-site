import styled, { css } from "styled-components";

import { GrClose } from "react-icons/gr";

export const MenuBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;

  border: 1px solid ${(props) => (props.isOpen ? "#102a42" : props.navColor)};

  cursor: pointer;

  span {
    position: relative;

    display: block;

    transform: scaleX(1);

    width: 2rem;
    height: 2px;

    overflow: hidden;
    position: relative;
    background-color: transparent;

    transition: transform 0.3s ease;

    &:not(:last-child) {
      margin-bottom: 5px;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${(props) =>
        props.isOpen ? "#102a42" : props.navColor};

      transition: transform ease 300ms;
    }
    &:before {
      content: "";
      transform: translateX(0);
    }
    &:after {
      content: "";
      /* background-color: red; */
      transform: translateX(-200%);
    }
  }

  span:nth-of-type(2) {
    &:before,
    &:after {
      transition-delay: 75ms;
    }
  }
  span:nth-of-type(3) {
    &:before,
    &:after {
      transition-delay: 150ms;
    }
  }

  &:hover span:before {
    transform: translateX(200%);
  }
  &:hover span:after {
    transform: translateX(0);
  }
`;

export const Nav = styled.div`
  position: fixed;
  z-index: 40;

  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 180rem;
  width: 90vw;
  padding: 2.5rem 0 0;
  a {
    text-decoration: none;
    cursor: pointer;
    h3 {
      padding: 4px;

      border: 3px solid
        ${(props) => (props.isOpen ? "#102a42" : props.navColor)};

      font-size: 1.45rem;
      font-family: PoppinsBlack;
      text-shadow: 0 0 20px rgb(0 0 0 / 10%);
      line-height: 1.8rem;
      color: ${(props) => (props.isOpen ? "#102a42" : props.navColor)};
    }
  }

  & > div:first-of-type {
    display: flex;
    align-items: center;
    h3 {
      margin-right: 2rem;

      font-size: 2.3rem;
      font-family: PoppinsBlack;
      font-weight: bold;
      text-shadow: 0 0 20px rgb(0 0 0 / 10%);
      line-height: 1.8rem;
      color: ${(props) => (props.isOpen ? "#102a42" : props.navColor)};
    }
  }
`;

export const CloseMenu = styled(GrClose)`
  height: 2rem;
  width: 2rem;

  fill: "#102a42";
  background: transparent;
  border-color: transparent;

  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.3);
  }
`;
