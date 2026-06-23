'use client';

import { useEffect, useState } from 'react';

/**
 * Detects whether the viewport is "mobile-sized" or the device is touch-only.
 * Used to gate heavier effects (particles, magnetic buttons, cursor glow)
 * so they only run on desktop pointer devices.
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isSmallScreen = window.innerWidth < breakpoint;
      const isTouchOnly =
        window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      setIsMobile(isSmallScreen || isTouchOnly);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, [breakpoint]);

  return isMobile;
}
