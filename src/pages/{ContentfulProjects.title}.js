/* eslint-disable react/prop-types */
//NOTE: https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/

import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import slugify from "slugify";

import Loading from "../components/loading/Loading";
import NavBar from "../components/navBar/NavBar";

import {
  ProjectPage,
  ProjectPageContent,
  ProjectPageImage,
  ProjectPageOverview,
  ProjectPageMore,
  ProjectPageStory,
} from "../styles/ProjectPageStyle";

import stacks from "../constants/stacks";

export const query = graphql`
  query getSingleProject($id: String) {
    contentfulProjects(id: { eq: $id }) {
      id
      title
      content {
        stacks
        tags
      }
      date
      description {
        description
      }
      thumbnail {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
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
    content: { stacks: projectStacks, tags: projectTags },
    description: { description: projectDescription },
    thumbnail: { gatsbyImageData },
  } = contentfulProjects;

  const projectThumbnail = getImage(gatsbyImageData);

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
            <h1>What I made 💁‍♂️</h1>
          </ProjectPageStory>
        </ProjectPageContent>
      </ProjectPage>
    </>
  );
};

export default ProjectTemplate;
