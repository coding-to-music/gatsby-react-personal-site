import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";
import SpaceSvg from "../../assets/svgs/space.svg";

const fadeVertically = keyframes`
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeVerticallySvg = keyframes`
    100% {
        opacity: 1;
        transform: translateX(-50%);
    }
`;

export const Container = styled.div`
  position: relative;
  display: block;

  display: grid;
  place-items: center;

  min-height: calc(100vh - 9.8rem);

  background-image: url("hero-glow.svg"),
    linear-gradient(
      to left bottom,
      var(--color-blue-dark),
      var(--color-blue-darker) 50%
    );
  background-size: 200%;
  background-position: center center;
  background-repeat: no-repeat;

  article {
    position: relative;

    display: grid;
    place-items: center;

    @media only screen and (max-width: 28.5em) {
      h1 {
        font-size: 25rem;
      }

      svg {
        top: -5rem;
        max-width: 30rem;
      }
    }
    @media only screen and (max-width: 23.5em) {
      h1 {
        font-size: 20rem;
      }
      svg {
        top: -8rem;
        max-width: 25rem;
      }
    }
  }

  h1,
  h3,
  a {
    transition: all 0.3s ease-in 0s;
    opacity: 0;
    transform: translateY(-150%);
  }

  h1 {
    animation: ${fadeVertically} 0.5s ease-in 1 0.1s forwards;

    font-size: 30rem;
    color: white;
    text-align: center;
  }

  h3 {
    animation: ${fadeVertically} 0.5s ease-in 1 0.2s forwards;

    font-size: 3rem;
    color: white;
    text-align: center;
  }
`;

export const Space404 = styled(SpaceSvg)`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 10;

  transition: all 0.3s ease-in 0s;
  opacity: 0;
  transform: translateX(-150%);

  animation: ${fadeVerticallySvg} 0.5s ease-in 1 0.1s forwards;

  max-width: 40rem;
  width: 90vw;
`;

export const HomeBtn = styled(Link)`
  margin-top: 5rem;
  padding: 1.2rem 3rem;

  transition: all 0.3s;
  animation: ${fadeVertically} 0.5s ease-in 1 0.3s forwards;

  box-shadow: rgb(255 255 255 /30%) 0px 0.4rem 1rem 0px;

  border: none;
  border-radius: 0.6rem;

  background-color: white;

  font-family: ManropeMedium;
  font-size: 1.8rem;
  letter-spacing: 1px;
  text-decoration: none;
  white-space: nowrap;
  color: #2b2d42;

  cursor: pointer;

  &:hover {
    box-shadow: rgb(255 255 255 / 60%) 0px 0.4rem 1rem 0px;
  }
`;
