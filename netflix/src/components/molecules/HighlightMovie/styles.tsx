import styled from "styled-components";
import { colors } from "~/config/variables";

const { white } = colors

export const Container = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 95vh;
`;

export const Info = styled.div`
  position: absolute;
  top: 20%;
  left: 3%;
  flex-direction: column;
  height: inherit;
  width: 500px;

  h1 {
    color: ${white};
    font-size: 4rem;
  }

  h2 {
    color: ${white};
    font-size: 1.2vw;
    font-weight: 400;
    line-height: normal;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  }

  button {
    height: 3rem;
    width: 9rem;
    border: none;
    font-size: 1rem;
    border-radius: 4px;
  }

  .more-info {
    height: 2.8rem;
    width: 12rem;
    border: none;
    font-size: 1rem;
    margin-left: 10px;
    background-color: rgba(109,109,110,0.7);
    color: ${white};
  }

  svg {
    margin-right: 10px;
  }

  .info {
    color: ${white};
    font-weight: bold;
  }
`;
