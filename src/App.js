import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themes from "./themes/schema.json";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import { GlobalStyles } from "./themes/globalStyles";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(themes.data.light);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
