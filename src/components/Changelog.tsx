import React from 'react';
import { X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function Changelog({ isOpen, onClose }: Props) {
  const { isDarkMode } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className={`relative w-full max-w-2xl rounded-lg shadow-lg ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } p-6 max-h-[90vh] overflow-y-auto`}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-200/20 transition-colors"
          aria-label="Close changelog"
        >
          <X className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} />
        </button>

        <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Changelog
        </h2>

        <div className={`space-y-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <div>
            <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Version 1.0.1 - UI Improvements
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className={`font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Changes:
                </h4>
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
            <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Version 1.0.0 - Initial Release
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className={`font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Key Features:
                </h4>
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
    </div>
  );
}