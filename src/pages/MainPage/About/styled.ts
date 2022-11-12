import { Container } from "@mui/material";
import styled from "styled-components";

export const MainDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
`;

export const StyledContainer = styled(Container)`
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 900px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const StyledHeading = styled("h1")`
  background: linear-gradient(
    360deg,
    ${({ theme }) => theme.colors.tertiary} -29.22%,
    ${({ theme }) => theme.colors.tertiary2} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 2.5rem;
  font-weight: 800;
`;

export const ProfileDiv = styled("div")`
  background: ${({ theme }) => theme.colors.primary};
  max-width: 100%;
  min-height: 300px;
  border-radius: 10px;
  padding: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const ProfileTopDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const ProfileDesc = styled("p")``;
export const ProfileDescDiv = styled("div")`
  padding-left: 50px;
  @media (max-width: 900px) {
    text-align: center;
    padding-left: 0;
  }
`;
export const ProfilePicture = styled("img")`
  height: 200px;
  width: 200px;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

export const SocialLinksDiv = styled("div")`
  background: ${({ theme }) => {
    if (theme.name === "light") {
      return "#fafafa";
    } else {
      return "#2b2b2b";
    }
  }};
  max-width: 100%;
  min-height: 50px;
  margin-top: 15px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledAnchor = styled("a")`
  margin: 20px;
  font-size: 1.2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.tertiary};
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary2};
  }
`;

export const ContactDiv = styled("div")`
  background: ${({ theme }) => {
    if (theme.name === "light") {
      return "#fafafa";
    } else {
      return "#2b2b2b";
    }
  }};
  max-width: 100%;
  min-height: 50px;
  margin-top: 50px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
