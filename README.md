# Marius Ørvik - Personal Website

Professional website for Marius Ørvik, VP Product & Engineering.

Built with [Astro](https://astro.build) for speed and simplicity.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   ├── images/          # Static images (portrait, icons)
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Base layout with nav/footer
│   │   └── BlogPostLayout.astro  # Layout for blog posts
│   └── pages/
│       ├── index.astro           # Homepage
│       ├── about.astro           # About/Experience page
│       ├── contact.astro         # Contact page
│       └── blog/
│           ├── index.astro       # Blog listing
│           └── *.mdx             # Blog posts (MDX format)
└── package.json
```

## ✍️ Adding Blog Posts

Create new blog posts in `src/pages/blog/` as `.mdx` files:

```mdx
---
layout: ../../layouts/BlogPostLayout.astro
title: "Your Post Title"
description: "Brief description for SEO and listing page"
date: "2025-01-14"
author: "Marius Ørvik"
---

Your content here with full markdown support...
```

Posts automatically appear on `/blog` sorted by date.

## 🚀 Deployment

Site deploys automatically to GitHub Pages via GitHub Actions on push to `master`.

### First-time Setup

1. Go to repo Settings → Pages
2. Source: GitHub Actions
3. Push to master branch
4. Site deploys to mariusorvik.com (via CNAME)

### Manual Deploy

```bash
npm run build
# Upload dist/ to hosting
```

## 🛠 Tech Stack

- **Astro**: Static site framework
- **MDX**: Markdown with components for blog
- **GitHub Pages**: Hosting
- **GitHub Actions**: CI/CD

## 📝 License

© 2025 Marius Ørvik. All rights reserved.
