"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- TEMP placeholders (swap to import from ../../data/events later) ---
type EventItem = {
  id: string;
  title: string;
  date: string;
  cover: string;
  href?: string;
  when: "upcoming" | "past";
};
const eventsSeed: EventItem[] = [
  {
    id: "e-p-1",
    title: "Startup Summit 2024",
    date: "Nov 25, 2024",
    when: "past",
    cover:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "e-p-2",
    title: "Design Sprint Night",
    date: "Aug 12, 2024",
    when: "past",
    cover:
      "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "e-u-1",
    title: "Public Speaking Workshop",
    date: "May 26, 2025",
    when: "upcoming",
    cover:
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=1600&auto=format&fit=crop",
  },
];
// ----------------------------------------------------------------------

const tabs = [
  { key: "past", label: "Past" },
  { key: "upcoming", label: "Upcoming" },
] as const;

export default function EventsSection() {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("past");
  const list = useMemo(
    () => eventsSeed.filter((e) => e.when === tab),
    [tab]
  );

  return (
    <section id="events" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Events</h2>
        <p className="mt-3 text-slate-600">
          Workshops, hackathons, showcases — learn ✦ build ✦ pitch.
        </p>

        <div className="mt-6 flex gap-3">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              data-active={tab === t.key}
              className="
                h-10 px-4 rounded-full text-sm font-medium
                border border-black/10 bg-white/70 backdrop-blur
                hover:bg-white/90 transition
                data-[active=true]:bg-blue-600 data-[active=true]:text-white
              "
            >
              {t.label}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="relative mt-8"
        >
          <div
            className="
              flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2
              [scrollbar-width:none] [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {list.length === 0 ? (
              <div className="
                w-full rounded-2xl border border-black/10 bg-white/60 backdrop-blur
                p-12 text-center snap-start
              ">
                <div className="mx-auto h-12 w-12 rounded-full bg-blue-100" />
                <p className="mt-4 text-lg font-medium">
                  {tab === "upcoming" ? "No upcoming events yet" : "No past events yet"}
                </p>
                <p className="text-slate-600">
                  {tab === "upcoming"
                    ? "Check back soon or follow our socials."
                    : "Stay tuned for highlights and recaps."}
                </p>
              </div>
            ) : (
              list.map((e) => (
                <a
                  key={e.id}
                  href={e.href ?? "#"}
                  className="
                    snap-start shrink-0 w-[78vw] sm:w-[360px] md:w-[400px]
                    rounded-3xl overflow-hidden
                    bg-white/70 backdrop-blur border border-black/10
                    shadow-[0_12px_30px_-12px_rgba(0,0,0,.18)]
                    hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,.22)]
                    transition
                  "
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={e.cover}
                      alt={e.title}
                      fill
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 360px, 400px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-sm text-slate-600">{e.date}</div>
                    <div className="text-lg font-semibold mt-1">{e.title}</div>
                  </div>
                </a>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}