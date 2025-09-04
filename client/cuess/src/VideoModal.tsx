// VideoModal.tsx
"use client";
import { useState } from "react";

export default function VideoSplash(){
  const [open, setOpen] = useState(false);
  return (
    <div className="container mt-10">
      <div
        className="relative rounded-3xl overflow-hidden cursor-pointer group"
        onClick={()=>setOpen(true)}
      >
        <div className="aspect-video bg-[url('/poster.jpg')] bg-cover bg-center" />
        <button className="absolute inset-0 m-auto h-16 w-16 rounded-full glass grid place-items-center">
          ▶
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm grid place-items-center p-4"
             onClick={()=>setOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-4xl aspect-video overflow-hidden"
               onClick={(e)=>e.stopPropagation()}>
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
              allow="autoplay; encrypted-media" allowFullScreen className="h-full w-full" />
          </div>
        </div>
      )}
    </div>
  );
}