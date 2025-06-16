// src/context/ThemeModeContext.jsx
import React, { createContext, useState, useMemo, useContext } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { muiLightTheme, muiDarkTheme } from "../utils/muiTheme"; // Check this path too

const ThemeModeContext = createContext(); // ✅ Make sure this line exists

export const useThemeMode = () => useContext(ThemeModeContext); // ✅ Custom hook

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const theme = useMemo(
    () => (mode === "light" ? muiLightTheme : muiDarkTheme),
    [mode]
  );

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeModeContext.Provider value={{ mode, setMode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider> // ← This is the line in your error
  );
};
