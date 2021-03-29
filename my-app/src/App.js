import React, { useState } from "react";
import "./App.css";
import Contacts from "./modules/contacts/components/contacts/Contacts.js";
import ThemeContext, { themes } from "./theme-context";

export default function App() {
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    return theme === themes.dark
      ? setTheme(themes.light)
      : setTheme(themes.dark);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Contacts toggleTheme={toggleTheme} />
    </ThemeContext.Provider>
  );
}
