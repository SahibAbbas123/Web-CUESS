"use client";

import { useState } from "react";

export default function LiteYouTube({
  id,
  title,
  className = "",
  posterQuality = "maxresdefault",
}: {
  id: string;
  title: string;
  className?: string;
  posterQuality?: "maxresdefault" | "hqdefault";
}) {
  const [playing, setPlaying] = useState(false);
  const poster = `https://i.ytimg.com/vi/${id}/${posterQuality}.jpg`;

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-black ${className}`}>
      {playing ? (
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          aria-label={`Play video: ${title}`}
          onClick={() => setPlaying(true)}
          className="group relative block w-full"
        >
          {/* poster */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={title}
            className="aspect-video w-full object-cover"
            loading="lazy"
          />
          {/* glass play */}
          <span className="absolute inset-0 grid place-items-center">
            <span className="rounded-full bg-white/80 px-5 py-3 backdrop-blur transition group-hover:bg-white">
              ▶ Play
            </span>
          </span>
        </button>
      )}
    </div>
  );
}