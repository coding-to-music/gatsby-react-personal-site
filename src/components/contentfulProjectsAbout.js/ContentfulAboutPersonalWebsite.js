import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Container = styled.div`
  p:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  ul {
    margin-bottom: 3rem;
    li {
      list-style-position: inside;

      font-size: 2rem;
      font-family: ManropeMedium;
      color: #555454;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }

  a {
    text-decoration: none;
    color: var(--color-blue-special);
  }
`;

const AboutImage = styled(GatsbyImage)`
  width: 120%;
  margin-top: 8rem;

  @media only screen and (max-width: 65em) {
    width: 100%;
  }
`;

export const query = graphql`
  {
    contentfulProjects(title: { eq: "Personal Website" }) {
      id
      title
      aboutImages {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
  }
`;

const ContentfulAboutPersonalWebsite = () => {
  const data = useStaticQuery(query);

  const {
    contentfulProjects: { aboutImages },
  } = data;

  const { gatsbyImageData } = aboutImages[0];

  const personalWebsiteAllDevicesImage = getImage(gatsbyImageData);
  return (
    <Container>
      <p>
        I was tired always using create-react-app for my projects, I wanted to
        try a new stack without going too far from React. Gatsby seemed like the
        perfect choice for my static website, It's super performant/fast and
        reduces some complexities like routing and image performance.
      </p>
      <p>
        I've used Contentful which is headless CMS that allowed me to stores my
        images and most of the data related to the overview of my projects.
        GraphQL is used to communicate with contentful and fetch the necessary
        data through queries.
      </p>
      <p>
        I've used Figma to create/modify some images. For example, I've used it
        to add a frame with color gradients around projects thumbnails. It was
        also used to animate the dashboard svg in the coding section of the
        homepage and implement the devices mockups images like below. The
        mockups are provided by Mockuuups Studio.
      </p>
      <p>
        In the homepage, I implemented a 3d globe using three js libraries. I've
        used the examples and the documentation in{" "}
        <a
          href="https://github.com/vasturiano/three-globe"
          target="_blank"
          rel="noreferrer"
        >
          three-globe github library
        </a>{" "}
        to design my earth globe.
      </p>
      <p>
        There is a contact section where you can download my Curriculum Vitae.
        You can also use the form to contact me. I would be happy to respond as
        fast as possible for an interview and any other opportunity.
      </p>
      <p>
        My personal website is fully responsive, you can use it in any device
        (runs better in chrome for now);
      </p>
      <AboutImage
        image={personalWebsiteAllDevicesImage}
        alt="personal website on all devices"
      />
    </Container>
  );
};

export default ContentfulAboutPersonalWebsite;
