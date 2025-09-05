"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  yearDept: string;
  message: string;
};

export default function MembershipSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    yearDept: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  const API =
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:4000";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${API}/api/memberships`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || `Request failed (${res.status})`);
      }

      setStatus("success");
      // clear only after success
      setForm({ name: "", email: "", yearDept: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong");
    } finally {
      // auto-hide status after a bit
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="join" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 md:mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Become a Member
          </h2>
          <p className="mt-2 text-zinc-600">
            Training, mentorship, and a community to launch your ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left: Form card */}
          <div className="rounded-3xl bg-white/70 p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,.15)] backdrop-blur md:p-8">
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Name
                </label>
                <input
                  className="block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-300 focus:shadow-[0_0_0_4px_rgba(0,102,255,.08)]"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-300 focus:shadow-[0_0_0_4px_rgba(0,102,255,.08)]"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Year / Dept
                </label>
                <input
                  className="block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-300 focus:shadow-[0_0_0_4px_rgba(0,102,255,.08)]"
                  value={form.yearDept}
                  onChange={(e) => setForm({ ...form, yearDept: e.target.value })}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Why do you want to join?
                </label>
                <textarea
                  rows={4}
                  className="block w-full resize-y rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-300 focus:shadow-[0_0_0_4px_rgba(0,102,255,.08)]"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {/* Actions + statuses */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-2xl bg-[#0B63FF] px-5 py-3 font-semibold text-white shadow-[0_8px_24px_-8px_rgba(11,99,255,.55)] transition-all hover:brightness-[1.05] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "Submitting…" : "Submit"}
                </button>

                <a
                  href="#events"
                  className="inline-flex items-center justify-center rounded-2xl border border-blue-200 bg-white px-5 py-3 font-semibold text-[#0B63FF] shadow-sm transition-all hover:border-blue-300"
                >
                  Explore Events
                </a>

                {status === "success" && (
                  <span className="ml-1 text-sm font-medium text-emerald-600">
                    Form submitted successfully!
                  </span>
                )}
                {status === "error" && (
                  <span className="ml-1 text-sm font-medium text-rose-600">
                    {errorMsg || "Submission failed."}
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Right: Benefits card */}
          <div className="rounded-3xl bg-white/70 p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,.15)] backdrop-blur md:p-8">
            <h3 className="text-xl font-semibold text-zinc-900">Why Join?</h3>
            <ul className="mt-4 space-y-3 text-zinc-700">
              {[
                "Mentorship from founders & alumni",
                "Access to workshops and bootcamps",
                "Pitch support & incubation help",
                "Team-ups for hackathons and case comps",
                "Networking with investors & partners",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 block h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}