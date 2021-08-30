import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import slugify from "slugify";

import {
  ProjectBox,
  ProjectImage,
  ProjectContent,
  ProjectBtn,
  ProjectMore,
  ProjectLink,
} from "./ProjectsStyle";

import stacks from "../../constants/stacks";

const query = graphql`
  {
    allContentfulProjects(sort: { fields: date, order: DESC }) {
      nodes {
        id
        title
        thumbnail {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          title
        }
        content {
          stacks
          tags
        }
        description {
          description
        }
      }
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(query);

  const {
    allContentfulProjects: { nodes: projects },
  } = data;

  return (
    <div>
      {projects.map((project) => {
        const {
          thumbnail: { gatsbyImageData },
        } = project;
        const projectThumbnail = getImage(gatsbyImageData);
        const { content } = project;

        const { stacks: projectStacks, tags: projectTags } = content;

        return (
          <ProjectBox key={project.id}>
            <ProjectImage
              image={projectThumbnail}
              alt={`${project.title} thumbnail`}
            />
            <ProjectContent>
              <div>
                <h2>{project.title}</h2>
                <div>
                  {projectTags.map((tag) => {
                    return <span key={tag}>{tag}</span>;
                  })}
                </div>
              </div>
              <p>{project.description.description}</p>
              <div>
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
                <ProjectBtn>Live</ProjectBtn>
                <ProjectBtn>Code</ProjectBtn>
                <ProjectMore href={slugify(project.title, { lower: true })}>
                  More
                </ProjectMore>
              </div>
            </ProjectContent>
          </ProjectBox>
        );
      })}
    </div>
  );
};

export default Projects;
