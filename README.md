# Ganesh Sonawane Portfolio Website

Personal portfolio website built with Next.js to showcase my profile, skills, experience, projects, education, and contact details.

## Overview

This is a single-page portfolio application with a dark visual theme and section-based navigation. It highlights my work as an AI/ML Developer and Backend Engineer, and includes:

- Hero and navigation sections with interactive animations
- About, technical skills, experience, projects, and education sections
- Interactive contact section with social links and message delivery
- Direct resume download from static assets
- Zero-config static export ready for instant deployment

## Tech Stack

- **Framework**: Next.js 16 (App Router, Static Export)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: shadcn/ui & Base UI

## Getting Started

### Prerequisites

- Node.js 20 or 22
- npm

### Installation

```bash
git clone https://github.com/SonawaneGanes/Ganesh_Sonawane_Portfolio_Website.git
cd Ganesh_Sonawane_Portfolio_Website
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build Production Export

```bash
npm run build
```

The production-ready static files are generated in the `out/` folder.

---

## Deployment Guide

This portfolio is configured with `output: 'export'` for blazing-fast static hosting on **Netlify**, **Vercel**, and **Cloudflare Pages**.

### 1. Deploy on Vercel
1. Import your repository into [Vercel](https://vercel.com).
2. Framework Preset: **Next.js** (or Other).
3. Build Command: `npm run build`
4. Output Directory: `out`
5. Click **Deploy**. (`vercel.json` is pre-configured).

### 2. Deploy on Netlify
1. Connect your repository in [Netlify](https://app.netlify.com).
2. Build Command: `npm run build`
3. Publish Directory: `out`
4. Click **Deploy Site**. (`netlify.toml` is pre-configured with headers and routing).

### 3. Deploy on Cloudflare Pages
1. Go to Cloudflare Dashboard > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select your repository.
3. Build Configuration:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable (optional): `NODE_VERSION` = `22` (`.nvmrc` is included).
4. Click **Save and Deploy**.

---

## Project Structure

```text
app/          Next.js app router pages, layout, and global styles
components/   Portfolio sections (Hero, About, Skills, Projects, etc.)
lib/          Portfolio data (portfolio-data.ts) and utility helpers
public/       Static assets (Resume, icons, badges, _headers, _redirects)
out/          Compiled static site for deployment (generated upon build)
```

## Customization

All portfolio content is centralized in [lib/portfolio-data.ts](file:///d:/GIt/Ganesh_Sonawane_Portfolio_Website/lib/portfolio-data.ts). Update that file to change your title, experience, projects, education, certifications, and contact details.

## Contact

- **GitHub**: [github.com/SonawaneGanes](https://github.com/SonawaneGanes)
- **LinkedIn**: [linkedin.com/in/ganesh-sonawane-993a63379](https://linkedin.com/in/ganesh-sonawane-993a63379)
- **Email**: [ganeshsonawane39773@gmail.com](mailto:ganeshsonawane39773@gmail.com)
