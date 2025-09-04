export type EventItem = {
  id: string;
  title: string;
  date: string;       // ISO
  cover: string;      // image URL
  cta?: string;       // optional link
  type: "past" | "upcoming";
};

export const EVENTS: EventItem[] = [
  {
    id: "psw-2025",
    title: "Public Speaking Workshop",
    date: "2025-05-26",
    type: "past",
    cover:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "ideathon-24",
    title: "Campus Ideathon",
    date: "2024-12-10",
    type: "past",
    cover:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "startup-meetup",
    title: "Startup Meetup",
    date: "2025-11-20",
    type: "upcoming",
    cover:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
  },
];