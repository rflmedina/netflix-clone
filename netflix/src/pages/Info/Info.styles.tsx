import styled from "styled-components";

export const Container = styled.div`
  height: 99vh;
  width: 100%;
  z-index: 1;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding: 3rem;
  margin-top: 2rem;
  color: white;
  h3 {
    color: #fff;
    font-size: 2rem;
    font-weight: 400;
    line-height: normal;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  }

  h4 {
    font-size: 1.5rem;
  }

  img {
    height: 500px;
    margin-right: 4rem;
  }
`;
