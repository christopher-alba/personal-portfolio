import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themes from "./themes/schema.json";
import { GlobalStyles } from "./themes/globalStyles";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";

const App = () => {
  const [selectedTheme] = useState(themes.light);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio/*" element={<Portfolio />}/>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
