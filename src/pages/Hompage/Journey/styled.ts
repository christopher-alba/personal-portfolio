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
  background: ${({ theme }) =>
    theme.name === "light"
      ? `url("./images/landing-light.png")`
      : `url("./images/landing-dark.png")`};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  mask-image: url("./images/skytower.svg");
  position: absolute;
  right: 100px;
  top: 100px;
  bottom: 0;
  width: 750px;
  @media (max-width: 1400px) {
    right: -300px;
  }
  @media (max-width: 920px) {
    width: 0;
  }
`;
