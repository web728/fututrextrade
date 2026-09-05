"use client";

import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, copy, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`max-w-[760px] ${align === 'center' ? 'mx-auto text-center' : ''} mb-12 sm:mb-16`}>
      {/* Eyebrow Pill */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-paper border border-line mb-4 shadow-xs ${align === 'center' ? 'mx-auto' : ''}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-red" aria-hidden="true" />
        <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-muted">
          {eyebrow}
        </span>
      </div>

      {/* Main Section Title */}
      <h2 className="font-heading font-black text-ink text-3xl sm:text-4xl lg:text-[46px] leading-[1.1] tracking-[-0.035em] mb-4">
        {title}
      </h2>

      {/* Paragraph Copy */}
      {copy && (
        <p className="text-muted text-sm sm:text-base leading-[1.7] max-w-[620px] m-0 font-normal">
          {copy}
        </p>
      )}
    </div>
  );
}

// Fallback in case another file uses default import
export default SectionHeading;