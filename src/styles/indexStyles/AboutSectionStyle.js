import styled, { css, keyframes } from "styled-components";

const fadeVertically = keyframes`
to {
    opacity: 1;
    transform: translateY(0);
}
`;

export const AboutSection = styled.section`
  padding: 8rem 0;
  background-image: linear-gradient(
    to left bottom,
    var(--color-blue-dark),
    var(--color-blue-darker) 50%
  );

  overflow: hidden;
`;

export const AboutContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 148rem;
  margin: 0 auto;

  color: white;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
    margin-bottom: 2rem;

    @media only screen and (max-width: 47.5em) {
      width: 92vw;
    }

    h1,
    h3,
    p {
      opacity: 0;
      transform: translateY(100%);
    }

    h1 {
      position: relative;

      margin: 3.5rem 0;

      font-size: 4rem;
      font-family: Manrope;
      text-align: center;

      ${(props) =>
        props.animateText &&
        css`
          animation: ${fadeVertically} 0.6s cubic-bezier(0.5, 0, 0, 1) 1
            forwards;
        `};

      &:after {
        content: "";

        position: absolute;
        bottom: -1rem;
        left: 50%;

        transform: translateX(-50%);

        height: 2px;
        width: 7rem;

        background-color: white;
      }
    }
    h3 {
      ${(props) =>
        props.animateText &&
        css`
          animation: ${fadeVertically} 0.6s cubic-bezier(0.5, 0, 0, 1) 0.4s 1
            forwards;
        `};

      margin-bottom: 4rem;

      font-size: 2.7rem;
      font-family: ManropeLight;
      font-weight: 300;
      text-align: center;
    }
    p {
      ${(props) =>
        props.animateText &&
        css`
          animation: ${fadeVertically} 0.6s cubic-bezier(0.5, 0, 0, 1) 0.7s 1
            forwards;
        `};

      font-size: 1.8rem;
      font-family: ManropeLight;
      font-weight: 100;
      text-align: center;

      color: var(--color-blue-grey);
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;

    align-items: center;
    h1 {
      opacity: 0;
      transform: translateY(100%);
      ${(props) =>
        props.animateStacks &&
        css`
          animation: ${fadeVertically} 0.6s cubic-bezier(0.5, 0, 0, 1) 0.1s 1
            forwards;
        `};

      margin: 3.5rem 0;

      font-size: 4rem;
      font-family: Manrope;
      text-align: center;
    }
  }
`;

export const SkillBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 2rem;
  grid-gap: 2rem;

  opacity: 0;
  transform: translateY(100%);

  &:first-of-type {
    ${(props) =>
      props.animateStacks &&
      css`
        animation: ${fadeVertically} 0.75s cubic-bezier(0.5, 0, 0, 1) 0.3s 1
          forwards;
      `};
  }
  &:nth-of-type(2) {
    ${(props) =>
      props.animateStacks &&
      css`
        animation: ${fadeVertically} 0.75s cubic-bezier(0.5, 0, 0, 1) 0.65s 1
          forwards;
      `};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 0 2rem;

    svg {
      width: 5rem;
      height: 5rem;
      fill: white;
    }
    span {
      margin: 1rem 0;

      font-size: 1.8rem;
      font-family: ManropeLight;
      font-weight: 100;
    }
  }
`;
