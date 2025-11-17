import { cn } from "@/lib/utils";

export function GlassCard({ className, children, hover = false, ...props }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10",
        "shadow-xl shadow-black/10",
        hover && "transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function GlassCardHeader({ className, children, ...props }) {
  return (
    <div
      className={cn("p-6 pb-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function GlassCardContent({ className, children, ...props }) {
  return (
    <div
      className={cn("p-6 pt-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}
