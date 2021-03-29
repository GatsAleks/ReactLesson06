import React from "react";

export const themes = {
  dark: {
    background:
      "linear-gradient(38deg, rgba(37,69,115,1) 0%, rgba(72,70,145,1) 0%, rgba(19,17,72,1) 59%, rgba(7,5,56,1) 100%)",
    color: "white",
  },
  light: {
    background:
      "linear-gradient(-90deg, rgba(37,69,115,1) 0%, rgba(162,182,237,1) 0%, rgba(151,178,227,1) 37%, rgba(176,212,253,1) 100%, rgba(7,5,56,1) 100%)",
  },
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
