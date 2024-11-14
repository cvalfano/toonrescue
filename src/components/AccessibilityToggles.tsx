import React from 'react';
import { Moon, Sun, Type } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useFont } from '../context/FontContext';

export function AccessibilityToggles() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { isDyslexicFont, toggleFont } = useFont();

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? (
          <>
            <Sun className="w-5 h-5 text-white" />
            <span className="text-sm text-white hidden sm:inline">Light Mode</span>
          </>
        ) : (
          <>
            <Moon className="w-5 h-5 text-white" />
            <span className="text-sm text-white hidden sm:inline">Dark Mode</span>
          </>
        )}
      </button>

      <button
        onClick={toggleFont}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label={`Switch to ${isDyslexicFont ? 'default' : 'dyslexic-friendly'} font`}
      >
        <Type className={`w-5 h-5 text-white ${isDyslexicFont ? 'opacity-100' : 'opacity-70'}`} />
        <span className="text-sm text-white hidden sm:inline">
          {isDyslexicFont ? 'Default Font' : 'Dyslexic Font'}
        </span>
      </button>
    </div>
  );
}