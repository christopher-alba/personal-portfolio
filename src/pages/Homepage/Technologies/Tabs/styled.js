import styled from "styled-components";

export const MainDiv = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 150px;
  @media(max-width:600px){
    flex-direction:column;
  }
`;

export const TabButton = styled("button")`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: underline;
  color: ${({theme}) => theme.colors.secondary};
  &.active {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.tertiary};
  }
  @media(max-width:600px){
    font-size:1rem;
  }
`;
