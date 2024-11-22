import { Routes, Route, Link } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { SOSCard } from './components/SOSCard';
import { Navigation } from './components/Navigation';
import { useTheme } from './context/ThemeContext';
import { useFont } from './context/FontContext';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ChangelogPage } from './pages/ChangelogPage';
import { sosCards, SOSType } from './data/sosCards';
import { useState } from 'react';

function Footer() {
  return (
    <footer className="bg-[#4526CE] text-white py-6 w-full" role="contentinfo">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 text-center space-y-4">
        <p className="text-xs sm:text-sm">
          Not affiliated with Toontown Rewritten, ToonHQ or Disney
        </p>

        <nav aria-label="Footer Navigation">
          <ul className="flex justify-center items-center space-x-2 text-xs sm:text-sm">
            <li>
              <a 
                href="mailto:feedback@toonrescue.com?subject=Feedback%20for%20Toon%20Rescue"
                className="text-white hover:text-blue-200 transition-colors underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-2 py-1"
                aria-label="Send feedback email"
              >
                Give Feedback
              </a>
            </li>
            <li aria-hidden="true">•</li>
            <li>
              <Link
                to="/changelog"
                className="text-white hover:text-blue-200 transition-colors underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-2 py-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                Changelog (v1.0.5)
              </Link>
            </li>
            <li aria-hidden="true">•</li>
            <li>
              <Link
                to="/privacy"
                className="text-white hover:text-blue-200 transition-colors underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-2 py-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

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
      <div className="bg-[#4526CE] text-white py-4 sm:py-6 px-3 sm:px-4 shadow-lg" role="banner">
        <div className="max-w-5xl mx-auto relative">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
            Toontown Rewritten SOS Cards
          </h1>
          
          <SearchBar 
            cards={sosCards}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
      </div>

      <main id="main-content" className={`flex-grow max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6 w-full ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        <div className="mb-4 sm:mb-6">
          <FilterBar 
            selectedType={selectedType}
            onTypeChange={setSelectedType}
          />
        </div>

        <div 
          className="grid gap-2 sm:gap-4 mb-6" 
          role="list" 
          aria-label="SOS Cards"
        >
          {sortedCards.map((card, index) => (
            <SOSCard key={card.id} card={card} index={index} />
          ))}
        </div>

        {sortedCards.length === 0 && (
          <div className="text-center py-8 sm:py-12" role="alert">
            <p>
              No SOS cards found matching your criteria.
            </p>
            <button 
              onClick={() => {
                setSelectedType('all');
                setSearchTerm('');
              }}
              className="mt-3 sm:mt-4 text-[#4526CE] hover:text-[#3419A7] focus:text-[#3419A7] font-medium p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4526CE] dark:focus-visible:ring-white"
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
      isDarkMode ? 'bg-gray-900 dark' : 'bg-gray-200'
    } ${isDyslexicFont ? 'font-dyslexic' : ''}`}>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      
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