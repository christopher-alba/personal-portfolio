import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarMainDiv = styled("div")`
  background: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 100%;
  padding: 20px 0;
`;

export const StyledLinkButton = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.secondary};
  padding: 10px 20px;
  border-radius: 5px;
  transition: 300ms;
  margin-right: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
