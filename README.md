# GoodFood dashboard (Fortledge take-home)

A take-home task for Fortledge: a restaurant admin dashboard for a food ordering business called GoodFood, built as a single page from a design. The data is hardcoded in each chart component, and there's no backend.

Live at [fortledge-take-home.vercel.app](https://fortledge-take-home.vercel.app).

## What's on the page

- A collapsible sidebar (Dashboard, Food Order, Manage Menu, Customer Review, Settings, Payment, Accounts, Help). Only Dashboard has content
- A header with search, notifications and a profile menu
- Revenue: current vs last period, as a Recharts chart
- Order time: when orders come in during the day
- Ratings shown as bubbles
- Most ordered food
- Order status breakdown

## Tech stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, shadcn/ui (sidebar, avatar, dropdown, tooltip), Recharts, Hugeicons and react-iconly.

## Running it

```bash
npm install
npm run dev
```

| Command | What it does |
|---|---|
| `npm run dev` | Dev server at `localhost:3000` |
| `npm run build` | Production build |
| `npm run start` | Serve the build |
| `npm run lint` | ESLint |

## Structure

```
src/app/page.tsx              the dashboard layout
src/components/app-sidebar.tsx
src/components/dashboard/     header and one file per chart card
src/components/ui/            shadcn components
```
