import React from "react";
import { cn } from "../../lib/utils";

interface LogoIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: "default" | "light";
}

export const LogoIcon: React.FC<LogoIconProps> = ({
  className,
  variant = "default",
  ...props
}) => {
  const src = variant === "light" ? "/logo-light.png" : "/logo.png";

  return (
    <img
      src={src}
      alt="InTouch Logo"
      className={cn("object-contain", className)}
      {...props}
    />
  );
};
