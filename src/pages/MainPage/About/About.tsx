import { Container } from "@mui/system";
import React, { FC } from "react";
import { StyledHeading } from "./styled";

const About: FC = () => {
  return (
    <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
      <StyledHeading>About</StyledHeading>
      <p>
        From a young age I’ve enjoyed design and problem solving. Fast forward
        to the present, and I’m applying my creativity in software development
        or engineering. My career path is currently in web development, and I
        have a preference towards frontend development. This is due to my
        appreciation for the user experience. However, the backend performance
        of a website also impacts the user experience, and also allows me to use
        my creativity to come up with solutions. Therefore, I am also open to
        working in the backend or fullstack roles. I’m currently in my final
        year of engineering at the University of Auckland, and am looking for a
        graduate/junior software engineer/developer position.
      </p>
    </Container>
  );
};

export default About;
