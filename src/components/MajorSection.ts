import styled from "styled-components";

export const MajorSection = styled("div")`
  background: ${({ theme }) => theme.colors.primary};
  max-width: 100%;
  min-height: 300px;
  border-radius: 10px;
  padding: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
