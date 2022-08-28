import React, { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import About from "../About";
import Journey from "../Journey";
import themes from "../../themes/schema.json";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../themes/globalStyles";

const Portfolio: FC = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme") as any) || themes.light
  );
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Navbar
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
      />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="journey" element={<Journey />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Portfolio;
