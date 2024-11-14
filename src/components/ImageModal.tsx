import React from 'react';
import { X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Props {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageModal({ src, alt, isOpen, onClose }: Props) {
  const { isDarkMode } = useTheme();

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full h-full max-h-[85vh] flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Close image"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}