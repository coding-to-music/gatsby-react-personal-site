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
      text-indent: -2.45rem;
      padding-left: 2rem;

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
  width: 120%;
  margin-top: 8rem;
`;

export const query = graphql`
  {
    contentfulProjects(title: { eq: "Stockersa" }) {
      id
      title
      aboutImages {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
  }
`;

const ContentfulAboutStockersa = () => {
  const data = useStaticQuery(query);

  const {
    contentfulProjects: { aboutImages },
  } = data;

  const { gatsbyImageData } = aboutImages[0];

  const stockersaAllDevicesImage = getImage(gatsbyImageData);
  return (
    <Container>
      <p>
        After learning how to build RESTful APIs with{" "}
        <a
          href={`${process.env.GATSBY_APP_API_URL}/quest`}
          target="_blank"
          rel="noreferrer"
        >
          Explodii
        </a>
        , I decided to create something exploiting third party APIs. I went for
        a stock market APIs. After trying multiple free APIs and trying to
        combine them to get the maximum of data with a decent request rate. I
        finally decided to redo everything and go with{" "}
        <a
          href="https://financialmodelingprep.com/developer/docs"
          target="_blank"
          rel="noreferrer"
        >
          Financial Modeling Prep API
        </a>{" "}
        I purchased their starter pack for absolute flexibility.
      </p>
      <p>
        {" "}
        Charts were used to render the data from the API. I mainly used recharts
        react library and airbnb visx to build those charts. The features users
        can use in Stockersa :
      </p>

      <ul>
        <li>
          Access real-time stock data quotes(with price rate of change) and
          volumes up to 5 years back, with 7 different time periods.{" "}
        </li>
        <li>
          Get access to the latest news related to the searched stock or the
          global market in general.
        </li>
        <li>
          Get important daily key metrics like P/E Ratio, Earnings Per Share
          (Eps), market cap, average volume and more.{" "}
        </li>
        <li>Get an overview of the company/corporation of your intrests.</li>
        <li>
          Get access to the yearly financial statements up to 5 years. Includes
          net income, gross profit, revenue, ebitda and more.{" "}
        </li>
        <li>
          Get also access to the yearly expense informations up to 5 years. With
          metrics like cost of revenue, research and development expenses,
          general and administrative expenses, selling and marketing expenses
          and more.{" "}
        </li>
        <li>
          Get access to a google map that tracks the companies headquarter and
          65+ global exchanges all over the globe with key informations.
        </li>
      </ul>
      <p>Stockersa is fully responsive, please try it on all devices.</p>
      <AboutImage
        image={stockersaAllDevicesImage}
        alt="stockersa on all devices"
      />
    </Container>
  );
};

export default ContentfulAboutStockersa;
