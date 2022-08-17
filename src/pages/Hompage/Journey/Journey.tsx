import { Container } from "@mui/material";
import React, { FC, useContext } from "react";
import { ThemeContext } from "styled-components";
import Skyline from "../../../svg/Skyline";
import { Header, MainDiv, TimelineLine } from "./styled";

const Journey: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <MainDiv className="journey">
      <Container>
        <Header>My Journey in Software</Header>
        <TimelineLine></TimelineLine>
      </Container>
      <Skyline
        primary={theme.colors.secondary}
        secondary={theme.colors.tertiary}
        stopColor={theme.colors.tertiary2}
        stopColor2={theme.colors.primary}
      />
    </MainDiv>
  );
};

export default Journey;
