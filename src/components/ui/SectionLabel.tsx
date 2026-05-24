import { cn } from "@/lib/cn";

interface SectionLabelProps {
  label: string;
  className?: string;
}

export function SectionLabel({ label, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-4 mb-stack-sm", className)}>
      <div className="w-12 h-px bg-primary" />
      <span className="font-body text-label-sm text-primary uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}
