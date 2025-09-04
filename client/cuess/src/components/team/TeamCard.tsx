"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  name: string;
  role: string;
  photo: string; // /public path or remote
};

export default function TeamCard({ name, role, photo }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group relative h-[420px] w-[290px] md:h-[520px] md:w-[360px] shrink-0 overflow-hidden rounded-[28px] border bg-white shadow-sm"
    >
      <Image
        src={photo}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 290px, 360px"
        priority={false}
      />

      {/* Frost gradient (no heavy blur) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Label pill on image */}
      <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/75 p-4 backdrop-blur-sm ring-1 ring-white/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,.35)]">
        <h4 className="text-base md:text-lg font-semibold text-slate-900">{name}</h4>
        <p className="text-sm md:text-base text-slate-600">{role}</p>
      </div>

      {/* subtle parallax on hover */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
}