"use client";

import { motion, type Variants } from 'framer-motion';
import { ExhibitionCard } from './ExhibitionCard';
import type { ExhibitionItem } from '@/data/exhibitions';

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04
    }
  }
};

export function ExhibitionGrid({ 
  events
}: { 
  events: ExhibitionItem[] | any[]; 
}) {
  return (
    <motion.div 
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {events.map((event) => (
        <ExhibitionCard 
          key={event.id || event.slug || event.title} 
          event={event} 
        />
      ))}
    </motion.div>
  );
}

export default ExhibitionGrid;