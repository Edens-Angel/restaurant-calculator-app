import React from "react";
import NavigationTabMenu from "./src/components/NavigationTabMenu";
import { MenuProvider } from "./src/providers/MenuProvider";
import { ThemeProvider } from "./src/providers/ThemeProvider";

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <MenuProvider>
        <NavigationTabMenu />
      </MenuProvider>
    </ThemeProvider>
  );
};

export default App;
