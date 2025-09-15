import { useEffect, useState } from 'react';
import { designTokens } from '../lib/design-tokens';

/**
 * Custom hook for responsive breakpoint detection
 * Based on design system breakpoints
 */
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('');
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({ width, height });

      // Determine current breakpoint based on width
      if (width >= parseInt(designTokens.breakpoints['2xl'])) {
        setBreakpoint('2xl');
      } else if (width >= parseInt(designTokens.breakpoints.xl)) {
        setBreakpoint('xl');
      } else if (width >= parseInt(designTokens.breakpoints.lg)) {
        setBreakpoint('lg');
      } else if (width >= parseInt(designTokens.breakpoints.md)) {
        setBreakpoint('md');
      } else if (width >= parseInt(designTokens.breakpoints.sm)) {
        setBreakpoint('sm');
      } else if (width >= parseInt(designTokens.breakpoints.xs)) {
        setBreakpoint('xs');
      } else {
        setBreakpoint('base');
      }
    }

    // Call handler right away so state gets updated with initial window size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Convenience boolean checks
  const isXs = breakpoint === 'xs';
  const isSm = breakpoint === 'sm';
  const isMd = breakpoint === 'md';
  const isLg = breakpoint === 'lg';
  const isXl = breakpoint === 'xl';
  const is2Xl = breakpoint === '2xl';
  const isBase = breakpoint === 'base';

  // Range checks (up/down from breakpoint)
  const isXsUp = windowSize.width >= parseInt(designTokens.breakpoints.xs);
  const isSmUp = windowSize.width >= parseInt(designTokens.breakpoints.sm);
  const isMdUp = windowSize.width >= parseInt(designTokens.breakpoints.md);
  const isLgUp = windowSize.width >= parseInt(designTokens.breakpoints.lg);
  const isXlUp = windowSize.width >= parseInt(designTokens.breakpoints.xl);
  const is2XlUp = windowSize.width >= parseInt(designTokens.breakpoints['2xl']);

  const isXsDown = windowSize.width < parseInt(designTokens.breakpoints.sm);
  const isSmDown = windowSize.width < parseInt(designTokens.breakpoints.md);
  const isMdDown = windowSize.width < parseInt(designTokens.breakpoints.lg);
  const isLgDown = windowSize.width < parseInt(designTokens.breakpoints.xl);
  const isXlDown = windowSize.width < parseInt(designTokens.breakpoints['2xl']);

  // Mobile/tablet/desktop categories
  const isMobile = windowSize.width < parseInt(designTokens.breakpoints.md);
  const isTablet = windowSize.width >= parseInt(designTokens.breakpoints.md) && windowSize.width < parseInt(designTokens.breakpoints.lg);
  const isDesktop = windowSize.width >= parseInt(designTokens.breakpoints.lg);

  return {
    breakpoint,
    windowSize,
    
    // Exact breakpoint matches
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    isBase,

    // Range checks
    isXsUp,
    isSmUp,
    isMdUp,
    isLgUp,
    isXlUp,
    is2XlUp,

    isXsDown,
    isSmDown,
    isMdDown,
    isLgDown,
    isXlDown,

    // Device categories
    isMobile,
    isTablet,
    isDesktop,
  };
}

/**
 * Hook for getting current media query matches
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event) => setMatches(event.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

/**
 * Hook for detecting specific breakpoint ranges
 */
export function useBreakpointValue(values) {
  const { breakpoint } = useBreakpoint();
  
  // Order from largest to smallest for proper fallback
  const breakpointOrder = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs', 'base'];
  
  // Find the first matching breakpoint that has a value
  for (const bp of breakpointOrder) {
    if (values[bp] !== undefined) {
      if (bp === breakpoint || breakpointOrder.indexOf(breakpoint) < breakpointOrder.indexOf(bp)) {
        return values[bp];
      }
    }
  }
  
  // Return the first available value if no exact match
  return values[Object.keys(values)[0]];
}

export default useBreakpoint;