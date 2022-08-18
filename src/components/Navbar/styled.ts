import { Button } from "@mui/material";
import styled from "styled-components";
export const NavbarMainDiv = styled("div")`
  background: ${({ theme }) =>
    theme.name === "light" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)"};
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 1000;
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
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const LinkButton = styled(Button)`
  margin: 0 10px !important;
  border-radius: 0 !important;
  color: ${({ theme }) => theme.colors.secondary} !important;
`;

export const ButtonsDiv = styled("div")``;

export const ThemeButton = styled(Button)`
  margin-right: 10px !important;
  background: transparent !important;
  color: ${({ theme }) => theme.colors.secondary} !important;
`;
export const CVButton = styled(Button)`
  background: ${({ theme }) => theme.colors.secondary} !important;
  color: ${({ theme }) => theme.colors.primary} !important;
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
