import styled from "styled-components";

export const MainDiv = styled("div")`
  padding-bottom: 100px;
`;

export const TableMainDiv = styled("div")`
  margin-top: 3px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.tertiary};
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TableColumn = styled("div")`
  flex-grow: 1;
  position: relative;
  &::after {
    @media (max-width: 800px) {
      bottom: 0;
      top: initial;
      width: 100%;
      height: 3px;
    }
    content: "";
    position: absolute;
    width: 3px;
    top: 0;
    bottom: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.tertiary};
    margin-left: -3px;
  }
  &:last-of-type {
    &::after {
      width: 0;
    }
  }
  text-align: center;
`;
export const ColumnHeader = styled("h3")`
  margin-bottom: 50px;
`;

export const ColumnText = styled("p")``;
