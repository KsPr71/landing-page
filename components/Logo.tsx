import React from 'react';
import logoSrc from '../assets/logo2.png';

type LogoProps = {
  width: number;
  height: number;
};

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <div>
      <img
        src={logoSrc}
        alt="Logo"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Logo;