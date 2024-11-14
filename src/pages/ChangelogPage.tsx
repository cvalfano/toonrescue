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
    <div className="max-w-3xl mx-auto px-4 py-8 mt-[84px]">
      <Link 
        to="/"
        className={`inline-flex items-center gap-2 mb-6 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        } hover:opacity-80 transition-opacity`}
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>

      <div className={`space-y-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Changelog
        </h1>

        <div>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Version 1.0.1 - UI Improvements
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Changes:
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Changed dark mode to be enabled by default for better visibility</li>
                <li>Added image enlargement feature when clicking on Toon images (Thanks to Reddit user No Cut)</li>
                <li>Fixed navigation and search container to the top for easier access</li>
                <li>Corrected spacing between navigation and search container on mobile devices</li>
                <li>Enhanced spacing between filter tags and search container</li>
                <li>Optimised spacing between SOS cards and filter tags</li>
                <li>Improved accessibility menu toggle behaviour</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Version 1.0.0 - Initial Release
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Key Features:
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <span className="font-medium">Dark/Light Mode:</span> Automatically adjusts between light and dark themes based on user IP, with an 8pm-8am dark mode setting.
                </li>
                <li>
                  <span className="font-medium">Dyslexic-Friendly Font:</span> Toggle option for enhanced accessibility, ensuring better readability for users with dyslexia.
                </li>
                <li>
                  <span className="font-medium">AI-Built:</span> Fully constructed and optimised by AI, offering a streamlined and responsive experience.
                </li>
                <li>
                  <span className="font-medium">Categories for Quick Filtering:</span> Easily browse through SOS cards by specific categories, helping users find the exact SOS Toon they need with minimal effort.
                </li>
                <li>
                  <span className="font-medium">Search for Quick Filtering:</span> Efficient search function allowing users to locate specific SOS Toons instantly.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}