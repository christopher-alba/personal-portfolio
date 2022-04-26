import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "../../../components/JCUX/Container";
import { Header, MainDiv, Pill, PillsWrapper, PillText, SVG } from "./styled";
import Tabs from "./Tabs";
const webTechnologies = [
  "HTML",
  "CSS",
  "Javascript",
  "JQuery",
  "React",
  "Node.js",
  "Express.js",
  "C#",
  "Blazor",
  ".NET",
];
const databases = ["MongoDB", "Knex.js"];
const devTools = ["Github", "Git", "NPM", "Postman", "AdobeXD", "Figma"];
const otherTechnologies = [
  "C",
  "C++",
  "Python",
  "Matlab",
  "R",
  "Java",
  "Microcontrollers",
];
const Technologies = () => {
  return (
    <MainDiv>
      <Container display="flex" flexDirection="column" alignItems="flex-end">
        <Header>
          <FontAwesomeIcon icon={faCode} /> TECHNOLOGIES
        </Header>
        <Tabs>
          <PillsWrapper className="web">
            {webTechnologies.map((tech) => (
              <Pill className="Web">
                <PillText>{tech}</PillText>
              </Pill>
            ))}
          </PillsWrapper>
          <PillsWrapper className="other">
            {otherTechnologies.map((tech) => (
              <Pill className="Other">
                <PillText>{tech}</PillText>
              </Pill>
            ))}
          </PillsWrapper>
          <PillsWrapper className="databases">
            {databases.map((tech) => (
              <Pill className="Other">
                <PillText>{tech}</PillText>
              </Pill>
            ))}
          </PillsWrapper>
          <PillsWrapper className="dev tools">
            {devTools.map((tech) => (
              <Pill className="Other">
                <PillText>{tech}</PillText>
              </Pill>
            ))}
          </PillsWrapper>
        </Tabs>
      </Container>
      <SVG />
    </MainDiv>
  );
};

export default Technologies;
