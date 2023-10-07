'use client'
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
 interface ScrollAnimationProps {
  children: ReactNode;
  className?: string; 
  variants: any;
}
const ScrollAnimation: React.FC<ScrollAnimationProps> = ({children, className, ...props}) => {
return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export { ScrollAnimation };
export function getScrollAnimation(duration = 2) {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration,
      },
    },
  };
}
