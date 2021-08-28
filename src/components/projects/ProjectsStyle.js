import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export const ProjectBox = styled.div`
  display: flex;
  justify-content: space-between;

  box-shadow: var(--shadow-light);

  border-radius: 1rem;
  overflow: hidden;
`;

export const ProjectImage = styled(GatsbyImage)`
  width: 48%;
  height: max-content;
  object-fit: contain;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 52%;
  margin-left: auto;
  padding: 0 4rem;

  font-size: 3rem;

  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 3rem;
      font-family: ManropeLight;
      font-weight: 600;
      color: black;
    }
    div {
      display: flex;

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

  div:nth-of-type(2) {
    display: flex;
    align-items: center;
    div {
      display: flex;
      svg {
        width: 3rem;
        height: 3rem;

        fill: #190e42;

        &:not(:last-child) {
          margin-right: 0.85rem;
        }
      }
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
  font-family: ManropeLight;
  font-size: 1.8rem;
  font-weight: 600;
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

export const ProjectLink = styled(Link)`
  transition: all 0.2s;

  border-bottom: 2px solid rgba(25, 14, 66, 1);

  color: rgba(25, 14, 66, 1);
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
