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

const ContentfulAboutPersonalWebsite = () => {
  return (
    <Container>
      <p>
        I was tired always using create-react-app for my projects, I wanted to
        try a new stack without going too far from React. Gatsby seemed like the
        perfect choice for my static website, It's super performant/fast and
        reduces some complexities like routing and image performance.
      </p>
      <p>
        I'v used Contentful which is headless CMS that allowed me to stores my
        images and most of the data related to the overview of my projects.
        GraphQL is used to communicate with contentful and fetch the necessary
        data through queries.
      </p>
      <p>
        I'v used Figma to create/modify some images. For example, I'v used it to
        add a frame with color gradients around projects thumbnails. It was also
        used to animate the dashboard svg in the coding section of the homepage
        and implement the devices mockups images like below. The mockups are
        provided by Mockuuups Studio.
      </p>
      <p>The biggest challenge</p>
      {/* <AboutImage
        image={stockersaAllDevicesImage}
        alt="stockersa on all devices"
      /> */}
    </Container>
  );
};

export default ContentfulAboutPersonalWebsite;
