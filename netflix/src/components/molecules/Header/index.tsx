import React from "react";
import { useEffect, useState } from "react";
import { Container, Logo, NavLinks, User } from "./styles";

import { BiSearchAlt2 } from 'react-icons/bi'
import { IoNotifications } from 'react-icons/io5'

function Header({}) {
  const [color, setColor] = useState(false);

  useEffect(function () {
    function scrollEffect() {
      if (window.scrollY > 10) {
        setColor(true);
      } else {
        setColor(false);
      }
    }

    window.addEventListener("scroll", scrollEffect);
  }, []);

  return (
    <>
      <Container>
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="netflix"
        />

        <NavLinks>
          <a href="#">Inicio</a>
          <a href="#">Séries</a>
          <a href="#">Filmes</a>
          <a href="#">Bombando</a>
          <a href="#">Minha Lista</a>
          <a href="#">Idioma e legendas</a>
        </NavLinks>


        <User>
          <img src="https://occ-0-1915-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUCQFZAe21cK63FEp-_h4AiLbCuqdhq0WH9inbG4fFTgdPbZXiC4FzqRA69z8nyqgEWZnXwaQBb_wXc4NX3ZrCRvFQg44ns.png?r=fae" />

          <BiSearchAlt2 className="search" />
          <IoNotifications />
        </User>
      </Container>
    </>
  );
}

export default Header;
