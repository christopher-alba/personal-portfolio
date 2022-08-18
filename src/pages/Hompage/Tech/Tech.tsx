import { Container } from "@mui/material";
import React, { FC } from "react";
import {
  ColumnHeader,
  ColumnText,
  Header,
  HeaderWrapper,
  MainDiv,
  TableColumn,
  TableMainDiv,
} from "./styled";

const Tech: FC = () => {
  return (
    <MainDiv className="tech">
      <Container>
        <HeaderWrapper>
          <Header>{`</> Technology`}</Header>
        </HeaderWrapper>
        <TableMainDiv>
          <TableColumn>
            <ColumnHeader>Web</ColumnHeader>
            <ColumnText>HTML</ColumnText>
            <ColumnText>CSS</ColumnText>
            <ColumnText>Javascript</ColumnText>
            <ColumnText>React</ColumnText>
            <ColumnText>GraphQL</ColumnText>
            <ColumnText>Apollo</ColumnText>
            <ColumnText>Node.js</ColumnText>
            <ColumnText>Express.js</ColumnText>
            <ColumnText>C#</ColumnText>
            <ColumnText>Blazor</ColumnText>
            <ColumnText>.NET</ColumnText>
          </TableColumn>
          <TableColumn>
            <ColumnHeader>Others</ColumnHeader>
            <ColumnText>C</ColumnText>
            <ColumnText>C++</ColumnText>
            <ColumnText>Java</ColumnText>
            <ColumnText>Python</ColumnText>
            <ColumnText>R</ColumnText>
            <ColumnText>Matlab</ColumnText>
            <ColumnText>Microcontrollers</ColumnText>
          </TableColumn>
          <TableColumn>
            <ColumnHeader>Databases</ColumnHeader>
            <ColumnText>MongoDB</ColumnText>
            <ColumnText>Knex.js</ColumnText>
          </TableColumn>
          <TableColumn>
            <ColumnHeader>Devtools</ColumnHeader>
            <ColumnText>Github </ColumnText>
            <ColumnText>Git</ColumnText>
            <ColumnText>NPMPostman</ColumnText>
            <ColumnText>AdobeXD </ColumnText>
            <ColumnText>Figma </ColumnText>
            <ColumnText>VSCode </ColumnText>
            <ColumnText>IntellijIDEA </ColumnText>
          </TableColumn>
        </TableMainDiv>
      </Container>
    </MainDiv>
  );
};

export default Tech;
