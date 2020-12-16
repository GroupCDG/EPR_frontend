import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme, { Typography } from "theme/Default";
import CssBaseline from "theme/Baseline";
import { render as rtlRender } from "@testing-library/react";
import rtRenderer from "react-test-renderer";

export function tlRender(ui) {
  const App = () => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline Typography={Typography} />
        <Typography />
        {ui}
      </ThemeProvider>
    );
  };
  return rtlRender(<App />);
}

export function tRender(ui) {
  const App = () => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline Typography={Typography} />
        <Typography />
        {ui}
      </ThemeProvider>
    );
  };
  return rtRenderer(<App />);
}