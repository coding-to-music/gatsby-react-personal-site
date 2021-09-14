/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from "react";
import loadable from "@loadable/component";

import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Element, scroller } from "react-scroll";

import Loading from "../components/loading/Loading";
import NavBar from "../components/navBar/NavBar";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Seo from "../components/Seo";

import CodeGitVideo from "../assets/videos/codingGit.mp4";

import {
  Header,
  HeroArticle,
  GlobeContainer,
  GlobeCanvas,
  ExtraPlanetImage,
  UFOImage,
  Stand,
  HeroBtn,
  PlanetImage,
} from "../styles/indexStyles/HeroSectionStyle";

import {
  CodingSection,
  CodingBtn,
  CodingContainer,
  DeviceContainer,
  PhoneImage,
  DashSvg,
} from "../styles/indexStyles/CodingSectionStyle";

import {
  AboutSection,
  AboutContainer,
  SkillBox,
  ProfileImage,
} from "../styles/indexStyles/AboutSectionStyle";

import {
  ProjectSection,
  ProjectContainer,
} from "../styles/indexStyles/ProjectSectionStyle";

import { ContactSection } from "../styles/indexStyles/ContactSectionStyle";

import skills from "../constants/skills";
import basics from "../constants/basics";

import onScreenIntersection from "../utils/onScreenIntersection";

import { useLoading } from "../context/LoadingContext";
import { useGlobe, useGlobeUpdate } from "../context/GlobeContext";

import { scrollFunction } from "../utils/indexScrollEffect";

const HomeGlobe = loadable(() => import("../components/HomeGlobe"));

// import { HomeGlobe } from "../components/HomeGlobe";

