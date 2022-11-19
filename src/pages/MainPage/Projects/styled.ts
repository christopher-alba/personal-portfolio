import styled from "styled-components";

export const ProjectsWrapperDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const ProjectDiv = styled("div")`
  width: 300px;
  flex-grow: 1;
  margin: 30px;
`;

export const StyledImg = styled("img")`
  width: 100%;
  height: auto;
`;

export const StyledAnchor = styled("a")`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  text-decoration: none;
  max-width: 100%;
  padding: 10px;
  display: block;
`;

export const TagsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled("div")`
  background: ${({ theme }) => theme.colors.tertiary};
  padding: 5px 20px;
  margin: 5px;
  color: white;
  border-radius: 5px;
`;
