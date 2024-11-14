import React from 'react';
import { Moon, Sun, Type } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useFont } from '../context/FontContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function AccessibilityMenu({ isOpen, onClose }: Props) {
  const { isDarkMode, toggleTheme } = useTheme();
  const { isDyslexicFont, toggleFont } = useFont();

  if (!isOpen) return null;

  const handleThemeClick = () => {
    toggleTheme();
    onClose();
  };

  const handleFontClick = () => {
    toggleFont();
    onClose();
  };

  return (
    <div 
      data-accessibility-menu
      className="absolute top-16 right-3 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
    >
      <button
        onClick={handleThemeClick}
        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-100 transition-colors"
      >
        {isDarkMode ? (
          <>
            <Sun className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Switch to Light Mode</span>
          </>
        ) : (
          <>
            <Moon className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Switch to Dark Mode</span>
          </>
        )}
      </button>

      <button
        onClick={handleFontClick}
        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-100 transition-colors"
      >
        <Type className={`w-5 h-5 text-gray-600 ${isDyslexicFont ? 'opacity-100' : 'opacity-70'}`} />
        <span className="text-gray-700">
          {isDyslexicFont ? 'Use Default Font' : 'Use Dyslexic Font'}
        </span>
      </button>
    </div>
  );
}