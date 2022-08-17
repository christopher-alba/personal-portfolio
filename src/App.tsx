import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themes from "./themes/schema.json";
import { GlobalStyles } from "./themes/globalStyles";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Hompage";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes.light);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Navbar
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
