import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const heroGlow = require("../assets/svgs/hero-glow.svg").default;

export const Header = styled.header`
  display: block;
  height: 100vh;
  background-image: url(${heroGlow}),
    linear-gradient(to left bottom, #110f2e, #010028 50%);
  background-size: 200%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeroArticle = styled.article`
  display: flex;
  justify-content: space-between;
  max-width: 150rem;
  margin: 0 auto;

  h1 {
    font-size: 10rem;
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

export const DeviceContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 150rem;
  margin: 0 auto;
`;
export const PCImage = styled(GatsbyImage)`
  width: 100rem;
  height: 100%;
`;
export const PhoneImage = styled(GatsbyImage)`
  width: 30rem;
  height: 100%;
`;
