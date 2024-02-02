import { ThemeProvider as ThemeProviderNative } from "styled-components";

import { light } from "../global/styles/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeProviderNative theme={light}>{children}</ThemeProviderNative>;
}
