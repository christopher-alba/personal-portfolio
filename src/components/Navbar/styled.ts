import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarMainDiv = styled("div")`
  width: 100%;
  padding: 50px 0;
`;

export const StyledContainer = styled(Container)``;
export const NavbarInner = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const StyledLinkButton = styled(Link)`
  color: white;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.tertiary2};
  padding: 10px 20px;
  border-radius: 5px;
  transition: 300ms;
  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.colors.tertiary};
  }
`;

export const StyledButton = styled("button")`
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  border-radius: 5px;
  transition: 300ms;
  margin-right: 10px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
