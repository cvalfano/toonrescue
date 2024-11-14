import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({ src, alt, className = '' }: Props) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100/10 rounded ${className}`}>
        <ImageOff className="w-6 h-6 text-gray-400/50" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isLoading ? 'animate-pulse bg-gray-200/10' : ''}`}
      onError={() => setError(true)}
      onLoad={() => setIsLoading(false)}
      loading="lazy"
    />
  );
}