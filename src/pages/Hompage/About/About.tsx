import { Container } from "@mui/material";
import React, { FC } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {
  AboutBottomDiv,
  AboutBottomDivWrapper,
  AboutDiv,
  AboutDivWrapper,
  H1Styled,
  LandingDivMain,
  LearnMoreButton,
} from "./styled";

const About: FC = () => {
  const { width } = useWindowDimensions();
  const scrollToJourney = () => {
    document
      .getElementsByClassName("journey")[0]
      .scrollIntoView({ behavior: "auto" });
  };
  return (
    <>
      <LandingDivMain>
        <Container
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: width > 600 ? "left" : "center",
          }}
        >
          <div>
            <AboutDivWrapper>
              <AboutDiv>
                <h1>About</h1>
                <p>
                  Welcome to my online portfolio that I designed and built
                  myself. Software is one of the things I’m passionate about and
                  I’m very grateful to be able to start a career in software
                  engineering.{" "}
                </p>
              </AboutDiv>
            </AboutDivWrapper>
            <LearnMoreButton onClick={scrollToJourney}>
              Learn More
            </LearnMoreButton>
          </div>
        </Container>
      </LandingDivMain>
      <AboutBottomDivWrapper>
        <AboutBottomDiv>
          <Container>
            <H1Styled fontWeight={200} data-aos="fade-right">
              Web Developer
            </H1Styled>
            <H1Styled fontWeight={600} data-aos="fade-right">
              <strong>Professional Software Engineer</strong>
            </H1Styled>
            <H1Styled fontWeight={200} data-aos="fade-right">
              Final Year Computer Systems Engineer
            </H1Styled>
          </Container>
        </AboutBottomDiv>
      </AboutBottomDivWrapper>
    </>
  );
};

export default About;
