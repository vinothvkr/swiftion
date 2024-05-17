import { useTheme } from '@mui/material/styles';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    restSpeed: 0.001,
  });

  return (
    <motion.div
      style={{
        left: 0,
        position: 'fixed',
        width: '100%',
        height: 5,
        background: theme.palette.primary.main,
        scaleX,
        transformOrigin: '0% 0%',
        zIndex: 1999,
      }}
    />
  );
}
