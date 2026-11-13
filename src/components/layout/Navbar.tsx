"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { navLinks } from "@/config/navigation";
import { MobileDrawer } from "./MobileDrawer";
import Link from "next/link";

export function Navbar({ activePath = "" }: { activePath?: string }) {
  const [activeSection, setActiveSection] = useState(activePath);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const link of navLinks) {
      const id = link.href.split("#")[1];
      if (!id) continue;
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(link.href);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <nav className="fixed z-50 top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl bg-[#121414]/90 backdrop-blur-md border border-outline-variant/40 rounded-full transition-all duration-300 ease-in-out shadow-lg h-14">
        <div className="flex justify-between items-center px-4 w-full h-full">
          {/* Brand */}
          <Link
            className="flex items-center h-full pl-4 md:pl-6"
            href="/"
            aria-label="Future Window — home"
          >
            <Image
              src="/logo.png"
              alt="Future Window logo"
              width={64}
              height={128}
              className="w-auto h-[80px] max-w-none object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body text-label-sm px-4 py-1.5 rounded-full transition-colors",
                  activeSection === link.href
                    ? "text-on-primary-container bg-primary-container font-bold shadow-sm"
                    : "text-on-surface/70 hover:text-primary hover:bg-surface-variant/40"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block pr-1">
            <Link
              className="inline-flex items-center justify-center px-5 py-2 bg-primary-container text-on-primary-container font-body text-label-sm rounded-full hover:bg-primary transition-colors uppercase tracking-wider"
              href="/#contact"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary pr-4 flex items-center"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              menu
            </span>
          </button>
        </div>
      </nav>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
