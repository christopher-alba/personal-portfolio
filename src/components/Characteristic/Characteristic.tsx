import React, { FC } from "react";
import { CharacteristicDiv, Heading, SpaceshipStyled } from "./styled";

const Characteristic: FC<{
  title: string;
  text: string;
  dataAos: string;
}> = ({ title, text, dataAos }) => {
  return (
    <CharacteristicDiv data-aos={dataAos} data-aos-duration="2000">
      <SpaceshipStyled />
      <Heading>{title}</Heading>
      <p >
        {text}
      </p>
    </CharacteristicDiv>
  );
};

export default Characteristic;
