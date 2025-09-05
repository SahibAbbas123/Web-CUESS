import GlassCard from "./GlassCard";
import { Button } from "./ui/button";
import Image from "next/image";

export default function EventCard({
  title,
  date,
  poster,
}: {
  title: string;
  date: string;
  poster?: string;
}) {
  return (
    <GlassCard className="p-4">
      <div className="overflow-hidden rounded-xl mb-4 bg-muted h-40">
        {poster ? (
          <Image
            src={poster}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition"
          />
        ) : (
          <div className="skeleton h-full" />
        )}
      </div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-black/60 mt-1">{date}</div>
      <Button className="mt-3 rounded-xl h-9">Register</Button>
    </GlassCard>
  );
}