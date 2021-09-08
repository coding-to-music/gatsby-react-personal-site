import styled, { css } from "styled-components";

import { GatsbyImage } from "gatsby-plugin-image";
import { fadeVertically } from "../abstracts/animations";

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

  @media only screen and (max-width: 56.25em) {
    @content;
  }
`;

// NOTE: ProjectPageOverview

export const ProjectPageOverview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 5rem;
  margin-bottom: 8rem;

  border-bottom: 2px solid #190e42;

  @media only screen and (max-width: 65em) {
    flex-direction: column;
  }

  .projectPage-overview-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 52%;
    padding: 0 4rem 0 0;

    font-size: 3rem;

    @media only screen and (max-width: 65em) {
      align-items: center;

      width: 100%;
      max-width: 80rem;
      margin-bottom: 5rem;
      padding: 0;
    }

    h1,
    p,
    & > div {
      transition: all ease 0.4s;
      opacity: 0;
      transform: translateY(100%);
    }

    h1 {
      animation: ${fadeVertically} 0.75s cubic-bezier(0.5, 0, 0, 1) 0.1s
        forwards;

      margin-bottom: 2rem;

      font-size: 4rem;
      font-family: Manrope;
      font-weight: 600;
      color: black;
    }

    p {
      animation: ${fadeVertically} 0.75s cubic-bezier(0.5, 0, 0, 1) 0.2s
        forwards;

      margin-bottom: 2rem;

      font-size: 2rem;
      font-family: PoppinsRegular;
      font-weight: 400;
      line-height: 2.5rem;
      color: var(--color-grey-dark);
    }

    & > div:first-of-type {
      display: flex;
      align-items: center;

      animation: ${fadeVertically} 0.75s cubic-bezier(0.5, 0, 0, 1) 0.8s
        forwards;

      margin-bottom: 2rem;

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

      animation: ${fadeVertically} 0.75s cubic-bezier(0.5, 0, 0, 1) 0.8s
        forwards;

      margin-bottom: 2rem;

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

  transition: all ease 0.2s;
  opacity: 0;
  transform: translateY(5px);

  animation: ${fadeVertically} 0.75s cubic-bezier(0.5, 0, 0, 1) 0.8s forwards;

  border-radius: 1rem;

  @media only screen and (max-width: 65em) {
    align-items: center;
    width: 100%;
    max-width: 80rem;
    /* margin-bottom: 5rem; */
  }
`;

export const ProjectPageMore = styled.a`
  transition: all ease 0.2s;
  opacity: 0;
  transform: translateY(100%);

  animation: ${fadeVertically} 0.75s cubic-bezier(0.5, 0, 0, 1) 0.8s forwards;

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

  border-bottom: 2px solid #190e42;

  @media only screen and (max-width: 65em) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  & > div:first-of-type {
    display: block;

    width: 60%;

    @media only screen and (max-width: 65em) {
      width: 100%;
      max-width: 80rem;
      margin-bottom: 8rem;
    }

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

    @media only screen and (max-width: 65em) {
      position: static;
      top: 0;

      align-items: center;

      width: 100%;
      max-width: 28rem;
      margin-bottom: 10rem;
    }

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

      @media only screen and (max-width: 65em) {
        width: 90%;
      }

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

export const ProjectPageOthers = styled.div`
  display: block;

  padding-bottom: 10rem;
  h1 {
    margin: 5rem 0;

    text-align: center;
    font-size: 3.5rem;
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
