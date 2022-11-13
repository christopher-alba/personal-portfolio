import React, { FC } from "react";
import {
  HeroText,
  InfoText,
  KeyboardArrowDownIconStyled,
  MainDiv,
  OverlayDiv,
  SpanStyled,
  SubHeroText,
  TextDiv,
} from "./styled";

const Landing: FC = () => {
  const navigateDown = () => {
    document
      .getElementsByClassName("navbar-main")[0]
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <MainDiv data-aos="fade">
      <OverlayDiv>
        <TextDiv>
          <HeroText>Hello There!</HeroText>
          <SubHeroText>I'm Christopher Sy Alba</SubHeroText>
          <InfoText>
            Professional Software Engineer @{" "}
            <a
              href="https://www.turnersautogroup.co.nz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpanStyled>Turners Automotive Group</SpanStyled>
            </a>
          </InfoText>
          <InfoText>
            Graduate of Computer Systems Engineering (Honours) @{" "}
            <a
              href="https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/computer-systems-engineering/undergraduate.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpanStyled>UoA</SpanStyled>
            </a>
          </InfoText>
          <InfoText>Specialises in Full-stack Web Development</InfoText>
          <KeyboardArrowDownIconStyled onClick={navigateDown} />
        </TextDiv>
      </OverlayDiv>
    </MainDiv>
  );
};

export default Landing;
