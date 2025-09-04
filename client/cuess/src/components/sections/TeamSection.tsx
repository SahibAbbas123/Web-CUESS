'use client';

import { useMemo, useState } from 'react';
import TeamCard from '../team/TeamCard';
import Section from '../Section';
import { team, Member, TeamRole } from '../../data/team';

const TABS: { key: TeamRole; label: string }[] = [
  { key: 'founder', label: 'Founder' },
  { key: 'president', label: 'Presidents' },
  { key: 'advisor', label: 'Advisors' },
  { key: 'gb', label: 'GB Board' },
  { key: 'director', label: 'Directors' },
];

export default function TeamSection() {
  const [active, setActive] = useState<TeamRole>('founder');

  const filtered: Member[] = useMemo(
    () => team.filter((m) => m.role === active),
    [active]
  );

  return (
    <Section id="team" className="pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Meet Our Team</h2>

        {/* Tabs */}
        <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
          {TABS.map((t) => {
            const is = t.key === active;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={[
                  'whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium ring-1 transition',
                  is
                    ? 'bg-[#0B65FF] text-white ring-[#0B65FF] shadow-[0_6px_24px_-8px_rgba(11,101,255,.6)]'
                    : 'bg-white text-zinc-700 ring-black/10 hover:bg-zinc-50',
                ].join(' ')}
                aria-current={is ? 'page' : undefined}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        <div className="mt-8 relative">
          <div className="overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex gap-6 pr-4">
              {filtered.length > 0 ? (
                filtered.map((m) => <TeamCard key={m.id} m={m} />)
              ) : (
                <div className="w-full py-16 text-center text-zinc-500">
                  No entries yet for <span className="font-medium">{TABS.find(t => t.key===active)?.label}</span>.
                </div>
              )}
            </div>
          </div>

          {/* gradient edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </Section>
  );
}