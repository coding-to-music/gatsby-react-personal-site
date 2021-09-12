import React, { useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import slugify from "slugify";
import PropTypes from "prop-types";
import { useGlobeUpdate } from "../../context/GlobeContext";

import {
  ProjectsContainer,
  ProjectBox,
  ProjectImage,
  ProjectContent,
  ProjectBtn,
  ProjectMore,
} from "./ProjectsStyle";

import stacks from "../../constants/stacks";
import onScreenIntersection from "../../utils/onScreenIntersection";

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

const Projects = ({ ignoreProject }) => {
  const data = useStaticQuery(query);

  const {
    allContentfulProjects: { nodes: projects },
  } = data;

  const setIsGlobe = useGlobeUpdate();

  return (
    <ProjectsContainer>
      {projects.map((project) => {
        const {
          title,
          thumbnail: { gatsbyImageData },
          content: { stacks: projectStacks, tags: projectTags },
          description: { description: projectDescription },
        } = project;
        const projectThumbnail = getImage(gatsbyImageData);
        if (title !== ignoreProject) {
          const projectRef = useRef();
          const projectView = onScreenIntersection(projectRef, -150, true, 10);
          return (
            <ProjectBox
              key={project.id}
              ref={projectRef}
              animateProject={projectView}
            >
              <div>
                <ProjectImage
                  image={projectThumbnail}
                  alt={`${project.title} thumbnail`}
                />
              </div>

              <ProjectContent>
                <div>
                  <h2>{project.title}</h2>
                  <div>
                    {projectTags.map((tag) => {
                      return <span key={tag}>{tag}</span>;
                    })}
                  </div>
                </div>
                <p>{projectDescription}</p>
                <div>
                  <div className="projects-stacks">
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
                  <div className="projects-btns">
                    <ProjectBtn>Live</ProjectBtn>
                    <ProjectBtn>Code</ProjectBtn>
                    <ProjectMore
                      to={`/${slugify(project.title, { lower: true })}`}
                      onClick={() => {
                        setIsGlobe(false);
                      }}
                    >
                      More
                    </ProjectMore>
                  </div>
                </div>
              </ProjectContent>
            </ProjectBox>
          );
        }
        return null;
      })}
    </ProjectsContainer>
  );
};

Projects.propTypes = {
  // Not render a certain project
  ignoreProject: PropTypes.string,
};

Projects.defaultProps = {
  ignoreProject: "",
};

export default Projects;
