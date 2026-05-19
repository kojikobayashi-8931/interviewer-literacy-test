import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-body font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        {
          primary:
            "bg-accent text-white hover:bg-opacity-90 shadow-md hover:shadow-lg active:shadow-sm",
          secondary:
            "bg-main text-white hover:bg-opacity-90 shadow-md hover:shadow-lg",
          outline:
            "border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white",
        }[variant],
        {
          sm: "px-4 py-2 text-sm",
          md: "px-6 py-3 text-base",
          lg: "px-8 py-4 text-lg",
        }[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
