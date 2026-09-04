import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Link } from "../../../i18n/routing";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wider transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        // Zamiast hover:bg-brand-primary/90 używamy hover:opacity-90 lub hover:brightness-95.
        // Dzięki temu efekt hover zadziała na każdym zadeklarowanym kolorze tła (np. bg-primary-light).
        default:
          "bg-brand-primary text-white shadow-md hover:opacity-90 hover:scale-105 active:scale-95",
        outline:
          "border border-brand-primary text-brand-primary hover:opacity-80",
        ghost: "text-brand-primary hover:opacity-70 transition-opacity",
      },
      size: {
        default: "px-6 py-2.5 sm:px-7 sm:py-3 text-xs md:text-sm",
        sm: "px-4 py-2 text-xs",
        lg: "px-9 py-3.5 sm:px-11 sm:py-4 text-sm sm:text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonVariants> {
  href?: string;
  isExternal?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      href,
      isExternal,
      iconLeft,
      iconRight,
      children,
      ...props
    },
    ref
  ) => {
    const content = (
      <>
        {iconLeft}
        <span>{children}</span>
        {iconRight}
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant, size, className }))}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";
