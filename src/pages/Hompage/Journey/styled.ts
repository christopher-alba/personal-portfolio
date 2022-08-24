import styled from "styled-components";

export const MainDiv = styled("div")`
  padding-top: 20vh;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
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

export const Background = styled("div")`
  background: url("./images/landing-light.png");
  filter: blur(8px);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  mask-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 700px;
  @media (max-width: 1400px) {
    width: 300px;
  }
  @media (max-width: 920px) {
    width: 0;
  }
`;
