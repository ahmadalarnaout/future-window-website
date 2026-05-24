import { cn } from "@/lib/cn";

interface SaduPatternProps {
  opacity?: number;
  className?: string;
}

export function SaduPattern({
  opacity = 30,
  className,
}: SaduPatternProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 sadu-pattern pointer-events-none",
        className
      )}
      style={{ opacity: opacity / 100 }}
    />
  );
}
