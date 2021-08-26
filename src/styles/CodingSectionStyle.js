import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

import DashboardSvg from "../assets/svgs/dashboard.svg";

export const CodingSection = styled.section`
  background-color: var(--color-grey-main);
`;

export const DeviceContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 150rem;
  margin: 0 auto;
  padding: 10rem 0;

  div {
    display: block;
    position: relative;
    video {
      position: absolute;
      top: 6%;
      left: 13%;

      width: auto;
      height: 87%;

      border-radius: 2.8rem;
    }
  }
`;
export const PCImage = styled(GatsbyImage)`
  position: relative;
  width: 70%;
`;
export const PhoneImage = styled(GatsbyImage)`
  width: 35rem;
`;

export const DashSvg = styled(DashboardSvg)`
  width: 65%;
  height: max-content;
`;
