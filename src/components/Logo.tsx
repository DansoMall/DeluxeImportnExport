import React from 'react';

type LogoProps = {
  className?: string;
};

export function Logo({ className = 'h-10' }: LogoProps) {
  return (
    <span className={`inline-flex items-center rounded-2xl bg-white px-3 py-2 ${className}`}>
      <img
        src="/deluxe-logo.png"
        alt="Deluxe Import N Export"
        className="h-full w-auto object-contain" />

    </span>);

}

export function CompassMark({ className = 'h-24 w-24' }: LogoProps) {
  const points = Array.from({ length: 8 }, (_, i) => i * 360 / 8);
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.9">
        {points.map((angle) =>
        <g key={angle} transform={`rotate(${angle} 60 60)`}>
            <path d="M60 60 L60 14 L74 34 Z" />
            <path d="M60 60 L60 14 L46 34 Z" />
          </g>
        )}
        <circle cx="60" cy="60" r="46" />
        <circle cx="60" cy="60" r="14" />
      </g>
    </svg>);

}