import styled from "styled-components";

export const MainDiv = styled("div")`
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.tertiary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Header = styled("h1")`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled("p")`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Anchor = styled("a")`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const IconLink = styled("a")`
  font-size: 3rem !important;
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
  .css-i4bv87-MuiSvgIcon-root {
    font-size: 3rem;
    margin-top: 20px;
  }
  margin-right: 20px;
`;

export const AnchorWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const HR = styled("hr")`
  border-color: ${({ theme }) => theme.colors.primary};
`;
