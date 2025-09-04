"use client";

import { motion } from "framer-motion";
import Section from "../../components/Section";
import {
  Rocket,
  Presentation,
  FileChartColumn,
  BarChart3,
  Target,
  FlaskConical,
  UsersRound,
  FileText,
  DollarSign,
} from "lucide-react";

type Item = { icon: React.ReactNode; title: string; desc: string };

const READINESS: Item[] = [
  { icon: <Target className="h-5 w-5" />, title: "Readiness Assessment", desc: "Assess where your idea stands." },
  { icon: <Presentation className="h-5 w-5" />, title: "Pitch Deck Support", desc: "Design and storytelling help." },
  { icon: <FileText className="h-5 w-5" />, title: "Business Plan", desc: "From lean canvas to plan." },
  { icon: <BarChart3 className="h-5 w-5" />, title: "Market Research", desc: "Primary & secondary research." },
  { icon: <DollarSign className="h-5 w-5" />, title: "Financials", desc: "Basic models & forecasting." },
  { icon: <FileChartColumn className="h-5 w-5" />, title: "Valuation & IM", desc: "For advanced teams." },
];

const TRAINING: Item[] = [
  { icon: <UsersRound className="h-5 w-5" />, title: "Mentorship", desc: "1:1 guidance from mentors." },
  { icon: <Rocket className="h-5 w-5" />, title: "Bootcamps", desc: "Design, build, pitch." },
  { icon: <Presentation className="h-5 w-5" />, title: "Comms & Leadership", desc: "Talk, lead, negotiate." },
  { icon: <Target className="h-5 w-5" />, title: "Case Competitions", desc: "Solve real problems." },
];

const IMPACT: Item[] = [
  { icon: <FlaskConical className="h-5 w-5" />, title: "Innovation Lab", desc: "Student-led experiments." },
  { icon: <BarChart3 className="h-5 w-5" />, title: "Data & Insights", desc: "Customer journey research." },
  { icon: <Rocket className="h-5 w-5" />, title: "Social Impact", desc: "Sustainability projects." },
  { icon: <FileText className="h-5 w-5" />, title: "Publications", desc: "Reports & playbooks." },
];

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, duration: 0.35 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function WhatWeDoSection() {
  return (
    <Section id="whatwedo">
      <h2>What We Do</h2>

      {/* Readiness */}
      <div className="mt-6 rounded-3xl border bg-white p-6 md:p-8">
        <h3 className="text-lg font-semibold">Startup Readiness</h3>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {READINESS.map((it) => (
            <motion.li
              key={it.title}
              variants={item}
              className="group rounded-2xl border bg-white p-4 transition hover:shadow-card"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#00E6A81A] text-black">{it.icon}</div>
                <div>
                  <div className="font-medium">{it.title}</div>
                  <p className="text-sm text-black/60">{it.desc}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Training */}
      <div className="mt-6 rounded-3xl border bg-white p-6 md:p-8">
        <h3 className="text-lg font-semibold">Skill Development & Training</h3>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TRAINING.map((it) => (
            <motion.li
              key={it.title}
              variants={item}
              className="group rounded-2xl border bg-white p-4 transition hover:shadow-card"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#00E6A81A] text-black">{it.icon}</div>
                <div>
                  <div className="font-medium">{it.title}</div>
                  <p className="text-sm text-black/60">{it.desc}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Impact */}
      <div className="mt-6 rounded-3xl border bg-white p-6 md:p-8">
        <h3 className="text-lg font-semibold">Impact & Innovation</h3>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {IMPACT.map((it) => (
            <motion.li
              key={it.title}
              variants={item}
              className="group rounded-2xl border bg-white p-4 transition hover:shadow-card"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#00E6A81A] text-black">{it.icon}</div>
                <div>
                  <div className="font-medium">{it.title}</div>
                  <p className="text-sm text-black/60">{it.desc}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}