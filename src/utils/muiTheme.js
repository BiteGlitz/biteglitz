// src/muiTheme.js
import { createTheme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";

export const muiLightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: lightTheme.body,
      paper: lightTheme.highlight,
    },
    text: {
      primary: lightTheme.text,
      secondary: lightTheme.subtext,
    },
    primary: {
      main: lightTheme.primary,
    },
    secondary: {
      main: lightTheme.secondary,
    },
    divider: lightTheme.accent,
  },
  typography: {
    h1: {
      color: lightTheme.heading,
    },
    body1: {
      color: lightTheme.paragraph,
    },
  },
});

export const muiDarkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: darkTheme.body,
      paper: darkTheme.highlight,
    },
    text: {
      primary: darkTheme.text,
      secondary: darkTheme.subtext,
    },
    primary: {
      main: darkTheme.primary,
    },
    secondary: {
      main: darkTheme.secondary,
    },
    divider: darkTheme.accent,
  },
  typography: {
    h1: {
      color: darkTheme.heading,
    },
    body1: {
      color: darkTheme.paragraph,
    },
  },
});
