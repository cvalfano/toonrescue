import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicyPage() {
  const { isDarkMode } = useTheme();
  const formattedDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

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
        <div>
          <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Privacy Policy
          </h1>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Last updated: {formattedDate}
          </p>
        </div>

        <p>
          At Toon Rescue, we take your privacy seriously. This Privacy Policy describes how we collect, utilise, and protect your personal information when you use our website.
        </p>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Information We Collect
          </h2>
          <p>
            We use local storage to remember your preferences for dark mode and dyslexic font settings. Additionally, we utilise Google Analytics to understand how visitors interact with our website.
          </p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Google Analytics
          </h2>
          <p className="mb-2">
            We use Google Analytics solely to understand website traffic and usage patterns. This helps us improve our service and user experience. We have configured our Google Analytics implementation to:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Anonymise IP addresses</li>
            <li>Disable data sharing with Google</li>
            <li>Not collect any personally identifiable information</li>
            <li>Not sell or provide any collected data to third parties</li>
          </ul>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            How We Use Your Information
          </h2>
          <p>
            The preferences stored locally on your device are used solely to enhance your browsing experience by remembering your accessibility settings. Analytics data is used only to understand general usage patterns and improve our service.
          </p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Third-Party Services
          </h2>
          <p>
            We use Google Analytics with privacy-focused settings. We do not use any other third-party tracking services or analytics tools. The analytics data we collect is not shared with or sold to any third parties, including Google.
          </p>
        </section>

        <section>
          <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Contact Us
          </h2>
          <p>
            If you have any questions about our Privacy Policy, please contact us at feedback@toonrescue.com.
          </p>
        </section>
      </div>
    </div>
  );
}