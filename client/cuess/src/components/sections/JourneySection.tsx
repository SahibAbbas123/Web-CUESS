"use client";

import Section from "../../components/Section";
import { motion, useReducedMotion } from "framer-motion";

type Milestone = { year: string; title: string; blurb?: string };

const MILESTONES: Milestone[] = [
  { year: "2021", title: "Founded", blurb: "Student-led spark to enable builders at CU." },
  { year: "2023", title: "Startup Summit", blurb: "Our first large-scale showcase & networking." },
  { year: "2025", title: "Incubation Cohort", blurb: "Formal support for idea → launch teams." },
];

export default function JourneySection() {
  const shouldReduce = useReducedMotion();

  return (
    <Section id="journey">
      <div className="mb-6">
        <h2>Our Journey</h2>
        <p className="lead mt-2">Milestones that shaped CUESS.</p>
      </div>

      <div className="relative rounded-3xl border bg-white p-6 md:p-10">
        {/* vertical line */}
        <div className="absolute left-6 top-8 bottom-8 hidden w-px bg-black/10 md:block" />
        <ol className="grid gap-6">
          {MILESTONES.map((m, i) => (
            <motion.li
              key={m.year}
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative md:pl-16"
            >
              {/* node */}
              <div className="absolute left-6 top-3 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-brand shadow-[0_0_0_6px_rgba(0,102,255,0.15)] md:block" />
              <div className="flex items-start gap-3">
                <span className="rounded-full bg-black/5 px-3 py-1 text-sm">{m.year}</span>
                <div>
                  <div className="text-base font-semibold">{m.title}</div>
                  {m.blurb && <p className="mt-1 text-sm text-black/60">{m.blurb}</p>}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}