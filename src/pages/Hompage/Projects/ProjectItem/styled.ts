import styled from "styled-components";

export const ProjectDiv = styled("div")`
  width: 300px;
  margin-right:10px;
  flex-grow:1;
  height: fit-content;
`;
export const ImageWrapper = styled("div")`
  background: url("./images/landing-light.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;
  height: 200px;
`;

export const ProjectImg = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Header = styled("h3")`
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