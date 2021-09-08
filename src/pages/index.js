/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, useState } from "react";
import loadable from "@loadable/component";

import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Loading from "../components/loading/Loading";
import NavBar from "../components/navBar/NavBar";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";

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
  CodingBtn,
  CodingContainer,
  DeviceContainer,
  PhoneImage,
  DashSvg,
} from "../styles/CodingSectionStyle";

import {
  AboutSection,
  AboutContainer,
  SkillBox,
} from "../styles/AboutSectionStyle";

import {
  ProjectSection,
  ProjectContainer,
} from "../styles/ProjectSectionStyle";

import { ContactSection } from "../styles/ContactSectionStyle";

import skills from "../constants/skills";
import basics from "../constants/basics";
import onScreenIntersection from "../utils/onScreenIntersection";

const HomeGlobe = loadable(() => import("../components/HomeGlobe"));

// import { HomeGlobe } from "../components/HomeGlobe";

const query = graphql`
  {
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

  const { PhoneMockupData, UfoData } = data;

  const { gatsbyImageData: phoneMockupImageData } = PhoneMockupData;
  const { gatsbyImageData: UfoImageData } = UfoData;

  const phoneMockupImage = getImage(phoneMockupImageData);
  const ufoImage = getImage(UfoImageData);

  // Gatsby Link component retaining scroll position and not resetting to top
  useEffect(() => window.scrollTo(0, 0), []);

  const loadTime = 600;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, loadTime);
    return () => {
      clearTimeout(loadTimeout);
    };
  }, []);

  ////////////////////////////////
  // NOTE: SCROLL ANIMATIONS
  ////////////////////////////////

  // Code Section
  const codeContainerRef = useRef();
  const codePhoneRef = useRef();
  const codeDashRef = useRef();

  const codeContainerView = onScreenIntersection(
    codeContainerRef,
    -150,
    true,
    10
  );
  const codePhoneView = onScreenIntersection(codePhoneRef, -100, true, 10);
  const codeDashView = onScreenIntersection(codeDashRef, -100, true, 10);

  // About Section
  const aboutTextRef = useRef();
  const aboutStacksRef = useRef();

  const aboutTextView = onScreenIntersection(aboutTextRef, -150, false, 10);
  const aboutStacksView = onScreenIntersection(aboutStacksRef, -150, false, 10);

  // About Section
  const projectTextRef = useRef();
  const projectTextView = onScreenIntersection(projectTextRef, -150, false, 10);

  return (
    <>
      <Loading timeLoad={loadTime} />
      <HomeGlobe />

      <div>
        <Header>
          {isLoaded && <NavBar navColor="white" />}
          <HeroArticle>
            {isLoaded && (
              <div>
                <h1>Hello, I'm Ilias. An aspiring software developer.</h1>
                <h3>
                  I'm just a guy that enjoys programming daily and building cool
                  stuff — Front-end design and solving problems are my favourite
                  part. My goal is to always stand out.
                </h3>
              </div>
            )}
            <GlobeContainer>
              <GlobeCanvas id="globe_canvas" />
            </GlobeContainer>
          </HeroArticle>
          <UFOImage image={ufoImage} alt="Ufo" />
          <Stand />
        </Header>

        <main>
          <CodingSection>
            <CodingContainer
              ref={codeContainerRef}
              animateText={codeContainerView}
            >
              <h1>Always coding and working on new projects</h1>
              <CodingBtn>About me</CodingBtn>
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

          <AboutSection>
            <AboutContainer
              animateText={aboutTextView}
              animateStacks={aboutStacksView}
            >
              <div ref={aboutTextRef}>
                <h1>Ilias Allek</h1>
                <h3>Aspiring Software Developer</h3>
                <p>
                  I'v graduated from Montreal University on December 2020 with a
                  Bachelor of Mathematics / minor in statistics. Before
                  graduating, I was wondering about my future and what I will do
                  next, I didn't wanna pursue academics, It didn't seem fit to
                  me. I'v decided that I will dedicate my time learning
                  programming. Over this time I learned bulding responsive
                  websites, full stack web applications based on React,Gatsby,
                  NodeJS and more. On my free time, I like to play soccer,
                  exercice and hang out with friends.
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
                      <div key={basic.id}>
                        {basic.icon}
                        <span>{basic.title}</span>
                      </div>
                    );
                  })}
                </SkillBox>
              </div>
            </AboutContainer>
          </AboutSection>

          <ProjectSection>
            <ProjectContainer animateText={projectTextView}>
              <h1 ref={projectTextRef}>Recent Projects</h1>
              <Projects />
            </ProjectContainer>
          </ProjectSection>

          <ContactSection>
            <Contact />
          </ContactSection>
        </main>
      </div>
    </>
  );
}
