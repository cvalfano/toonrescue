import React from 'react';
import { SOSType, sosCards } from '../data/sosCards';
import { useTheme } from '../context/ThemeContext';

interface Props {
  selectedType: SOSType | 'all';
  onTypeChange: (type: SOSType | 'all') => void;
}

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
        <div className="flex gap-2 min-w-max max-w-full">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => onTypeChange(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                ${selectedType === type 
                  ? 'bg-[#2E1A87] text-white shadow-md' 
                  : isDarkMode
                    ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
            >
              {type === 'all' 
                ? 'All' 
                : type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              <span className={`ml-1 px-1.5 py-0.5 text-xs rounded-full ${
                selectedType === type 
                  ? 'bg-white/20 text-white' 
                  : isDarkMode
                    ? 'bg-gray-900/30 text-gray-300'
                    : 'bg-gray-900/10 text-gray-900'
              }`}>
                {getCount(type)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}