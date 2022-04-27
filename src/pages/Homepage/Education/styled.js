import styled from "styled-components";
import { ReactComponent as SVG } from "../../../svg/windmills.svg";

export const MainDiv = styled("div")`
  position: relative;
  min-height: 70vh;
  padding-bottom: 100px;
`;

export const WindmillsSVG = styled(SVG)`
  width: 80%;
  height: auto;
  color: ${({ theme }) => theme.colors.tertiary};
  position: absolute;
  bottom: 0;
  right: 0px;
  z-index: -1;
`;

export const Img = styled("img")`
  height: 200px;
  width: auto;
  margin-right: 20px;
  border-radius: 10px;
  @media (max-width: 800px) {
    width: 200px;
    margin-bottom:50px;
  }
`;

export const ContentDiv = styled("div")`
  display: flex;
  position: relative;
  height: fit-content;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContentRight = styled("div")``;

export const Text = styled("p")`
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 5px;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Header = styled("h1")`
  font-size: 48px;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Anchor = styled("a")`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 5px 30px;
  font-size: 0.8rem;
  display: inline-block;
  text-decoration: none;
  border-radius: 5px;
  transition: 500ms linear;
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
