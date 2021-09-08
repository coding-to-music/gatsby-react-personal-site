import styled, { css } from "styled-components";
import { VscRequestChanges } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { fadeVertically } from "../../abstracts/animations";

export const ContactContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  max-width: 145rem;
  width: 92vw;
  margin: 0 auto;
  padding: 10rem 0;

  @media only screen and (max-width: 59.5em) {
    flex-direction: column;
    align-items: center;
  }

  & > div:first-of-type {
    display: flex;
    flex-direction: column;

    width: 50%;

    @media only screen and (max-width: 59.5em) {
      align-items: center;
      margin-bottom: 5rem;
      width: 100%;
      button {
        align-self: center !important;
      }
    }

    h1,
    h2,
    h3 {
      transition: all ease 0.4s;

      opacity: 0;
      transform: translateY(100%);
    }

    h2 {
      ${(props) =>
        props.animateText &&
        css`
          animation: ${fadeVertically} 0.6s ease-out 0.1s 1 forwards;
        `};

      margin-bottom: 3.5rem;

      font-size: 4rem;
      font-family: Manrope;
      color: #2b2d42;
    }

    h3 {
      ${(props) =>
        props.animateText &&
        css`
          animation: ${fadeVertically} 0.6s ease-out 0.2s 1 forwards;
        `};

      margin-bottom: 3.5rem;

      font-size: 2.6rem;
      font-family: ManropeLight;
      color: #2b2d42;
    }

    h1 {
      ${(props) =>
        props.animateText &&
        css`
          animation: ${fadeVertically} 0.6s ease-out 0.3s 1 forwards;
        `};

      font-size: 4rem;
      font-family: Manrope;
      color: #2b2d42;
    }

    span {
      color: var(--color-blue-special);
      font-family: NexaBold;
    }
  }
  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;

    width: 72.5rem;

    @media only screen and (max-width: 59.5em) {
      max-width: 72.5rem;
      width: 92vw;
      /* width: 72.5rem; */
      h1 {
        text-align: center;
      }
    }

    h1 {
      opacity: 0;
      transform: translateY(100%);
      ${(props) =>
        props.animateText &&
        css`
          animation: ${fadeVertically} 0.6s ease-out 0.1s 1 forwards;
        `};

      margin-bottom: 2rem;

      font-size: 4rem;
      font-family: Manrope;
      color: #2b2d42;
    }
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;

  div {
    position: relative;
    width: 100%;
  }

  & > div:first-of-type {
    display: flex;
    margin-bottom: 3rem;

    @media only screen and (max-width: 34.5em) {
      flex-direction: column;

      & > div:first-of-type {
        margin-right: 0;
        margin-bottom: 2rem;
      }
    }
    & > div {
      transition: all ease 0.4s;
      opacity: 0;
      transform: translateY(100%);
      ${(props) =>
        props.animateForm &&
        css`
          animation: ${fadeVertically} 0.6s ease-out 0.2s 1 forwards;
        `};
    }

    & > div:first-of-type {
      margin-right: 2rem;
    }
  }

  & > div:nth-of-type(2) {
    transition: all ease 0.4s;
    opacity: 0;
    transform: translateY(100%);
    ${(props) =>
      props.animateForm &&
      css`
        animation: ${fadeVertically} 0.6s ease-out 0.3s 1 forwards;
      `};
  }
`;

export const ContactInput = styled.input.attrs(({ type, placeholder }) => ({
  type: type || "text",
  placeholder: placeholder || "What's your name?",
  autocomplete: "off",
  spellCheck: "false",
}))`
  width: 100%;
  padding: 0.8rem 1.4rem 0.8rem 1.4rem;
  padding-right: 4rem;

  outline: none;

  box-shadow: 0 4px 12px -2px rgb(107 117 161 / 10%);

  border: 1px solid rgba(141, 153, 174, 0.3);
  border-radius: 4px;

  font-size: 1.6rem;
  font-family: Manrope;
  font-display: fallback;
  line-height: 2.4rem;
  color: #2b2d42;

  &::placeholder {
    color: rgba(43, 45, 66, 0.5);
    font-weight: 400;
  }
`;

export const ContactTextArea = styled.textarea.attrs({
  rows: 10,
  autocomplete: "off",
  name: "text",
  placeholder: "Your message goes here.",
})`
  width: 100%;
  padding: 0.8rem 1.4rem 0.8rem 1.4rem;
  padding-right: 4rem;

  outline: none;

  box-shadow: 0 4px 12px -2px rgb(107 117 161 / 10%);

  border: 1px solid rgba(141, 153, 174, 0.3);
  border-radius: 4px;

  font-size: 1.6rem;
  font-display: fallback;
  font-family: Manrope;
  line-height: 2.4rem;
  color: #2b2d42;

  resize: none;

  &::placeholder {
    color: rgba(43, 45, 66, 0.5);
    font-weight: 400;
  }
`;

export const ContactBtn = styled.button`
  align-self: center;

  padding: 1.4rem 3rem 1.5rem;
  margin-top: 2rem;

  transition: all ease 0.4s;
  opacity: 0;
  transform: translateY(100%);
  ${(props) =>
    props.animateBtn &&
    css`
      animation: ${fadeVertically} 0.6s ease-out 0.4s 1 forwards;
    `};

  box-shadow: rgb(8 84 207 / 60%) 0px 0.65rem 1.6rem 0px;

  border: none;
  border-radius: 0.6rem;

  background-color: rgba(8, 84, 207, 1);

  color: white;
  font-family: ManropeLight;
  font-display: fallback;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  white-space: nowrap;

  cursor: pointer;

  &:hover {
    box-shadow: rgb(8 84 207 / 90%) 0px 0rem 2.1rem 0px;
  }
`;

export const NameSvg = styled(BsFillPersonFill)`
  position: absolute;

  bottom: 1rem;
  right: 2rem;

  height: 2rem;
  width: 2rem;

  transition: all 0.3s ease;

  ${(props) =>
    props.isvalid &&
    css`
      fill: #69dd95;
      right: 1rem;
    `}
`;

export const EmailSvg = styled(MdEmail)`
  position: absolute;

  bottom: 1rem;
  right: 2rem;

  height: 2rem;
  width: 2rem;

  transition: all 0.3s ease;

  ${(props) =>
    props.isvalid &&
    css`
      fill: #69dd95;
      right: 1rem;
    `}
`;

export const MessageAreaSvg = styled(VscRequestChanges)`
  position: absolute;

  bottom: 1rem;
  right: 1rem;

  height: 2rem;
  width: 2rem;

  transition: transform 0.2s ease;

  ${(props) =>
    props.isvalid &&
    css`
      fill: #69dd95;
      transform: scale(1.1);
    `}
`;
