/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Loading from "../components/loading/Loading";
import NavBar from "../components/navBar/NavBar";

import CodeGitVideo from "../assets/videos/codingGit.mp4";

import {
  Header,
  HeroArticle,
  GlobeContainer,
  GlobeCanvas,
  UFOImage,
  Stand,
} from "../styles/HeroSectionStyle";

import {
  CodingSection,
  DeviceContainer,
  PCImage,
  PhoneImage,
  DashSvg,
} from "../styles/CodingSectionStyle";

import { AboutSection, AboutContainer } from "../styles/AboutSectionStyle";

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
    UfoData: contentfulAsset(file: { fileName: { eq: "ufo.png" } }) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
  }
`;

export default function Index() {
  const data = useStaticQuery(query);

  const { PCMockupData, PhoneMockupData, UfoData } = data;

  const { gatsbyImageData: pCMockupImageData } = PCMockupData;
  const { gatsbyImageData: phoneMockupImageData } = PhoneMockupData;
  const { gatsbyImageData: UfoImageData } = UfoData;

  const pCMockupImage = getImage(pCMockupImageData);
  const phoneMockupImage = getImage(phoneMockupImageData);
  const ufoImage = getImage(UfoImageData);

  return (
    <>
      {/* <Loading timeLoad={500} /> */}
      <div>
        <Header>
          <NavBar />
          <HeroArticle>
            <div>
              <h1>
                Hello, I'm Ilias. <br /> An aspiring web developer.
              </h1>
              <h3>
                I'm just a guy that enjoys programming daily and building cool
                stuff — Front-end design and solving problems are my favourite
                part. My goal is to always stand out.
              </h3>
            </div>
            <GlobeContainer>
              <GlobeCanvas id="globe_canvas" />
            </GlobeContainer>
          </HeroArticle>
          <UFOImage image={ufoImage} alt="Ufo" />
          <Stand />
        </Header>
        <main>
          <CodingSection>
            <DeviceContainer>
              <div>
                <PhoneImage image={phoneMockupImage} alt="Phone" />

                <video playsInline muted loop autoPlay preload="none">
                  <source src={CodeGitVideo} type="video/mp4" />
                </video>
              </div>
              <DashSvg />
            </DeviceContainer>
          </CodingSection>
          <AboutSection>
            <AboutContainer>
              <div>
                <h1>Ilias Allek</h1>
                <h3>Aspiring Web Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  rem ab! Et, aliquid repudiandae accusamus omnis dolorum
                  consequuntur, facilis quos esse itaque maiores mollitia quia
                  natus. Nesciunt sint odit porro? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. A, rem ab! Et, aliquid
                  repudiandae accusamus omnis dolorum consequuntur, facilis quos
                  esse itaque maiores mollitia quia natus. Nesciunt sint odit
                  porro?
                </p>
              </div>
              <div>
                <h1>Skills</h1>
                <h3>This will be a list of languages</h3>
                <h1>Basics</h1>
                <h3>Another list or chart</h3>
              </div>
            </AboutContainer>
          </AboutSection>
        </main>
      </div>
    </>
  );
}
