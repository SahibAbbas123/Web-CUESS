export type Event = {
  id: string;
  title: string;
  date: string;
  poster: string;
  location?: string;
  link?: string;
};

export const past: Event[] = [
  {
    id: "p1",
    title: "CUESS Startup Showcase 2024",
    date: "Dec 02, 2024",
    poster:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    location: "CU FBA Auditorium",
  },
  {
    id: "p2",
    title: "Hackathon: Build for CU",
    date: "Aug 19, 2024",
    poster:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    location: "CSE Dept.",
  },
];

export const upcoming: Event[] = [];