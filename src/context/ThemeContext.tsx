import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setManualTheme: (isDark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType>({ 
  isDarkMode: false, 
  toggleTheme: () => {}, 
  setManualTheme: () => {} 
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isManuallySet, setIsManuallySet] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      setIsManuallySet(true);
    }
  }, []);

  useEffect(() => {
    if (!isManuallySet) {
      const updateTheme = () => {
        const hour = new Date().getHours();
        setIsDarkMode(hour >= 20 || hour < 8);
      };

      updateTheme();
      const interval = setInterval(updateTheme, 60000);
      return () => clearInterval(interval);
    }
  }, [isManuallySet]);

  const setManualTheme = (isDark: boolean) => {
    setIsDarkMode(isDark);
    setIsManuallySet(true);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const toggleTheme = () => {
    setManualTheme(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, setManualTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);