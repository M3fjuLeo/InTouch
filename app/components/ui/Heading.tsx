import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const headingVariants = cva("font-serif-custom tracking-tight", {
  variants: {
    variant: {
      page: "text-4xl sm:text-5xl md:text-6xl font-normal leading-tight",
      section: "text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.15]",
      card: "text-2xl sm:text-3xl font-medium leading-tight",
    },
  },
  defaultVariants: {
    variant: "section",
  },
});

const defaultTags = {
  page: "h1",
  section: "h2",
  card: "h3",
} as const;

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4";
}

export const Heading: React.FC<HeadingProps> = ({
  as,
  variant,
  className,
  ...props
}) => {
  const Tag = as ?? defaultTags[variant ?? "section"];

  return (
    <Tag className={cn(headingVariants({ variant }), className)} {...props} />
  );
};
