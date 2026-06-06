# Portfolio

A sleek, fast, content-driven personal portfolio. Single scrolling page with
Hero, Projects, Resources, and About sections, light/dark mode, and a fully
typed data layer so you can update content without touching component code.

Built with **Vite + React + TypeScript**, **Tailwind CSS v4**, and
**shadcn/ui** components.

## Features

- ⚡️ Vite + React 19 + TypeScript
- 🎨 Tailwind CSS v4 with shadcn/ui components
- 🌓 Light / dark mode (class strategy) — respects OS preference, persists to
  `localStorage`, and applies before first paint (no flash)
- 🧩 Content lives in typed data files (`src/data/`) — no component edits needed
- ♿️ Accessible: semantic HTML, keyboard navigation, skip link, proper contrast
- 📱 Responsive, mobile-first layout
- ▲ Ready to deploy on Vercel

## Getting started

Requires **Node 18+** and npm.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
npm run build    # type-check and build for production into dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Editing your content

All editable content lives in `src/data/` and is fully typed (see
`src/data/types.ts`). You shouldn't need to touch any component to update the
site.

### 1. Your profile, socials, nav, and resources — `src/data/site.ts`

- `site` — your name, role, tagline, location, email, and bio paragraphs.
- `site.socials` — the links rendered in the hero and footer. Each entry has a
  `platform` (`github` | `linkedin` | `twitter` | `bluesky` | `email` |
  `website`) which selects the icon, a `label`, and an `href`. Use a `mailto:`
  link for email.
- `site.resumeUrl` — set to a hosted PDF URL to show a "Resume" button, or leave
  it `undefined` to hide it.
- `navItems` — the header navigation (each `href` is an in-page anchor).
- `resources` — the cards in the Resources section (your blog, newsletter, etc.).

### 2. Adding a project — `src/data/projects.ts`

Append an object to the `projects` array:

```ts
export const projects: Project[] = [
  // ...existing projects
  {
    name: 'My New Project',
    description: 'A short, punchy description of what it does.',
    tags: ['React', 'TypeScript', 'Postgres'], // rendered as badges
    repoUrl: 'https://github.com/your-username/my-new-project', // optional
    demoUrl: 'https://my-new-project.example.com', // optional
    featured: true, // optional — featured projects sort first + show a badge
  },
]
```

Only `name`, `description`, and `tags` are required. Omit `repoUrl`/`demoUrl`
to hide the corresponding button.

### 3. Theming / colors

Colors are CSS variables defined in `src/index.css` under `:root` (light) and
`.dark` (dark). Tweak `--primary`, `--brand` (the accent used for links/hover),
`--background`, etc. The favicon lives at `public/favicon.svg`, and the page
`<title>`/meta description are in `index.html`.

## Deploying to Vercel + custom domain (bingliscodes.com)

This repo includes a `vercel.json` configured for a Vite SPA, so deployment is
zero-config.

### Step 1 — Push to GitHub

