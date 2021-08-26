import styled, { css, keyframes } from "styled-components";

export const FixedBox = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;

  display: grid;
  place-items: center;

  transition: all 0.3s linear;
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(-100%)"};

  width: 100%;
  height: 100%;

  opacity: ${(props) => (props.isOpen ? "1" : "0")};

  background: #f1f5f8;
`;

export const slideRight = keyframes`
    0% {
        transform: translateX(-20rem);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const List = styled.ul`
  list-style: none;

  ${(props) =>
    props.isOpen &&
    css`
      li:first-of-type {
        animation-delay: 0.25s;
      }
      li:nth-child(2) {
        animation-delay: 0.5s;
      }
      li:nth-child(3) {
        animation-delay: 0.75s;
      }
      li:nth-child(4) {
        animation-delay: 1s;
      }

      li {
        opacity: 0;
        animation: ${slideRight} 0.5s ease-in-out 0.3s forwards;
      }
    `}
`;

export const SideLink = styled.a`
  &,
  &:link,
  &:visited {
    display: block;

    transition: all 0.3s linear;

    margin-bottom: 0.8rem;

    border-radius: 0.4rem;

    text-align: center;
    text-transform: capitalize;
    text-decoration: none;

    font-size: 3.8rem;
    font-family: PoppinsRegular;
    font-weight: 400;
    letter-spacing: 0.32rem;

    color: #617d98;
  }

  &:focus,
  &:active,
  &:hover {
    background: #bff8fd;
    color: #2caeba;
  }
`;

export const slideUp = keyframes`
    0% {
        transform: translateY(20rem);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const SocialList = styled.ul`
  display: flex;

  justify-content: space-between;

  width: 30rem;
  margin-top: 4rem;

  list-style: none;

  ${(props) =>
    props.isOpen &&
    css`
      li:first-of-type {
        animation-delay: 0.25s;
      }
      li:nth-child(2) {
        animation-delay: 0.5s;
      }
      li:nth-child(3) {
        animation-delay: 0.75s;
      }
      li:nth-child(4) {
        animation-delay: 1s;
      }
      li:nth-child(5) {
        animation-delay: 1.25s;
      }

      li {
        opacity: 0;
        height: 3.8rem;
        width: 3.8rem;

        animation: ${slideUp} 0.5s ease-in-out 0.3s forwards;

        &:hover {
          transform: scale(1.1);
        }
      }
    `}
`;

export const SideLinkSvg = styled.a`
  transition: all 0.3s linear;

  text-decoration: none;

  color: #102a42;

  &:hover {
    transform: scale(1.1);
  }

  .media-svg-effect {
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const CloseSvgStyle = {
  position: "absolute",
  right: "4.75%",
  top: "2.75%",

  height: "5rem",
  width: "5rem",

  fill: "rgba(var(--color-blue-special))",
  background: "transparent",
  borderColor: "transparent",

  cursor: "pointer",
};

export const socialSvgStyle = {
  height: "100%",
  width: "100%",
};
