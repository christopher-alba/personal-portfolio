import styled from "styled-components";
import { IconButton, Modal } from "@mui/material";

export const MainDiv = styled("div")`
  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 30px;
  height: 150px;
  width: 250px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: 15px;
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
  @media (max-width: 850px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const OverlayDiv = styled("div")`
  opacity: 0;
  transition: 300ms linear;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    opacity: 1;
  }
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 50px;
  padding-right: 50px;
  @media (max-width: 600px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

export const LearnButton = styled("button")`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 5px 20px;
  height: 100%;
  font-size: 0.8rem;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ExternalLink = styled("a")`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 5px 30px;
  font-size: 0.8rem;
  display: inline-block;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ModalDivMain = styled("div")`
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary};
  height: 400px;
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  position: relative;
  @media (max-width: 400px) {
    width: 100%;
    padding: 10px;
    height: fit-content;
  }
`;

export const ModalStyled = styled(Modal)`
  .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop {
    background-color: ${({ theme }) => {
      if (theme.name === "light") {
        return "rgba(255,255,255,0.7)";
      } else {
        return "rgba(0,0,0,0.7)";
      }
    }};
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TechWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const Pill = styled("div")`
  padding: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const CloseButton = styled(IconButton)`
  && {
    position: absolute;
    top: 0px;
    right: 0px;
    color: ${({ theme }) => theme.colors.primary};
    margin: 10px;
  }
`;
