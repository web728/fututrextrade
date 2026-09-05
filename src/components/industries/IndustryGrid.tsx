"use client";

import { motion, type Variants } from 'framer-motion';
import type { Industry } from '@/types/content';
import { IndustryCard } from './IndustryCard';

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

export function IndustryGrid({ industries }: { industries: Industry[] }) {
  return (
    <div className="relative z-10 w-full">
      <motion.div 
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {industries.map((industry, index) => (
          <IndustryCard 
            key={industry.slug} 
            industry={industry} 
            index={index} 
          />
        ))}
      </motion.div>
    </div>
  );
}