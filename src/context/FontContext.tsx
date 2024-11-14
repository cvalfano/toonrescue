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
  const [isDyslexicFont, setIsDyslexicFont] = useState(() => {
    const savedFont = localStorage.getItem('font');
    return savedFont === 'dyslexic';
  });

  useEffect(() => {
    localStorage.setItem('font', isDyslexicFont ? 'dyslexic' : 'default');
    document.documentElement.classList.toggle('font-dyslexic', isDyslexicFont);
  }, [isDyslexicFont]);

  const toggleFont = () => setIsDyslexicFont(prev => !prev);

  return (
    <FontContext.Provider value={{ isDyslexicFont, toggleFont }}>
      {children}
    </FontContext.Provider>
  );
}

export const useFont = () => useContext(FontContext);