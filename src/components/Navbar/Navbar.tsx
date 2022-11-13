import React, { FC, useContext } from "react";
import {
  NavbarInner,
  NavbarMainDiv,
  StyledButton,
  StyledContainer,
  StyledLinkButton,
} from "./styled";
import Brand from "../../svg/Brand";
import { DefaultTheme, ThemeContext } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import themes from "../../themes/schema.json";
import useWindowDimensions from "../../hooks/useWindowDimensions";
const Navbar: FC<{
  setSelectedTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}> = ({ setSelectedTheme }) => {
  const theme = useContext(ThemeContext);
  const changeTheme = () => {
    if (theme.name === "light") {
      setSelectedTheme(themes.dark);
    } else {
      setSelectedTheme(themes.light);
    }
  };
  const { width } = useWindowDimensions();
  return (
    <NavbarMainDiv className="navbar-main">
      <StyledContainer>
        <NavbarInner>
          {width <= 600 ? (
            ""
          ) : (
            <Brand color={theme.colors.secondary} height="auto" width="200px" />
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <StyledButton onClick={changeTheme}>
              {theme.name === "light" ? (
                <FontAwesomeIcon icon={faMoon} />
              ) : (
                <FontAwesomeIcon icon={faSun} />
              )}
              {theme.name === "light" ? " Dark" : " Light"}
            </StyledButton>
            <StyledLinkButton target="_blank" rel="noreferrer" to="./cv.pdf">
              CV <FontAwesomeIcon icon={faDownload} />
            </StyledLinkButton>
          </div>
        </NavbarInner>
      </StyledContainer>
    </NavbarMainDiv>
  );
};

export default Navbar;
