import styled from "styled-components";

export const BacktoTopButton = styled("button")`
  position: fixed;
  display: none;
  right: 50px;
  bottom: 50px;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.tertiary};
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  font-size:1.5rem;
  border-radius:50%;
  &:hover{
    background: ${({ theme }) => theme.colors.tertiary2};
  }
`;
