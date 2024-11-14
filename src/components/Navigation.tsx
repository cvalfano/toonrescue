import React, { useState, useEffect } from 'react';
import { ImageWithFallback } from './ImageWithFallback';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { AccessibilityMenu } from './AccessibilityMenu';

export function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

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

  return (
    <nav className="fixed top-0 left-0 right-0 w-full h-14 sm:h-[84px] bg-[#4526CE] shadow-lg z-50">
      <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-3 sm:px-4">
        <div className="flex-1" />
        <div className="flex justify-center flex-1">
          <ImageWithFallback
            src="https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/logo.png"
            alt="Toon Rescue"
            className="h-10 sm:h-14"
          />
        </div>
        <div className="flex-1 flex justify-end">
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