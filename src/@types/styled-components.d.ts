import "styled-components";
import { light } from "../global/styles/theme";

declare module "styled-components" {
  type ThemeType = typeof light;

  export interface DefaultTheme extends ThemeType {}
}
