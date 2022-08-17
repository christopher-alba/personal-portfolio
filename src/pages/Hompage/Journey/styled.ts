import styled from "styled-components";

export const MainDiv = styled("div")`
  padding-top: 20vh;
  min-height: 300vh;
  position: relative;
`;

export const Header = styled("h1")`
  letter-spacing: 10px;
  background: ${({ theme }) =>
    theme.name === "light"
      ? 'url("./images/landing-dark.png")'
      : 'url("./images/landing-light.png")'};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) =>
    theme.name === "light" ? "transparent" : "rgba(255,255,255,0.4)"};
`;

export const TimelineLine = styled("div")`
  height: 300vh;
  margin-top: 200px;
  width: 5px;
  background: ${({ theme }) =>
    theme.name === "light"
      ? 'url("./images/landing-dark.png")'
      : 'url("./images/landing-light.png")'};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
