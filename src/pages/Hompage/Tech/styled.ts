import styled from "styled-components";

export const MainDiv = styled("div")`
  background: ${({ theme }) =>
    theme.name === "light"
      ? 'url("./images/landing-light.png")'
      : 'url("./images/landing-dark.png")'};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const Header = styled("h1")`
  letter-spacing: 10px;
  margin-top: 0;
  margin-bottom: 0;
  background: url("./images/landing-light.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) =>
    theme.name === "light" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)"};
`;

export const HeaderWrapper = styled("div")`
  padding: 20px;
  width: fit-content;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 2px 2px 10px ${({ theme }) => theme.colors.dropShadow};
`;

export const TableMainDiv = styled("div")`
  margin-top: 3px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 2px 2px 10px ${({ theme }) => theme.colors.dropShadow};
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TableColumn = styled("div")`
  flex-grow: 1;
  position: relative;
  &::after {
    @media (max-width: 800px) {
      bottom: 0;
      top: initial;
      width: 100%;
      height: 3px;
    }
    content: "";
    position: absolute;
    width: 3px;
    top: 0;
    bottom: 0;
    right: 0;
    background: url("./images/landing-light.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: -3px;
  }
  &:last-of-type {
    &::after {
      width: 0;
    }
  }
  text-align: center;
`;
export const ColumnHeader = styled("h3")`
  margin-bottom: 50px;
  background: url("./images/landing-light.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) =>
    theme.name === "light" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)"};
`;

export const ColumnText = styled("p")`
  background: url("./images/landing-light.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) =>
    theme.name === "light" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)"};
`;

export const TechBottomDivWrapper = styled("div")`
  background: ${({ theme }) =>
    theme.name === "light"
      ? 'url("./images/landing-dark.png")'
      : 'url("./images/landing-light.png")'};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top: 2px solid ${({ theme }) => theme.colors.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 0px 20px 5px ${({ theme }) => theme.colors.secondary};
`;

export const TechBottomDiv = styled("div")`
  padding: 20px;
  color: white;
  padding: 50px 0;
  backdrop-filter: blur(8px);
`;

interface H1Props {
  fontWeight: number;
}
export const H1Styled = styled("h1")<H1Props>`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 0;
  text-shadow: 2px 2px 20px ${({ theme }) => theme.colors.primary};
`;
