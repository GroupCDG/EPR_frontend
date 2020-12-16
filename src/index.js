import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "theme/Baseline";
import { ThemeProvider } from "styled-components";
import defaultTheme, { Typography } from "theme/default";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline Typography={Typography} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
