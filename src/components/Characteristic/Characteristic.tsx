import React, { FC } from "react";
import { CharacteristicDiv, Heading, SpaceshipStyled } from "./styled";

const Characteristic: FC<{
  title: string;
  text: string;
}> = ({ title, text }) => {
  return (
    <CharacteristicDiv>
      <SpaceshipStyled />
      <Heading>{title}</Heading>
      <p>{text}</p>
    </CharacteristicDiv>
  );
};

export default Characteristic;
