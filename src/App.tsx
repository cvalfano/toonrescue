import { Routes, Route, Link } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { SOSCard } from './components/SOSCard';
import { Navigation } from './components/Navigation';
import { useTheme } from './context/ThemeContext';
import { useFont } from './context/FontContext';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ChangelogPage } from './pages/ChangelogPage';
import { AccessibilityToggles } from './components/AccessibilityToggles';
import { sosCards, SOSType } from './data/sosCards';
import { useState } from 'react';

function Footer() {
  return (
    <footer className="bg-[#4526CE] text-white py-6 w-full">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 text-center space-y-4">
        <p className="text-xs sm:text-sm">
          Not affiliated with Toontown Rewritten, ToonHQ or Disney
        </p>

        <p className="text-xs sm:text-sm">
          <a 
            href="mailto:feedback@toonrescue.com"
            className="text-white hover:text-blue-200 transition-colors underline"
            aria-label="Send feedback email"
          >
            Give Feedback
          </a>
          <span className="mx-2">•</span>
          <Link
            to="/changelog"
            className="text-white hover:text-blue-200 transition-colors underline"
          >
            Changelog
          </Link>
          <span className="mx-2">•</span>
          <Link
            to="/privacy"
            className="text-white hover:text-blue-200 transition-colors underline"
          >
            Privacy Policy
          </Link>
        </p>

        <p className="text-xs sm:text-sm">
          © {new Date().getFullYear()} ToonRescue. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Home() {
  const [selectedType, setSelectedType] = useState<SOSType | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkMode } = useTheme();

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
    <>
      <div className="fixed top-[56px] sm:top-[84px] left-0 right-0 bg-[#4526CE] text-white py-4 sm:py-6 px-3 sm:px-4 shadow-lg z-40">
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
      </div>

      <main className={`flex-grow max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6 w-full ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      } mt-[184px] sm:mt-[240px]`}>
        <div className="mb-4 sm:mb-6">
          <FilterBar 
            selectedType={selectedType}
            onTypeChange={setSelectedType}
          />
        </div>

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
    </>
  );
}

export default function App() {
  const { isDarkMode } = useTheme();
  const { isDyslexicFont } = useFont();

  return (
    <div className={`min-h-screen flex flex-col relative w-full overflow-x-hidden ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    } ${isDyslexicFont ? 'font-dyslexic' : ''}`}>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/changelog" element={<ChangelogPage />} />
      </Routes>

      <Footer />
    </div>
  );
}