import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Container from "../../../components/JCUX/Container";
import { Header, MainDiv, SVG } from "./styled";
import Tabs from "./Tabs";

const Technologies = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <MainDiv>
      <Container display="flex" flexDirection="column" alignItems="flex-end">
        <Header>
          <FontAwesomeIcon icon={faCode} /> TECHNOLOGIES
        </Header>
        <Tabs>
          <div className="Tab 1">
            <h1>Some Tab 1</h1>
          </div>
        </Tabs>
      </Container>
      <SVG />
    </MainDiv>
  );
};

export default Technologies;
