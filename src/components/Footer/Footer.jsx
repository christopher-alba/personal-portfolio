import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Container from "../JCUX/Container";
import {
  MainDiv,
  Header,
  Anchor,
  AnchorWrapper,
  IconLink,
  HR,
  Text,
} from "./styled";

const Footer = () => {
  return (
    <MainDiv>
      <Container>
        <Header>Contact</Header>
        <AnchorWrapper>
          <Anchor href="tel:+642108173338"> mobile: +64 210 817 3338</Anchor>
          <Anchor href="mailto:chris.alba.dev@gmail.com">
            email: chris.alba.dev@gmail.com
          </Anchor>
        </AnchorWrapper>
        <IconLink
          href="https://www.instagram.com/alba.sy.chris/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </IconLink>
        <IconLink
          href="https://www.facebook.com/christopher.alba.357/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/christopher-alba"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </IconLink>
        <IconLink
          href="https://github.com/christopher-alba"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </IconLink>
        <HR />
        <Text>This website is designed and implemented by me.</Text>
      </Container>
    </MainDiv>
  );
};

export default Footer;
