import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase",
  {
    variants: {
      variant: {
        glass:
          "bg-white/10 backdrop-blur-md border border-white/20 text-brand-light shadow-md",
        dark: "bg-white/5 border border-brand-primary/30 text-brand-primary shadow-sm",
        light:
          "bg-white border border-brand-primary/30 text-brand-dark shadow-sm",
        solid: "bg-brand-primary text-white shadow-md",
      },
    },
    defaultVariants: {
      variant: "glass",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
        {...props}
      >
        {icon}
        <span>{children}</span>
      </div>
    );
  }
);
Badge.displayName = "Badge";
