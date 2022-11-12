import { Container } from "@mui/system";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 900px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
