import React, { FC } from "react";
import JourneyBlock from "../../../components/JourneyBlock";
import { MajorSection } from "../../../components/MajorSection";
import { StyledContainer } from "../../../components/StyledContainer";
import { StyledHeading } from "../../../components/StyledHeading";

const Journey: FC = () => {
  return (
    <StyledContainer data-aos="fade-up" >
      <MajorSection>
        <StyledHeading>Career Journey</StyledHeading>
        <JourneyBlock
          logoSrc="/images/turners.jpg"
          companyName="Turners Automotive Group - Graduate Software Engineer"
          description="My contract with Turners was upgraded to a full time (40 hours per week) contract after I finished my degree."
          dates="November 2022 to Present(Full-Time)"
          technologies={["Java", "Playwright", "Cucumber", "AWS"]}
        />
        <JourneyBlock
          logoSrc="/images/turners.jpg"
          companyName="Turners Automotive Group - Graduate Software Engineer"
          description="I joined Turners as a graduate software engineer, initially starting part time working 2 days a week (16 hours per week) as I was still studying full time at the University of Auckland. I was initially placed in the role of QA Engineer, writing automated tests in Java using Playwright and Cucumber. I also performed some manual testing of their web applications, reporting any bugs I find in JIRA."
          dates="July 2022 to November 2022 (Part-Time)"
          technologies={["Java", "Playwright", "Cucumber", "AWS"]}
        />
        <JourneyBlock
          logoSrc="/images/hso.jpg"
          companyName="Henry Schein One - Full Stack Software Developer Intern"
          description="This internship lasted 400 hours, and it was a challenging but rewarding experience. I worked with their full stack web applications, designing new features on Figma and implementing them in C#. I participated in daily standups and fortnightly sprint retrospectives where I would present the new features which I built."
          dates="November 2021 to February 2022 (full time internship)"
          technologies={["C#", ".NET", "Blazor", "Figma", "CSS"]}
        />
        <JourneyBlock
          logoSrc="/images/jasper-logo.png"
          companyName="Jasper - Frontend Software Engineer Intern"
          description="This internship lasted 400 hours, and it was a challenging but rewarding experience. I worked in the frontend of their full stack web applications, implementing the designs from Figma in Javascript, React. I participated in daily standups, and fortnightly sprint retrospectives."
          dates="November 2020 to February 2021 (full time internship)"
          technologies={[
            "Javascript",
            "React",
            "CSS",
            "Styled Components",
            "Storybook",
          ]}
        />
      </MajorSection>
    </StyledContainer>
  );
};

export default Journey;
