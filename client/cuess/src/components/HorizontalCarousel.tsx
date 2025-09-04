// components/HorizontalCarousel.tsx
"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HorizontalCarousel({ children }:{ children: React.ReactNode }) {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (delta:number) => scroller.current?.scrollBy({ left: delta, behavior: "smooth" });

  return (
    <div className="relative">
      <button
        aria-label="Previous"
        onClick={() => scrollBy(-360)}
        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div
        ref={scroller}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 pb-1
                   [scrollbar-width:none] [-ms-overflow-style:none]
                   [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <button
        aria-label="Next"
        onClick={() => scrollBy(360)}
        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}