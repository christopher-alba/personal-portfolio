import styled from "styled-components";

export const TimelineMain = styled("div")`
  position: relative;
`;
export const TimelineLine = styled("div")`
  min-height: 100vh;
  margin-top: 100px;
  width: 100%;
  &::after {
    content: "";
    position: absolute;
    width: 6px;
    min-height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    background: url("./images/landing-light.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: -3px;
  }
`;
interface TimelineItemProps {
  randomNumberRight: number;
  randomNumberTop: number;
  randomNumberHeight: number;
  randomNumberWidth: number;
  randomNumberRight2: number;
  randomNumberTop2: number;
  randomNumberHeight2: number;
  randomNumberWidth2: number;
}
export const TimelineItem = styled("div")<TimelineItemProps>`
  margin-left: 50px;
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
  & div::after {
    content: "";
    position: absolute;
    mask-image: linear-gradient(black, transparent);
    mask-mode: alpha;
    width: ${({ randomNumberWidth2 }) => randomNumberWidth2}px;
    height: ${({ randomNumberHeight2 }) => randomNumberHeight2}px;
    top: ${({ randomNumberTop2 }) => randomNumberTop2}px;
    right: ${({ randomNumberRight2 }) => randomNumberRight2}px;
    background: url("./images/landing-light.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    border-radius: 0 100%;
    animation: falling 20s forwards;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    @keyframes falling {
      0% {
        top: -200vh;
        rotate(0deg);
      }
      100% {
        top: 220vh;
        rotate(180deg);
      }
    }
    @media (max-width: 650px) {
      display: none;
    }
  }
  &::before {
    content: "";
    position: absolute;
    mask-image: linear-gradient(black, transparent);
    mask-mode: alpha;
    width: ${({ randomNumberWidth }) => randomNumberWidth}px;
    height: ${({ randomNumberHeight }) => randomNumberHeight}px;
    top: -200vh;
    right: ${({ randomNumberRight }) => randomNumberRight}px;
    background: url("./images/landing-light.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    border-radius: 0 100%;
    @media (max-width: 650px) {
      display: none;
    }
    animation: falling 20s forwards;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: 10s;
    @keyframes falling {
      0% {
        top: -200vh;
      }
      100% {
        top: 220vh;
      }
    }
    @media (max-width: 650px) {
      display: none;
    }
  }
  &::after {
    content: "";
    position: absolute;
    width: 35px;
    height: 35px;
    top: 0px;
    left: -68px;
    background: url("./images/landing-light.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    z-index: 1;
  }
  &:first-of-type {
    &::after {
      background: #ff9f55 !important;
    }
  }
  @media (max-width: );
`;
