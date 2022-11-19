import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useEffect } from "react";
import { DefaultTheme } from "styled-components";
import Navbar from "../../components/Navbar";
import About from "./About";
import Journey from "./Journey";
import Landing from "./Landing";
import { BacktoTopButton } from "./styled";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Projects from "./Projects";
const MainPage: FC<{
  setSelectedTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}> = ({ setSelectedTheme }) => {
  useEffect(() => {
    // Get the button:
    let mybutton: any = document.getElementById("myBtn");

    // When the user scrolls down from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > window.innerHeight + 100 ||
        document.documentElement.scrollTop > window.innerHeight + 100
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }, []);
  const backToTop = () => {
    document
      .getElementsByClassName("navbar-main")[0]
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <BacktoTopButton id="myBtn" onClick={backToTop}>
        <FontAwesomeIcon icon={faChevronUp} />
      </BacktoTopButton>
      <Landing />
      <Navbar setSelectedTheme={setSelectedTheme} />
      <About />
      <Journey />
      <Projects />
    </>
  );
};
export default MainPage;
