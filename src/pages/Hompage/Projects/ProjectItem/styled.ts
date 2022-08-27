import styled from "styled-components";

export const ProjectDiv = styled("div")`
  width: 300px;
  margin-right: 20px;
  margin-top: 20px;
  flex-grow: 1;
  height: fit-content;
`;
export const ImageWrapper = styled("div")`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  height: 200px;
`;

export const ProjectImg = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Header = styled("h3")`
  margin-top: 10px;
  margin-bottom: 0;
`;
