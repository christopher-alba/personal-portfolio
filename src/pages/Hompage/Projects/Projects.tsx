import { Container } from "@mui/material";
import React, { FC } from "react";
import { Header, MainDiv, ProjectDiv, ProjectImg, ProjectsDiv } from "./styled";

const Projects: FC = () => {
  return (
    <MainDiv className="projects">
      <Container>
        <Header>PROJECTS</Header>
        <ProjectsDiv>
          <ProjectDiv>
            <ProjectImg src="./images/projects/finance.png" />
          </ProjectDiv>
        </ProjectsDiv>
      </Container>
    </MainDiv>
  );
};

export default Projects;
