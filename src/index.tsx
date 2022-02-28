import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import ResetStyles from "./styles/ResetStyles";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ResetStyles />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
