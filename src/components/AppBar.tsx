import React, { useContext } from "react";
import { Appbar } from "react-native-paper";
import { themeContext } from "../providers/ThemeProvider";

const AppBar = () => {
  const { theme } = useContext(themeContext);
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#f98e9e" }}>
        <Appbar.Content
          style={{ backgroundColor: theme.carnita }}
          title="Carnitas Las Isabeles"
        />
      </Appbar.Header>
    </>
  );
};

export default AppBar;
