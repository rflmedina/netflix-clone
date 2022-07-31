import styled from "styled-components";
import { colors } from '~/config/variables'

const {dark, white, darkRed, grey, softGrey } = colors

export const Box = styled.div`
  padding: 60px;
  z-index: 90;
  position: relative;
  max-width: 450px;
  height: 550px;
  margin-left: 50%;
  background-color: rgb(0, 0, 0, 0.75);
  border-radius: 10px;
  box-sizing: border-box;
  transform: translateX(-50%);

  input {
    height: 50px;
    width: 100%;
    margin-bottom: 1rem;
    color: ${white};
    background-color: ${dark};
    border: none;
    border-radius: 5px;
    padding-left: 15px;
    box-sizing: border-box;
    outline: none;
  }

  button {
    height: 50px;
    width: 100%;
    margin-top: 1rem;
    color: ${white};
    background-color: ${darkRed};
    border-radius: 3px;
    font-weight: bold;
    font-size: 16px;
    border: none;
    margin-bottom: 10px;
  }

   label {
      position: absolute;
      padding: 0px 10px;
      color: ${grey};
      cursor: text;
      transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    }
`;

export const Support = styled.div`
     display: flex;
    color: ${softGrey};
    justify-content: space-between;
    font-size: 12px;
    margin-bottom: 5px;

    input {
    width: 15px;
    height: 15px;
    margin: 0;
    padding: 0;
}

    a {
        text-decoration: none;
        color: ${softGrey}
    }
`
