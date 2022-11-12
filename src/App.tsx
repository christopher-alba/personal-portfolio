import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import themes from "./themes/schema.json";
import { GlobalStyles } from "./themes/globalStyles";
import MainPage from "./pages/MainPage";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes.light);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <MainPage setSelectedTheme={setSelectedTheme} />
    </ThemeProvider>
  );
};

export default App;
