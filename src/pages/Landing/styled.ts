import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainDiv = styled("div")`
  background: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const ContentDiv = styled("div")`
  padding: 100px;
  width: fit-content;
`;

interface H1Props {
  fontWeight: number;
}
export const H1Styled = styled("h1")<H1Props>`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 0;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  background: black;
  display: block;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  box-shadow: 10px 10px 0 0 ${({ theme }) => theme.colors.tertiary};
  color: white;
  text-transform: uppercase;
  margin-top:20px;
`;
