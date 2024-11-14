import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { SOSCard as SOSCardType } from '../data/sosCards';
import { useTheme } from '../context/ThemeContext';
import { ImageWithFallback } from './ImageWithFallback';
import { ImageModal } from './ImageModal';

interface Props {
  card: SOSCardType;
}

export function SOSCard({ card }: Props) {
  const { isDarkMode } = useTheme();
  const [showModal, setShowModal] = useState(false);

  const topAlignedToons = ['Flippy', 'Doctor Drift', 'Flim Flam'];

  return (
    <>
      <div className={`${
        isDarkMode 
          ? 'bg-gray-800 hover:bg-gray-750' 
          : 'bg-white hover:bg-gray-50'
      } rounded-lg shadow hover:shadow-md transition-all`}>
        <div className="flex items-start p-3 sm:p-4">
          <div 
            className="relative w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <ImageWithFallback 
              src={card.imageUrl} 
              alt={card.name}
              className={`w-full h-full object-cover rounded ${
                topAlignedToons.includes(card.name) ? 'object-top' : 'object-center'
              }`}
            />
          </div>
          
          <div className="ml-3 sm:ml-4 flex-grow min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className={`text-lg sm:text-xl font-bold leading-tight ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {card.name}
                  </h3>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    isDarkMode 
                      ? 'bg-blue-900/50 text-blue-100' 
                      : 'bg-[#2E1A87]/20 text-[#2E1A87]'
                  } whitespace-nowrap`}>
                    {card.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                </div>
                <div className="flex items-center mt-1">
                  {[...Array(card.stars)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#996D00] text-[#996D00]" />
                  ))}
                </div>
              </div>
            </div>
            
            <p className={`text-sm sm:text-base mt-1.5 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-900'
            }`}>
              {card.description}
            </p>
            
            {card.statistics && (
              <div className={`mt-1.5 text-xs sm:text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-900'
              }`}>
                <ul className="list-disc list-inside space-y-0.5">
                  {card.statistics.map((stat, index) => (
                    <li key={index}>{stat}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <ImageModal
        src={card.imageUrl}
        alt={card.name}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}