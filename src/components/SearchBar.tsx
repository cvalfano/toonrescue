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
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<(HTMLButtonElement | null)[]>([]);

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > -1 ? prev - 1 : -1);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      const selectedCard = suggestions[selectedIndex];
      if (selectedCard) {
        onSearchChange(selectedCard.name);
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSelectedIndex(-1);
      inputRef.current?.blur();
    }
  };

  useEffect(() => {
    if (selectedIndex >= 0) {
      suggestionsRef.current[selectedIndex]?.scrollIntoView({
        block: 'nearest'
      });
    }
  }, [selectedIndex]);

  return (
    <div ref={wrapperRef} className="max-w-md mx-auto relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search SOS cards..."
          value={searchTerm}
          onChange={(e) => {
            onSearchChange(e.target.value);
            setSelectedIndex(-1);
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-3 pl-12 pr-10 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
          role="combobox"
          aria-expanded={showSuggestions}
          aria-controls="search-suggestions"
          aria-activedescendant={selectedIndex >= 0 ? `suggestion-${suggestions[selectedIndex]?.id}` : undefined}
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/80" aria-hidden="true" />
        {searchTerm && (
          <button
            onClick={() => {
              onSearchChange('');
              setShowSuggestions(false);
              setSelectedIndex(-1);
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5 text-white/80 hover:text-white" />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div 
          id="search-suggestions"
          className="absolute w-full mt-1 bg-white rounded-lg shadow-lg overflow-hidden z-50"
          role="listbox"
        >
          {suggestions.map((card, index) => (
            <button
              key={card.id}
              ref={el => suggestionsRef.current[index] = el}
              onClick={() => {
                onSearchChange(card.name);
                setShowSuggestions(false);
                setSelectedIndex(-1);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 ${
                index === selectedIndex ? 'bg-gray-100' : ''
              }`}
              role="option"
              aria-selected={index === selectedIndex}
              id={`suggestion-${card.id}`}
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