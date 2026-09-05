'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { Maximize2, Camera, Layers, Sparkles } from 'lucide-react';
import { galleryItems } from '@/data/gallery';
import { Lightbox } from '@/components/ui/Lightbox';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

export function GallerySection({ full = false }: { full?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  
  // Extract Unique Categories dynamically
  const categories = useMemo(() => {
    const rawCategories = galleryItems.map(item => item.category);
    return ['ALL', ...Array.from(new Set(rawCategories))];
  }, []);

  // Filter Items
  const filteredItems = useMemo(() => {
    const baseItems = full ? galleryItems : galleryItems.slice(0, 5);
    if (activeCategory === 'ALL') return baseItems;
    return baseItems.filter(item => item.category.toUpperCase() === activeCategory.toUpperCase());
  }, [full, activeCategory]);

  const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null);

  return (
    <section className="relative z-20 w-full bg-slate-50 text-slate-900 py-16 sm:py-28 overflow-hidden border-t border-slate-200">
      {/* Precision Structural Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 mb-10 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full mb-4 shadow-xs">
              <Camera className="w-3.5 h-3.5 text-[#E3131B]" />
              <span className="text-[10px] font-mono font-extrabold tracking-[0.2em] uppercase text-slate-600">
                EXHIBITION VISUAL ARCHIVE
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-tight m-0">
              Moments From The <span className="text-[#E3131B]">Trade Floor</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-slate-500 bg-slate-100/80 px-4 py-2 rounded-xl border border-slate-200 self-start lg:self-auto">
            <Sparkles className="w-4 h-4 text-[#E3131B]" />
            <span>SAARC & EAST AFRICA GALLERIES</span>
          </div>
        </div>

        {/* Category Filter Pills (Only shown when full page view is active) */}
        {full && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#E3131B] text-white shadow-md shadow-[#E3131B]/20 scale-105'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Bento Visual Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[240px] sm:auto-rows-[270px]"
          >
            {filteredItems.map((item, index) => {
              const isFeatured = index === 0 && activeCategory === 'ALL';
              return (
                <motion.button 
                  key={item.id} 
                  type="button" 
                  variants={itemVariants}
                  onClick={() => setSelected(item)}
                  className={`group relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden text-left border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#E3131B]/50 transition-all duration-500 cursor-pointer ${
                    isFeatured ? 'sm:col-span-2 sm:row-span-2' : 'col-span-1 row-span-1'
                  }`}
                  aria-label={`View ${item.title}`}
                >
                  {/* Visual Image Asset */}
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    sizes={isFeatured ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 50vw, 25vw'} 
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-mono font-black uppercase tracking-wider rounded-lg border border-white/20 group-hover:bg-[#E3131B] group-hover:text-white group-hover:border-[#E3131B] transition-colors duration-300 shadow-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Action Icon */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-lg">
                    <Maximize2 size={15} />
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className={`font-heading font-extrabold text-white leading-snug tracking-tight m-0 ${
                      isFeatured ? 'text-xl sm:text-2xl' : 'text-sm sm:text-base line-clamp-2'
                    }`}>
                      {item.title}
                    </h3>
                    {isFeatured && (
                      <p className="text-slate-300 text-xs mt-2 line-clamp-2 font-normal hidden sm:block leading-relaxed">
                        Capturing industrial machinery showcases, institutional delegations, and high-level trade partnerships.
                      </p>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Lightbox Popover Portal */}
      {selected ? (
        <Lightbox 
          open 
          src={selected.image} 
          alt={selected.title} 
          category={selected.category}
          onClose={() => setSelected(null)} 
        />
      ) : null}
    </section>
  );
}

export default GallerySection;