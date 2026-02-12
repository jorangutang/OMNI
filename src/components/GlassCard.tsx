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
      whileHover={hover ? { y: -4 } : {}}
      className={`glass rounded-xl p-4 sm:p-6 transition-all duration-300 ${scan ? 'scan-container' : ''} ${
        hover ? 'hover:border-ore/50 hover:shadow-lg hover:shadow-ore/10' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
