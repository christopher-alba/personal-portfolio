import styled from "styled-components";
export const StyledSpan = styled("span")`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
`;

export const GetStartedText = styled("span")`
  text-align: center;
  display: block;
  margin-top: 200px;
  margin-bottom: 200px;
  font-size: 1.5rem;
  font-weight: 900;
  font-style: italic;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const Characteristics = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

