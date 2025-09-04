"use client";

import Image from "next/image";
import Link from "next/link";
import { scrollToId } from "../lib/scrollToId";

const HERO_IMG =
  "https://images.unsplash.com/photo-1529336953121-a1d0d9990fda?q=80&w=1600&auto=format&fit=crop"; // clean, brand-friendly placeholder

export default function Hero() {
  return (
    <section id="home" className="relative">
      {/* wide, airy hero with *spread* radial gradient */}
      <div className="container">
        <div
          className="
            relative overflow-hidden rounded-[28px]
            bg-hero-radial dark:bg-card-sheen
            ring-1 ring-black/5 dark:ring-white/5
            px-6 py-10 md:p-14
          "
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <h1 className="text-4xl/tight md:text-6xl font-extrabold tracking-tight text-[--ink]">
                Empowering Young
                <br />
                Entrepreneurs at CU
              </h1>

              <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-300">
                100+ Members · 20+ Startups · 15+ Events
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToId("membership")}
                  className="
                    inline-flex items-center justify-center rounded-xl
                    bg-brand-blue px-6 py-3 text-white font-semibold
                    shadow-lg shadow-brand-blue/30 transition
                    hover:translate-y-[-1px] hover:shadow-brand-blue/40
                    active:translate-y-0
                    animate-softpulse
                  "
                >
                  Join Us
                </button>

                <Link
                  href="#events"
                  className="
                    rounded-xl border border-zinc-300/60 dark:border-white/15
                    bg-white/70 dark:bg-white/5 backdrop-blur
                    px-6 py-3 font-semibold text-zinc-800 dark:text-zinc-100
                    shadow-sm hover:shadow-md hover:-translate-y-[1px]
                    transition
                  "
                >
                  Explore Events
                </Link>
              </div>
            </div>

            {/* Right image */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="overflow-hidden rounded-3xl ring-1 ring-black/5 dark:ring-white/10 bg-white/40 dark:bg-white/5">
                <Image
                  src={"/hero-illustration.png"}
                  alt="Students collaborating on a startup project"
                  width={1200}
                  height={900}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
              {/* subtle float shadow */}
              <div className="pointer-events-none absolute inset-x-10 -bottom-6 h-8 rounded-full bg-black/5 blur-xl dark:bg-white/10 animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}