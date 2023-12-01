import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./report-web-vitals";

import Home from "./pages/home";

import "./index.scss";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
