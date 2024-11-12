import React, { createContext, useContext, useEffect, useState } from 'react';

interface FontContextType {
  isDyslexicFont: boolean;
  toggleFont: () => void;
}

const FontContext = createContext<FontContextType>({
  isDyslexicFont: false,
  toggleFont: () => {},
});

export function FontProvider({ children }: { children: React.ReactNode }) {
  const [isDyslexicFont, setIsDyslexicFont] = useState(false);

  useEffect(() => {
    const savedFont = localStorage.getItem('font');
    if (savedFont) {
      setIsDyslexicFont(savedFont === 'dyslexic');
    }
  }, []);

  const toggleFont = () => {
    const newValue = !isDyslexicFont;
    setIsDyslexicFont(newValue);
    localStorage.setItem('font', newValue ? 'dyslexic' : 'default');
  };

  return (
    <FontContext.Provider value={{ isDyslexicFont, toggleFont }}>
      {children}
    </FontContext.Provider>
  );
}

export const useFont = () => useContext(FontContext);