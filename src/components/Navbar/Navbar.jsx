import React, { useState } from "react";
import themes from "../../themes/schema.json";
import { Button, ButtonWrapper, CVButton, ListButton, NavMenu } from "./styled";
import Container from "../JCUX/Container";
import { NavBrand, NavMainDiv } from "./styled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faDownload,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setSelectedTheme, selectedTheme }) => {
  const [menu, setMenu] = useState(false);
  const toggleTheme = (e) => {
    e.preventDefault();
    setSelectedTheme(
      selectedTheme.name === "dark" ? themes.data.light : themes.data.dark
    );
  };
  const toggleMenu = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };
  return (
    <NavMainDiv>
      <Container display="flex" justifyContent="space-between">
        <NavBrand>CSA</NavBrand>
        <ListButton onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </ListButton>
        <ButtonWrapper>
          <Button onClick={toggleTheme}>
            {selectedTheme.name === "dark" ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}{" "}
            {selectedTheme.name === "dark" ? "Light" : "Dark"}
          </Button>
          <Button>Contact</Button>
          <Link to="/">
            <CVButton tabIndex={-1}>
              <FontAwesomeIcon icon={faDownload} /> CV
            </CVButton>
          </Link>
        </ButtonWrapper>
      </Container>
      {menu && (
        <NavMenu>
          <Container display="flex" flexDirection="column">
            <Button onClick={toggleTheme}>
              {selectedTheme.name === "dark" ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}{" "}
              {selectedTheme.name === "dark" ? "Light" : "Dark"}
            </Button>
            <Button>Contact</Button>
            <Link to="/">
              <CVButton tabIndex={-1}>
                <FontAwesomeIcon icon={faDownload} /> CV
              </CVButton>
            </Link>
          </Container>
        </NavMenu>
      )}
    </NavMainDiv>
  );
};

export default Navbar;
