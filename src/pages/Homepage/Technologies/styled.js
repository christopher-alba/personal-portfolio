import styled from "styled-components";
import { ReactComponent as Skyline } from "../../../svg/skyline.svg";

export const MainDiv = styled("div")`
  position: relative;
  min-height: 80vh;
  @media (max-width: 600px) {
    min-height: 62vh;
  }
`;

export const Header = styled("h1")`
  font-size: 48px;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const SVG = styled(Skyline)`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.tertiary};
  position: absolute;
  bottom: 0px;
  z-index: -1;
`;
export const Pill = styled("div")`
  padding: 3px 10px;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary};
  height: fit-content;
  border-radius:5px;
`;

export const PillText = styled("p")`
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const PillsWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 300px;
  & ${Pill} {
    margin: 5px;
  }
`;
