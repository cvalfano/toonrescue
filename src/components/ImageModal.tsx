import React, { useEffect, useRef } from 'react';
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
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image of ${alt}`}
    >
      <div className="relative max-w-5xl w-full h-full max-h-[85vh] flex flex-col items-center justify-center">
        <div className="relative w-full flex justify-end mb-4">
          <button
            ref={closeButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close image"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        
        <div 
          className="relative w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}