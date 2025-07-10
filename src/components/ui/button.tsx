import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      className={cn(
        // Lily as background, Voodoo as text, and hover/focus
        "inline-flex items-center justify-center rounded-md bg-[#C4A7BB] px-4 py-2 text-sm font-medium text-[#4A3655] shadow transition-colors hover:bg-[#b495b0] focus:outline-none focus:ring-2 focus:ring-[#4A3655] focus:ring-offset-2 border border-[#C4A7BB] disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";
