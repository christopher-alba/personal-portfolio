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
