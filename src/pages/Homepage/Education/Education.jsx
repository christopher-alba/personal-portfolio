import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "../../../components/JCUX/Container";
import {
  Anchor,
  ContentDiv,
  ContentRight,
  Header,
  Img,
  MainDiv,
  Text,
  WindmillsSVG,
} from "./styled";

const Education = () => {
  return (
    <MainDiv>
      <Container>
        <Header>
          <FontAwesomeIcon icon={faComputer} /> Education
        </Header>
        <ContentDiv>
          <Img src="./images/uoa.jpg" />
          <ContentRight>
            <Text>Final year student (Part 4)</Text>
            <Text>Bachelors in Engineering (Honors)</Text>
            <Text>Specialization: Computer Systems</Text>
            <Text>University of Auckland</Text>
            <Anchor
              href="https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/computer-systems-engineering.html"
              rel="noreferrer"
              target="_blank"
            >
              Learn More
            </Anchor>
          </ContentRight>
        </ContentDiv>
      </Container>
      <WindmillsSVG />
    </MainDiv>
  );
};

export default Education;
