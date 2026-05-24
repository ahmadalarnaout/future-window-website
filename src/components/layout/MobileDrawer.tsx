"use client";

import { useEffect } from "react";
import { cn } from "@/lib/cn";
import { navLinks } from "@/config/navigation";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileDrawer({ open, onClose, activeSection }: MobileDrawerProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-72 bg-surface-container border-l border-outline-variant/30 transition-transform duration-300 ease-in-out flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-outline-variant/20">
          <span className="font-heading text-title-md font-bold text-primary">
            Future Window
          </span>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              close
            </span>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "block px-4 py-3 rounded-lg font-body text-body-md transition-colors",
                activeSection === link.href
                  ? "text-primary bg-primary/10 font-medium border border-primary/20"
                  : "text-on-surface-variant hover:text-primary hover:bg-surface-variant/30"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 pb-8">
          <a
            href="#contact"
            onClick={onClose}
            className="flex items-center justify-center w-full px-5 py-3 bg-primary-container text-on-primary-container font-body text-label-sm rounded-full hover:bg-primary transition-colors uppercase tracking-wider"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}
