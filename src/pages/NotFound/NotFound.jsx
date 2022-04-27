import React from "react";
import { MainDiv, Header, Text, Button, Icon } from "./styled";
const NotFound = () => {
  return (
    <MainDiv>
      <Header>
        Page not found <Icon fontSize="large" />
      </Header>
      <Text>This website only has one single page in the "/" route.</Text>
      <Button to="/">Return Home</Button>
    </MainDiv>
  );
};

export default NotFound;
