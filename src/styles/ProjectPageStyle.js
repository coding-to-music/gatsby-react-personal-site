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
      font-size: 4rem;
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
  justify-content: space-between;

  padding: 0 4rem;

  padding-bottom: 15rem;

  & > div:first-of-type {
    display: block;

    width: 60%;

    h1 {
      margin-bottom: 2rem;

      font-size: 3.2rem;
      font-family: ManropeLight;

      &:not(:first-child) {
        margin-top: 8rem;
      }
    }

    p {
      font-size: 2rem;
      font-family: PoppinsRegular;
      font-weight: 400;
      color: #555454;
    }

    .projectPage-used,
    .projectPage-lesson,
    .projectPage-conclusion {
      p:not(:last-of-type) {
        margin-bottom: 2rem;
      }
    }

    .projectPage-used {
      h3 {
        font-size: 2.2rem;
      }
    }
  }

  & > div:nth-of-type(2) {
    position: sticky;
    top: 15rem;
    height: max-content;

    display: flex;
    flex-direction: column;
    align-items: start;

    width: 25%;

    h1 {
      margin-bottom: 1rem;

      font-size: 3.2rem;
      font-family: ManropeLight;
    }

    span {
      margin-bottom: 2rem;

      font-size: 1.7rem;
      font-weight: 600;
      color: #8d8d8d;
    }

    h2 {
      margin-top: 2rem;
      font-size: 2.5rem;
    }
    h3 {
      margin-bottom: 2rem;
      font-size: 1.7rem;
      color: #242323;
    }

    ul {
      display: flex;
      justify-content: space-between;

      width: 60%;
      a {
        text-decoration: none;

        svg {
          transition: transform 0.2s ease;

          width: 3.2rem;
          height: 3.2rem;

          fill: rgba(25, 14, 66, 1);

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
`;

export const ProjectPageBtn = styled.button.attrs({
  type: "button",
})`
  padding: 1rem 0;

  transition: all 0.3s;

  box-shadow: 0 3px 10px rgb(19 15 235 / 20%);

  border: 1px solid rgba(25, 14, 66, 1);
  border-radius: 2rem;
  width: 19rem;

  /* background-color: rgba(25, 14, 66, 1); */

  color: black;
  font-family: ManropeLight;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  white-space: nowrap;

  cursor: pointer;

  &:first-of-type {
    margin-bottom: 3rem;
  }

  &:hover {
    /* box-shadow: rgb(25 14 66 / 90%) 0px 0.4rem 1rem 0px; */
    background-color: rgba(25, 14, 66, 1);
    color: white;
  }
`;
