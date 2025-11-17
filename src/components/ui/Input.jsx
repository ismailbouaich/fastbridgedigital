import { cn } from "@/lib/utils";

export function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg border border-gray-300 dark:border-gray-700",
        "bg-white dark:bg-gray-900/50 px-4 py-3 text-base",
        "text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400",
        "transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-gray-300 dark:border-gray-700",
        "bg-white dark:bg-gray-900/50 px-4 py-3 text-base",
        "text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400",
        "transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "resize-none",
        className
      )}
      {...props}
    />
  );
}

export function Label({ className, children, ...props }) {
  return (
    <label
      className={cn(
        "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
