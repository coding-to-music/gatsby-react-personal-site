import styled, { css } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { fadeVertically } from "../../abstracts/animations";

export const ProjectLink = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  color: #141414;
`;

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ProjectBox = styled.div`
  display: flex;
  justify-content: space-between;

  transition: all ease 0.4s;
  opacity: 0;
  transform: translateY(100%);
  ${(props) =>
    props.animateProject &&
    css`
      animation: ${fadeVertically} 0.5s ease-out 1 forwards;
    `};

  box-shadow: var(--shadow-light);

  border-radius: 1rem;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 10rem;
  }

  @media only screen and (max-width: 65em) {
    display: flex;
    flex-direction: column;
  }

  & > div:first-of-type {
    width: 48%;
    height: max-content;
    object-fit: contain;

    overflow: hidden;

    @media only screen and (max-width: 65em) {
      width: 100%;
    }
  }
`;

export const ProjectImage = styled(GatsbyImage)`
  transition: all ease 0.4s;

  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProjectContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 52%;
  margin-left: auto;
  padding: 0 4rem;

  font-size: 3rem;

  overflow: hidden;

  @media only screen and (max-width: 65em) {
    width: 100%;
    margin-left: 0;

    min-height: 35rem;
  }

  @media only screen and (max-width: 37.5em) {
    min-height: 60rem;
  }

  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 31.5em) {
      flex-direction: column;
      justify-content: space-around;

      h2 {
        margin: 2rem 0;
        margin-right: 0 !important;
      }

      div {
        margin-bottom: 2rem;
        flex-wrap: wrap;
        align-self: center;
      }
    }

    h2 {
      margin-right: 1rem;

      font-size: 3rem;
      font-family: ManropeMedium;
      color: black;
    }
    div {
      display: flex;
      justify-content: center;

      span {
        display: inline-block;

        margin: 0.4rem;
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

  p {
    font-size: 2rem;
    font-family: PoppinsRegular;
    font-weight: 400;
    line-height: 2.5rem;
    color: var(--color-grey-dark);
  }

  & > div:nth-of-type(2) {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 31.5em) {
      flex-direction: column;

      .projects-stacks {
        margin: 2rem 0;
        justify-content: center;
      }

      .projects-btns {
        margin-left: 0 !important;
        margin-bottom: 2rem;
      }
    }

    .projects-stacks {
      display: flex;
      align-items: center;
      margin-right: 1rem;

      flex-wrap: wrap;
      /* gap: 0.8rem;
      grid-gap: 0.8rem; */

      #WebGL {
        svg {
          width: 4.2rem;
          height: 4.2rem;
        }
      }

      span {
        display: flex;

        &:not(:last-child) {
          margin-right: 0.8rem;
        }

        svg {
          width: 3rem;
          height: 3rem;

          fill: #190e42;
        }
      }
    }

    .projects-btns {
      display: flex;
      margin-left: auto;
      align-items: center;
      flex-wrap: nowrap;
    }
  }
`;

export const ProjectBtn = styled.button.attrs({
  type: "button",
})`
  padding: 1rem 2.5rem;

  transition: all 0.3s;

  /* box-shadow: rgb(8 84 207 / 60%) 0px 0.4rem 1rem 0px; */

  border: 1px solid rgba(25, 14, 66, 1);
  /* border-radius: 0.6rem; */

  /* background-color: rgba(25, 14, 66, 1); */

  color: black;
  font-family: ManropeMedium;
  font-size: 1.8rem;
  letter-spacing: 1px;
  white-space: nowrap;

  cursor: pointer;

  &:first-of-type {
    margin-left: auto;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    /* box-shadow: rgb(25 14 66 / 90%) 0px 0.4rem 1rem 0px; */
    background-color: rgba(25, 14, 66, 1);
    color: white;
  }
`;

export const ProjectMore = styled(Link)`
  transition: all 0.2s;

  border-bottom: 2px solid rgba(25, 14, 66, 1);

  color: rgba(25, 14, 66, 1);
  font-family: ManropeMedium;
  font-size: 1.7rem;
  line-height: 2.2rem;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
