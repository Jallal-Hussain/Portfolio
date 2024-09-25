import React, { createContext, useState } from "react";

import { themeData } from "../data/themeData";

export const ThemeContext = createContext();

function ThemeContextProvider({children}) {
  // eslint-disable-next-line
  const [theme, setTheme] = useState(themeData.theme);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const value = { theme, drawerOpen, setHandleDrawer };
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
