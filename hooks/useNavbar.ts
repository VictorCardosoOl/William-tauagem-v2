import { useState, useEffect, useRef } from 'react';

export const useNavbar = (isExpanded: boolean) => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      
      // Show on scroll up or at top
      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setIsVisible(true);
      } 
      // Hide on scroll down (if menu is closed)
      else if (currentScrollY > lastScrollY.current && !isExpanded) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
      resetInactivityTimer();
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    const handleMouseMove = () => {
      if (!isVisible && !isExpanded) {
        setIsVisible(true);
        resetInactivityTimer();
      }
    };

    const resetInactivityTimer = () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      if (!isExpanded) {
        inactivityTimer.current = setTimeout(() => {
          if (window.scrollY > 50) setIsVisible(false);
        }, 4000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    };
  }, [isVisible, isExpanded]);

  return { isVisible };
};
