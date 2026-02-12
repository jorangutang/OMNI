import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  scan?: boolean;
}

export function GlassCard({ children, className = '', hover = true, scan = false }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      className={`glass rounded-2xl p-6 sm:p-8 transition-all duration-300 ${scan ? 'scan-container' : ''} ${
        hover ? 'hover:border-black/20 hover:shadow-xl hover:shadow-black/5' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
