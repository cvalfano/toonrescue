import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';

export function Navigation() {
  return (
    <nav className="w-full py-4 px-3 sm:px-4 bg-[#4526CE] shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-center items-center">
        <ImageWithFallback
          src="https://raw.githubusercontent.com/cvalfano/toonrescue/main/images/logo.png"
          alt="Toon Rescue"
          className="h-12 sm:h-14"
        />
      </div>
    </nav>
  );
}