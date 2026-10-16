import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all active:scale-95 disabled:opacity-50";

  const variants = {
    primary: "bg-brand-primary text-brand-secondary hover:opacity-90",
    secondary: "bg-brand-secondary text-brand-primary hover:bg-gray-100",
    outline: "border border-brand-secondary text-brand-secondary hover:bg-brand-primary hover:text-black/70",
    ghost: "bg-transparent text-brand-primary hover:bg-gray-100"
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
