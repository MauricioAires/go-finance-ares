import { StatusBar } from "expo-status-bar";

import { AppRoutes } from "./src/routes/app.routes";
import { NavigationContainerProvier } from "./src/providers/navigation-container";
import { ThemeProvider } from "./src/providers/theme";
import { LoadFontProvider } from "./src/providers/load-font";
import { GestureHandlerProvier } from "./src/providers/gesture-handler";
import { SignIn } from "./src/screens/SignIn";

export default function App() {
  return (
    <>
      <LoadFontProvider>
        <ThemeProvider>
          <GestureHandlerProvier>
            <NavigationContainerProvier>
              {/* <AppRoutes /> */}
              <SignIn />
            </NavigationContainerProvier>
          </GestureHandlerProvier>
        </ThemeProvider>
      </LoadFontProvider>
      <StatusBar backgroundColor="#5636d3" style="light" />
    </>
  );
}
