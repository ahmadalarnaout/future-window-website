import { cn } from "@/lib/cn";

interface MaterialIconProps {
  name: string;
  filled?: boolean;
  className?: string;
}

export function MaterialIcon({
  name,
  filled = false,
  className,
}: MaterialIconProps) {
  return (
    <span
      className={cn("material-symbols-outlined", className)}
      style={{
        fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
      }}
    >
      {name}
    </span>
  );
}
