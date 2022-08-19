import styled from "styled-components";

export const MainDiv = styled("div")`
  min-height: 100vh;
  padding-top: 100px;
`;
export const Header = styled("h1")`
  letter-spacing: 10px;
  margin-top: 0;
  margin-bottom: 0;
  background: url("./images/landing-light.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) =>
    theme.name === "light" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)"};
`;

export const ProjectsDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const ProjectDiv = styled("div")`
  width: 300px;
  height: 200px;
  flex-grow: 0.2;
  padding: 10px;
  margin:10px;
  background: url("./images/landing-light.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProjectImg = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
