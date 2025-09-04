# CUESS — Chittagong University Entrepreneur & Startup Society

Modern, lightweight site for CUESS built with **Next.js (App Router)** + **Tailwind CSS**.  
Focus: clean UX, frosted-glass visuals, smooth performance on mobile and desktop.

## ✨ Features

- **Sticky frosted-pill navbar**  
  - Active-section highlight, smooth hash scrolling  
  - Desktop: inline section buttons  
  - Mobile: compact pill with **hamburger menu**
- **Hero + clear CTAs** (Join, Learn)  
- **About** split-screen layout with image + quote pill  
- **Journey / Timeline** section (zig-zag, eye-guided layout)  
- **Events**  
  - **Past** and **Upcoming** in horizontal carousels (no vertical stacking)  
- **Team**  
  - Category tabs (Founder, Presidents, Advisors, GB, Directors)  
  - **Premium cards**: image with gradient overlay, frosty label, subtle parallax hover  
  - Data modeled for easy migration to a `data/` source or CMS
- **Membership**  
  - Clean form, toast feedback (optional), smooth scroll to section
- **Design System**  
  - **Glassmorphism** (tasteful, lightweight)  
  - **Light mode**, blue/white with **mint accents**  
  - Variable/modern typography (bold headlines, airy body text)  
  - Hover micro-interactions; reveal/stagger in key places

## 🧰 Tech Stack

- **Next.js** (App Router), **React**  
- **Tailwind CSS v4** (PostCSS)  
- **Framer Motion** (subtle reveals/parallax)  
- **Lucide Icons / Radix primitives** (where relevant)  
- Static-compatible (can export for GitHub Pages), ideal on **Vercel**

---

## 📂 Repository Structure

```
WebCUESS/
├─ client/
│  └─ cuess/                    # Next.js frontend
│     ├─ src/
│     │  ├─ app/                # App Router pages/layouts
│     │  ├─ components/         # UI + sections (Navbar, Hero, Team, Events, etc.)
│     │  ├─ data/               # Hardcoded data (team, events) for now
│     │  ├─ hooks/              # Client hooks (e.g., useIntersection)
│     │  ├─ lib/                # Helpers (cn, utils)
│     │  └─ VideoModal.tsx      # YouTube/local modal
│     ├─ public/
│     │  ├─ cuess_logo.png      # Logo (also used for favicon/icon)
│     │  └─ …assets
│     ├─ next.config.ts         # Export config, image domains
│     ├─ tailwind.config.ts
│     ├─ postcss.config.(js|mjs)
│     ├─ package.json
│     └─ README.md              # Client-specific notes (optional)
└─ README.md                    # (this file)
```
> You will later add `server/` at the root for backend APIs.

---

## 🚀 Installation

1. **Add remote (if not already):**
   ```bash
   git remote add origin https://github.com/SahibAbbas123/Web-CUESS.git
   ```
2.	**Clone the repository:**
   ```
   git clone https://github.com/SahibAbbas123/Web-CUESS.git
   ```
3. **Navigate to the project directory:**
```
cd WebCUESS
```
4.	**Install dependencies (root has no deps; install in client):**
   ```
cd client/cuess
npm install
```
5. **Run the client (dev server):**
   ```
   npm run dev
   ```
## 🤝 Contributing

PRs welcome!
	•	Keep PRs focused (one feature/fix).
	•	Follow project conventions (Tailwind utility-first, small React components).

⸻

## 📄 License

MIT © CUESS / Contributors
