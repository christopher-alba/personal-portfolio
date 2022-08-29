import { Link } from "react-router-dom";
import styled from "styled-components";
export const NavbarMainDiv = styled("div")`
  background: ${({ theme }) =>
    theme.name === "light" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)"};
  width: 100%;
  z-index: 1000;
  position: relative;
  top: 0;
  backdrop-filter: blur(8px);
`;

export const NavbarInnerDiv = styled("div")`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
`;

export const LinksDiv = styled("div")`
  position: relative;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LinkButton = styled(Link)`
  margin: 0 10px !important;
  border-radius: 0 !important;
  color: ${({ theme }) => theme.colors.secondary} !important;
  text-decoration: none;
`;

export const ButtonsDiv = styled("div")`
  margin-right: 50px;
  display: flex;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const ThemeButton = styled("button")`
  margin-right: 10px !important;
  background: ${({ theme }) => theme.colors.secondary} !important;
  color: ${({ theme }) => theme.colors.primary} !important;
  width: 120px;
  padding: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
  border: none;
`;
export const CVButton = styled(Link)`
  background: ${({ theme }) => theme.colors.tertiary} !important;
  color: ${({ theme }) => theme.colors.primary} !important;
  width: 100px;
  padding: 10px;
  height: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: 3px;
  justify-content: center;
`;

export const UnderlineDiv = styled("div")`
  width: 100%;
  height: 5px;
`;

export const StyledRule = styled("div")`
  width: 0;
  left: 0;
  transition: 500;
  height: 3px;
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
`;

export const BrandWrapper = styled("div")`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 10px 50px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const BarsButton = styled("button")`
  margin-right: 10px;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const MenuDiv = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background: ${({ theme }) => theme.colors.primaryLight};
  & > * {
    margin-top: 10px !important;
    margin-left: 0 !important;
  }
`;
