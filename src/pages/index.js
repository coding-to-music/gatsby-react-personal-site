/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from "react";
import loadable from "@loadable/component";

import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Loading from "../components/loading/Loading";
import NavBar from "../components/navBar/NavBar";
import Projects from "../components/projects/Projects";

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

import skills from "../constants/skills";
import basics from "../constants/basics";
import {
  ContactSection,
  ContactContainer,
  ContactInput,
  ContactTextArea,
  ContactForm,
  ContactBtn,
  MessageAreaSvg,
  NameSvg,
  EmailSvg,
} from "../styles/ContactSectionStyle";

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

  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isTextValid, setIsTextValid] = useState(false);

  const handleEmailValidity = (email) => {
    // don't remember from where i copied this code, but this works.
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(email);

    if (re.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <>
      {/* <Loading timeLoad={500} /> */}
      <HomeGlobe />
      <div>
        <Header>
          <NavBar navColor="white" />
          <HeroArticle>
            <div>
              <h1>Hello, I'm Ilias. An aspiring software developer.</h1>
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
            <CodingContainer>
              <h1>Always coding and working on new projects</h1>
              <CodingBtn>About me</CodingBtn>
              <DeviceContainer>
                <div>
                  <PhoneImage image={phoneMockupImage} alt="Phone" />

                  <video playsInline muted loop autoPlay preload="none">
                    <source src={CodeGitVideo} type="video/mp4" />
                  </video>
                </div>
                <DashSvg />
              </DeviceContainer>
            </CodingContainer>
          </CodingSection>

          <AboutSection>
            <AboutContainer>
              <div>
                <h1>Ilias Allek</h1>
                <h3>Aspiring Software Developer</h3>
                <p>
                  I'v graduated from Montreal University on December 2020 with a
                  Bachelor of Mathematics / minor in statistics. Before
                  graduating, I was wondering about my future and what I will do
                  next, the academic world didn't seem challenging to me. I'v
                  decided that I will dedicate my time learning programming.
                  Over this time I learned bulding responsive websites, full
                  stack web applications based on React,Gatsby, NodeJS and more.
                  On my free time, I like to play soccer, exercice and hang out
                  with friends.
                </p>
              </div>
              <div>
                <h1>Skills</h1>
                <SkillBox>
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
                <SkillBox>
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
            <ProjectContainer>
              <h1>Recent Projects</h1>
              <Projects />
            </ProjectContainer>
          </ProjectSection>

          <ContactSection>
            <ContactContainer>
              <div>
                <h2>
                  Contact details<span>:</span>
                </h2>
                <h3>iliasallek.aek@gmail.com</h3>
                <h1>
                  For employer<span>:</span>
                </h1>
                <ContactBtn style={{ alignSelf: "flex-start" }}>
                  DOWNLOAD CV
                </ContactBtn>
              </div>
              <div>
                <h1>Say Hello</h1>
                <div>
                  <ContactForm
                    action="https://formspree.io/f/xvoddwlj"
                    method="POST"
                  >
                    <div>
                      <div>
                        <ContactInput
                          id="name-input"
                          name="name"
                          onChange={(e) => {
                            const { value } = e.target;
                            if (value.length >= 2) {
                              setIsNameValid(true);
                            } else {
                              setIsNameValid(false);
                            }
                          }}
                          required
                        />
                        <NameSvg isvalid={isNameValid ? 1 : 0} />
                      </div>
                      <div>
                        <ContactInput
                          id="email-input"
                          name="email"
                          type="email"
                          placeholder="what's your email?"
                          onChange={(e) => {
                            handleEmailValidity(e.target.value);
                          }}
                          required
                        />
                        <EmailSvg isvalid={isEmailValid ? 1 : 0} />
                      </div>
                    </div>

                    <div>
                      <ContactTextArea
                        id="input-message"
                        spellCheck="false"
                        onChange={(e) => {
                          const { value } = e.target;
                          if (value.length >= 3) {
                            setIsTextValid(true);
                          } else {
                            setIsTextValid(false);
                          }
                        }}
                        required
                      />
                      <MessageAreaSvg isvalid={isTextValid ? 1 : 0} />
                    </div>
                    <ContactBtn type="submit">SUBMIT</ContactBtn>
                  </ContactForm>
                </div>
              </div>
            </ContactContainer>
          </ContactSection>
        </main>
      </div>
    </>
  );
}
