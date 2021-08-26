import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 10rem 0;
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

  max-width: 150rem;
  margin: 0 auto;

  color: white;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    align-items: center;

    width: 60%;

    h1 {
      position: relative;

      margin-bottom: 2rem;

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
      margin-bottom: 5rem;

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
      margin-bottom: 2rem;

      font-size: 4rem;
      font-family: Manrope;
    }
  }
`;
