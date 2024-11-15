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
    <div className="max-w-3xl mx-auto px-4 py-8">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

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
        <div>
          <h1 
            className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            tabIndex={0}
          >
            Privacy Policy
          </h1>
          <p 
            className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            tabIndex={0}
          >
            Last updated: {formattedDate}
          </p>
        </div>

        <p tabIndex={0}>
          At Toon Rescue, we take your privacy seriously. This Privacy Policy describes how we collect, utilise, and protect your personal information when you use our website.
        </p>

        <section>
          <h2 
            className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            tabIndex={0}
          >
            Information We Collect
          </h2>
          <p tabIndex={0}>
            We use local storage to remember your preferences for dark mode and dyslexic font settings. Additionally, we utilise Google Analytics to understand how visitors interact with our website.
          </p>
        </section>

        <section>
          <h2 
            className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            tabIndex={0}
          >
            Google Analytics
          </h2>
          <p className="mb-2" tabIndex={0}>
            We use Google Analytics solely to understand website traffic and usage patterns. This helps us improve our service and user experience. We have configured our Google Analytics implementation to:
          </p>
          <ul 
            className="list-disc list-inside ml-4 space-y-1"
            role="list"
          >
            <li tabIndex={0}>Anonymise IP addresses</li>
            <li tabIndex={0}>Disable data sharing with Google</li>
            <li tabIndex={0}>Not collect any personally identifiable information</li>
            <li tabIndex={0}>Not sell or provide any collected data to third parties</li>
          </ul>
        </section>

        <section>
          <h2 
            className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            tabIndex={0}
          >
            How We Use Your Information
          </h2>
          <p tabIndex={0}>
            The preferences stored locally on your device are used solely to enhance your browsing experience by remembering your accessibility settings. Analytics data is used only to understand general usage patterns and improve our service.
          </p>
        </section>

        <section>
          <h2 
            className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            tabIndex={0}
          >
            Third-Party Services
          </h2>
          <p tabIndex={0}>
            We use Google Analytics with privacy-focused settings. We do not use any other third-party tracking services or analytics tools. The analytics data we collect is not shared with or sold to any third parties, including Google.
          </p>
        </section>

        <section>
          <h2 
            className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            tabIndex={0}
          >
            Contact Us
          </h2>
          <p tabIndex={0}>
            If you have any questions about our Privacy Policy, please contact us at{' '}
            <a 
              href="mailto:feedback@toonrescue.com?subject=Feedback%20for%20Toon%20Rescue"
              className={`underline hover:text-[#4526CE] dark:hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4526CE] dark:focus-visible:ring-white rounded px-1`}
            >
              feedback@toonrescue.com
            </a>.
          </p>
        </section>
      </main>
    </div>
  );
}