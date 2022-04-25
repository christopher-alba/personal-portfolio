import React from "react";
import HeroDiv from "../../../components/JCUX/HeroDiv";
import Container from "../../../components/JCUX/Container";
import { ExperienceWrapper, Header, Paragraph } from "./styled";
import Experience from "./Experience";

const AspiringWebDeveloper = () => {
  return (
    <>
      <HeroDiv>
        <Container>
          <Header>Aspiring Web Developer</Header>
          <Paragraph>
            Hello! From a young age I’ve enjoyed design and problem solving.
            Fast forward to the present, and I’m applying my creativity in
            software development or engineering.
          </Paragraph>
          <Paragraph>
            My career path is currently in web development, and I have a
            preference towards frontend development. This is due to my
            appreciation for the user experience. However, the backend
            performance of a website also impacts the user experience, and also
            allows me to use my creativity to come up with solutions. Therefore,
            I am also open to working in the backend or fullstack roles.
          </Paragraph>
          <Paragraph>
            I’m currently in my final year of engineering at the University of
            Auckland, and am looking for a graduate/junior software
            engineer/developer position.
          </Paragraph>
        </Container>
      </HeroDiv>
      <ExperienceWrapper
        style={{
          position: "relative",
          top: "-150px",
        }}
      >
        <Experience
          company="Henry Schein One"
          description={[
            "Henry Schein One is a company located in New Zealand , as well as overseas, who creates dental software that makes managing a dental practice easier and have clients all over the world. During my time at HSO, I was exposed to a variety of sub-professional work in the field of software development. I learned all about the .NET technology stack, both frontend and backend technologies, with high attention to detail and performance. I also developed various social aspects when working in a large team and in smaller teams when pair programming. The main conclusions drawn are that working at Henry Schein One was an overall positive experience where I developed my skills in developing professional, production use web applications. The core values that HSO instil in its members, as well as the attributes they bring with them into HSO, allow for creation of high-quality products and continuous growth and development.",
            "Working for a larger company meant I had to follow a different onboarding process as compared to a fast-paced start up like Jasper. This meant that I spent one day in onboarding as I was required to complete some short courses on learning about the company (Henry Schein One) and their rules, regulations, and staff benefits. I Then spent one day setting up my work environment, which involved installing my development tools such as Rider IDE, EXACT dental software, and getting API keys to get access to specific repositories (software projects) like Cosmos.",
            "My sub professional work included designing the user interface and user experience for web applications and then implementing the design using Blazor in C# applications. This involved implementing a polished user interface. In terms of code, I had to consider best practice methodology and performance. In terms of the design and functionality of the web applications, I considered performance and accessibility. I was also required to share knowledge amongst the team when necessary, such as during stand ups, retrospectives, and pair programming sessions.",
          ]}
          role="Full-stack Software Developer Intern"
          hours="400"
          dates="November 2021 to February 2022"
          website="https://henryscheinone.co.nz/"
          logo="./images/hso.jpg"
        />
        <Experience
          company="Jasper"
          description={[
            "Jasper is a company who makes investing in commercial real estate more accessible to the public. During my time at Jasper, I was exposed to a variety of sub-professional work in the field of software development. I learned about how to build the front-end of web applications with high attention to detail, performance and accessibility. I also learned various social aspects when working in a team environment to ensure good productivity as this is my first time working at a company. The main conclusions drawn were that working at Jasper was an overall positive experience where I learned about how to professionally create web applications. The overall workflow at Jasper allowed for efficient shipping of work and made keeping track of tasks simple but effective.",
            "Starting from day one, I went straight into sub professional work on Jasper’s website. But first, I had to go through an onboarding process on the first day. This onboarding involved setting up my working environment and getting used to Mac as this was my first time using it for development. My sub professional work included implementing UX and UI in React applications, writing integration and unit tests, communicating with graphql APIs and schema changes, implementing polished user interfaces, sharing sub-professional knowledge amongst team members, writing documentation on Github and Linear, performing maintenance on existing code base, regular standups and retrospectives as part of an agile workplace, and reviewing pull requests.",
          ]}
          role="Frontend Software Engineer Intern"
          hours="416"
          dates="November 2020 to February 2021"
          website="https://www.jasper.io/nz/"
          logo="./images/jasper-logo.png"
        />
        <Experience
          company="Enspiral Dev Academy"
          description={[
            "EDA’s curriculum is designed and taught by currently employed software developers and was designed to turn someone from no experience in software to a full stack web developer in 15 weeks. A normal day in this bootcamp was usually around 10-12 hours of work a day. I was exposed to agile software practices when taking part in group projects. Pair programming happens almost everyday after each lecture. All our activities were version controlled in git and managed in github. Every friday there is a group project which lasts for one day. In this bootcamp I developed my communication skills, leadership skills, understanding of team dynamics, self awareness, technical skills, and other soft skills. During the lockdown, we continued to work remotely, building projects with up to teams of 20 people collaborating online. We would give and receive feedback to each other on a regular basis to allow ourselves to grow at a faster rate. In summary, it was a tough but enjoyable experience that gave me good insight into what software development is like in a professional environment.",
          ]}
          role="Web Development Bootcamp Student"
          hours="800"
          dates="March 2020 to June 2020"
          website="https://devacademy.co.nz/"
          logo="./images/eda.png"
        />
      </ExperienceWrapper>
    </>
  );
};

export default AspiringWebDeveloper;
