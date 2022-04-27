import styled from "styled-components";

export const Header = styled("h1")`
  color: white;
  font-size: 48px;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Paragraph = styled("p")`
  color: white;
  font-size: 24px;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const ProjectsWrapper = styled("div")`
  position: relative;
  top: -150px;
  width: 80%;
  margin: 0 auto;
`;

export const ProjectsDiv = styled("div")`
  background: ${({ theme }) => {
    if (theme.name === "light") {
      return "#F9F9F9";
    } else {
      return "#0f0f0f";
    }
  }};
  padding: 50px;
  border-radius: 30px;
  @media(max-width: 600px){
    padding:10px;
    border-radius:10px;
  }
`;
export const CardsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  justify-content:flex-end;
`;
