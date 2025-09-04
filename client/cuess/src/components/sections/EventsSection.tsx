"use client";

import Section from "../Section";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { events } from "../../data/event";

export default function EventsSection() {
  const [tab, setTab] = useState<"past" | "upcoming">("past");
  const list = events[tab];

  return (
    <Section id="events" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Events</h2>
            <p className="mt-3 text-muted-foreground">
              Workshops, hackathons, showcases — learn ✦ build ✦ pitch.
            </p>
          </div>

          <div className="flex gap-2">
            {(["past", "upcoming"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={[
                  "px-4 py-2 rounded-full border transition-all tab",
                  tab === k
                    ? "bg-blue-600 text-white shadow-[0_6px_30px_-10px_rgba(37,99,235,.7)]"
                    : "bg-white/70 backdrop-blur border-slate-200 hover:bg-white",
                ].join(" ")}
              >
                {k[0].toUpperCase() + k.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* horizontal carousel, no edge touching */}
        <div className="mt-8 overflow-x-auto no-scrollbar [-webkit-overflow-scrolling:touch]">
          <div className="flex gap-6 pr-6">
            {list.length === 0 && (
              <div className="w-full rounded-3xl border bg-white/70 p-16 text-center text-slate-500 shadow-sm">
                No {tab} events yet.
              </div>
            )}

            {list.map((e) => (
              <article
                key={e.id}
                className="group relative w-[320px] md:w-[520px] shrink-0 overflow-hidden rounded-3xl border bg-white shadow-sm transition"
              >
                <div className="relative h-44 md:h-64 w-full">
                  <Image
                    src={e.cover}
                    alt={e.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 520px"
                    priority={false}
                  />
                </div>

                <div className="flex items-center gap-3 border-t px-5 py-4">
                  <time className="text-sm text-slate-500">{e.date}</time>
                </div>
                <div className="px-5 pb-5">
                  <h3 className="text-lg md:text-xl font-semibold leading-snug">{e.title}</h3>
                  {e.link && (
                    <Link
                      href={e.link}
                      className="mt-3 inline-flex items-center text-blue-600 hover:underline"
                    >
                      Register →
                    </Link>
                  )}
                </div>

                {/* slight hover lift */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-0 transition group-hover:-translate-y-0.5 group-hover:shadow-lg" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}