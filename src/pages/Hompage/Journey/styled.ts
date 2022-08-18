import styled from "styled-components";

export const MainDiv = styled("div")`
  padding-top: 20vh;
  min-height: 100vh;
  position: relative;
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

export const DateP = styled("p")`
  margin-top: 0;
  margin-bottom: 0;
`;

export const CompanyH1 = styled("h1")`
  margin-top: 50px;
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

export const H5Styled = styled("h5")`
  margin-top: 0;
  margin-bottom: 0;
`;
