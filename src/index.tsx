import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
});

const root = ReactDOM.createRoot(document.getElementById("root") as any);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
