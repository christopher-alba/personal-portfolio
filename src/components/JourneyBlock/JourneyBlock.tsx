import React, { FC } from "react";
import { CompanyLogo, CompanyName, InfoDiv, MainDiv, TechnologyBlock } from "./styled";

const JourneyBlock: FC<{
  logoSrc: string;
  companyName: string;
  description: string;
  dates: string;
  technologies: string[];
}> = ({ logoSrc, companyName, description, dates, technologies }) => {
  return (
    <MainDiv>
      <CompanyLogo src={logoSrc} />
      <InfoDiv>
        <CompanyName>{companyName}</CompanyName>
        <p>{dates}</p>
        <p>{description}</p>
        {technologies.map((tech) => (
          <TechnologyBlock>{tech}</TechnologyBlock>
        ))}
      </InfoDiv>
    </MainDiv>
  );
};

export default JourneyBlock;
