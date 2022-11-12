import styled from "styled-components";

export const StyledHeading = styled("h1")`
  background: linear-gradient(
    360deg,
    ${({ theme }) => theme.colors.tertiary} -29.22%,
    ${({ theme }) => theme.colors.tertiary2} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 2.5rem;
  font-weight: 800;
`;
