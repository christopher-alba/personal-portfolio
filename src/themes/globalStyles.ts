import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    overflow-x:hidden;
    background: ${({ theme }) => theme.colors.primary} !important;
    color: ${({ theme }) => theme.colors.secondary} !important;
    transition: background-color 0.50s linear, color 0.3s linear ;
    font-family: 'Inter', sans-serif;
    margin:0;
    &::-webkit-scrollbar-track
    {
      background-color: ${({ theme }) => {
        if (theme.name === "light") {
          return "#F5F5F5";
        } else {
          return "#2e2e2e";
        }
      }};
    }

    &::-webkit-scrollbar
    {
      width: 15px;
      background-color: ${({ theme }) => {
        if (theme.name === "light") {
          return "#F5F5F5";
        } else {
          return "#2e2e2e";
        }
      }};
    }
    &::-webkit-scrollbar-thumb
      {
          background-color: ${({ theme }) => {
            if (theme.name === "light") {
              return "#d4d4d4";
            } else {
              return "black";
            }
          }};
          border: 2px solid ${({ theme }) => {
            if (theme.name === "light") {
              return "#d4d4d4";
            } else {
              return "#2e2e2e";
            }
          }};;
          border-radius:10px;
      }
  }
`;
