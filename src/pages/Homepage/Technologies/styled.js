import styled from "styled-components";
import { ReactComponent as Skyline } from "../../../svg/skyline.svg";

export const MainDiv = styled("div")`
  position: relative;
  min-height: 60vh;
`;

export const Header = styled("h1")`
  font-size: 48px;
  text-transform: uppercase;
`;

export const SVG = styled(Skyline)`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.tertiary};
  position: absolute;
  bottom: 0px;
  z-index: -1;
`;