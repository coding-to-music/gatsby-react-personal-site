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

      font-size: 1.8rem;
      font-family: PoppinsRegular;
      font-weight: 600;
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
  margin-top: 8rem;
`;

export const query = graphql`
  {
    contentfulProjects(title: { eq: "Explodii" }) {
      id
      title
      aboutImages {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
  }
`;

const ContentfulAboutExplodii = () => {
  const data = useStaticQuery(query);

  const {
    contentfulProjects: { aboutImages },
  } = data;

  const { gatsbyImageData } = aboutImages[0];

  const explodiiAllDevicesImage = getImage(gatsbyImageData);
  return (
    <Container>
      <p>
        After fisnishing my first react project{" "}
        <a
          href={`${process.env.GATSBY_APP_API_URL}/quest`}
          target="_blank"
          rel="noreferrer"
        >
          Quest
        </a>
        , I really wanted to build a fully functional fullstack app. I decided
        to expand my skills and learn more about backend development. I took a
        udemy course about NodeJS/Express and MongoDB, finished it and decided
        to put my knowledge in practice as fast as possible.
      </p>
      <p>
        Explodii is a rich fullstack app with many features. The application
        adopts a Front-End MVC(Model View Controller) architecture pattern with
        React as the Front-End framework and Express.js as Back-End framework.
      </p>
      <p>
        For the purporses of this app I did build a Stateless RESTful API that
        handles four ressources : excursions,users,reviews and bookings.All the
        data for each ressource is stored in a MongoDB database using MongoDB
        Compass. The models are built using mongoose same goes with all the CRUD
        operations,filters, sorts, pagination, and more.
      </p>
      <p>The features in Explodii :</p>
      <ul>
        <li>
          Explodii offers multiple excursions with unique theme for all budgets.
          The user can sort and filter them according to her/his preferences.
        </li>

        <li>
          The user can book the excursion of his choice, the payments will be
          handled using Stripe.
        </li>
        <li>
          Users can create their own account using an email and a password, the
          passwords are crypted with bcrypt before they are stored in the DB.
        </li>
        <li>
          When the user successfully logs in, a json web token with an
          expiration is issued for him to access protected routes. It's stored
          in a cookie.{" "}
        </li>
        <li>
          Users can update their account informations (name, email,
          password,profile picture).
        </li>
        <li>Users have access to their bookings in the account section.</li>
        <li>
          Users can write reviews about their experiences with their
          excursion(s). They can modify and delete reviews as they see fit.
        </li>
      </ul>

      <p>
        For each excursion you can track all the locations you will visit in a
        map built using google map api.
      </p>
      <p>
        Finally, explodii is a responsive app. Some components are uniquely
        designed according to the device screen size, please try the app on all
        devices.
      </p>
      <AboutImage
        image={explodiiAllDevicesImage}
        alt="explodii on all devices"
      />
    </Container>
  );
};

export default ContentfulAboutExplodii;
