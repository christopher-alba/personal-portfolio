import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import {
  MainDiv,
  ProfileDesc,
  ProfileDescDiv,
  ProfileDiv,
  ProfilePicture,
  ProfileTopDiv,
  SocialLinksDiv,
  StyledAnchor,
  StyledContainer,
  StyledHeading,
} from "./styled";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const About: FC = () => {
  return (
    <MainDiv>
      <StyledContainer>
        <ProfileDiv>
          <ProfileTopDiv>
            <ProfilePicture src="/images/profileImage.png"></ProfilePicture>
            <ProfileDescDiv>
              <StyledHeading>About</StyledHeading>
              <ProfileDesc>
                From a young age I’ve enjoyed design and problem solving. Fast
                forward to the present, and I’m applying my creativity in
                software development or engineering. My career path is currently
                in web development, and I have a preference towards frontend
                development. This is due to my appreciation for the user
                experience. However, the backend performance of a website also
                impacts the user experience, and also allows me to use my
                creativity to come up with solutions. Therefore, I am also open
                to working in the backend or fullstack roles. I’m currently in
                my final year of engineering at the University of Auckland, and
                am looking for a graduate/junior software engineer/developer
                position.
              </ProfileDesc>
            </ProfileDescDiv>
          </ProfileTopDiv>
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
        </ProfileDiv>
      </StyledContainer>
    </MainDiv>
  );
};

export default About;
