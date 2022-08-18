import React from "react";
import About from "./About";
import Journey from "./Journey";
import Projects from "./Projects";
import Tech from "./Tech";

const Homepage = () => {
  return (
    <div>
      <About />
      <Journey />
      <Tech />
      <Projects />
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
    </div>
  );
};

export default Homepage;
