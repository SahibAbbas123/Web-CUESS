// src/components/Nav.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

const items = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Join", href: "#membership" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b">
      <nav className="container h-14 flex items-center justify-between">
        <Link href="#" className="font-semibold">CUESS</Link>
        <div className="hidden md:flex gap-6">
          {items.map(i => (
            <a key={i.href} href={i.href} className="hover:text-brand transition">
              {i.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden p-2 rounded-lg border"
          onClick={() => setOpen(p => !p)}
          aria-label="Toggle menu"
        >☰</button>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-white/80 backdrop-blur pb-3">
          <div className="container flex flex-col py-2">
            {items.map(i => (
              <a key={i.href} href={i.href} className="py-2" onClick={() => setOpen(false)}>
                {i.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}