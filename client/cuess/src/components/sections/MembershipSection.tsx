"use client";

import Section from "../../components/Section";

export default function MembershipSection() {
  return (
    <Section id="join">
      <div className="mb-6">
        <h2>Become a Member</h2>
        <p className="lead mt-2">
          Training, mentorship, and a community to launch your ideas.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form */}
        <form
          className="space-y-4 rounded-3xl border bg-white p-6"
          onSubmit={(e)=>{ e.preventDefault(); alert("Thanks! We’ll reach out soon."); }}
        >
          <label className="block">
            <span className="mb-1 block text-sm text-black/70">Name</span>
            <input className="w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#0066FF]" />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm text-black/70">Email</span>
            <input type="email" className="w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#0066FF]" />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm text-black/70">Year / Dept</span>
            <input className="w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#0066FF]" />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm text-black/70">Why do you want to join?</span>
            <textarea rows={4} className="w-full resize-y rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#0066FF]" />
          </label>

          <div className="flex flex-wrap gap-3 pt-2">
            <button className="rounded-full bg-[#0066FF] px-5 py-2.5 text-white shadow transition hover:brightness-110">
              Submit
            </button>
            <a href="#events" className="rounded-full border px-5 py-2.5 text-[#0B3BFF] hover:bg-[#F5F8FF]">
              Explore Events
            </a>
          </div>
        </form>

        {/* Benefits (fills the space on desktop; stacks on mobile) */}
        <div className="rounded-3xl border bg-white p-6">
          <h3 className="text-lg font-semibold why-join">Why Join?</h3>
          <ul className="mt-4 grid gap-3">
            {[
              "Mentorship from founders & alumni",
              "Access to workshops and bootcamps",
              "Pitch support & incubation help",
              "Team-ups for hackathons and case comps",
              "Networking with investors & partners",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#00E6A8]" />
                <span className="text-black/75">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
