import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.primary} !important;
    color: ${({ theme }) => theme.colors.secondary} !important;
    transition: background-color 0.50s linear, color 0.3s linear ;
    font-family: 'Inter', sans-serif;
    margin:0;
    overflow-y: scroll;
    &::-webkit-scrollbar-track
    {
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar
    {
      width: 10px;
      background-color: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb
      {
          background-color: #d4d4d4;
          border: 1px solid white;
          border-radius:10px;
      }
  }
`;
