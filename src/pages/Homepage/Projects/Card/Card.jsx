import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  ButtonWrapper,
  CloseButton,
  ExternalLink,
  LearnButton,
  MainDiv,
  ModalDivMain,
  ModalStyled,
  OverlayDiv,
  Pill,
  TechWrapper,
} from "./styled";

const Card = ({ name, description, website, technologies }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <MainDiv>
      <p>{name}</p>
      <ModalStyled open={open} onClose={handleClose}>
        <ModalDivMain>
          <CloseButton onClick={handleClose}>
            <FontAwesomeIcon icon={faClose} />
          </CloseButton>
          <h1>{name}</h1>
          <p>{description}</p>
          <h3>Technologies Used</h3>
          <TechWrapper>
            {technologies.map((tech) => (
              <Pill>{tech}</Pill>
            ))}
          </TechWrapper>
        </ModalDivMain>
      </ModalStyled>
      <OverlayDiv>
        <p>{description}</p>
        <ButtonWrapper>
          <LearnButton onClick={handleOpen}>Learn More</LearnButton>
          <ExternalLink href={website} target="_blank" rel="noreferrer">
            Visit
          </ExternalLink>
        </ButtonWrapper>
      </OverlayDiv>
    </MainDiv>
  );
};

export default Card;