```bash
git add -A
git commit -m "Initial portfolio"           # if you haven't committed yet
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

### Step 2 — Import the project into Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import your GitHub repo.
2. Vercel auto-detects the framework as **Vite**. The defaults match
   `vercel.json`:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
3. Click **Deploy**. You'll get a `*.vercel.app` URL once it finishes.

(Or use the CLI: `npm i -g vercel`, then run `vercel` to deploy a preview and
`vercel --prod` to promote to production.)

### Step 3 — Add the custom domain in Vercel

You must explicitly add the domain here — it won't appear on its own. The
`*.vercel.app` URL is auto-generated for every project and is separate from your
custom domain.

1. In your project: **Settings → Domains**. (You'll already see the generated
   `*.vercel.app` entry — that's expected.)
2. In the **Add Domain** box, type `bingliscodes.com` and click **Add**. When
   prompted, also add `www.bingliscodes.com`. Vercel picks one as primary and
   308-redirects the other (recommended: serve the apex `bingliscodes.com` and
   redirect `www` → apex).
3. Each domain now shows **"Invalid Configuration"** along with the exact DNS
   records to create. Use the values Vercel displays — they occasionally change,
   so treat the table below as the typical case and Vercel's dashboard as the
   source of truth.

### Step 4 — Set DNS records at your registrar

In your domain registrar's DNS settings, create:

| Type  | Name / Host         | Value                  | Notes                          |
| ----- | ------------------- | ---------------------- | ------------------------------ |
| A     | `@` (apex / root)   | `76.76.21.21`          | Points `bingliscodes.com` to Vercel |
| CNAME | `www`               | `cname.vercel-dns.com` | Points `www.bingliscodes.com` to Vercel |

Tips:

- `@` represents the root/apex domain. Some registrars require the bare domain
  name instead of `@`.
- Remove any conflicting existing A/AAAA/CNAME records for `@` and `www` (e.g.
  registrar parking pages).
- If your registrar supports **ALIAS**/**ANAME** records for the apex, you may
  instead point `@` to `cname.vercel-dns.com` — but a plain A record to
  `76.76.21.21` works everywhere.
- Alternatively, you can delegate the whole domain to Vercel by switching your
  registrar's **nameservers** to Vercel's (shown in the dashboard); then Vercel
  manages all records for you.

#### Squarespace Domains (formerly Google Domains)

This domain is managed by Squarespace (where Google Domains migrated). To set
the records:

1. Go to [account.squarespace.com/domains](https://account.squarespace.com/domains)
   and click **bingliscodes.com**.
2. Open **DNS → DNS Settings** and scroll to **Custom Records**.
3. Add the two records:
   - `@` · type `A` · data `76.76.21.21`
   - `www` · type `CNAME` · data `cname.vercel-dns.com`
4. **Delete any conflicting Custom Records** first — Squarespace ships default
   parking records, typically an `A` record on `@` pointing to a Squarespace IP
   (e.g. `198.185.159.x`) and a `www` `CNAME` to `ext-cust.squarespace.com` or
   `*.squarespace-dns.com`. Leave `MX`/`TXT` records alone.
5. The locked **"Squarespace Defaults"** group can't be edited — that's fine, it
   only applies when the domain points at a Squarespace site. Your **Custom
   Records** are authoritative here.

### Step 5 — Wait for DNS + SSL

DNS changes can take anywhere from a few minutes to a few hours to propagate.
Once Vercel detects the records, it provisions an SSL certificate automatically
and your site goes live at `https://bingliscodes.com`. The domain status in
**Settings → Domains** will turn green ("Valid Configuration") when it's ready.

You can check propagation yourself:

```bash
dig bingliscodes.com +short        # expect 76.76.21.21
dig www.bingliscodes.com +short    # expect cname.vercel-dns.com
```

If Vercel still shows "Invalid Configuration" after ~30 minutes, it's almost
always a leftover Squarespace default record (see Step 4) that needs deleting.

## Project structure

```
src/
  components/
    ui/                 # shadcn/ui primitives (button, card, badge)
    brand-icons.tsx     # inline SVG brand glyphs (GitHub, LinkedIn, X, Bluesky)
    hero.tsx
    projects-section.tsx
    project-card.tsx
    resources-section.tsx
    about-section.tsx
    site-header.tsx
    site-footer.tsx
    theme-provider.tsx  # applies/persists the theme
    theme-toggle.tsx    # light/dark toggle button
    social-icon.tsx
    section-heading.tsx
  data/
    types.ts            # all content interfaces
    site.ts             # profile, socials, nav, resources
    projects.ts         # project list
  lib/
    theme.ts            # theme context + useTheme hook
    utils.ts            # cn() class-name helper
  App.tsx               # page composition
  main.tsx              # entry + ThemeProvider
  index.css             # Tailwind v4 + theme tokens
```

## License

MIT — make it your own.
