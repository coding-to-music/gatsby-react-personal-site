/* eslint-disable react/prop-types */
//NOTE: https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/

import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";
import moment from "moment";

import Loading from "../components/loading/Loading";
import NavBar from "../components/navBar/NavBar";

import {
  ProjectPage,
  ProjectPageContent,
  ProjectPageImage,
  ProjectPageOverview,
  ProjectPageMore,
  ProjectPageStory,
  ProjectPageBtn,
} from "../styles/ProjectPageStyle";

import stacks from "../constants/stacks";
import socials from "../constants/socials";

export const query = graphql`
  query getSingleProject($id: String) {
    contentfulProjects(id: { eq: $id }) {
      id
      title
      content {
        tags
        stacks
      }
      description {
        description
      }
      thumbnail {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
      resume {
        resume
      }
      used {
        used
      }
      about {
        about
      }
      aboutImages {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
      lesson {
        lesson
      }
      conclusion {
        conclusion
      }
    }
  }
`;

const ProjectTemplate = (props) => {
  const {
    data: { contentfulProjects },
  } = props;

  const {
    title: projectName,
    description: { description: projectDescription },
    content: { stacks: projectStacks, tags: projectTags },
    thumbnail: { gatsbyImageData },
    resume: projectResume,
    used,
    about,
    aboutImages: aboutImagesData,
    lesson: projectLessoon,
    conclusion: projectConclusion,
  } = contentfulProjects;

  const projectThumbnail = getImage(gatsbyImageData);

  const projectUsed = used.used.split("\n");

  const projectAbout = about.about.split("\n");

  console.log(projectAbout);

  //   const aboutImages =
  //     aboutImagesData &&
  //     aboutImagesData.map((imageData) => {
  //       return { image: getImage(imageData), description: imageData.description };
  //     });

  return (
    <>
      <Loading timeLoad={500} />
      <NavBar navColor="#102a42" />
      <ProjectPage>
        <ProjectPageContent>
          <ProjectPageOverview>
            <article className="projectPage-overview-content">
              <h1>{projectName}</h1>
              <p>{projectDescription}</p>
              <div>
                {projectStacks.map((stack) => {
                  return (
                    <span key={stack} id={stack}>
                      {
                        stacks.find(
                          (stackObject) => stackObject.title === stack
                        ).icon
                      }
                    </span>
                  );
                })}
              </div>
              <div>
                {projectTags.map((tag) => {
                  return <span key={tag}>{tag}</span>;
                })}
              </div>
              <ProjectPageMore href={slugify(projectName, { lower: true })}>
                View the site
              </ProjectPageMore>
            </article>
            <ProjectPageImage
              image={projectThumbnail}
              alt={`${projectName} thumbnail`}
            />
          </ProjectPageOverview>

          <ProjectPageStory>
            <div>
              <h1>What I made 💁‍♂️</h1>
              <p>{projectResume && projectResume.resume}</p>
              <h1>What I used 🔷</h1>
              <div className="projectPage-used">
                {projectUsed.map((el, idx) => {
                  if (idx % 2 === 0) {
                    return <h3 key={el}>{el}</h3>;
                  }
                  return <p key={el}>{el}</p>;
                })}
              </div>
              <h1>About this production 🥳</h1>
              <div className="projectPage-about">
                {projectAbout.map((el, idx) => {
                  if (idx % 2 === 0) {
                    return <p key={el}>{el}</p>;
                  }
                  return null;
                })}
              </div>
            </div>

            <div>
              <h1>{projectName}</h1>
              <span>{moment().format("MMM Do, YYYY")}</span>
              <ProjectPageBtn>View the site</ProjectPageBtn>
              <ProjectPageBtn>Github</ProjectPageBtn>
              <h2>Share</h2>
              <h3>If you like this work, please share.</h3>
              <ul>
                {socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </ul>
            </div>
          </ProjectPageStory>
        </ProjectPageContent>
      </ProjectPage>
    </>
  );
};

export default ProjectTemplate;
