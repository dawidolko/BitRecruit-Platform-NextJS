# 🚀 BitRecruit — IT Career Platform

![Next.js](https://img.shields.io/badge/Next.js-13.5-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Mantine](https://img.shields.io/badge/Mantine-7-blue?logo=mantine)
![License](https://img.shields.io/badge/license-MIT-green)

**BitRecruit** is a modern, fully frontend IT job board platform built with Next.js 13, React 18, Mantine UI, and Tailwind CSS. It ships with built-in mock data — no backend required.

🔗 **Live demo:** [bitrecruit.dawidolko.pl](https://bitrecruit.dawidolko.pl)

---

## 📸 Screenshot

> A dark-themed job board showing developer roles with filters, pagination, salary info, and grid/list views.

---

## ✨ Features

- 🔍 **Filter offers** — by technology, category, seniority, and salary range
- 📄 **Pagination** — navigate through pages of results
- 📊 **Sorting** — by date posted (newest / oldest)
- 🎨 **Grid / List view** — toggle between display modes
- 🌙 **Dark theme** — emerald-cyan color palette
- 📱 **Responsive** — adapts to various screen sizes
- ⚡ **Static export** — fully client-side, no server needed
- 💾 **Mock data** — 48 realistic job offers generated at build time

---

## 🛠️ Tech Stack

| Technology         | Description                                     |
| ------------------ | ----------------------------------------------- |
| **Next.js 13**     | React framework with App Router                 |
| **React 18**       | UI library with Suspense                        |
| **TypeScript**     | Static type checking                            |
| **Mantine 7**      | UI components (Button, Modal, Pagination, etc.) |
| **Tailwind CSS 3** | Utility-first CSS framework                     |
| **SCSS Modules**   | Scoped component styles                         |
| **Zustand**        | State management                                |
| **Day.js**         | Date formatting                                 |

---

## 🚀 Quick Start

### Requirements

- **Node.js** >= 18.x
- **npm** >= 9.x (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/dawidolko/BitRecruit-Platform-NextJS.git
cd BitRecruit-Platform-NextJS

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router (pages, layout, loading)
├── components/             # React components
│   ├── Filters/            # Sidebar filter panel
│   ├── Header/             # Top navigation bar
│   ├── Hero/               # Hero section with CTA
│   ├── JobOffer/           # Single job offer card
│   ├── JobOffers/          # Job offers list
│   ├── JobOffersGrid/      # Grid/list view toggle
│   ├── JobOffersHeader/    # Sorting & layout controls
│   ├── JobOfferSalary/     # Salary display
│   └── JobOffersPagination/# Pagination
├── css/                    # Global styles (SCSS)
├── data/                   # Mock data generator
├── fonts/                  # Local fonts
├── providers/              # Context providers (JobOffers, Query, Theme)
├── services/               # Service layer (data access)
└── utils/                  # Helper functions
```

---

## 🚢 Deployment

The project uses **GitHub Actions** to automatically deploy to GitHub Pages on every push to `main`.

See: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Dawid Olko**

- GitHub: [@dawidolko](https://github.com/dawidolko)
- Website: [dawidolko.pl](https://dawidolko.pl)
