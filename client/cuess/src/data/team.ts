export type TeamRole = 'founder' | 'president' | 'advisor' | 'gb' | 'director';

export type Member = {
  id: string;
  name: string;
  title: string;
  role: TeamRole;
  photo: string;
};

export const team: Member[] = [
  // Founder
  {
    id: 'founder-izaz',
    name: 'Izaz Bin Azam',
    title: 'Founder Trustee',
    role: 'founder',
    photo: 'https://images.unsplash.com/photo-1603415526960-f7e0328edb5c?q=80&w=1600&auto=format&fit=crop',
  },

  // Presidents
  {
    id: 'pres-acting-2024',
    name: 'Mushfiq Rahman',
    title: 'Acting President (2024–25)',
    role: 'president',
    photo: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1600&auto=format&fit=crop',
  },

  // Advisor
  {
    id: 'advisor-aftab',
    name: 'Md. Aftab Uddin, PhD',
    title: 'Professor & Dept. Chairman, Human Resource Management, University of Chittagong',
    role: 'advisor',
    photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1600&auto=format&fit=crop',
  },

  // GB Board
  {
    id: 'gb-tanvir',
    name: 'Tanvir Ahmed',
    title: 'General Secretary',
    role: 'gb',
    photo: 'https://images.unsplash.com/photo-1603415526960-f7e0328edb5c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'gb-fatima',
    name: 'Fatima Afroz',
    title: 'Organizing Secretary',
    role: 'gb',
    photo: 'https://images.unsplash.com/photo-1603415526960-f7e0328edb5c?q=80&w=1600&auto=format&fit=crop',
  },

  // Directors
  { id: 'dir-misbahul', name: 'Misbahul Islam', title: 'Content Creation', role: 'director',
    photo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop' },
  { id: 'dir-rumi', name: 'Shamsunnahar Rumi', title: 'Documentation', role: 'director',
    photo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop' },
  { id: 'dir-ishraq', name: 'Md. Ishraq Parves', title: 'Corporate Affairs', role: 'director',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop' },
  { id: 'dir-sahib', name: 'Sahib Abbas Bahar Chowdhury', title: 'Branding, IT & Design', role: 'director',
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop' },
  { id: 'dir-sadman', name: 'Sadman Reza Sami', title: 'Resource & Project Management', role: 'director',
    photo: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=1600&auto=format&fit=crop' },
  { id: 'dir-salman', name: 'Salman Salim', title: 'Finance', role: 'director',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1600&auto=format&fit=crop' },
];