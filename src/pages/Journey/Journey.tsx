import { Container } from "@mui/material";
import React, { FC, useContext } from "react";
import { ThemeContext } from "styled-components";
import Timeline from "../../components/Timeline";
import JourneySVG from "../../svg/Journey";
import { CompanyH1, DateP, H5Styled } from "./styled";
const Journey: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <JourneySVG
        color1={theme.colors.tertiary}
        color2={theme.colors.primaryLight}
        color3={theme.colors.tertiary2}
        color4={theme.colors.tertiary3}
        color5={theme.colors.tertiary4}
        color6={theme.colors.tertiary5}
        color7={theme.colors.secondary}
        dataAos="fade-left"
        style={{
          marginTop: "50px",
          marginBottom: "100px",
        }}
      />
      <Timeline>
        <div>
          <DateP style={{ color: theme.colors.tertiary }}>
            July 2022 - Present
          </DateP>
          <CompanyH1>Turners Automotive Group</CompanyH1>
          <H5Styled>Graduate Software Engineer</H5Styled>
          <H5Styled style={{ fontWeight: 200 }}>Part Time</H5Styled>
          <p>
            Here I am being rotated in different aspects of the business. I am
            currently working in quality assurance (QA) where I write end-to-end
            tests in Java.
          </p>
        </div>
        <div>
          <DateP>November 2021 - February 2022</DateP>
          <CompanyH1>Henry Schein One</CompanyH1>
          <H5Styled>Full-stack Software Developer Intern</H5Styled>
          <H5Styled style={{ fontWeight: 200 }}>Full Time</H5Styled>
          <p>
            My sub professional work included designing the user interface and
            user experience for web applications and then implementing the
            design using Blazor in C# applications. This involved implementing a
            polished user interface. In terms of code, I had to consider best
            practice methodology and performance. In terms of the design and
            functionality of the web applications, I considered performance and
            accessibility. I was also required to share knowledge amongst the
            team when necessary, such as during stand ups, retrospectives, and
            pair programming sessions.
          </p>
        </div>
        <div>
          <DateP>November 2020 - February 2021</DateP>
          <CompanyH1>Jasper</CompanyH1>
          <H5Styled>Frontend Software Engineer Intern</H5Styled>
          <H5Styled style={{ fontWeight: 200 }}>Full Time</H5Styled>
          <p>
            Starting from day one, I went straight into sub professional work on
            Jasper’s website. My sub professional work included implementing UX
            and UI in React applications, writing integration and unit tests,
            communicating with graphql APIs and schema changes, implementing
            polished user interfaces, sharing sub-professional knowledge amongst
            team members, writing documentation on Github and Linear, performing
            maintenance on existing code base, regular standups and
            retrospectives as part of an agile workplace, and reviewing pull
            requests.
          </p>
        </div>
        <div>
          <DateP>March 2020 to June 2020</DateP>
          <CompanyH1>Enspiral Dev Academy</CompanyH1>
          <H5Styled>Web Development Bootcamp Student</H5Styled>
          <H5Styled style={{ fontWeight: 200 }}>Full Time</H5Styled>
          <p>
            EDA’s curriculum is designed and taught by currently employed
            software developers and was designed to turn someone from no
            experience in software to a full stack web developer in 15 weeks. A
            normal day in this bootcamp was usually around 10-12 hours of work a
            day. I was exposed to agile software practices when taking part in
            group projects. Pair programming happens almost everyday after each
            lecture. All our activities were version controlled in git and
            managed in github. Every friday there is a group project which lasts
            for one day. In this bootcamp I developed my communication skills,
            leadership skills, understanding of team dynamics, self awareness,
            technical skills, and other soft skills. During the lockdown, we
            continued to work remotely, building projects with up to teams of 20
            people collaborating online. We would give and receive feedback to
            each other on a regular basis to allow ourselves to grow at a faster
            rate. In summary, it was a tough but enjoyable experience that gave
            me good insight into what software development is like in a
            professional environment.
          </p>
        </div>
      </Timeline>
    </Container>
  );
};

export default Journey;
