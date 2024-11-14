import React from 'react';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { SOSCard } from './components/SOSCard';
import { AccessibilityToggles } from './components/AccessibilityToggles';
import { sosCards, SOSType } from './data/sosCards';
import { Navigation } from './components/Navigation';
import { useTheme } from './context/ThemeContext';
import { useFont } from './context/FontContext';
import { useState } from 'react';
import { Changelog } from './components/Changelog';
import { PrivacyPolicy } from './components/PrivacyPolicy';

export default function App() {
  const [selectedType, setSelectedType] = useState<SOSType | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showChangelog, setShowChangelog] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const { isDarkMode } = useTheme();
  const { isDyslexicFont } = useFont();

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
      <Navigation />
      
      <header className="bg-[#4526CE] text-white py-4 sm:py-6 px-3 sm:px-4 shadow-lg w-full">
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

      <main className={`flex-grow max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6 w-full ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        <FilterBar 
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />

        <div className="grid gap-2 sm:gap-4 mb-6">
          {sortedCards.map(card => (
            <SOSCard key={card.id} card={card} />
          ))}
        </div>

        {sortedCards.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p>
              No SOS cards found matching your criteria.
            </p>
            <button 
              onClick={() => {
                setSelectedType('all');
                setSearchTerm('');
              }}
              className="mt-3 sm:mt-4 text-[#4526CE] hover:text-[#3419A7] font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      <footer className="bg-[#4526CE] text-white py-6 w-full mt-auto">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 text-center space-y-4">
          <div className="flex justify-center">
            <AccessibilityToggles />
          </div>
          
          <p className="text-xs sm:text-sm">
            Not affiliated with Toontown Rewritten, ToonHQ or Disney
          </p>
          
          <div className="text-xs sm:text-sm">
            <a 
              href="mailto:feedback@toonrescue.com"
              className="text-white hover:text-blue-200 transition-colors underline"
              aria-label="Send feedback email"
            >
              Give Feedback
            </a>
            <span className="mx-2">•</span>
            <button
              onClick={() => setShowChangelog(true)}
              className="text-white hover:text-blue-200 transition-colors underline"
            >
              Changelog
            </button>
            <span className="mx-2">•</span>
            <button
              onClick={() => setShowPrivacyPolicy(true)}
              className="text-white hover:text-blue-200 transition-colors underline"
            >
              Privacy Policy
            </button>
          </div>

          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} ToonRescue. All rights reserved.
          </p>
        </div>
      </footer>

      <Changelog isOpen={showChangelog} onClose={() => setShowChangelog(false)} />
      <PrivacyPolicy isOpen={showPrivacyPolicy} onClose={() => setShowPrivacyPolicy(false)} />
    </div>
  );
}