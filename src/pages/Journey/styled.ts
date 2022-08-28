import styled from "styled-components";
export const DateP = styled("p")`
  margin-top: 0;
  margin-bottom: 0;
`;

export const CompanyH1 = styled("h1")`
  margin-top: 50px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.tertiary};
  @media (max-width: 700px) {
    margin-top: 0;
  }
`;

export const H5Styled = styled("h5")`
  margin-top: 0;
  margin-bottom: 0;
`;
