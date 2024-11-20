import React, { useState, useRef } from 'react';
import { Star } from 'lucide-react';
import { SOSCard as SOSCardType } from '../data/sosCards';
import { useTheme } from '../context/ThemeContext';
import { ImageWithFallback } from './ImageWithFallback';
import { ImageModal } from './ImageModal';

interface Props {
  card: SOSCardType;
  index: number;
}

const getTagColors = (type: string, isDarkMode: boolean) => {
  const colors = {
    'drop': {
      bg: isDarkMode ? '#008FAB20' : '#008FAB15',
      text: isDarkMode ? '#7FD4E5' : '#006B80'
    },
    'toon-up': {
      bg: isDarkMode ? '#8448B320' : '#8448B315',
      text: isDarkMode ? '#C9A6E5' : '#5F3580'
    },
    'trap': {
      bg: isDarkMode ? '#D4A11420' : '#D4A11415',
      text: isDarkMode ? '#FFD77A' : '#8F6E0E'
    },
    'lure': {
      bg: isDarkMode ? '#3BA13620' : '#3BA13615',
      text: isDarkMode ? '#90E58C' : '#2C7828'
    },
    'sound': {
      bg: isDarkMode ? '#4A59DB20' : '#4A59DB15',
      text: isDarkMode ? '#A7B0F2' : '#364099'
    },
    'restock': {
      bg: isDarkMode ? '#D1149920' : '#D1149915',
      text: isDarkMode ? '#FF8AD4' : '#960C6D'
    },
    'accuracy': {
      bg: isDarkMode ? '#0D246620' : '#0D246615',
      text: isDarkMode ? '#7A8BC2' : '#091947'
    }
  };
  
  return colors[type as keyof typeof colors];
};

export function SOSCard({ card, index }: Props) {
  const { isDarkMode } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const imageRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const getImageAltText = (card: SOSCardType) => {
    const typeFormatted = card.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const starsText = `${card.stars}-star`;
    const effectText = card.statistics[0].toLowerCase().replace('deals ', '').replace('increases ', '').replace('reduces ', '').replace('restocks ', '');
    
    return `${card.name}: ${starsText} ${typeFormatted} SOS Toon that ${effectText}`;
  };

  const getCardDescription = (card: SOSCardType) => {
    const typeFormatted = card.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const starsText = `${card.stars} star`;
    const stats = card.statistics.join('. ');
    
    return `${card.name}, ${starsText} ${typeFormatted} type. ${card.description}. ${stats}`;
  };

  const tagColors = getTagColors(card.type, isDarkMode);

  return (
    <>
      <article 
        className={`${
          isDarkMode 
            ? 'bg-gray-800 hover:bg-gray-750' 
            : 'bg-white hover:bg-gray-50'
        } rounded-lg shadow hover:shadow-md transition-all`}
        role="listitem"
        aria-label={getCardDescription(card)}
        tabIndex={0}
      >
        <div className="flex items-start p-3 sm:p-4">
          <button 
            ref={imageRef}
            onClick={() => setShowModal(true)}
            onKeyDown={handleKeyDown}
            className="relative w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4526CE] dark:focus-visible:ring-white"
            aria-label={`View larger image of ${card.name}`}
          >
            <ImageWithFallback 
              src={card.imageUrl} 
              alt={getImageAltText(card)}
              className={`w-full h-full object-cover rounded ${
                ['Flippy', 'Doctor Drift', 'Flim Flam'].includes(card.name) ? 'object-top' : 'object-center'
              }`}
            />
          </button>
          
          <div className="ml-3 sm:ml-4 flex-grow min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className={`text-lg sm:text-xl font-bold leading-tight ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {card.name}
                  </h2>
                  <span 
                    className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap"
                    style={{
                      backgroundColor: tagColors.bg,
                      color: tagColors.text
                    }}
                  >
                    {card.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                </div>
                <div 
                  className="flex items-center mt-1"
                  aria-label={`${card.stars} star rating`}
                >
                  {[...Array(card.stars)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-[#996D00] text-[#996D00]" 
                      aria-hidden="true" 
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className={`mt-1.5 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-900'
            }`}>
              <p className="text-sm sm:text-base">
                {card.description}
              </p>
              
              {card.statistics && (
                <div className={`mt-1.5 text-xs sm:text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-900'
                }`}>
                  <ul className="list-disc list-inside space-y-0.5" role="list">
                    {card.statistics.map((stat, index) => (
                      <li key={index} role="listitem">{stat}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      <ImageModal
        src={card.imageUrl}
        alt={getImageAltText(card)}
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          imageRef.current?.focus();
        }}
      />
    </>
  );
}