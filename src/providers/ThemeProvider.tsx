import { Theme } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import React, { createContext, PropsWithChildren } from "react";
import { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import merge from "deepmerge";

import { DefaultTheme as PaperLightTheme } from "react-native-paper";
import { DefaultTheme as NavigationLightTheme } from "@react-navigation/native";

interface ThemeContextInterface {
  theme: any;
}

const combinedLightTheme = merge(PaperLightTheme, NavigationLightTheme);

const lightTheme = {
  ...combinedLightTheme,
  colors: {
    ...combinedLightTheme.colors,
    primary: "#f8b2b2",
    accent: "#1DB954",
    carnita: "#f98e9e",
  },
};

const defaultValues: ThemeContextInterface = {
  theme: lightTheme,
};

const themeContext = createContext<ThemeContextInterface>(defaultValues);

const ThemeProvider = (props: PropsWithChildren) => {
  const [theme, setTheme] = useState(defaultValues.theme);
  return (
    <themeContext.Provider value={{ theme }}>
      <PaperProvider theme={theme}>
        <NavigationContainer>{props.children}</NavigationContainer>
      </PaperProvider>
    </themeContext.Provider>
  );
};

export { ThemeProvider, themeContext };
