import React from "react";
import Container from "../../../components/JCUX/Container";
import HeroDiv from "../../../components/JCUX/HeroDiv";
import Tabs from "./Tabs";
import {
  CardsWrapper,
  Header,
  Paragraph,
  ProjectsDiv,
  ProjectsWrapper,
} from "./styled";
import Card from "./Card";

const react = [
  {
    name: "FINANCIAL MANAGER",
    description:
      "Manage your finances by tracking expenses, incomes, and goals. Login using username: username | password: password",
    website: "https://betterfinance.netlify.app/",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Node.js",
      "Express.js",
      "Graphql",
      "Apollo Server",
      "Apollo Client",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    name: "ECOMMERCE JANZART",
    description: "A for-show-only e-commerce website.",
    website: "https://janzart.herokuapp.com/#/",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Node.js",
      "Express.js",
      "Superagent",
      "REST API",
      "Knex.js",
    ],
  },
  {
    name: "ECOMMERCEV5",
    description:
      "A for-show-only e-commerce website. Login using username: admin | password: admin",
    website: "https://ecommercev5.netlify.app/",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Node.js",
      "Express.js",
      "Graphql",
      "Apollo Server",
      "Apollo Client",
      "MongoDB",
      "Mongoose",
    ],
  },
];

const vanilla = [
  {
    name: "2D SPACE SHOOTER",
    description:
      "Fight your way through infinite rounds and enemies in this classic style shooter.",
    website: "https://christopher-alba.github.io/galaga-clone/",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
  },
  {
    name: "SCIENTIFIC CALCULATOR",
    description:
      "Has the basic functionalities of a calculator as well as some extra features!",
    website: "https://christopher-alba.github.io/calculator/",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
  },
  {
    name: "PVP CHESS",
    description: "A working chess game with computer assists.",
    website: "https://christopher-alba.github.io/chess/",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
  },
  {
    name: "WHACK-A-MOLE",
    description: "Click on the moles as they appear to earn points!",
    website:
      "https://christopher-alba.github.io/javascript-carnival/whack-a-mole/whack-a-mole.html",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
  },
];

const Projects = () => {
  return (
    <>
      <HeroDiv>
        <Container>
          <Header>Personal Projects</Header>
          <Paragraph>
            To keep myself up to date with latest technologies and to hone my
            web development skills, I build my own projects. These projects
            range from vanilla javascript web applications to full-stack web
            applications.
          </Paragraph>
        </Container>
      </HeroDiv>
      <ProjectsWrapper>
        <ProjectsDiv>
          <Tabs>
            <CardsWrapper className="react">
              {react.map((project) => (
                <Card
                  name={project.name}
                  description={project.description}
                  website={project.website}
                  technologies={project.tags}
                />
              ))}
            </CardsWrapper>
            <CardsWrapper className="javascript">
              {vanilla.map((project) => (
                <Card
                  name={project.name}
                  description={project.description}
                  website={project.website}
                  technologies={project.tags}
                />
              ))}
            </CardsWrapper>
          </Tabs>
        </ProjectsDiv>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
