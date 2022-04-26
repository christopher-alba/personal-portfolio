import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Container from "../../../components/JCUX/Container";
import HousesByTheMountain from "../../../svg/HousesByTheMountain/HousesByTheMountain";
import { Button, Heading, Img, LandingDivMain } from "./styled";
const Landing = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    document.getElementsByClassName("aspiring")[0].scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <LandingDivMain>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Img src="./images/profileImage.png" />
        <Heading>Christopher Sy Alba</Heading>
        <p style={{ textAlign: "center", marginTop: 0 }}>
          Final year Computer Systems Engineering student at The University of
          Auckland
        </p>
        <Button onClick={handleClick}>Learn More</Button>
      </Container>
      <HousesByTheMountain
        color1={theme.colors.tertiary}
        color2={theme.colors.tertiary3}
      />
    </LandingDivMain>
  );
};

export default Landing;
