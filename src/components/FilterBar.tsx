import React from 'react';
import { SOSType, sosCards } from '../data/sosCards';
import { useTheme } from '../context/ThemeContext';

interface Props {
  selectedType: SOSType | 'all';
  onTypeChange: (type: SOSType | 'all') => void;
}

const getTagColors = (type: string, isDarkMode: boolean) => {
  const colors = {
    'all': {
      bg: isDarkMode ? '#4526CE20' : '#4526CE15',
      text: isDarkMode ? '#A7B0F2' : '#2E1A87',
      selectedBg: '#4526CE',
      selectedText: '#FFFFFF'
    },
    'drop': {
      bg: isDarkMode ? '#008FAB20' : '#008FAB15',
      text: isDarkMode ? '#7FD4E5' : '#006B80',
      selectedBg: '#008FAB',
      selectedText: '#FFFFFF'
    },
    'toon-up': {
      bg: isDarkMode ? '#8448B320' : '#8448B315',
      text: isDarkMode ? '#C9A6E5' : '#5F3580',
      selectedBg: '#8448B3',
      selectedText: '#FFFFFF'
    },
    'trap': {
      bg: isDarkMode ? '#D4A11420' : '#D4A11415',
      text: isDarkMode ? '#FFD77A' : '#8F6E0E',
      selectedBg: '#D4A114',
      selectedText: '#FFFFFF'
    },
    'lure': {
      bg: isDarkMode ? '#3BA13620' : '#3BA13615',
      text: isDarkMode ? '#90E58C' : '#2C7828',
      selectedBg: '#3BA136',
      selectedText: '#FFFFFF'
    },
    'sound': {
      bg: isDarkMode ? '#4A59DB20' : '#4A59DB15',
      text: isDarkMode ? '#A7B0F2' : '#364099',
      selectedBg: '#4A59DB',
      selectedText: '#FFFFFF'
    },
    'restock': {
      bg: isDarkMode ? '#D1149920' : '#D1149915',
      text: isDarkMode ? '#FF8AD4' : '#960C6D',
      selectedBg: '#D11499',
      selectedText: '#FFFFFF'
    },
    'accuracy': {
      bg: isDarkMode ? '#0D246620' : '#0D246615',
      text: isDarkMode ? '#7A8BC2' : '#091947',
      selectedBg: '#0D2466',
      selectedText: '#FFFFFF'
    }
  };
  
  return colors[type as keyof typeof colors];
};

export function FilterBar({ selectedType, onTypeChange }: Props) {
  const { isDarkMode } = useTheme();
  
  const types: (SOSType | 'all')[] = [
    'all',
    'toon-up',
    'trap',
    'lure',
    'sound',
    'drop',
    'restock',
    'accuracy'
  ];

  const getCount = (type: SOSType | 'all') => {
    return type === 'all' 
      ? sosCards.length 
      : sosCards.filter(card => card.type === type).length;
  };

  return (
    <div className="relative w-full">
      <div className="overflow-x-auto no-scrollbar -mx-4 px-4 pb-2 mb-4">
        <div className="flex gap-2 min-w-max">
          {types.map((type) => {
            const colors = getTagColors(type, isDarkMode);
            const isSelected = selectedType === type;

            return (
              <button
                key={type}
                onClick={() => onTypeChange(type)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
                style={{
                  backgroundColor: isSelected ? colors.selectedBg : colors.bg,
                  color: isSelected ? colors.selectedText : colors.text
                }}
              >
                {type === 'all' 
                  ? 'All' 
                  : type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                <span 
                  className="ml-1 px-1.5 py-0.5 text-xs rounded-full"
                  style={{
                    backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.2)' : isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                    color: isSelected ? colors.selectedText : colors.text
                  }}
                >
                  {getCount(type)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}