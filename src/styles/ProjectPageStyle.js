import styled from "styled-components";

import { GatsbyImage } from "gatsby-plugin-image";

export const ProjectPage = styled.div`
  height: 100%;
  background-color: var(--color-grey-main);
`;

export const ProjectPageContent = styled.div`
  display: block;

  max-width: 140rem;
  width: 95vw;
  margin: 0 auto;

  padding-top: 20rem;
`;

// NOTE: ProjectPageOverview

export const ProjectPageOverview = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  padding-bottom: 5rem;
  margin-bottom: 8rem;

  border-bottom: 2px solid #190e42;

  .projectPage-overview-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 52%;
    padding: 0 4rem 0 0;

    font-size: 3rem;

    h1 {
      font-size: 3.8rem;
      font-family: Manrope;
      font-weight: 600;
      color: black;
    }

    p {
      font-size: 2rem;
      font-family: PoppinsRegular;
      font-weight: 400;
      line-height: 2.5rem;
      color: var(--color-grey-dark);
    }

    & > div:first-of-type {
      display: flex;
      align-items: center;

      display: flex;
      align-items: center;

      #WebGL {
        svg {
          width: 4.2rem;
          height: 4.2rem;
        }
      }

      span {
        &:not(:last-child) {
          margin-right: 0.85rem;
        }

        svg {
          width: 3rem;
          height: 3rem;

          fill: #190e42;
        }
      }
    }

    & > div:nth-of-type(2) {
      display: flex;

      span {
        display: inline-block;

        margin-right: 1rem;
        padding: 0.4rem 0.8rem;

        background: #190e42;

        border-radius: 4px;

        font-size: 1.3rem;
        font-family: ManropeLight;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: white;
      }
    }
  }
`;

export const ProjectPageImage = styled(GatsbyImage)`
  width: 48%;
  height: max-content;
  object-fit: contain;

  border-radius: 1rem;
`;

export const ProjectPageMore = styled.a`
  transition: all 0.2s;

  width: max-content;

  border-bottom: 2px solid rgba(8, 84, 207, 1);

  color: rgba(8, 84, 207, 1);
  font-family: ManropeLight;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 2.2rem;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

// NOTE: ProjectPageStory

export const ProjectPageStory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0 4rem;

  h1 {
    font-size: 3rem;
    font-family: ManropeLight;
  }
`;
