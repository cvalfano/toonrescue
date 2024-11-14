import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { SOSCard } from '../data/sosCards';
import { ImageWithFallback } from './ImageWithFallback';

interface Props {
  cards: SOSCard[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function SearchBar({ cards, searchTerm, onSearchChange }: Props) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const suggestions = cards
    .filter(card => 
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      searchTerm.length > 0
    )
    .slice(0, 5);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="max-w-md mx-auto relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search SOS cards..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          className="w-full px-4 py-3 pl-12 pr-10 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colours"
          style={{ caretColor: 'white' }}
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/80" />
        {searchTerm && (
          <button
            onClick={() => {
              onSearchChange('');
              setShowSuggestions(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colours"
            aria-label="Clear search"
          >
            <X className="w-5 h-5 text-white/80 hover:text-white" />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg overflow-hidden z-50">
          {suggestions.map((card) => (
            <button
              key={card.id}
              onClick={() => {
                onSearchChange(card.name);
                setShowSuggestions(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 text-gray-900"
            >
              <ImageWithFallback
                src={card.imageUrl}
                alt={card.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-gray-900">{card.name}</div>
                <div className="text-sm text-gray-600">
                  {card.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}