const query = graphql`
  {
    phoneMockupData: contentfulAsset(
      file: { fileName: { eq: "website-mockup-phone.png" } }
    ) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
    rocketData: contentfulAsset(file: { fileName: { eq: "rocket.png" } }) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
    }
    beyondData: contentfulAsset(file: { fileName: { eq: "beyond.png" } }) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
    myGlobeData: contentfulAsset(file: { fileName: { eq: "my-globe.png" } }) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
    beyondPlanetData: contentfulAsset(
      file: { fileName: { eq: "beyond-globe.png" } }
    ) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
    profilePictureData: contentfulAsset(
      file: { fileName: { eq: "profile-picture.png" } }
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

  const {
    phoneMockupData,
    rocketData,
    beyondData,
    myGlobeData,
    beyondPlanetData,
    profilePictureData,
  } = data;

  const { gatsbyImageData: phoneMockupImageData } = phoneMockupData;
  const { gatsbyImageData: rocketImageData } = rocketData;
  const { gatsbyImageData: beyondImageData } = beyondData;
  const { gatsbyImageData: myGlobeImageData } = myGlobeData;
  const { gatsbyImageData: beyondGlobeImageData } = beyondPlanetData;
  const { gatsbyImageData: profilePictureImageData } = profilePictureData;

  const phoneMockupImage = getImage(phoneMockupImageData);
  const rocketImage = getImage(rocketImageData);
  const beyondImage = getImage(beyondImageData);
  const myGlobeImage = getImage(myGlobeImageData);
  const beyondGlobeImage = getImage(beyondGlobeImageData);
  const profilePictureImage = getImage(profilePictureImageData);

  // Gatsby Link component retaining scroll position and not resetting to top
  useEffect(() => window.scrollTo(0, 0), []);

  const loadTime = 20000;
  const isLoaded = useLoading();
  scrollFunction(isLoaded);

  const isGlobe = useGlobe();
  const setIsGlobe = useGlobeUpdate();

  ////////////////////////////////
  // NOTE:  ANIMATIONS
  ////////////////////////////////

  // Code Section
  const codeContainerRef = useRef();
  const codePhoneRef = useRef();
  const codeDashRef = useRef();

  const codeContainerView = onScreenIntersection(
    codeContainerRef,
    -150,
    true,
    1
  );
  const codePhoneView = onScreenIntersection(codePhoneRef, -100, true, 1);
  const codeDashView = onScreenIntersection(codeDashRef, -100, true, 1);

  // About Section
  const aboutTextRef = useRef();
  const aboutStacksRef = useRef();

  const aboutTextView = onScreenIntersection(aboutTextRef, -150, false, 1);
  const aboutStacksView = onScreenIntersection(aboutStacksRef, -150, false, 1);

  // About Section
  const projectTextRef = useRef();
  const projectTextView = onScreenIntersection(projectTextRef, -150, false, 1);

  ////////////////////////////////
  // NOTE: SCROLL ANIMATIONS
  ////////////////////////////////

  const homeRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <Seo title="Home" />
      {isGlobe && <HomeGlobe />}
      {!isLoaded && <Loading timeLoad={loadTime} />}

      <div>
        <Element name="homeSection">
          <Header id="home" ref={homeRef}>
            {isLoaded && <NavBar navColor="white" />}
            <HeroArticle>
              {isLoaded && (
                <div>
                  <h1>Hello, I'm Ilias. An aspiring software developer.</h1>
                  <h3>
                    I'm just a guy that enjoys programming daily and building
                    cool stuff — Front-end design and solving problems are my
                    favourite part. My goal is to always stand out.
                  </h3>
                  <div>
                    <HeroBtn>
                      {isGlobe ? (
                        <PlanetImage
                          image={beyondGlobeImage}
                          alt="small-planet"
                          onClick={() => {
                            setIsGlobe(false);
                          }}
                        />
                      ) : (
                        <PlanetImage
                          image={myGlobeImage}
                          alt="small-globe"
                          onClick={() => {
                            window.location.reload();
                          }}
                          isgray="true"
                        />
                      )}
                    </HeroBtn>
                  </div>
                </div>
              )}
              {isGlobe ? (
                <GlobeContainer>
                  <GlobeCanvas id="globe_canvas" />
                </GlobeContainer>
              ) : (
                <ExtraPlanetImage
                  image={beyondImage}
                  alt="planet with spaceship"
                />
              )}
            </HeroArticle>
            {isLoaded && (
              <>
                <UFOImage image={rocketImage} alt="Ufo" />
                <Stand />
              </>
            )}
          </Header>
        </Element>

        {isLoaded && (
          <main>
            <CodingSection>
              <CodingContainer
                ref={codeContainerRef}
                animateText={codeContainerView}
              >
                <h1>Always coding and working on new projects</h1>
                <CodingBtn to="about" spy smooth offset={-70} duration={500}>
                  About me
                </CodingBtn>
                <DeviceContainer
                  animatePhone={codePhoneView}
                  animateDash={codeDashView}
                >
                  <div ref={codePhoneRef}>
                    <PhoneImage image={phoneMockupImage} alt="Phone" />

                    <video playsInline muted loop autoPlay preload="none">
                      <source src={CodeGitVideo} type="video/mp4" />
                    </video>
                  </div>
                  <div ref={codeDashRef}>
                    <DashSvg />
                  </div>
                </DeviceContainer>
              </CodingContainer>
            </CodingSection>

            <Element name="aboutSection">
              <AboutSection id="about" ref={aboutRef}>
                <AboutContainer
                  animateText={aboutTextView}
                  animateStacks={aboutStacksView}
                >
                  <div ref={aboutTextRef}>
                    <ProfileImage
                      image={profilePictureImage}
                      alt="my profile picture"
                    />
                    <h1>Ilias Allek</h1>
                    <h3>Aspiring Software Developer</h3>
                    <p>
                      I've graduated from Montreal University on December 2020
                      with a Bachelor of Mathematics / minor in statistics.
                      Before graduating, I was wondering about my future and
                      what I will do next, I didn't wanna pursue academics, It
                      didn't seem fit to me. I've decided that I will dedicate
                      my time learning programming. Over this time I learned
                      bulding responsive websites, full stack web applications
                      based on React,Gatsby, NodeJS and more. On my free time, I
                      like to play soccer, exercice and hang out with friends.
                    </p>
                  </div>
                  <div ref={aboutStacksRef}>
                    <h1>Skills</h1>
                    <SkillBox animateStacks={aboutStacksView}>
                      {skills.map((skill) => {
                        return (
                          <div key={skill.id}>
                            {skill.icon}
                            <span>{skill.title}</span>
                          </div>
                        );
                      })}
                    </SkillBox>
                    <h1>Basics</h1>
                    <SkillBox animateStacks={aboutStacksView}>
                      {basics.map((basic) => {
                        return (
                          <div key={basic.id} id={basic.title}>
                            {basic.icon}
                            <span>{basic.title}</span>
                          </div>
                        );
                      })}
                    </SkillBox>
                  </div>
                </AboutContainer>
              </AboutSection>
            </Element>

            <Element name="projectSection">
              <ProjectSection id="project" ref={projectRef}>
                <ProjectContainer animateText={projectTextView}>
                  <h1 ref={projectTextRef}>Recent Projects</h1>
                  <Projects />
                </ProjectContainer>
              </ProjectSection>
            </Element>

            <Element name="contactSection">
              <ContactSection id="contact" ref={contactRef}>
                <Contact />
              </ContactSection>
            </Element>
          </main>
        )}
      </div>
    </>
  );
}
