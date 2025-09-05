# CUESS – Chittagong University Entrepreneur & Startup Society

The official website for the Chittagong University Entrepreneur & Startup Society (CUESS) is built with a modern, lightweight technology stack to empower student entrepreneurs through events, mentorship, and community engagement.

## Technology Stack

- **Frontend**: Next.js, React, TailwindCSS, shadcn/ui, Framer Motion
- **Backend**: Node.js, Express, Prisma
- **Database**: PostgreSQL (via NeonDB)
- **Email**: Nodemailer (Gmail App Password)

## Features

### Current Features
- **Hero Section**: Responsive call-to-action buttons and visuals.
- **About Section**: Split-screen layout highlighting mission and vision.
- **What We Do**: Interactive cards with staggered animations.
- **Events Section**: Tabs for past and upcoming events with a carousel layout.
- **Team Section**: Interactive cards for Founder, Presidents, Advisors, GB Board, and Directors.
- **Membership Form**:
  - Connected to backend and NeonDB.
  - Stores submissions in the database.
  - Sends confirmation emails to applicants.
  - Displays success/failure messages.
- **Sticky Navbar**: Supports desktop and mobile (hamburger menu).
- **Footer**: Includes contact information, links, and phone number.
- **Responsive Design**: No horizontal scrollbars with full scrollability.

### Planned Features (Roadmap)
- Global dark mode toggle.
- Admin dashboard for membership management.
- Email templates for event announcements.
- Optimized database schema for events and startup showcases.
- Middleware for rate-limiting and spam protection.
- Enhanced mobile UI/UX.
- Advanced security (Helmet, CORS, input validation).
- CI/CD pipelines with Vercel (frontend) and Railway/Heroku/Render (backend).

## File Structure

```
WebCUESS
├── client/                 # Frontend
│   └── cuess/
│       ├── public/         # Static assets (logo, icons, images)
│       ├── src/
│       │   ├── app/        # Next.js App Router (pages, layout, globals)
│       │   ├── components/ # UI components, sections, team cards, nav, footer
│       │   ├── data/       # Static data (events, team)
│       │   ├── hooks/      # Custom React hooks
│       │   └── lib/        # Utilities (scroll, cn, events)
│       ├── package.json
│       └── tailwind.config.ts
├── server/                 # Backend
│   ├── prisma/             # Prisma schema
│   │   └── schema.prisma
│   ├── src/
│   │   ├── routes/         # Express routes
│   │   │   └── membership.ts
│   │   ├── email.ts        # Nodemailer setup
│   │   ├── env.ts          # Zod-validated environment variables
│   │   ├── index.ts        # Express app entry
│   │   └── prisma.ts       # Prisma client
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/SahibAbbas123/Web-CUESS.git
cd WebCUESS
```

### 2. Frontend Setup
```bash
cd client/cuess
npm install
npm run dev
```
The frontend runs at: `http://localhost:3000`

### 3. Backend Setup
```bash
cd server
npm install
```

#### Configure Environment
Create a `.env` file in the `server/` directory with the following:
```
DATABASE_URL="postgresql://...@neon.tech/neondb?sslmode=require"
PORT=4000
CLIENT_ORIGIN=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
FROM_EMAIL=your-email@gmail.com
ADMIN_EMAIL=admin-email@gmail.com
```

#### Push Prisma Schema
```bash
npx prisma generate
npx prisma db push
```

#### Start Backend
```bash
npm run dev
```
The backend runs at: `http://localhost:4000`

## Current Status
- **Frontend**: Fully functional (Next.js).
- **Backend**: Operational (Express + Prisma).
- **Database**: Connected (NeonDB).
- **Membership Form**: Stores submissions and sends confirmation emails.

## Contributing

1. Create a feature branch:
   ```bash
   git checkout -b feature/<feature-name>
   ```

2. Commit changes:
   ```bash
   git add .
   git commit -m "feat: <meaningful message>"
   ```

3. Push the branch:
   ```bash
   git push origin feature/<feature-name>
   ```

4. Open a Pull Request on GitHub.

## Git Commands for Current Workflow
```bash
# Stage changes
git add .

# Commit with a clear message
git commit -m "docs: update README with professional structure and clarity"

# Push to your feature branch
git push origin <your-branch-name>
```

After pushing, create a Pull Request on GitHub and merge/rebase into the `main` branch.

