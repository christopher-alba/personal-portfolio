import React from "react";
import About from "./About";
import Journey from "./Journey";

const Homepage = () => {
  return (
    <>
      <About />
      <Journey />
      <div
        className="tech"
        style={{ height: "100vh", border: "1px solid red" }}
      >
        <h1>TECH</h1>
      </div>
      <div
        className="projects"
        style={{ height: "100vh", border: "1px solid red" }}
      >
        <h1>PROJECTS</h1>
      </div>
      <div
        className="education"
        style={{ height: "100vh", border: "1px solid red" }}
      >
        <h1>EDUCATION</h1>
      </div>
      <div
        className="contact"
        style={{ height: "100vh", border: "1px solid red" }}
      >
        <h1>CONTACT</h1>
      </div>
    </>
  );
};

export default Homepage;
