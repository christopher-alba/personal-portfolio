import React, { FC } from "react";
import { MajorSection } from "../../../components/MajorSection";
import { StyledContainer } from "../../../components/StyledContainer";
import { StyledHeading } from "../../../components/StyledHeading";
import {
  ProjectDiv,
  ProjectsWrapperDiv,
  StyledAnchor,
  StyledImg,
  Tag,
  TagsWrapper,
} from "./styled";

const projects = [
  {
    name: "2D SPACE SHOOTER",
    description:
      "Fight your way through infinite rounds and enemies in this classic style shooter.",
    website: "https://christopher-alba.github.io/galaga-clone/",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
    imgSrc: "/images/projects/galaga.png",
  },
  {
    name: "SCIENTIFIC CALCULATOR",
    description:
      "Has the basic functionalities of a calculator as well as some extra features!",
    website: "https://christopher-alba.github.io/calculator/",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
    imgSrc: "/images/projects/calculator.png",
  },
  {
    name: "PVP CHESS",
    description: "A working chess game with computer assists.",
    website: "https://christopher-alba.github.io/chess/",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
    imgSrc: "/images/projects/chess.png",
  },
  {
    name: "WHACK-A-MOLE",
    description: "Click on the moles as they appear to earn points!",
    website:
      "https://christopher-alba.github.io/javascript-carnival/whack-a-mole/whack-a-mole.html",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
    imgSrc: "/images/projects/mole.png",
  },
];

const Projects: FC = () => {
  return (
    <StyledContainer data-aos="fade-up">
      <MajorSection>
        <StyledHeading>Personal Projects</StyledHeading>
        <ProjectsWrapperDiv>
          {projects.map((project) => {
            return (
              <ProjectDiv>
                <>
                  <StyledImg src={project.imgSrc} alt={project.name} />
                  <StyledAnchor href={project.website}>Visit</StyledAnchor>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <TagsWrapper>
                    {project.tags.map((tag) => {
                      return <Tag>{tag}</Tag>;
                    })}
                  </TagsWrapper>
                </>
              </ProjectDiv>
            );
          })}
        </ProjectsWrapperDiv>
      </MajorSection>
    </StyledContainer>
  );
};

export default Projects;
