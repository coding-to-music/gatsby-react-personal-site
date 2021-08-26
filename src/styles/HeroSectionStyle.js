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
  height: 95vh;
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

  height: 65.6rem;
  max-width: 135rem;
  margin: 0 auto;

  padding-top: 15rem;

  & > div:first-of-type {
    display: block;
    h1 {
      margin-bottom: 1rem;

      font-size: 7.5rem;
      font-family: Manrope;
      text-transform: uppercase;
      line-height: 8.5rem;
      color: white;

      letter-spacing: -0.03em;
    }

    h3 {
      font-size: 2.4rem;
      font-family: ManropeLight;
      font-weight: 400;
      line-height: 3.2rem;
      color: var(--color-blue-grey);
    }
  }
`;

export const GlobeContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 650px;
  margin-left: auto;
  flex: 1;
  overflow: hidden;
`;

export const GlobeCanvas = styled.canvas`
  display: block;
  width: 1300px !important;
  height: auto !important;
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
`;

export const Stand = styled(StandSvg)`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: auto;

  path {
    fill: var(--color-grey-main);
  }
`;
