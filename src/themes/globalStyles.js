import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    height:200vh;
    background: ${({ theme }) => theme.colors.primary} !important;
    color: ${({ theme }) => theme.colors.secondary} !important;
    transition: all 0.50s linear;
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
