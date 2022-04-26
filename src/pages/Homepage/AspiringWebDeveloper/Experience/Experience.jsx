import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Anchor,
  DateHeader,
  Header,
  LogoBlock,
  LogoHeaderWrapper,
  MainDiv,
  Paragraph,
  SubHeader,
  Toggle,
} from "./styled";
const Experience = ({
  company,
  description,
  role,
  hours,
  website,
  logo,
  dates,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const handleToggle = () => {
    setShowDescription(!showDescription);
  };
  return (
    <MainDiv key={company}>
      <LogoHeaderWrapper style={{ display: "flex", alignItems: "center" }}>
        <Header>{company}</Header>
        <LogoBlock src={logo} alt={company} />
      </LogoHeaderWrapper>
      <SubHeader>
        {role}{" "}
        {hours && (
          <>
            - <strong> {hours} Hours</strong>
          </>
        )}
      </SubHeader>
      <DateHeader>{dates}</DateHeader>
      <Anchor href={website} target="_blank" rel="noreferrer">
        Visit Website
      </Anchor>
      {showDescription &&
        description.map((paragraph) => <Paragraph>{paragraph}</Paragraph>)}
      <Toggle onClick={handleToggle}>
        {showDescription ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
        {showDescription ? " Show Less" : " Show More"}
      </Toggle>
    </MainDiv>
  );
};

export default Experience;
