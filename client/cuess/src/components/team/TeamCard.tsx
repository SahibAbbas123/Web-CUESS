'use client';

import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import type { Member } from '../../data/team';

type Props = { m: Member };

export default function TeamCard({ m }: Props) {
  // Lighter, GPU-friendly tilt (no backdrop-blur)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rX = useTransform(my, [-30, 30], [5, -5]); // smaller range
  const rY = useTransform(mx, [-30, 30], [-5, 5]);

  function onMove(e: React.MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 60 - 30);
    my.set(((e.clientY - r.top) / r.height) * 60 - 30);
  }
  function onLeave() { mx.set(0); my.set(0); }

  return (
    <motion.article
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rX, rotateY: rY, willChange: 'transform' }}
      className="group relative h-[440px] w-[300px] shrink-0 snap-start overflow-hidden rounded-3xl bg-zinc-100 ring-1 ring-black/5 shadow-[0_20px_50px_-20px_rgba(0,0,0,.25)]"
    >
      <Image
        src={m.photo}
        alt={m.name}
        fill
        className="object-cover"
        sizes="(max-width:768px) 80vw, 300px"
        priority={false}
      />

      {/* Always-on gradient (no blur) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />

      {/* Frosted-ish slab (semi-opaque + subtle ring) */}
      <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/18 ring-1 ring-white/35 shadow-[0_10px_30px_-12px_rgba(0,0,0,.4)] backdrop-saturate-150 transition-transform duration-300 group-hover:translate-y-[-2px]">
        <div className="px-5 py-4">
          <h3 className="text-white text-lg font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,.35)]">
            {m.name}
          </h3>
          <p className="text-white/90 text-sm">{m.title}</p>
        </div>
      </div>
    </motion.article>
  );
}