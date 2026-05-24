import { cn } from "@/lib/cn";
import { MaterialIcon } from "./MaterialIcon";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-primary-container text-on-primary-container",
    "hover:bg-primary rounded-sm",
    "px-8 py-4 ambient-shadow",
  ].join(" "),
  secondary: [
    "border border-primary text-primary",
    "rounded-full hover:bg-primary/5",
    "px-6 py-3",
  ].join(" "),
  ghost: "text-primary border-b border-primary/30 hover:border-primary pb-1",
};

export function Button({
  variant = "primary",
  href,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    "font-body text-label-sm font-semibold uppercase tracking-wider",
    "transition-all duration-300 group",
    variantStyles[variant],
    fullWidth && "w-full",
    className
  );

  const iconEl = icon && (
    <MaterialIcon
      name={icon}
      className={cn(
        "text-sm",
        iconPosition === "right" &&
          "group-hover:translate-x-1 transition-transform"
      )}
    />
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {iconPosition === "left" && iconEl}
        {children}
        {iconPosition === "right" && iconEl}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {iconPosition === "left" && iconEl}
      {children}
      {iconPosition === "right" && iconEl}
    </button>
  );
}
