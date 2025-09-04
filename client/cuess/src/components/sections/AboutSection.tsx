"use client";

import Image from "next/image";
import Section from "../Section";

export default function AboutSection() {
  return (
    <Section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          About CUESS
        </h2>
        <p className="text-lg text-black/70 max-w-3xl">
          Founded to empower student entrepreneurs at Chittagong University —
          through workshops, mentorship, incubation, and flagship events.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* left copy */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Mission &amp; Vision</h3>

            <p className="mb-3">
              <span className="font-semibold">Mission:</span> Support ideas → build
              startups → create impact.
            </p>
            <p className="mb-5">
              <span className="font-semibold">Vision:</span> Make entrepreneurship
              a practical path for CU students.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Workshops", "Mentorship", "Incubation", "Hackathons"].map(t => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* right visual */}
          <div className="relative">
            {/* image */}
            <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(0,0,0,.2)]">
              <Image
                src="/about.jpg"
                alt="CUESS activity"
                fill
                className="object-cover"
                priority
              />
              {/* quote pill */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl bg-white/80 backdrop-blur-md shadow-lg px-4 py-3 text-black/80">
                  “We help students go from <span className="font-semibold">idea</span> to{" "}
                  <span className="font-semibold">launch</span>.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}