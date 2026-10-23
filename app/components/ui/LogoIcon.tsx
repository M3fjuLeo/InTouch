import React from "react";
import { cn } from "../../lib/utils";
import { siteConfig } from "../../lib/siteConfig";

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
      alt={`${siteConfig.name} logo`}
      className={cn("object-contain", className)}
      {...props}
    />
  );
};
