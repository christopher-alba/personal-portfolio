import React, { FC } from "react";
import { DefaultTheme } from "styled-components";
import Navbar from "../../components/Navbar";
import About from "./About";
import Journey from "./Journey";
import Landing from "./Landing";

const MainPage: FC<{
  setSelectedTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}> = ({ setSelectedTheme }) => {
  return (
    <>
      <Landing />
      <Navbar setSelectedTheme={setSelectedTheme} />
      <About />
      <Journey />
    </>
  );
};
export default MainPage;
