import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './ImageWithFallback';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AccessibilityMenu } from './AccessibilityMenu';

export function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-accessibility-menu]') && !target.closest('[data-accessibility-button]')) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <nav className="w-full h-14 sm:h-[84px] bg-[#4526CE] shadow-lg">
      <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-3 sm:px-4">
        <div className="flex-1" />
        <div className="flex justify-center flex-1">
          <button
            onClick={handleLogoClick}
            className="focus:outline-none hover:opacity-90 transition-opacity"
            aria-label="Go to homepage"
          >
            <ImageWithFallback
              src="https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/logo.png"
              alt="Toon Rescue"
              className="h-10 sm:h-14"
            />
          </button>
        </div>
        <div className="flex-1 flex justify-end items-center gap-2">
          <a
            href="mailto:feedback@toonrescue.com?subject=Feedback%20for%20Toon%20Rescue"
            className="p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Send feedback email"
          >
            <FontAwesomeIcon 
              icon={faEnvelope} 
              className="w-6 h-6 text-white" 
            />
          </a>
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-lg transition-colors ${
              showMenu ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
            aria-label="Toggle accessibility settings"
            aria-expanded={showMenu}
            data-accessibility-button
          >
            <FontAwesomeIcon 
              icon={faUniversalAccess} 
              className="w-6 h-6 text-white" 
            />
          </button>
          <AccessibilityMenu isOpen={showMenu} onClose={() => setShowMenu(false)} />
        </div>
      </div>
    </nav>
  );
}