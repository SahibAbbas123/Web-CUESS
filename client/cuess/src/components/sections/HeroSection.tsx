"use client";

import Section from "../../components/Section";

export default function HeroSection() {
  return (
    <Section id="home" className="pt-8">
      <div className="rounded-3xl border bg-gradient-to-r from-[#E9FFF7]/70 via-white to-[#E6F1FF]/70 p-6 md:p-10">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          CU Entrepreneur & Startup Society
        </h1>
        <p className="mt-3 text-lg text-black/70 md:text-xl">
          Empowering young entrepreneurs at CU—learn, build, pitch.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#membership"
            className="rounded-full bg-[#0066FF] px-5 py-2.5 text-white shadow transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
          >
            Join Us
          </a>
          <a
            href="#events"
            className="rounded-full border border-[#A7B9FF] bg-white px-5 py-2.5 text-[#0B3BFF] shadow-sm transition hover:bg-[#F5F8FF]"
          >
            Explore Events
          </a>
        </div>
      </div>
    </Section>
  );
}