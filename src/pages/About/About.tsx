import { Container } from "@mui/material";
import React, { FC, useContext } from "react";
import { ThemeContext } from "styled-components";
import Characteristic from "../../components/Characteristic";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Legendary from "../../svg/Legendary";
import { GetStartedText, StyledSpan, Characteristics } from "./styled";

const About: FC = () => {
  const theme = useContext(ThemeContext);
  const { width } = useWindowDimensions();
  return (
    <Container>
      <Legendary
        color1={theme.colors.tertiary}
        color2={theme.colors.secondary}
        color3={theme.colors.primaryLight}
        color4={theme.colors.tertiary2}
        color5={theme.colors.tertiary3}
        color6={theme.colors.tertiary4}
        color7={theme.colors.tertiary5}
        style={{
          marginTop: "50px",
          marginBottom: "100px",
          position: "relative",
          left: width > 600 ? "-40px" : "0",
        }}
      />
      <p>
        <StyledSpan>As a New Zealand based Software Engineer</StyledSpan>, I am
        passionate about all things software. The legendary space battlecruiser
        word art above (yes that is what I intended it to be) contains the words
        that best describe me. If you can’t be bothered reading about why I’m
        legendary then go ahead and explore the rest of my online portfolio. Yes
        this is what this website is all about. It contains information about my
        journey in software engineering, the technologies that I use, examples
        of my web development projects, my education, and my contact details.
        Also if you want you can click the CV button on the top right corner of
        the website to download my latest (hopefully lol) CV. But let’s be
        honest, it isn’t as awesome as this website, it is more concise though.
      </p>
      <GetStartedText>So let's get started ...</GetStartedText>
      <Characteristics>
        <Characteristic
          text="I’m efficent. Am I Lazy? Potentially... I can make this assumption
            about myself from my previous work experiences. I tend to finish my
            assigned tasks on time and in good quality. Also, if I spend more
            than one hour fixing a bug without any progress I generally ask for
            help. Yes, thats right, I ask for help. No point starting at a blank
            screen all day is how I see it."
          title={`<Efficient />`}
        />
        <Characteristic
          text="
          I’m creative. Since I was young I enjoyed drawing, designing, building things. I guess this passion never left me and now I’m applying it in software; software architecture, website UI/UX design, frontend development, backend development etc... Building websites is always satisfying, especially when done well. This means planning the website well, as well as coding it up with consideration of best practices."
          title={`<Creative />`}
        />
        <Characteristic
          text="Being a results oriented person, when I work on projects I prefer seeing key milestones achieved within their deadlines. However, when working on projects I know that people can often get stuck and need time to learn so I can understand if people don’t have anything to show. As long as there are learnings it’s alright."
          title={`<Results Oriented />`}
        />
        <Characteristic
          text="I’m quite practical when it comes to learning. I don’t always spend hours reading about a certain topic in software. There is only so much information I can handle and absorb so I prefer to read only about the things relevant to the projects I’m working on."
          title={`<Practical />`}
        />
        <Characteristic
          text="Efficient + Creative + Results Oriented + Practical + Productive + Lifelong Learner + Driven + Empathetic = Legendary"
          title={`<LEGENDARY />`}
        />
        <Characteristic
          text="
          Being a lifelong learner, I value constant upskilling and am open to constructive feedback. Software is an ever changing field and I know that the technologies I know now wont always be what I’ll be using at work. "
          title={`<Lifelong Learner />`}
        />
        <Characteristic
          text="
          I’m driven to one day become a senior level software engineer, and is the reason why I can spend hours each day working on software projects or learning about technologies that I can use in my projects or at work. What motivates me are myself and my family."
          title={`<Driven />`}
        />
        <Characteristic
          text="When designing UI/UX and the inner workings of a website, I can place myself in the shoes of the end users and imagine use-cases that they could want in the application I’m building. Also, when working in a team, I generally am considerate to other team members."
          title={`<Empathetic />`}
        />
        <Characteristic
          text="Im usually a productive person. I’m either learning or doing things. However, I do have a life outside of software so I like to play video games and watch movies if I’m not working on anything or it’s outside of working hours."
          title={`<Productive />`}
        />
      </Characteristics>
    </Container>
  );
};

export default About;
