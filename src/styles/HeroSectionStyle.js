import styled, { keyframes } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

import StandSvg from "../assets/svgs/stand.svg";

// TODO: Find a way to not use static folder for backimg svgs
const HHeroGlow = require("../../static/hero-glow.svg").default;

const updown = keyframes`
    from {
        transform: translateY(10px);
    }to {
        transform: translateY(-10px);
    }

`;

export const Header = styled.header`
  position: relative;

  display: block;
  /* height: 95vh; */
  background-image: url("${HHeroGlow}"),
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
  /* margin-left: auto; */

  /* overflow: hidden; */
`;

export const GlobeCanvas = styled.canvas`
  display: block;
  width: 130rem !important;
  height: auto !important;
  /* height: 65.61rem !important; */
`;

export const UFOImage = styled(GatsbyImage)`
  position: absolute !important;
  bottom: -9rem;
  right: 20rem;
  z-index: 20;

  animation: ${updown} 4s ease-in-out alternate infinite forwards;

  filter: hue-rotate(-110deg) drop-shadow(2px 4px 6px black);

  object-fit: contain;

  width: 40rem;
  height: auto;

  @media only screen and (max-width: 65.5em) {
    bottom: -8rem;
    left: 38%;
    right: 0;

    width: 35rem;
    height: auto;
  }
  @media only screen and (max-width: 37.5em) {
    left: 20%;

    width: 35rem;
    height: auto;
  }
  @media only screen and (max-width: 22em) {
    left: 15%;

    width: 30rem;
    height: auto;
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
