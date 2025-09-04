"use client";

import Section from "../Section";
import TeamCard from "../team/TeamCard";
import { useState } from "react";
import { team } from "../../data/team";

const tabs = Object.keys(team) as Array<keyof typeof team>;

export default function TeamSection() {
  const [active, setActive] = useState<keyof typeof team>("Founder");

  return (
    <Section id="team" className="scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Meet Our Team</h2>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-3">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={[
                "rounded-full border px-4 py-2 transition",
                active === t
                  ? "bg-blue-600 text-white shadow-[0_6px_30px_-10px_rgba(37,99,235,.7)]"
                  : "bg-white/70 backdrop-blur border-slate-200 hover:bg-white",
              ].join(" ")}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Horizontal scroller */}
        <div className="mt-8 overflow-x-auto no-scrollbar pb-2 [-webkit-overflow-scrolling:touch]">
          <div className="flex gap-6 pr-6">
            {team[active].map((m) => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}