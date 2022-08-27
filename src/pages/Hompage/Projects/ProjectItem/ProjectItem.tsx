import { Button } from "@mui/material";
import React, { FC } from "react";
import { Header, ImageWrapper, ProjectDiv, ProjectImg } from "./styled";

const ProjectItem: FC<{
  project: {
    name: string;
    img: string;
    tags: string[];
    description: string;
    url: string;
  };
}> = ({ project }) => {
  return (
    <ProjectDiv>
      <ImageWrapper>
        <ProjectImg src={project.img} />
      </ImageWrapper>
      <Button
        fullWidth
        href={project.url}
        color="inherit"
        variant="outlined"
        style={{ borderRadius: "0" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit
      </Button>
      <Header>{project.name}</Header>
      <p>{project.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {project.tags.map((tag) => {
          return <strong style={{ marginRight: "8px" }}>#{tag}</strong>;
        })}
      </div>
    </ProjectDiv>
  );
};

export default ProjectItem;
