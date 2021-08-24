import React from "react";
import loadable from "@loadable/component";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Loading from "../components/loading/Loading";
import NavBar from "../components/navBar/NavBar";

import {
  Header,
  HeroArticle,
  GlobeContainer,
  GlobeCanvas,
  DeviceContainer,
  PCImage,
  PhoneImage,
} from "../styles/IndexStyle";

const HomeGlobe = loadable(() => import("../components/HomeGlobe"));

export const query = graphql`
  {
    PCMockupData: contentfulAsset(
      file: { fileName: { eq: "website-mockup-pc.png" } }
    ) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
    PhoneMockupData: contentfulAsset(
      file: { fileName: { eq: "website-mockup-phone.png" } }
    ) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
  }
`;

export default function Index() {
  const data = useStaticQuery(query);

  const { PCMockupData, PhoneMockupData } = data;

  const { gatsbyImageData: pCMockupImageData } = PCMockupData;
  const { gatsbyImageData: phoneMockupImageData } = PhoneMockupData;

  const pCMockupImage = getImage(pCMockupImageData);
  const phoneMockupImage = getImage(phoneMockupImageData);

  return (
    <>
      <Loading timeLoad={500} />
      <HomeGlobe />
      <div>
        <Header>
          <HeroArticle>
            <h1>HOHOsdfsdfsdfsd</h1>
            <GlobeContainer>
              <GlobeCanvas id="globe_canvas" />
            </GlobeContainer>
          </HeroArticle>
          <DeviceContainer>
            <PhoneImage image={phoneMockupImage} alt="Phone" />
            <PCImage image={pCMockupImage} alt="PC" />
          </DeviceContainer>
        </Header>
      </div>
    </>
  );
}
