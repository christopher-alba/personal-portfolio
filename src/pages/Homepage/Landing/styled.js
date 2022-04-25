import styled from "styled-components";
export const LandingDivMain = styled("div")`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Heading = styled("h1")`
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  text-align: center;
`;
export const Img = styled("img")`
  height: 245px;
  width: 245px;
  border-radius: 50%;
`;

export const Button = styled("button")`
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
`;
