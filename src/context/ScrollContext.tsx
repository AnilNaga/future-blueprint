import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface ScrollContextType {
    isNavbarVisible: boolean;
    isArrowVisible: boolean;
    scrollToTop: () => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isArrowVisible, setIsArrowVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        // Instant reveal navbar when scrolling to top via button
        setIsNavbarVisible(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Navbar visibility logic
            let nextNavbarVisible = isNavbarVisible;
            if (currentScrollY < 10) {
                nextNavbarVisible = true;
            } else if (currentScrollY > lastScrollY) {
                // Scrolling down
                nextNavbarVisible = false;
            } else {
                // Scrolling up
                nextNavbarVisible = true;
            }
            setIsNavbarVisible(nextNavbarVisible);

            // Arrow visibility logic: appear when navbar disappears AND we are deep enough
            // OR stay sticky if we reached a significant depth
            const scrollPercentage = (currentScrollY / (documentHeight - windowHeight)) * 100;
            if (!nextNavbarVisible && currentScrollY > 300) {
                setIsArrowVisible(true);
            } else if (currentScrollY < 100) {
                setIsArrowVisible(false);
            } else if (scrollPercentage > 40) {
                // Keep it sticky past 40% even if navbar shows? 
                // Let's stick to user request: "visible when nav bar disappear"
                // But keep sticky past 40 for "return to top" utility.
                setIsArrowVisible(true);
            } else if (nextNavbarVisible && scrollPercentage <= 40) {
                setIsArrowVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <ScrollContext.Provider value={{ isNavbarVisible, isArrowVisible, scrollToTop }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (context === undefined) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
};
