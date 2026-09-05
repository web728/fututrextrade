"use client";

import { motion, type Variants } from 'framer-motion';
import type { Exhibition } from '@/types/exhibition';
import { ExhibitionCard } from './ExhibitionCard';

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

export function ExhibitionGrid({ 
  events, 
  editorial = false 
}: { 
  events: Exhibition[]; 
  editorial?: boolean;
}) {
  return (
    <motion.div 
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {events.map((event, index) => (
        <ExhibitionCard 
          key={event.slug} 
          event={event} 
          large={editorial && index === 0} 
        />
      ))}
    </motion.div>
  );
}