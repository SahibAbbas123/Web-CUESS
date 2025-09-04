"use client";
import { useState } from "react";

export default function VideoSplash() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mt-10">
      <div className="relative rounded-3xl overflow-hidden group">
        <div className="aspect-video bg-black/5 grid place-items-center">
          <button
            onClick={() => setOpen(true)}
            className="glass rounded-full h-16 w-16 grid place-items-center text-2xl"
            aria-label="Play intro video"
          >
            ▶
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm grid place-items-center p-4" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden" onClick={(e)=>e.stopPropagation()}>
            <video src="/cuess-intro.mp4" className="w-full h-full" controls autoPlay />
          </div>
        </div>
      )}
    </div>
  );
}