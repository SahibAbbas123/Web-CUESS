"use client";

export default function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    // gradient sits on the outer full-width wrapper
    <div className="w-full bg-[radial-gradient(1200px_600px_at_20%_-10%,#DFF6EA_0%,transparent_50%),radial-gradient(1200px_600px_at_80%_-10%,#DBE6FF_0%,transparent_50%)]">
      {/* constrained content */}
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
        <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl">
          Empowering Young Entrepreneurs at CU
        </h1>

        <p className="mt-4 max-w-3xl text-xl text-gray-700">
          100+ Members · 20+ Startups · 15+ Events
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#join" className="rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg ring-1 ring-blue-500/50 hover:bg-blue-700">
            Join Us
          </a>
          <a href="#events" className="rounded-2xl border border-blue-200 bg-white/70 px-6 py-3 font-medium text-blue-700 backdrop-blur-md hover:bg-white">
            Explore Events
          </a>
        </div>
      </div>
    </div>
  );
}