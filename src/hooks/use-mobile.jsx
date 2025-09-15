import { useBreakpoint, useMediaQuery } from './use-breakpoint.jsx';

/**
 * Hook for mobile device detection and mobile-specific functionality
 */
export function useMobile() {
  const { isMobile, isTablet, isDesktop, windowSize } = useBreakpoint();
  
  // Touch device detection
  const isTouchDevice = useMediaQuery('(pointer: coarse)');
  
  // Orientation detection
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isLandscape = useMediaQuery('(orientation: landscape)');
  
  // Hover capability detection
  const canHover = useMediaQuery('(hover: hover)');
  
  // High resolution display detection
  const isHighDPI = useMediaQuery('(min-resolution: 2dppx)');
  
  // Viewport size categories
  const isSmallScreen = windowSize.width <= 480;
  const isMediumScreen = windowSize.width > 480 && windowSize.width <= 768;
  const isLargeScreen = windowSize.width > 768;
  
  // Mobile breakpoints (more granular than general breakpoints)
  const isXSmobile = windowSize.width <= 320; // Very small phones
  const isSmallMobile = windowSize.width > 320 && windowSize.width <= 375; // Small phones
  const isMediumMobile = windowSize.width > 375 && windowSize.width <= 414; // Medium phones
  const isLargeMobile = windowSize.width > 414 && windowSize.width <= 480; // Large phones
  
  return {
    // Basic device categories
    isMobile,
    isTablet,
    isDesktop,
    
    // Touch and interaction capabilities
    isTouchDevice,
    canHover,
    
    // Orientation
    isPortrait,
    isLandscape,
    
    // Display quality
    isHighDPI,
    
    // Screen size categories
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    
    // Mobile size categories
    isXSmobile,
    isSmallMobile,
    isMediumMobile,
    isLargeMobile,
    
    // Combined mobile checks
    isMobileDevice: isMobile || isTouchDevice,
    isMobilePortrait: isMobile && isPortrait,
    isMobileLandscape: isMobile && isLandscape,
    
    // Viewport dimensions
    viewport: {
      width: windowSize.width,
      height: windowSize.height,
      aspectRatio: windowSize.width / windowSize.height,
    },
  };
}

/**
 * Hook for mobile-first responsive design patterns
 */
export function useMobileFirst(values) {
  const { windowSize } = useBreakpoint();
  
  // Mobile-first approach: start from smallest and work up
  let result = values.mobile || values.default;
  
  if (windowSize.width >= 480 && values.mobileLg) {
    result = values.mobileLg;
  }
  if (windowSize.width >= 640 && values.tablet) {
    result = values.tablet;
  }
  if (windowSize.width >= 768 && values.tabletLg) {
    result = values.tabletLg;
  }
  if (windowSize.width >= 1024 && values.desktop) {
    result = values.desktop;
  }
  if (windowSize.width >= 1280 && values.desktopLg) {
    result = values.desktopLg;
  }
  if (windowSize.width >= 1400 && values.desktopXl) {
    result = values.desktopXl;
  }
  
  return result;
}

/**
 * Hook for detecting if we're likely on a mobile device
 * Uses multiple heuristics for better detection
 */
export function useMobileDetection() {
  const { isMobile, isTouchDevice } = useMobile();
  
  // User agent detection (fallback)
  const isMobileUA = typeof navigator !== 'undefined' && 
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Check for mobile-specific features
  const hasTouchEvents = typeof window !== 'undefined' && 'ontouchstart' in window;
  const hasOrientationChange = typeof window !== 'undefined' && 'orientation' in window;
  
  // Combined mobile detection
  const isProbablyMobile = isMobile || isTouchDevice || isMobileUA || 
    (hasTouchEvents && hasOrientationChange);
  
  return {
    isMobile,
    isTouchDevice,
    isMobileUA,
    hasTouchEvents,
    hasOrientationChange,
    isProbablyMobile,
    
    // Confidence level (0-1)
    confidence: [isMobile, isTouchDevice, isMobileUA, hasTouchEvents, hasOrientationChange]
      .filter(Boolean).length / 5,
  };
}

// Legacy compatibility
const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const { isMobile } = useMobile();
  return isMobile;
}

export default useMobile;
