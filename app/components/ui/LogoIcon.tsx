import React from 'react';
import { cn } from '../../lib/utils';

interface LogoIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const LogoIcon: React.FC<LogoIconProps> = ({ className, ...props }) => {
  return (
    <img
      src="/logo.png"
      alt="InTouch Logo"
      className={cn("object-contain", className)}
      {...props}
    />
  );
};