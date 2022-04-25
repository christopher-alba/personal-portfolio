import styled from "styled-components";

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

export const Paragraph = styled("p")`
  font-size: 24px;
  color: white;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const ExperienceWrapper = styled("div")`
  position: relative;
  top: -150px;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 98%;
  }
`;
