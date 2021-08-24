import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 180rem;
  width: 90vw;
  margin: 0 auto;
  padding: 1rem 0;
  a {
    text-decoration: none;
    cursor: pointer;
    h3 {
      padding: 4px;

      border: 3px solid #010101;

      font-size: 1.45rem;
      font-family: Poppins;
      font-weight: bold;
      text-shadow: 0 0 20px rgb(0 0 0 / 10%);
      line-height: 1.8rem;
      color: #2b2d42;
    }
  }

  div {
    h3 {
    }
  }
`;
