# BitRecruit

> 🚀 **IT Career Platform** - a modern, fully frontend IT job board that runs without a backend

**BitRecruit** is a modern IT job board platform built with Next.js 13, React 18, Mantine UI and Tailwind CSS. It ships with built-in mock data — 48 realistic job offers generated at build time — so the whole application runs client-side with no server required.

The project demonstrates a filterable, sortable and paginated job listing built on the Next.js App Router, with Zustand for state, React Query for data access and a dark emerald-cyan design, exported as a fully static site.

![Next.js](https://img.shields.io/badge/Next.js-13.5-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Mantine](https://img.shields.io/badge/Mantine-7-339AF0?logo=mantine&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🎯 Key Features

- 🔍 **Filter offers** — by technology, category, seniority, and salary range
- 📄 **Pagination** — navigate through pages of results
- 📊 **Sorting** — by date posted (newest / oldest)
- 🎨 **Grid / List view** — toggle between display modes
- 💰 **Salary display** — dedicated salary presentation per offer
- 🌙 **Dark theme** — emerald-cyan color palette
- 📱 **Responsive** — adapts to various screen sizes
- ⚡ **Static export** — fully client-side, no server needed
- 💾 **Mock data** — 48 realistic job offers generated at build time

---

## 🖼️ Screenshots

| Home page | Job offers |
|---|---|
| ![The BitRecruit home page with the hero section and call to action](docs/screenshots/home.webp) | ![The job offers listing with filters, salary info and grid/list views](docs/screenshots/offers.webp) |

A dark-themed job board showing developer roles with filters, pagination, salary info, and grid/list views.

---

## 🧩 Modules

| Module | Description | Stack |
| --- | --- | --- |
| **Filters** | Sidebar filter panel for technology, category, seniority and salary | `src/components/Filters` |
| **JobOffers** | Offer list, card, grid/list toggle, header controls and pagination | `src/components/JobOffers*`, `JobOffer`, `JobOfferSalary` |
| **Hero / Header** | Landing hero with CTA and the top navigation bar | `src/components/Hero`, `src/components/Header` |
| **Providers** | Job offers context, React Query provider and the Mantine theme registry | `src/providers` |
| **Services** | Data access layer over the mock dataset | `src/services/jobOffersService.ts` |
| **Data** | Build-time mock generator producing 48 offers | `src/data/mockData.ts` |
| **Utils** | Offer helpers, query-string handling, technology metadata, UUIDs | `src/utils` |

---

## 🛠️ Technology Stack

### Frontend

- **Next.js 13.5** — React framework with the App Router
- **React 18** — UI library with Suspense
- **TypeScript 5** — Static type checking
- **Mantine 7** — UI components (Button, Modal, Pagination, etc.), with `@mantine/hooks`
- **Tailwind CSS 3** — Utility-first CSS framework
- **SCSS Modules** — Scoped component styles via `sass`
- **Tabler Icons** and **devicon** — Iconography and technology logos
- **react-world-flags** — Country flags

### State & Data

- **Zustand** — State management
- **TanStack React Query 5** — Data fetching and caching
- **Day.js** — Date formatting
- **query-string** — URL query parameter handling

### Infrastructure

- **GitHub Actions** — Automatic deployment to GitHub Pages on every push to `main`
- **GitHub Pages** — Static hosting on a custom domain via `public/CNAME`
- **Static export** — `output: "export"` with unoptimized images

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or yarn / pnpm)

### 1. Clone the Repository

```bash
git clone https://github.com/dawidolko/BitRecruit-Platform-NextJS.git
cd BitRecruit-Platform-NextJS
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

Linting:

```bash
npm run lint
```

### Configuration

Copy [`.env.example`](.env.example) to `.env.local` if you want to point the service layer at a real backend:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | API URL for the job offers backend. The app runs on built-in mock data without it. |

---

## 📁 Project Structure

```
BitRecruit-Platform-NextJS/
├── .github/workflows/      # GitHub Pages deployment
├── docs/screenshots/       # README imagery
├── public/                 # CNAME, favicons, logos, background
└── src/
    ├── app/                # Next.js App Router (layout, page, loading, error, icons)
    ├── components/         # React components
    │   ├── Filters/            # Sidebar filter panel
    │   ├── Header/             # Top navigation bar
    │   ├── Hero/               # Hero section with CTA
    │   ├── JobOffer/           # Single job offer card
    │   ├── JobOffers/          # Job offers list
    │   ├── JobOffersGrid/      # Grid/list view toggle
    │   ├── JobOffersHeader/    # Sorting & layout controls
    │   ├── JobOfferSalary/     # Salary display
    │   └── JobOffersPagination/# Pagination
    ├── css/                # Global styles (SCSS)
    ├── data/               # Mock data generator
    ├── fonts/              # Local fonts
    ├── providers/          # Context providers (JobOffers, Query, Theme)
    ├── services/           # Service layer (data access)
    └── utils/              # Helper functions
```

---

## 🚢 Deployment

The project uses **GitHub Actions** to automatically deploy to GitHub Pages on every push to `main`.

See: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

The site is served from a custom domain configured through [`public/CNAME`](public/CNAME).

---

## 🌍 Live Demo

The project is deployed and available at: **[https://bitrecruit.dawidolko.pl](https://bitrecruit.dawidolko.pl)**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Created by **[Dawid Olko](https://github.com/dawidolko)**

- **Website** — [dawidolko.pl](https://dawidolko.pl/)
- **LinkedIn** — [@dawidolko](https://www.linkedin.com/in/dawidolko/)
