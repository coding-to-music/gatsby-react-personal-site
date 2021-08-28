import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 8rem 0;
  background-image: linear-gradient(
    to left bottom,
    var(--color-blue-dark),
    var(--color-blue-darker) 50%
  );
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

    h1 {
      position: relative;

      margin: 3.5rem 0;

      font-size: 4rem;
      font-family: Manrope;

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
      margin-bottom: 4rem;

      font-size: 2.7rem;
      font-family: ManropeLight;
      font-weight: 300;
    }
    p {
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
      margin: 3.5rem 0;

      font-size: 4rem;
      font-family: Manrope;
    }
  }
`;

export const SkillBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 2rem;

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
