import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { useScroll as useFramerScroll, useMotionValueEvent } from 'framer-motion';

interface ScrollContextType {
    isNavbarVisible: boolean;
    isArrowVisible: boolean;
    scrollToTop: () => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isArrowVisible, setIsArrowVisible] = useState(false);
    const { scrollY } = useFramerScroll();

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsNavbarVisible(true);
    }, []);

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() || 0;
        const diff = current - previous;
        const isScrollingDown = diff > 0;

        // Navbar Logic
        if (current < 10) {
            setIsNavbarVisible(true);
        } else if (isScrollingDown && current > 50) {
            setIsNavbarVisible(false);
        } else if (!isScrollingDown) {
            setIsNavbarVisible(true);
        }

        // Arrow Logic
        if (current > 300) {
            setIsArrowVisible(true);
        } else {
            setIsArrowVisible(false);
        }
    });

    return (
        <ScrollContext.Provider value={{ isNavbarVisible, isArrowVisible, scrollToTop }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = () => {
    const context = useContext(ScrollContext);
    if (!context) throw new Error('useScrollContext must be used within ScrollProvider');
    return context;
};

// Alias for compatibility
export const useScroll = useScrollContext;

// Validating that we can simply replace the file content.
