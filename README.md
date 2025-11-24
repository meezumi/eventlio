# Eventlio

**Eventlio** is a modern event management web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It helps users **create, browse, and manage events** effortlessly — from small meetups to large conferences — all in one sleek interface.

---

## 🚀 Features

- 🗓️ Create and manage events (title, description, date, location)
- 🔍 Browse and search upcoming events
- 🎨 Responsive UI built with Tailwind CSS
- ⚡ Blazing fast SSR/SSG with Next.js
- 🌐 Deploy-ready for Vercel
- 🧱 Scalable TypeScript architecture
- 🔐 (Planned) Authentication and role-based access
- 🎟️ (Planned) RSVP / Ticket booking system
- 📊 (Planned) Event analytics dashboard

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Framework | [Next.js](https://nextjs.org/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Deployment | [Vercel](https://vercel.com/) |
| Package Manager | npm / yarn |

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 📋 Prerequisites

- Node.js 22.x or higher
- npm / yarn / pnpm
- MongoDB database
- Clerk account (for authentication)
- UploadThing account (for file uploads)
- Stripe account (for payments)

## 🔧 Environment Setup

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Fill in all required environment variables (Clerk, MongoDB, UploadThing, Stripe)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed setup instructions.

## 🚀 Deploy on Vercel

This project is configured to use **Node.js 22.x**.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**Important:** Make sure Node.js version is set to **22.x** in your Vercel Project Settings.

For detailed deployment instructions, webhook configuration, and troubleshooting, see [DEPLOYMENT.md](./DEPLOYMENT.md).
