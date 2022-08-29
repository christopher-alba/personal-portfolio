import { Container } from "@mui/material";
import React, { FC, useContext } from "react";
import { ThemeContext } from "styled-components";
import Technology from "../../svg/Technology";
import {
  ColumnHeader,
  ColumnText,
  MainDiv,
  TableColumn,
  TableMainDiv,
} from "./styled";

const Tech: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="tech">
      <MainDiv>
        <Container>
          <Technology
            dataAos="fade-left"
            color1={theme.colors.tertiary}
            color2={theme.colors.primaryLight}
            color3={theme.colors.secondary}
            color4={theme.colors.tertiary2}
            color5={theme.colors.tertiary3}
            color6={theme.colors.tertiary4}
            color7={theme.colors.tertiary5}
            style={{
              marginTop: "50px",
              marginBottom: "100px",
            }}
          />
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
              <ColumnText>Postman</ColumnText>
              <ColumnText>AdobeXD </ColumnText>
              <ColumnText>Figma </ColumnText>
              <ColumnText>VSCode </ColumnText>
              <ColumnText>IntellijIDEA </ColumnText>
            </TableColumn>
          </TableMainDiv>
        </Container>
      </MainDiv>
    </div>
  );
};

export default Tech;
