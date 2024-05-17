import useResponsive from './useResponsive';

export default function useScreenDetector() {
  const isDesktop = useResponsive('up', 'md');
  const isTablet = useResponsive('between', 'sm', 'md');
  const isMobile = useResponsive('down', 'sm');

  return { isDesktop, isTablet, isMobile };
}
