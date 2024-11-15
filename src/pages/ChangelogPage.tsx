import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function ChangelogPage() {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link 
        to="/"
        className={`inline-flex items-center gap-2 mb-6 px-3 py-2 rounded-lg ${
          isDarkMode ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'
        } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4526CE] dark:focus-visible:ring-white transition-colors`}
      >
        <ArrowLeft className="w-5 h-5" aria-hidden="true" />
        <span>Back to Home</span>
      </Link>

      <main id="main-content" className={`space-y-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        <h1 
          className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          tabIndex={0}
        >
          Changelog
        </h1>

        <section>
          <h2 
            className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            tabIndex={0}
          >
            Version 1.0.2 - Accessibility Enhancements
          </h2>
          <div className="space-y-4">
            <div>
              <h3 
                className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
                tabIndex={0}
              >
                Changes:
              </h3>
              <ul 
                className="list-disc list-inside space-y-2 ml-2"
                role="list"
              >
                <li tabIndex={0}>Improved keyboard navigation throughout the application</li>
                <li tabIndex={0}>Enhanced 'Skip to main content' functionality for better screen reader support</li>
                <li tabIndex={0}>Added comprehensive alt text descriptions for all SOS Toon card images</li>
                <li tabIndex={0}>Optimised image modal layout for better accessibility</li>
                <li tabIndex={0}>Added feedback button with direct email link</li>
                <li tabIndex={0}>Improved focus management for modal dialogs</li>
                <li tabIndex={0}>Enhanced ARIA labels and roles for better screen reader navigation</li>
                <li tabIndex={0}>Optimised tab order for a more logical navigation flow</li>
                <li tabIndex={0}>Added proper heading hierarchy for better document structure</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 
            className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            tabIndex={0}
          >
            Version 1.0.1 - UI Improvements
          </h2>
          <div className="space-y-4">
            <div>
              <h3 
                className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
                tabIndex={0}
              >
                Changes:
              </h3>
              <ul 
                className="list-disc list-inside space-y-2 ml-2"
                role="list"
              >
                <li tabIndex={0}>Changed dark mode to be enabled by default for better visibility</li>
                <li tabIndex={0}>Added image enlargement feature when clicking on Toon images (Thanks to Reddit user No Cut)</li>
                <li tabIndex={0}>Fixed navigation and search container to the top for easier access</li>
                <li tabIndex={0}>Corrected spacing between navigation and search container on mobile devices</li>
                <li tabIndex={0}>Enhanced spacing between filter tags and search container</li>
                <li tabIndex={0}>Optimised spacing between SOS cards and filter tags</li>
                <li tabIndex={0}>Improved accessibility menu toggle behaviour</li>
                <li tabIndex={0}>Enhanced keyboard navigation and screen reader support</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 
            className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            tabIndex={0}
          >
            Version 1.0.0 - Initial Release
          </h2>
          <div className="space-y-4">
            <div>
              <h3 
                className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
                tabIndex={0}
              >
                Key Features:
              </h3>
              <ul 
                className="list-disc list-inside space-y-2 ml-2"
                role="list"
              >
                <li tabIndex={0}>
                  <span className="font-medium">Dark/Light Mode:</span> Automatically adjusts between light and dark themes based on user IP, with an 8pm-8am dark mode setting.
                </li>
                <li tabIndex={0}>
                  <span className="font-medium">Dyslexic-Friendly Font:</span> Toggle option for enhanced accessibility, ensuring better readability for users with dyslexia.
                </li>
                <li tabIndex={0}>
                  <span className="font-medium">AI-Built:</span> Fully constructed and optimised by AI, offering a streamlined and responsive experience.
                </li>
                <li tabIndex={0}>
                  <span className="font-medium">Categories for Quick Filtering:</span> Easily browse through SOS cards by specific categories, helping users find the exact SOS Toon they need with minimal effort.
                </li>
                <li tabIndex={0}>
                  <span className="font-medium">Search for Quick Filtering:</span> Efficient search function allowing users to locate specific SOS Toons instantly.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}