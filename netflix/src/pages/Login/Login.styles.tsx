import styled from "styled-components";
//@ts-ignore
import cover from "~/assets/cover.jpg";
import { colors } from "~/config/variables";

const {red, darkRed, grey, white} = colors

export const Cover = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: url(${cover});
  background-size: cover;
  color: ${white};

  section {
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0,
      transparent 60%,
      rgba(0, 0, 0, 0.8)
    );
  }

  img {
    height: 130px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 100px;

  button {
    background-color: ${darkRed};
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    padding: 7px 17px;
    border-radius: 3px;
    color: ${white};
    margin-top: 0.5rem;

    & {
      cursor: pointer;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 950px;
  padding: 75px 0;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 1;
  flex-direction: column;

  div {
    display: inline;
  }

  h1 {
    margin: 0;
    font-size: 4rem;
  }

  h3 {
    font-size: 1.625rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  button {
    height: 60px;
    padding: 0 30px;
    border: none;
    font-size: 30px;
    background-color: ${darkRed};
    background-image: linear-gradient(180deg, darkRed, red);
    box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
    color: ${white};

    & {
      cursor: pointer;
    }
  }

  .form {
    position: relative;
    width: 20rem;
    height: 3rem;

    input {
    height: 60px;
    min-width: 500px;
    outline: none;
    border: 1px solid ${grey};
    border-radius: 2px;
    color: #000;
    font-size: 16px;
    padding: 0px 16px;
    box-sizing: border-box;
  }

    label {
      position: absolute;
      left: 1rem;
      top: 0rem;
      padding: 0px 10px;
      color: ${grey};
      cursor: text;
      transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    }

    .form__input:focus ~ .form__label,
    .form__input:not(:placeholder-shown).form__input:not(:focus)
      ~ .form__label {
      top: -1rem;
      font-size: 0.8rem;
      left: 0.8rem;
    }
  }
`;
