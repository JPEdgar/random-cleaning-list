import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import GlobalWrapper from "./context/GlobalWrapper";

import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalWrapper>
    <App />
  </GlobalWrapper>
);
