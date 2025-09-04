export type Member = { name: string; role: string; photo: string };

export const team: Record<
  "Founder" | "Presidents" | "Advisors" | "GB Board" | "Directors",
  Member[]
> = {
  Founder: [
    { name: "Izaz Bin Azam", role: "Founder Trustee", photo: "/izaz_2.jpeg" },
  ],

  Presidents: [
    { name: "Mushfiq Rahman", role: "Acting President (2024–25)", photo: "/hridoy.jpg" },
    // ex-presidents in the same list (as you requested no separate section)
    { name: "Imam Hasan Saikat", role: "President (2023–24)", photo: "/saikat.png" },
    { name: "Faraz Al Mahamood Chowdhury", role: "President (2022–23)", photo: "/faraz.png" },
  ],

  Advisors: [
    {
      name: "Md. Aftab Uddin, PhD",
      role: "Professor & Dept. Chairman, Human Resource Management, University of Chittagong",
      photo: "/aftab.png",
    },
  ],

  "GB Board": [
    { name: "Tanvir Ahmed", role: "General Secretary", photo: "/tanvir.jpeg" }, // keep if you must; JPG/PNG recommended for browser support
    { name: "Fatima Afroz", role: "Organizing Secretary", photo: "/fatima.png" },
  ],

  Directors: [
    { name: "Misbahul Islam", role: "Content Creation", photo: "/misbah.JPG" },
    { name: "Shamsunnahar Rumi", role: "Documentation", photo: "/rumi.png" },
    { name: "Md. Ishraq Parves", role: "Corporate Affairs", photo: "/ifty.jpg" },
    { name: "Sahib Abbas Bahar Chowdhury", role: "Branding, IT & Design", photo: "/sahib.jpg" },
    { name: "Sadman Reza Sami", role: "Resource & Project Management", photo: "/sadman.png" },
    { name: "Salman Salim", role: "Finance", photo: "/salman.png" },
  ],
};