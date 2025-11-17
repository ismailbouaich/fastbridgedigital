import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-blue-500/10 text-blue-500 border border-blue-500/20",
        secondary: "bg-purple-500/10 text-purple-500 border border-purple-500/20",
        success: "bg-green-500/10 text-green-500 border border-green-500/20",
        warning: "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
        danger: "bg-red-500/10 text-red-500 border border-red-500/20",
        outline: "border border-white/20 text-white",
        gradient: "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export function Badge({ className, variant, children, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </span>
  );
}
