import styled from "styled-components";

export const MainDiv = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const TabButton = styled("button")`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  border-bottom: 2px solid black;
  width: 100%;
  font-size: 24px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  &.active {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.tertiary};
    border-color: ${({ theme }) => theme.colors.tertiary};
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  text-align: left;
`;

export const ChildrenWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
  width: fit-content;
`;

export const TabButtonsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  @media (max-width: 850px) {
    width: 100%;
  }
  padding-right: 20px;
`;
