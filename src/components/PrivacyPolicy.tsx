import React from 'react';
import { X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicy({ isOpen, onClose }: Props) {
  const { isDarkMode } = useTheme();

  if (!isOpen) return null;

  const formattedDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className={`relative w-full max-w-2xl rounded-lg shadow-lg ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } p-6 max-h-[90vh] overflow-y-auto`}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-200/20 transition-colours"
          aria-label="Close privacy policy"
        >
          <X className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} />
        </button>

        <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Privacy Policy
        </h2>
        
        <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Last updated: {formattedDate}
        </p>

        <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <p>
            At Toon Rescue, we take your privacy seriously. This Privacy Policy describes how we collect, utilise, and protect your personal information when you use our website.
          </p>

          <h3 className={`text-lg font-semibold mt-6 mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Information We Collect
          </h3>
          <p>
            We use local storage to remember your preferences for dark mode and dyslexic font settings. Additionally, we utilise Google Analytics to understand how visitors interact with our website.
          </p>

          <h3 className={`text-lg font-semibold mt-6 mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Google Analytics
          </h3>
          <p>
            We use Google Analytics solely to understand website traffic and usage patterns. This helps us improve our service and user experience. We have configured our Google Analytics implementation to:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Anonymise IP addresses</li>
            <li>Disable data sharing with Google</li>
            <li>Not collect any personally identifiable information</li>
            <li>Not sell or provide any collected data to third parties</li>
          </ul>

          <h3 className={`text-lg font-semibold mt-6 mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            How We Use Your Information
          </h3>
          <p>
            The preferences stored locally on your device are used solely to enhance your browsing experience by remembering your accessibility settings. Analytics data is used only to understand general usage patterns and improve our service.
          </p>

          <h3 className={`text-lg font-semibold mt-6 mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Third-Party Services
          </h3>
          <p>
            We use Google Analytics with privacy-focused settings. We do not use any other third-party tracking services or analytics tools. The analytics data we collect is not shared with or sold to any third parties, including Google.
          </p>

          <h3 className={`text-lg font-semibold mt-6 mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Contact Us
          </h3>
          <p>
            If you have any questions about our Privacy Policy, please contact us at feedback@toonrescue.com.
          </p>
        </div>
      </div>
    </div>
  );
}