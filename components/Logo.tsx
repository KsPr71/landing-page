import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import logoSrc from '../assets/logo2.png';

type LogoProps = {
  width: number;
  height: number;
};

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative [perspective:1200px]"
      initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9, rotateX: -12 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              scale: 1,
              rotateX: [6, -6, 6],
              rotateY: [-14, 14, -14],
              y: [0, -8, 0],
            }
      }
      whileHover={shouldReduceMotion ? undefined : { rotateX: 0, rotateY: 0, scale: 1.06, y: -2 }}
      transition={
        shouldReduceMotion
          ? { duration: 0.4 }
          : { duration: 7, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
      }
    >
      <img
        src={logoSrc}
        alt="Logo"
        width={width}
        height={height}
        className="select-none drop-shadow-[0_22px_35px_rgba(14,165,233,0.35)]"
        style={{ transform: 'translateZ(28px)' }}
      />
    </motion.div>
  );
};

export default Logo;
