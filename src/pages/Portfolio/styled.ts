import styled from "styled-components";

export const BackToTop = styled("button")`
  position: fixed;
  bottom: 50px;
  right: 50px;
  background: ${({ theme }) => theme.colors.tertiary};
  font-size: 1.5rem;
  height: 50px;
  width: 50px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  z-index: 1000;
  cursor: pointer;
`;
