import styled from "styled-components";

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
    color: #fff;
    background-color: #333;
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
    color: #fff;
    background-color: #e50914;
    border-radius: 3px;
    font-weight: bold;
    font-size: 16px;
    border: none;
    margin-bottom: 10px;
  }

   label {
      position: absolute;
      padding: 0px 10px;
      color: #8c8c8c;
      cursor: text;
      transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    }
`;

export const Support = styled.div`
     display: flex;
    color: #b3b3b3;
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
        color: #b3b3b3
    }
`
