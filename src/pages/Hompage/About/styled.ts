import { Button } from "@mui/material";
import styled from "styled-components";

export const LandingDivMain = styled("div")`
  background: ${({ theme }) =>
    theme.name === "light"
      ? 'url("./images/landing-light.png")'
      : 'url("./images/landing-dark.png")'};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: 100vh;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const AboutDiv = styled("div")`
  width: 350px;
  @media (max-width: 600px) {
    width: 200px;
  }
  background: ${({ theme }) =>
    theme.name === "light"
      ? 'url("./images/landing-dark.png")'
      : 'url("./images/landing-light.png")'};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  color: ${({ theme }) => theme.colors.primary};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) =>
    theme.name === "light" ? "transparent" : "rgba(255,255,255,0.4)"};
`;

export const AboutDivWrapper = styled("div")`
  background: ${({ theme }) => theme.colors.primary};
`;

export const LearnMoreButton = styled(Button)`
  margin-top: 20px !important;
  width: 100% !important;
  background: ${({ theme }) => theme.colors.primary} !important;
  color: ${({ theme }) => theme.colors.secondary} !important;
`;

export const AboutBottomDivWrapper = styled("div")`
  background: ${({ theme }) =>
    theme.name === "light"
      ? 'url("./images/landing-dark.png")'
      : 'url("./images/landing-light.png")'};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top: 2px solid ${({ theme }) => theme.colors.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
`;

export const AboutBottomDiv = styled("div")`
  padding: 20px;
  color: white;
  padding: 50px 0;
`;
interface H1Props {
  fontWeight: number;
}
export const H1Styled = styled("h1")<H1Props>`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 0;
  text-shadow: 2px 2px 20px ${({ theme }) => theme.colors.primary};
`;
