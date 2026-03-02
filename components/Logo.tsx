import React from 'react';

type LogoProps = {
  width: number;
  height: number;
};

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <div >
      <img
        
        src="./assets/logo2.png"
        alt="Logo"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Logo;