import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import {
  ProjectBox,
  ProjectImage,
  ProjectContent,
  ProjectBtn,
  ProjectLink,
} from "./ProjectsStyle";

import stacks from "../../constants/stacks";

const query = graphql`
  {
    pCMockupData2: contentfulAsset(title: { eq: "Mockup Website PC 2" }) {
      id
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
    pCMockupData3: contentfulAsset(title: { eq: "Website Mockup PC 3" }) {
      id
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
    monitorMockupData: contentfulAsset(
      title: { eq: "Website Mockup Monitor" }
    ) {
      id
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
    explodiiData: contentfulAsset(title: { eq: "Explodii 3" }) {
      id
      gatsbyImageData
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(query);

  const { pCMockupData2, pCMockupData3, monitorMockupData, explodiiData } =
    data;

  const { gatsbyImageData: pCMockupImageData2 } = pCMockupData2;
  const { gatsbyImageData: pCMockupImageData3 } = pCMockupData3;
  const { gatsbyImageData: monitorMockupImageData } = monitorMockupData;
  const { gatsbyImageData: explodiiImageData } = explodiiData;

  const pCMockupImage2 = getImage(pCMockupImageData2);
  const pCMockupImage3 = getImage(pCMockupImageData3);
  const monitorMockupImage = getImage(monitorMockupImageData);
  const explodiiImage = getImage(explodiiImageData);

  return (
    <div>
      <ProjectBox>
        <ProjectImage image={explodiiImage} alt="project-1" />
        <ProjectContent>
          <div>
            <h2>Explodii</h2>
            <div>
              <span>Google Api</span>
              <span>Stripe Api</span>
              <span>Responsive</span>
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
            perferendis neque incidunt dignissimos natus ducimus expedita
            assumenda temporibus! Accusamus officia ullam mollitia repellendus
            libero nesciunt voluptates laudantium fugiat illum ea?
          </p>
          <div>
            <div>
              {stacks.find((stack) => stack.title === "React").icon}
              {stacks.find((stack) => stack.title === "Node.js").icon}
              {stacks.find((stack) => stack.title === "Express").icon}
              {stacks.find((stack) => stack.title === "MongoDB").icon}
              {stacks.find((stack) => stack.title === "Sass").icon}
              {stacks.find((stack) => stack.title === "Postman").icon}
            </div>
            <ProjectBtn>Live</ProjectBtn>
            <ProjectBtn>Code</ProjectBtn>
            <ProjectLink to="/about">More</ProjectLink>
          </div>
        </ProjectContent>
      </ProjectBox>
    </div>
  );
};

export default Projects;
