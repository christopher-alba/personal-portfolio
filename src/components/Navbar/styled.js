import styled from "styled-components";

export const NavMainDiv = styled("div")`
  background: ${({ theme }) => theme.colors.primary};
  padding-top: 20px;
  padding-bottom: 20px;
  transition: 500ms linear;
`;

export const NavBrand = styled("h1")`
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  align-items: center;
`;
export const Button = styled("button")`
  padding: 10px 30px;
  outline: none;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  border-radius: 5px;
  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
  transition: 250ms linear;
  cursor: pointer;
`;

export const CVButton = styled("button")`
  padding: 10px 30px;
  outline: none;
  background: ${({ theme }) => theme.colors.tertiary};
  border: none;
  color: white;
  font-size: 1rem;
  height: 42px;
  border-radius: 5px;
  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.tertiary2};
  }
  transition: 250ms linear;
  @media (max-width: 500px) {
    width: 100%;
  }
  cursor: pointer;
`;
export const ButtonWrapper = styled("div")`
  & ${Button} {
    margin-right: 20px;
  }
  & ${CVButton} {
    margin-right: 0px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const ListButton = styled("button")`
  display: none;
  padding: 10px 20px;
  outline: none;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  border-radius: 5px;
  @media (max-width: 500px) {
    display: block;
  }
  cursor: pointer;
  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const NavMenu = styled("div")`
  display: none;
  & ${Button} {
    margin-bottom: 10px;
  }
  & ${Button}:first-of-type {
    margin-top: 10px;
  }
  @media (max-width: 500px) {
    display: block;
  }
`;
