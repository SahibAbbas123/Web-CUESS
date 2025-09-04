export type EventItem = { id: string; title: string; date: string; cover: string; link?: string };

export const events: Record<"past" | "upcoming", EventItem[]> = {
  past: [
    {
      id: "summit-2024",
      title: "Startup Summit 2024",
      date: "Nov 25, 2024",
      cover:
        "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "design-sprint",
      title: "Design Sprint Night",
      date: "Aug 12, 2024",
      cover:
        "https://images.unsplash.com/photo-1457694587812-e8bf29a43845?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "summit-2023",
      title: "Startup Summit 2023",
      date: "Nov 25, 2023",
      cover:
        "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "design-sprint-vol-2",
      title: "Design Sprint Night",
      date: "Aug 12, 2023",
      cover:
        "https://images.unsplash.com/photo-1457694587812-e8bf29a43845?q=80&w=1600&auto=format&fit=crop",
    },
  ],
  upcoming: [],
};
