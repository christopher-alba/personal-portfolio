import React, { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import About from "../About";
import Journey from "../Journey";
import themes from "../../themes/schema.json";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../themes/globalStyles";
import Tech from "../Tech";
import { BackToTop } from "./styled";
import { ArrowUpward } from "@mui/icons-material";

const Portfolio: FC = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme") as any) || themes.light
  );
  const [toTop, setToTop] = useState(false);
  useEffect(() => {
    const handler = () => {
      console.log(document.documentElement.scrollTop);

      (document.documentElement.scrollTop || document.body.scrollTop) > 200
        ? setToTop(true)
        : setToTop(false);
    };
    window.addEventListener("scroll", handler);
  }, []);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Navbar
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
      />
      {toTop && (
        <BackToTop data-aos="fade" onClick={() => window.scrollTo(0, 0)}>
          <ArrowUpward color="inherit" fontSize="inherit" />
        </BackToTop>
      )}
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="journey" element={<Journey />} />
        <Route path="tech" element={<Tech />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Portfolio;
