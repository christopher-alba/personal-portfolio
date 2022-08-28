import {
  DarkMode,
  Download,
  LightMode,
  Menu,
  MenuOpen,
} from "@mui/icons-material";
import React, { Dispatch, FC, useContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeContext } from "styled-components";
import Brand from "../../svg/Brand";
import themes from "../../themes/schema.json";
import {
  BarsButton,
  BrandWrapper,
  ButtonsDiv,
  CVButton,
  LinkButton,
  LinksDiv,
  MenuDiv,
  NavbarInnerDiv,
  NavbarMainDiv,
  StyledRule,
  ThemeButton,
  UnderlineDiv,
} from "./styled";
import $ from "jquery";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar: FC<{
  selectedTheme: DefaultTheme;
  setSelectedTheme: Dispatch<React.SetStateAction<DefaultTheme>>;
}> = ({ selectedTheme, setSelectedTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const changeTheme = () => {
    setSelectedTheme(
      selectedTheme.name === "light" ? themes.dark : themes.light
    );
    localStorage.setItem(
      "theme",
      JSON.stringify(
        selectedTheme.name === "light" ? themes.dark : themes.light
      )
    );
  };
  const animateRule = (buttonName: string) => {
    if (buttonName === "invisible") {
      $(".underline").animate(
        {
          width: 0,
        },
        {
          queue: false,
          duration: 500,
        }
      );
      $(".underline").animate(
        {
          left: 0,
        },
        {
          queue: false,
          duration: 500,
        }
      );
    } else {
      $(".underline").animate(
        {
          width:
            document
              .getElementsByClassName(buttonName)?.[0]
              ?.getBoundingClientRect()?.width + "px",
        },
        {
          queue: false,
          duration: 500,
        }
      );
      $(".underline").animate(
        {
          left:
            (document.getElementsByClassName(buttonName)?.[0] as HTMLElement)
              ?.offsetLeft + "px",
        },
        {
          queue: false,
          duration: 500,
        }
      );
    }
  };

  useEffect(() => {
    if (location.pathname.includes("contact")) {
      animateRule("contact-button");
    } else if (location.pathname.includes("education")) {
      animateRule("education-button");
    } else if (location.pathname.includes("projects")) {
      animateRule("projects-button");
    } else if (location.pathname.includes("tech")) {
      animateRule("tech-button");
    } else if (location.pathname.includes("journey")) {
      animateRule("journey-button");
    } else if (location.pathname.includes("about")) {
      animateRule("about-button");
    } else {
      animateRule("invisible");
    }
  }, [location]);
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width > 1200) {
      setMenuOpen(false);
    }
  }, [width]);
  return (
    <NavbarMainDiv>
      <NavbarInnerDiv>
        <BrandWrapper
          onClick={() => {
            navigate("/");
          }}
        >
          <Brand
            color={theme.colors.primary}
            height="auto"
            width={width > 600 ? "200px" : "150px"}
          />
        </BrandWrapper>

        <LinksDiv>
          <LinkButton
            to="/portfolio/about"
            className="about-button"
            color="inherit"
          >
            ABOUT
          </LinkButton>
          <LinkButton
            to="/portfolio/journey"
            className="journey-button"
            color="inherit"
          >
            JOURNEY
          </LinkButton>
          <LinkButton
            to="/portfolio/tech"
            className="tech-button"
            color="inherit"
          >
            TECH
          </LinkButton>
          <LinkButton
            to="/portfolio/projects"
            className="projects-button"
            color="inherit"
          >
            PROJECTS
          </LinkButton>
          <LinkButton
            to="/portfolio/education"
            className="education-button"
            color="inherit"
          >
            EDUCATION
          </LinkButton>
          <LinkButton
            to="/portfolio/contact"
            className="contact-button"
            color="inherit"
          >
            CONTACT
          </LinkButton>
          <UnderlineDiv>
            <StyledRule
              className="underline"
              style={{
                position: "relative",
                width: `${
                  document
                    .getElementsByClassName("about-button")[0]
                    ?.getBoundingClientRect()?.width
                }px`,
                left:
                  (
                    document.getElementsByClassName(
                      "about-button"
                    )[0] as HTMLElement
                  )?.offsetLeft + "px",
              }}
            />
          </UnderlineDiv>
        </LinksDiv>
        <div style={{ display: "flex" }}>
          <BarsButton
            onClick={() => (menuOpen ? setMenuOpen(false) : setMenuOpen(true))}
          >
            {menuOpen ? <MenuOpen /> : <Menu />}
          </BarsButton>
          <ButtonsDiv>
            <ThemeButton color="inherit" onClick={changeTheme}>
              {selectedTheme.name === "light" ? (
                <DarkMode style={{ marginRight: "10px" }} />
              ) : (
                <LightMode style={{ marginRight: "10px" }} />
              )}
              {selectedTheme.name === "light" ? "Dark" : "Light"}
            </ThemeButton>
            <CVButton target="_blank" rel="noreferrer" to="/cv.pdf">
              <Download style={{ marginRight: "10px" }} />
              CV
            </CVButton>
          </ButtonsDiv>
        </div>
      </NavbarInnerDiv>
      {menuOpen && (
        <MenuDiv>
          <LinkButton
            to="/portfolio/about"
            className="about-button"
            color="inherit"
          >
            ABOUT
          </LinkButton>
          <LinkButton
            to="/portfolio/journey"
            className="journey-button"
            color="inherit"
          >
            JOURNEY
          </LinkButton>
          <LinkButton
            to="/portfolio/tech"
            className="tech-button"
            color="inherit"
          >
            TECH
          </LinkButton>
          <LinkButton
            to="/portfolio/projects"
            className="projects-button"
            color="inherit"
          >
            PROJECTS
          </LinkButton>
          <LinkButton
            to="/portfolio/education"
            className="education-button"
            color="inherit"
          >
            EDUCATION
          </LinkButton>
          <LinkButton
            to="/portfolio/contact"
            className="contact-button"
            color="inherit"
          >
            CONTACT
          </LinkButton>
          <ThemeButton color="inherit" onClick={changeTheme}>
            {selectedTheme.name === "light" ? (
              <DarkMode style={{ marginRight: "10px" }} />
            ) : (
              <LightMode style={{ marginRight: "10px" }} />
            )}
            {selectedTheme.name === "light" ? "Dark" : "Light"}
          </ThemeButton>
          <CVButton target="_blank" rel="noreferrer" to="/cv.pdf">
            <Download style={{ marginRight: "10px" }} />
            CV
          </CVButton>
        </MenuDiv>
      )}
    </NavbarMainDiv>
  );
};

export default Navbar;
