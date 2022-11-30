import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import {
  ContactDiv,
  FlagImg,
  FlagWrapper,
  MainDiv,
  ProfileDesc,
  ProfileDescDiv,
  ProfilePicture,
  ProfileTopDiv,
  SocialLinksDiv,
  StyledAnchor,
  StyledHeading,
} from "./styled";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { MajorSection } from "../../../components/MajorSection";
import { StyledContainer } from "../../../components/StyledContainer";
const About: FC = () => {
  return (
    <MainDiv data-aos="fade-up">
      <StyledContainer>
        <MajorSection>
          <ProfileTopDiv>
            <ProfilePicture src="/images/profileImage.png"></ProfilePicture>
            <ProfileDescDiv>
              <StyledHeading>
                About{" "}
                <FlagWrapper>
                  <FlagImg src="images/nz.png" />
                  <FlagImg src="images/php.jpg" />
                  <FlagImg src="images/cn.png" />
                </FlagWrapper>
              </StyledHeading>
              <ProfileDesc>
                From a young age I’ve enjoyed design and problem solving. Fast
                forward to the present, and I’m applying my creativity in
                software development or engineering. My career path is currently
                in web development, and I have a preference towards frontend
                development. This is due to my appreciation for the user
                experience. However, the backend performance of a website also
                impacts the user experience, and also allows me to use my
                creativity to come up with solutions. Therefore, I am also open
                to working in the backend or fullstack roles.
              </ProfileDesc>
            </ProfileDescDiv>
          </ProfileTopDiv>

          <ContactDiv>
            <StyledAnchor href="mailto:chris.alba.dev@gmail.com">
              <FontAwesomeIcon icon={faMailBulk} /> chris.alba.dev@gmail.com
            </StyledAnchor>
            <StyledAnchor href="tel:+642108173338">
              <FontAwesomeIcon icon={faPhone} /> +64 02108173338
            </StyledAnchor>
          </ContactDiv>
          <SocialLinksDiv>
            <StyledAnchor
              href="https://github.com/christopher-alba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> Github{" "}
            </StyledAnchor>
            <StyledAnchor
              href="https://www.linkedin.com/in/christopher-alba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn{" "}
            </StyledAnchor>
            <StyledAnchor
              href="https://www.instagram.com/alba.sy.chris/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram{" "}
            </StyledAnchor>
            <StyledAnchor
              href="https://www.facebook.com/christopher.alba.357/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} /> Facebook{" "}
            </StyledAnchor>
          </SocialLinksDiv>
        </MajorSection>
      </StyledContainer>
    </MainDiv>
  );
};

export default About;
