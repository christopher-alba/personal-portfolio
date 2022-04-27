import React from "react";
import AspiringWebDeveloper from "./AspiringWebDeveloper";
import Landing from "./Landing";
import Projects from "./Projects";
import Technologies from "./Technologies";

const Homepage = () => {
  return (
    <>
      <Landing />
      <AspiringWebDeveloper />
      <Technologies />
      <Projects />
    </>
  );
};

export default Homepage;
