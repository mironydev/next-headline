# 📰 NextHeadline

A full-stack news reading platform built with Next.js 16. Browse news by category, read full articles, and authenticate with email or social login.

🔗 **Live Site:** [Next Headline](https://the-next-headline.vercel.app)

## 🌟 Features

- **News feed** — Browse latest news with a breaking news marquee ticker
- **Category filtering** — Filter news by category via sidebar (desktop) or dropdown (mobile)
- **Full article view** — Dedicated dynamic route for each news article
- **Authentication** — Email/password, Google, and GitHub login via Better Auth
- **Protected routes** — Middleware-based route protection
- **Error handling** — Custom error page for news routes and a global 404 page
- **Responsive design** — Optimized layout for all screen sizes

## 🛠️ Tech Stack

- [Next.js 16](https://nextjs.org/) + [React 19](https://react.dev/)
- [Better Auth](https://better-auth.com/) — authentication (email, Google, GitHub)
- [MongoDB](https://www.mongodb.com/) — database via Better Auth mongo adapter
- [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI v5](https://daisyui.com/)
- [React Hook Form](https://react-hook-form.com/) — form handling
- [React Hot Toast](https://react-hot-toast.com/) — notifications
- [React Fast Marquee](https://www.react-fast-marquee.com/) — breaking news ticker
- [date-fns](https://date-fns.org/) — date formatting

## 📁 Folder Structure

```
src/
├── app/
│   ├── (auth)/           # Login & register pages
│   ├── (main)/
│   │   └── layout.jsx    # Main layout (header, breaking news, navbar)
│   ├── (news)/           # Dynamic news article pages
│   ├── api/auth/         # Better Auth API route handler
│   ├── not-found.jsx     # Global 404 page
│   └── layout.js         # Root layout (font, metadata, toaster)
├── components/
│   ├── homepage/news/    # News feed, categories, cards, details
│   └── shared/           # Header, navbar, breaking news ticker
├── lib/                  # Auth config, auth client, fetch functions
├── assets/
└── proxy.js              # Middleware for career route protection
```
