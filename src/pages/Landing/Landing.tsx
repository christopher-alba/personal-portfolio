import React, { FC } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Brand from "../../svg/Brand";
import { ContentDiv, H1Styled, LinkButton, MainDiv } from "./styled";

const Landing: FC = () => {
  const { width } = useWindowDimensions();
  return (
    <MainDiv>
      <ContentDiv>
        <Brand
          color="black"
          height="auto"
          width={width > 600 ? "300px" : "200px"}
        />
        <H1Styled style={{ marginTop: "20px" }} fontWeight={200}>
          Web Developer
        </H1Styled>
        <H1Styled fontWeight={600}>
          <strong>Professional Software Engineer</strong>
        </H1Styled>
        <H1Styled fontWeight={200}>
          Final Year Computer Systems Engineer
        </H1Styled>
        <LinkButton to="/portfolio/about">Experience the legendary</LinkButton>
      </ContentDiv>
    </MainDiv>
  );
};

export default Landing;
