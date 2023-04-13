# Team R8

(PROJECT DESCRIPTION)

## Quickstart Guide

### CLI Commands

- Run `npm install` to install all required packages
- Run `npm run dev` to run the project server
  - Served on [`http://localhost:3000/`](http://localhost:3000/)
  - Make sure to [setup a local `postgresql` database for testing](#local-database-setup)
- Run `npx prisma studio db` to directly access/view/modify the database tables and records
  - Served on [`http://localhost:5555/`](http://localhost:5555/)
- Run `npm run ext-tran` to extract translatable strings
  - This will go through all `JSX/TSX` components in your pages directory and extract their string literals
  - Config is at `i18next-scanner.config`
  - Output is under the locales folder `./locales`
  - Refer to [`next-i18next`](https://github.com/i18next/next-i18next) documentation for usage in code
    - specifically [`ServerSideTranslations`](https://github.com/i18next/next-i18next#serversidetranslations) and [`useTranslation`](https://github.com/i18next/next-i18next#usetranslation)

### Demo

- There's a quick demo of the project at [`http://localhost:3000/demo`](http://localhost:3000/demo)

- Note: this route can ONLY be access if you are:

  - Signed In
  - Authorized to see content, user has to be:
    - `Student (default)`
    - `Admin`
  - This route is NOT accessible to `Instructor`

  - To test inaccessibility of the page:
    - run `npx prisma studio db`
    - find your user account
    - change UserRole to `Instructor`
    - (this will activate the redirect to home route `/`)

## Where is everything?

### Where is...?

- PrismaORM Schema: `./prisma/schema.prisma`
- Anything Authentication Related: `./src/server/auth.ts`
- Api Endpoints (tRPC routers & proceedures): `./src/server/api/`
- env (follow sample): `./.env` & `./src/env.mjs`
- Translations (locales): `./locales`

### Project Structure

```
├─ locales
│  └─ ar
│  │  ├─ common.json
│  │  └─ ...other namespaces.json
│  └─ en
│     ├─ common.json
│     └─ ...other namespaces.json
├─ public
│  └─ favicon.ico
├─ prisma
│  └─ schema.prisma
├─ src
│  ├─ env.mjs
│  ├─ components
│  ├─ pages
│  │  ├─ _app.tsx
│  │  ├─ _document.tsx
│  │  ├─ api
│  │  │  ├─ auth
│  │  │  │  └─ [...nextauth].ts
│  │  │  └─ trpc
│  │  │     └─ [trpc].ts
│  │  └─ index.tsx
│  ├─ server
│  │  ├─ auth.ts
│  │  ├─ db.ts
│  │  └─ api
│  │     ├─ routers
│  │     │  └─ example.ts
│  │     ├─ trpc.ts
│  │     └─ root.ts
│  ├─ styles
│  │  └─ globals.css
│  └─ utils
│     └─ api.ts
├─ .env
└─ .env.example
```

## Local Database Setup

TODO @SauceX22

## Looking for more docs?

Since this project is a boilerplate provided by the [T3 Stack](https://create.t3.gg/), there's already a lot of quick and to the point documetation on their website

If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
