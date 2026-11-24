import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'حقيبة كتف مضادة للسرقة',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EFEFEA] to-[#E2E2DC] text-[#52525B] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <ShieldCheck className="w-10 h-10 mb-3 text-[#9A5B32]" strokeWidth={1.5} />
        <span className="font-display font-semibold text-sm text-[#141619]">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
