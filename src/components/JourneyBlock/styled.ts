import styled from "styled-components";

export const MainDiv = styled("div")`
  display: flex;
  margin: 50px 0;
`;
export const InfoDiv = styled("div")`
  padding: 0 50px;
`;
export const CompanyLogo = styled("img")`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  height:200px;
  width:200px;
`;
export const CompanyName = styled("h2")`
    margin-top:0;
`;
export const TechnologyBlock = styled("span")`
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.tertiary};
  color: white;
  margin: 5px;
  border-radius: 5px;
`;
