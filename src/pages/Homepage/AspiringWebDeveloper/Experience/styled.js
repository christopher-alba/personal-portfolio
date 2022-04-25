import styled from "styled-components";

export const MainDiv = styled("div")`
  background: ${({ theme }) => {
    if (theme.name === "light") {
      return "#F9F9F9";
    } else {
      return "#0f0f0f";
    }
  }};
  margin-bottom: 50px;
  border-radius: 30px;
  padding: 50px;
  @media (max-width: 600px) {
    padding: 20px;
  }
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const Header = styled("h1")`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 48px;
  text-transform: uppercase;
  margin-bottom: 0;
  margin-top: 0;
`;

export const Paragraph = styled("p")`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 24px;
  margin-top: 0;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Toggle = styled("button")`
  padding: 5px 30px;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 5px;
  background: transparent;
  color: ${({ theme }) => theme.colors.tertiary};
  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.primary};
  }
  cursor: pointer;
  transition: 250ms linear;
  width: fit-content;
`;

export const Anchor = styled("a")`
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const SubHeader = styled("h2")`
  font-size: 35px;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 0;
`;
export const DateHeader = styled("h3")`
  font-size: 25px;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 0;
`;
export const Logo = styled("img")`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 140px;
  border-bottom-left-radius: 30px;
  width: 140px;
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const LogoHeaderWrapper = styled("div")`
  display: flex;
  align-items: center;
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: initial !important;
  }
`;

export const LogoBlock = styled("img")`
  @media (min-width: 1300px) {
    display: none;
  }
  width: 60px;
  height: 60px;
  margin-right: 20px;
  display: inline;
  border-radius: 30px;
  @media (max-width: 400px) {
    width: 100%;
    height: auto;
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;
