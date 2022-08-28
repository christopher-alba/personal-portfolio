import styled from "styled-components";
import { ReactComponent as Spaceship } from "../../svg/spaceship2.svg";

export const SpaceshipStyled = styled(Spaceship)`
  color: ${({ theme }) => theme.colors.primaryLight};
  width: 100px;
  position: absolute;
  top: 30%;
  left: -50px;
  height: auto;
  filter: drop-shadow(0 5px 0 ${({ theme }) => theme.colors.tertiary})
    drop-shadow(0 5px 0 ${({ theme }) => theme.colors.secondary});
  @media (max-width: 700px) {
    position: relative;
    left: initial;
    margin: 0 auto;
  }
`;
export const SVGWrapper = styled("div")`
  @media (max-width: 700px) {
    position: relative;
    margin: 10px auto;
    width: fit-content;
  }
`;
export const TimelineMain = styled("div")`
  position: relative;
  width: fit-content;
  margin: 0 auto;
`;
export const TimelineLine = styled("div")`
  min-height: 100vh;
  margin-top: 100px;
  width: 100%;
`;

export const TimelineItem = styled("div")`
  margin-left: 150px;
  width: 500px;
  @media (max-width: 650px) {
    width: initial;
    left: 0;
    right: 0;
    box-sizing: border-box;
  }
  padding: 10px;
  padding-bottom: 100px;
  position: relative;
  @media (max-width: 700px) {
    margin-left: 30px;
  }
  &:first-of-type {
    &::after {
      background: ${({ theme }) => theme.colors.tertiary} !important;
    }
  }
`;
