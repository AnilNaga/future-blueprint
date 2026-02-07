import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useScroll } from '@/context/ScrollContext';

const ScrollIndicator = () => {
    const { isArrowVisible, scrollToTop } = useScroll();

    return (
        <AnimatePresence>
            {isArrowVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{
                        opacity: 0.6,
                        y: [0, -6, 0], // Floating effect
                        scale: 1,
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileHover={{
                        opacity: 1,
                        scale: 1.1,
                        y: 0, // Reset floating on hover for stability
                        transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                        opacity: { duration: 0.4 },
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        scale: { duration: 0.3 }
                    }}
                    onClick={scrollToTop}
                    className="fixed z-[100] bottom-6 left-1/2 -translate-x-1/2 md:bottom-10 md:right-10 md:left-auto md:translate-x-0 group"
                    aria-label="Scroll to top"
                >
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#914694] border border-white/30 shadow-[0_8px_32px_rgba(145,70,148,0.4)] overflow-hidden transition-all duration-500 group-hover:bg-[#823f85] group-hover:scale-105">

                        {/* Subtle Shine/Highlight */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <ChevronUp
                            className="relative z-10 text-white transition-colors duration-300"
                            size={26}
                            strokeWidth={1.5}
                        />
                    </div>

                    {/* Minimalist soft glow with brand color */}
                    <div className="absolute -inset-2 bg-[#914694]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollIndicator;
