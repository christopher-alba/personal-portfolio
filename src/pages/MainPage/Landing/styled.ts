import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const viewportSize = 800;
export const MainDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: url("/images/skyline.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const OverlayDiv = styled("div")`
  background: linear-gradient(
    180deg,
    #8f00ff 0%,
    rgba(99, 28, 255, 0.92) 14.58%,
    rgba(0, 133, 255, 0.7) 54.69%,
    rgba(255, 255, 255, 0) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
export const TextDiv = styled("div")`
  margin: 50px;
  text-align: center;
`;
export const HeroText = styled("h1")`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Bree Serif", serif;
  letter-spacing: 5px;
  @media (max-width: ${viewportSize}px) {
    font-size: 3rem;
    margin-bottom:20px;
  }
`;

export const SubHeroText = styled("h2")`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 0;
  margin-bottom: 20px;
  font-family: "Bree Serif", serif;
  letter-spacing: 3px;
  @media (max-width: ${viewportSize}px) {
    font-size: 1.5rem;
  }
`;

export const InfoText = styled("p")`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 200;
  @media (max-width: ${viewportSize}px) {
    font-size: 1rem;
    margin-bottom:15px;
  }
`;

export const SpanStyled = styled("span")`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: underline;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const KeyboardArrowDownIconStyled = styled(KeyboardArrowDownIcon)`
  font-size: 5rem !important;
  width: 5rem !important;
  height: 5rem !important;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 20px;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
