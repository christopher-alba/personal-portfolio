import styled from "styled-components";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Link } from "react-router-dom";

export const MainDiv = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.tertiary};
`;

export const Header = styled("h1")`
  text-transform: uppercase;
  letter-spacing: 5px;
  color: white;
  font-weight: 900;
  font-size: 48px;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
export const Text = styled("p")`
  font-size: 24px;
  color: white;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const Button = styled(Link)`
  padding: 10px 30px;
  margin-top: 50px;
  outline: none;
  background: ${({ theme }) => theme.colors.secondary};
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  height: 42px;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 5px;
  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryHover};
  }
  transition: 250ms linear;
  @media (max-width: 600px) {
    width: 100%;
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Icon = styled(SentimentVeryDissatisfiedIcon)`
  .css-i4bv87-MuiSvgIcon-root {
    font-size: 3rem;
  }
`;
