import styled from "styled-components";

export const ProjectSection = styled.section`
  background-color: var(--color-grey-main);
`;

export const ProjectContainer = styled.article`
  max-width: 145rem;
  width: 92vw;
  margin: 0 auto;
  padding: 10rem 0;

  h1 {
    margin-bottom: 8rem;

    background-image: linear-gradient(
      76deg,
      var(--color-blue-dark),
      var(--color-blue-darker)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    text-align: center;
    font-size: 5rem;
    font-family: Manrope;
    text-transform: uppercase;
    line-height: 8.5rem;
    letter-spacing: -0.03em;
  }
`;
