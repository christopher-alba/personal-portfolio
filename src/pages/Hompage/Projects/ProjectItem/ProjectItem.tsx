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
      <a href={project.url}>Visit</a>
      <Header>{project.name}</Header>
      <p>{project.description}</p>
      <div>
        {project.tags.map((tag) => {
          return <div>{tag}</div>;
        })}
      </div>
    </ProjectDiv>
  );
};

export default ProjectItem;
