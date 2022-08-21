import { Container } from "@mui/material";
import React, { FC } from "react";
import { Header, MainDiv, ProjectsDiv } from "./styled";
import projects from "./data";
import ProjectItem from "./ProjectItem/ProjectItem";
import { ProjectDiv } from "./ProjectItem/styled";
const Projects: FC = () => {
  return (
    <MainDiv className="projects">
      <Container>
        <Header>PROJECTS</Header>
        <ProjectsDiv>
          {projects.map((project, index) => {
            return (
              <ProjectItem
                project={{
                  name: project.title,
                  img: project.imgUrl,
                  description: project.description,
                  tags: project.tags,
                  url: project.href,
                }}
              />
            );
          })}
          {projects.length % 2 >= 1 ? <ProjectDiv /> : ""}
          {projects.length % 3 >= 1 ? <ProjectDiv /> : ""}
        </ProjectsDiv>
      </Container>
    </MainDiv>
  );
};

export default Projects;
