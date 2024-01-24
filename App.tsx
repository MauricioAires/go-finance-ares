import React from "react";
import { ThemeProvider } from "styled-components";

import { Dashboard } from "./src/screens/Dashboard";
import { light } from "./src/global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Dashboard />
    </ThemeProvider>
  );
}
