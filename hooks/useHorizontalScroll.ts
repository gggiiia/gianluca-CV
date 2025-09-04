import { useRef, useEffect } from 'react';

/**
 * A custom React hook that converts vertical scroll events (mouse wheel)
 * into horizontal scrolling on the referenced element, only on large screens.
 * 
 * @returns A ref object to be attached to the scrollable container element.
 */
export function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        // Only apply horizontal scroll on large screens (lg breakpoint: 1024px)
        if (window.innerWidth < 1024) {
          return;
        }
        
        // Prevent the default vertical scroll behavior
        e.preventDefault();
        // Apply the vertical scroll delta to the horizontal scroll position
        el.scrollLeft += e.deltaY;
      };

      // Add the event listener. { passive: false } is important to allow preventDefault().
      el.addEventListener('wheel', onWheel, { passive: false });
      
      // Cleanup function to remove the event listener when the component unmounts
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []); // The empty dependency array ensures this effect runs only once on mount and cleanup on unmount.

  return elRef;
}