import { createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    // Always apply dark theme
    document.documentElement.classList.add("dark");
  }, []);

  const value = {
    isDark: true,
    toggleTheme: () => {}, // No-op function since we only want dark theme
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
