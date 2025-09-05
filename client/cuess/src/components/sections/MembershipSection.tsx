"use client";

import { useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

type FormDataShape = {
  name: string;
  email: string;
  yearDept: string;
  message: string;
};

export default function MembershipSection() {
  const [state, setState] = useState<SubmitState>("idle");
  const [msg, setMsg] = useState<string>("");
  const [form, setForm] = useState<FormDataShape>({
    name: "",
    email: "",
    yearDept: "",
    message: "",
  });

  // Prefer env; fall back to localhost for dev
  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE?.replace(/\/$/, "") ||
    "http://localhost:4000";

  const onChange =
    (key: keyof FormDataShape) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");
    setMsg("");

    try {
      const res = await fetch(`${API_BASE}/api/memberships`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        // try to parse server message; stay type-safe
        let serverMsg = "Submission failed.";
        try {
          const data = (await res.json()) as { error?: string };
          if (data?.error) serverMsg = data.error;
        } catch {
          /* ignore JSON parse errors */
        }
        throw new Error(serverMsg);
      }

      setState("success");
      setMsg("Form submitted successfully!");
      setForm({ name: "", email: "", yearDept: "", message: "" });

      // auto-hide success after a short delay
      window.setTimeout(() => setState("idle"), 3500);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setState("error");
      setMsg(message);
      // auto-hide error after a short delay
      window.setTimeout(() => setState("idle"), 4000);
    }
  };

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
                  name="name"
                  value={form.name}
                  onChange={onChange("name")}
                  required
                  className="block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-300 focus:shadow-[0_0_0_4px_rgba(11,99,255,.08)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange("email")}
                  required
                  className="block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-300 focus:shadow-[0_0_0_4px_rgba(11,99,255,.08)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Year / Dept
                </label>
                <input
                  name="yearDept"
                  value={form.yearDept}
                  onChange={onChange("yearDept")}
                  className="block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-300 focus:shadow-[0_0_0_4px_rgba(11,99,255,.08)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Why do you want to join?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange("message")}
                  className="block w-full resize-y rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-300 focus:shadow-[0_0_0_4px_rgba(11,99,255,.08)]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="inline-flex items-center justify-center rounded-2xl bg-[#0B63FF] px-5 py-3 font-semibold text-white shadow-[0_8px_24px_-8px_rgba(11,99,255,.55)] transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {state === "submitting" ? "Submitting…" : "Submit"}
                </button>

                <a
                  href="#events"
                  className="inline-flex items-center justify-center rounded-2xl border border-blue-200 bg-white px-5 py-3 font-semibold text-[#0B63FF] shadow-sm transition-all hover:border-blue-300"
                >
                  Explore Events
                </a>

                {state === "success" && (
                  <span className="ml-1 text-sm font-medium text-emerald-600">
                    {msg}
                  </span>
                )}
                {state === "error" && (
                  <span className="ml-1 text-sm font-medium text-rose-600">
                    {msg}
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