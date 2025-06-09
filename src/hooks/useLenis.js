// useLenis.js
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.3,
      easing: (t) => t,
      smooth: true,
      smoothTouch: false,
      wheelMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return lenisRef.current; // Return the Lenis instance
}
