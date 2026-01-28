import { useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Variants } from 'framer-motion';

export const useScrollAnimation = (options?: { once?: boolean; amount?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    amount: options?.amount ?? 0.2,
  });

  return { ref, isInView };
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.4, 0.25, 1] as const,
    }
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.4, 0.25, 1] as const,
    }
  },
};

export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.4, 0.25, 1] as const,
    }
  },
};

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.4, 0.25, 1] as const,
    }
  },
};
