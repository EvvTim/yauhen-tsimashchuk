import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = useState("light");

  return (
    <ThemeContext.Provider value={{ themeType, setThemeType }}>
      {children}
    </ThemeContext.Provider>
  );
};
