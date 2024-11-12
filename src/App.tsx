import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { SOSCard as SOSCardComponent } from './components/SOSCard';
import { AccessibilityToggles } from './components/AccessibilityToggles';
import { sosCards, SOSType } from './data/sosCards';
import { useTheme } from './context/ThemeContext';
import { useFont } from './context/FontContext';

function App() {
  const { isDarkMode } = useTheme();
  const { isDyslexicFont } = useFont();
  const [selectedType, setSelectedType] = useState<SOSType | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = sosCards.filter(card => {
    const matchesType = selectedType === 'all' ? true : card.type === selectedType;
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (b.stars !== a.stars) return b.stars - a.stars;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className={`min-h-screen flex flex-col relative w-full overflow-x-hidden ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    } ${isDyslexicFont ? 'font-dyslexic' : ''}`}>
      <header className="bg-[#2E1A87] text-white py-4 sm:py-6 px-3 sm:px-4 sticky top-0 z-10 shadow-lg w-full">
        <div className="max-w-5xl mx-auto relative">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-center">
              Toontown Rewritten SOS Cards
            </h1>
          </div>
          
          <SearchBar 
            cards={sosCards}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
      </header>

      <main className="flex-grow max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6 w-full">
        <FilterBar 
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />

        <div className="grid gap-2 sm:gap-4 mb-6">
          {sortedCards.map(card => (
            <SOSCardComponent key={card.id} card={card} />
          ))}
        </div>

        {sortedCards.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className={isDarkMode ? 'text-gray-200' : 'text-gray-900'}>
              No SOS cards found matching your criteria.
            </p>
            <button 
              onClick={() => {
                setSelectedType('all');
                setSearchTerm('');
              }}
              className="mt-3 sm:mt-4 text-[#2E1A87] hover:text-[#1E1166] font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-gray-100 py-4 sm:py-6 px-3 sm:px-4 mt-auto w-full">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <AccessibilityToggles />
          </div>
          <div className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-200">
            <p>© {new Date().getFullYear()} ToonRescue. All rights reserved.</p>
            <p>Fan-made tool - Not affiliated with Toontown Rewritten</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;