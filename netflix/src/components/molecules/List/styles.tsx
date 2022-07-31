import styled from "styled-components";

export const Category = styled.div`
  h1 {
    color: #fff;
    margin-left: 1rem;
    margin-top: 5rem;
    font-size: 1.5rem;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  overflow: hidden;

  img {
    height: 200px;
    margin: 0px 10px;
    transform: scale(0.9);
    transition: ease 0.2s;
    cursor: pointer;

    & {
      transform: scale(1);
    }
  }
  
  svg {
    transform: scale(0.9);
    transition: ease 0.2s;
  }

  button {
    position: sticky;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    left: 0;
    right: 0;
  }
`;
