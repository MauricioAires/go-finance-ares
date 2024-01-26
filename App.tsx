import React, { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { View } from "react-native";

import { Dashboard } from "./src/screens/Dashboard";
import { light } from "./src/global/styles/theme";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <View
        style={{
          flex: 1,
        }}
        onLayout={onLayoutRootView}
      >
        <ThemeProvider theme={light}>
          <Dashboard />
        </ThemeProvider>
      </View>
      <StatusBar backgroundColor="#5636d3" style="light" />
    </>
  );
}
