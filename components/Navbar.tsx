"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Sample reflections", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8ddd2] bg-[#faf7f2]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6">
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          aria-label="SerenPath home"
          className="rounded-xl"
        >
          <BrandMark />
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-[#6f625a] md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md transition hover:text-[#2f2a26]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full bg-[#2f2a26] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#4a4038]"
          >
            Send a note
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8ddd2] text-[#2f2a26] md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#e8ddd2] bg-[#faf7f2] px-5 py-5 md:hidden"
        >
          <nav
            className="grid gap-4 text-sm font-medium text-[#6f625a]"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 transition hover:bg-[#f0e7dd] hover:text-[#2f2a26]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-2 rounded-full bg-[#2f2a26] px-5 py-3 text-center text-sm font-medium text-white"
              onClick={() => setIsOpen(false)}
            >
              Send a note
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
