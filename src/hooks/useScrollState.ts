import { useState, useEffect, useCallback } from 'react';

export const useScrollState = () => {
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

            // Arrow visibility logic: appear after ~40% of page scroll and stay until back at top
            const scrollPercentage = (currentScrollY / (documentHeight - windowHeight)) * 100;
            if (scrollPercentage > 40) {
                setIsArrowVisible(true);
            } else if (currentScrollY < 100) {
                setIsArrowVisible(false);
            }

            // Navbar visibility logic
            if (currentScrollY < 10) {
                setIsNavbarVisible(true);
            } else if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsNavbarVisible(false);
            } else {
                // Scrolling up
                setIsNavbarVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return { isNavbarVisible, isArrowVisible, scrollToTop };
};
