'use client';

import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, type MouseEvent } from 'react';

interface LightboxProps {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  category?: string;
}

export function Lightbox({ open, onClose, src, alt, category }: LightboxProps) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { 
      if (event.key === 'Escape') onClose(); 
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { 
      document.removeEventListener('keydown', onKey); 
      document.body.style.overflow = ''; 
    };
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div 
          className="fixed inset-0 z-[120] flex items-center justify-center bg-ink/95 backdrop-blur-2xl p-4 sm:p-8 md:p-12 cursor-zoom-out"
          role="dialog" 
          aria-modal="true" 
          aria-label={alt} 
          initial={reducedMotion ? false : { opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* Close Button Pill */}
          <button 
            type="button" 
            className="absolute top-6 right-6 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-red text-white border border-white/20 transition-all duration-300 active:scale-95 cursor-pointer shadow-2xl" 
            onClick={onClose} 
            aria-label="Close image preview"
          >
            <X size={20} />
          </button>

          {/* Centered Image Container */}
          <motion.div 
            className="relative w-full max-w-[1240px] h-[75vh] max-h-[820px] bg-ink-2 border border-white/10 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] cursor-default"
            style={{ borderRadius: '2px' }}
            initial={reducedMotion ? false : { scale: 0.94, opacity: 0, y: 15 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
          >
            <Image 
              src={src} 
              alt={alt} 
              fill 
              sizes="(max-width: 1400px) 95vw, 1200px" 
              className="object-contain object-center"
              priority
            />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink via-ink/80 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pointer-events-none">
              <div>
                {category && (
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-red block mb-1">
                    {category}
                  </span>
                )}
                <h3 className="font-heading font-extrabold text-white text-lg sm:text-xl tracking-tight m-0">
                  {alt}
                </h3>
              </div>
              <span className="text-xs text-muted-light font-mono hidden sm:block">
                Futurex Media Archive
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}