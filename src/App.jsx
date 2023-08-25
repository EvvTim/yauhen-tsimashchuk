import { CssBaseline, GeistProvider } from "@geist-ui/core";
import CV from "./views/CV/CV.jsx";
import { useState } from "react";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import "./App.css";

const App = () => {
  const [themeType, setThemeType] = useState("dark");
  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeProvider themeType={themeType} setThemeType={setThemeType}>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <CV switchTheme={switchThemes} />
      </GeistProvider>
    </ThemeProvider>
  );
};

export default App;
