import styled, { css, keyframes } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

import StandSvg from "../../assets/svgs/stand.svg";

// TODO: Find a way to not use static folder for backimg svgs
const HeroGlow = require("../../../static/hero-glow.svg").default;

const updown = keyframes`
    from {
        transform: translateY(10px);
    }to {
        transform: translateY(-10px);
    }
`;

const fadeVertically = keyframes`
to {
    opacity: 1;
    transform: translateX(0);
}
`;

export const Header = styled.header`
  position: relative;

  display: block;
  /* height: 95vh; */
  background-image: url("${HeroGlow}"),
    linear-gradient(
      to left bottom,
      var(--color-blue-dark),
      var(--color-blue-darker) 50%
    );
  background-size: 200%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeroArticle = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 74rem;
  max-width: 145rem;
  margin: 0 auto;
  padding-top: 5rem;
  padding-left: 2.5rem;
  padding-bottom: 12rem;
  box-sizing: content-box;

  overflow: hidden;

  @media only screen and (max-width: 65.5em) {
    display: flex;
    flex-direction: column;

    padding: 14rem 2.5rem 0;

    box-sizing: border-box;
  }

  & > div:first-of-type {
    display: block;
    min-width: 60rem;

    @media only screen and (max-width: 65.5em) {
      min-width: 0;
    }

    h1 {
      transition: all 1s;
      opacity: 0;
      transform: translateY(150%);

      animation: ${fadeVertically} 0.7s ease-out 0.1s 1 forwards;

      margin-top: 2rem;
      margin-bottom: 1rem;

      font-size: 7.5rem;
      font-family: Manrope;
      text-transform: uppercase;

      line-height: 8.5rem;
      letter-spacing: -0.03em;

      color: white;

      @media only screen and (max-width: 25em) {
        font-size: 6rem;
        line-height: 7rem;
      }
    }

    h3 {
      transition: all 1s;
      opacity: 0;
      transform: translateY(50%);

      animation: ${fadeVertically} 0.7s ease-out 0.4s 1 forwards;

      font-size: 2.4rem;
      font-family: ManropeLight;
      font-weight: 400;
      line-height: 3.2rem;
      color: var(--color-blue-grey);

      @media only screen and (max-width: 25em) {
        font-size: 2rem;
        line-height: 2.8rem;
      }
    }
  }
`;

export const GlobeContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 65rem !important;
`;

export const GlobeCanvas = styled.canvas`
  display: block;

  width: 130rem !important;
  height: auto !important;
`;

export const ExtraPlanetImage = styled(GatsbyImage)`
  position: relative;

  display: block;

  min-width: 65rem;

  @media only screen and (max-width: 65.5em) {
    width: 85%;
    min-width: 58rem;
  }
`;

export const UFOImage = styled(GatsbyImage)`
  position: absolute !important;
  bottom: -9rem;
  right: 20rem;
  z-index: 20;

  animation: ${updown} 4s ease-in-out alternate infinite forwards;

  filter: drop-shadow(4px 6px 8px black);

  object-fit: contain;

  width: 48rem;
  height: auto;

  @media only screen and (max-width: 65em) {
    bottom: -8rem;
    left: 38%;
    right: 0;

    width: 43rem;
  }
  @media only screen and (max-width: 37.5em) {
    left: 20%;
  }
  @media only screen and (max-width: 28em) {
    left: 5%;
    width: 38rem;
  }
  @media only screen and (max-width: 22em) {
    left: -4%;
  }
`;

export const Stand = styled(StandSvg)`
  position: absolute;
  bottom: 0;
  z-index: 10;

  width: 100%;
  height: auto;

  path {
    fill: var(--color-grey-main);
  }
`;

export const HeroBtn = styled.button.attrs({
  type: "button",
})`
  display: flex;
  align-items: center;

  margin-top: 3rem;
  margin-bottom: 3rem;

  width: 6rem;

  transition: all 0.3s;

  /* box-shadow: rgba(4, 27, 87, 0.6) 0px 0.4rem 1rem 0px; */

  border: none;
  border-radius: 0.6rem;

  background-color: transparent;

  color: white;
  font-family: ManropeMedium;
  font-size: 1.6rem;
  letter-spacing: 1px;
  white-space: nowrap;

  cursor: pointer;

  &:hover {
    /* box-shadow: rgba(4, 27, 87, 0.6) 0px 0.4rem 1rem 0px; */
    transform: scale(1.1);
  }
`;

export const PlanetImage = styled(GatsbyImage)`
  width: 100%;
  height: auto;

  ${(props) =>
    props.isgray &&
    css`
      filter: drop-shadow(2px 4px 6px black) grayscale(0.9);
    `}
`;
