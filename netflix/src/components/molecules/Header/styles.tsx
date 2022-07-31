import styled from "styled-components";

// .header-fixed{
//     display: flex;
//     position: fixed;
//     top: 0;
//     width: 100%;
//     padding: 2.5rem;
//     z-index: 999;
//   }

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2.5rem;
  z-index: 999;
  align-items: center;

  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 10%,
    transparent
  );
`;

export const Logo = styled.img`
  position: fixed;
  top: 30px;
  left: 74px;
  width: 120px;
  object-fit: contain;
`;

export const User = styled.div`
  img {
    position: fixed;
    top: 25px;
    right: 75px;
    width: 2.6rem;
    object-fit: contain;
    cursor: pointer;
  }

  .search {
    position: absolute;
    color: white;
    font-size: 1.5rem;
    top: 25px;
    right: 19%;
  }

  svg {
    margin: 0;
    position: absolute;
    color: white;
    font-size: 1.5rem;
    top: 25px;
    right: 15%;
  }
`;

export const NavLinks = styled.div`
  position: absolute;
  top: 25px;
  left: 15%;

  a {
    font-size: 12px;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    margin: 0px 4px;

    & {
      cursor: pointer;
    }
  }
`;
