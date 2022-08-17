import { Download } from "@mui/icons-material";
import { Container } from "@mui/material";
import React, { Dispatch, FC, useContext, useEffect } from "react";
import { DefaultTheme, ThemeContext } from "styled-components";
import Brand from "../../svg/Brand";
import themes from "../../themes/schema.json";
import {
  ButtonsDiv,
  CVButton,
  LinkButton,
  LinksDiv,
  NavbarInnerDiv,
  NavbarMainDiv,
  StyledRule,
  ThemeButton,
  UnderlineDiv,
} from "./styled";
import $ from "jquery";
import useWindowDimensions from "../../hooks/useWindowDimensions";
const Navbar: FC<{
  selectedTheme: DefaultTheme;
  setSelectedTheme: Dispatch<React.SetStateAction<DefaultTheme>>;
}> = ({ selectedTheme, setSelectedTheme }) => {
  const theme = useContext(ThemeContext);
  const changeTheme = () => {
    setSelectedTheme(
      selectedTheme.name === "light" ? themes.dark : themes.light
    );
  };
  const isScrolledIntoView = (elementName: string) => {
    let element = $(elementName);
    var element_height = element.outerHeight() || 0;
    var element_top_position = element?.offset()?.top || 0;
    var element_bottom_position = element_top_position + element_height;
    var window_height = $(window).height() || 0;
    var window_top_position = $(window).scrollTop() || 0;
    var window_bottom_position = window_top_position + window_height;
    return (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
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
  const scrollToElement = (elementName: string) => {
    document.getElementsByClassName(elementName)[0].scrollIntoView();
  };
  useEffect(() => {
    let animating: boolean = false;
    const eventListener = () => {
      if (!animating) {
        if (isScrolledIntoView(".contact")) {
          animating = true;
          animateRule("contact-button");
          setTimeout(() => {
            animating = false;
          }, 600);
        } else if (isScrolledIntoView(".education")) {
          animating = true;
          animateRule("education-button");
          setTimeout(() => {
            animating = false;
          }, 600);
        } else if (isScrolledIntoView(".projects")) {
          animating = true;
          animateRule("projects-button");
          setTimeout(() => {
            animating = false;
          }, 600);
        } else if (isScrolledIntoView(".tech")) {
          animating = true;
          animateRule("tech-button");
          setTimeout(() => {
            animating = false;
          }, 600);
        } else if (isScrolledIntoView(".journey")) {
          animating = true;
          animateRule("journey-button");
          setTimeout(() => {
            animating = false;
          }, 600);
        } else {
          animating = true;
          animateRule("invisible");
          setTimeout(() => {
            animating = false;
          }, 600);
        }
      }
    };

    window.addEventListener("scroll", eventListener);
  }, []);
  const { width } = useWindowDimensions();
  return (
    <NavbarMainDiv>
      <Container>
        <NavbarInnerDiv>
          <Brand
            color={theme.colors.secondary}
            height="auto"
            width={width > 600 ? "200px" : "150px"}
            handleClick={() => {
              window.scrollTo({ top: 0 });
            }}
          />
          <LinksDiv>
            <LinkButton
              className="journey-button"
              color="inherit"
              onClick={() => scrollToElement("journey")}
            >
              JOURNEY
            </LinkButton>
            <LinkButton
              className="tech-button"
              color="inherit"
              onClick={() => scrollToElement("tech")}
            >
              TECH
            </LinkButton>
            <LinkButton
              className="projects-button"
              color="inherit"
              onClick={() => scrollToElement("projects")}
            >
              PROJECTS
            </LinkButton>
            <LinkButton
              className="education-button"
              color="inherit"
              onClick={() => scrollToElement("education")}
            >
              EDUCATION
            </LinkButton>
            <LinkButton
              className="contact-button"
              color="inherit"
              onClick={() => scrollToElement("contact")}
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
          <ButtonsDiv>
            <ThemeButton
              color="inherit"
              variant="outlined"
              onClick={changeTheme}
            >
              {selectedTheme.name === "light" ? "Dark" : "Light"}
            </ThemeButton>
            <CVButton variant="text">
              <Download />
              CV
            </CVButton>
          </ButtonsDiv>
        </NavbarInnerDiv>
      </Container>
    </NavbarMainDiv>
  );
};

export default Navbar;
