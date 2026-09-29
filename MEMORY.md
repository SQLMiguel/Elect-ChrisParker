# Project Memory — Elect Chris Parker

Persistent notes for AI chat sessions. **Read this first at the start of every session, and update it at the end.**

## How to use this file

1. At session start: read this file, then run
   `git --no-pager log --oneline <Last reviewed commit>..HEAD` and `git status --short`
   to see what changed since the last session (including changes made outside chat, e.g. by v0 or Heather).
2. During the session: note decisions, gotchas, and open items.
3. At session end: add a new entry to the **Session Log** (newest on top), update **Current State**,
   **Open Items**, and set **Last reviewed commit** to the current `HEAD`.

**Last reviewed commit:** `5fa8636` on `main` (2026-06-03 — "Updated all social media links"); redesign work is on branch `redesign-mailer-refresh`
**Last updated:** 2026-09-29

---

## Project Overview

- Campaign website for Chris Parker. Repo: `SQLMiguel/Elect-ChrisParker`, branch `main`.
- Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui (Radix). Originally generated with v0.
- Hosted on Vercel; **every merge/push to `main` auto-deploys**. Domain: `www.votechrisparker.com`.
- Commands: `npm run dev`, `npm run build`, `npm run lint`.

### Key locations

| Area | Path |
|------|------|
| Pages | `app/` (home, about, contact, donate, events, get-involved, issues, news, news/[slug]) |
| Page sections | `components/sections/` |
| Forms | `components/features/` (contact, volunteer, updates-signup, events-list) |
| Layout | `components/layout/` (header, footer, announcement-bar) |
| Server actions | `lib/actions/` (contact, supporters, volunteers, notifications, constant-contact) |
| Content data | `lib/data/` (endorsements, events, issues, navigation, posts) |
| Feature flags | `lib/config/visibility.ts` |
| Supabase | `lib/supabase/`, SQL in `scripts/00*.sql` |
| Docs | `COMPLETE_MIGRATION_GUIDE.md`, `DEPLOY_TO_VERCEL.md` |

### Configuration

- Env vars documented in `.env.example` (GoDaddy SMTP for form notifications, optional Constant Contact).
- `.env` is gitignored — never commit secrets.

---

## Current State (as of 2026-09-29)

- **Branch `redesign-mailer-refresh`** holds a mailer-based redesign (see Session Log). It is not merged or pushed yet. `main` is still the old design.
- **Brand system (redesign):** navy `#1a1f4e` (primary), red `#b42328` (accent), sky `#8ab8d8` (`bg-sky`/`text-sky`), slate `#c5cdd4`.
  Fonts: Bebas Neue (`font-display`, and all `h1` via globals.css) and Montserrat (body, `font-sans`). Striped backgrounds: `bg-stripes-red`, `bg-stripes-red-horizontal`.
- **Messaging (redesign):** slogan "Reasonable. Reliable. Respected."; tagline "A local small business owner with bipartisan solutions"; "3 Reasons" (Reasonable/Reliable/Respected, copy revised 2026-09-29); schools plan (Invest in workforce development at Forsyth Tech / Reduce wasteful spending in FCS / Create community collaboration to prepare for the jobs of today and tomorrow). **"Increase teacher pay" was removed everywhere at the client's request.** Chris is a **current** Forsyth Tech trustee (chair of the Student Success Committee) and YMCA board member; he *has chaired* the utility commission; "Vote early starting Thursday, October 15" + "Find your polling place at ncsbe.gov".
- Campaign constants live in `lib/data/navigation.ts` → `campaignInfo` (slogan, tagline, early-voting dates, `pollingPlaceUrl`, `donateUrl`).
- Feature flags: `SHOW_NEWS_SECTION = false`, `SHOW_EVENTS_SECTION = false`.
- `app/endorsements/page.tsx.bak`: the endorsements page is turned off. Only this backup file exists.
- Form notifications use `nodemailer` with GoDaddy SMTP (`lib/actions/notifications.ts`), sending a CSV of the submission.
- An attempted SMTP fix (`e7a189f`) was **reverted** in `840dfbe`, so SMTP delivery may still be an unresolved issue.
- `input/` has the campaign's source material: 2 billboard JPGs, 3 mailer PDFs, and `input/From PhotoShot/` (the pro photo shoot, about 1.7 GB). The shoot folder holds 73 raw `DSC0xxxx.jpg` files, 21 retouched selects in `KWedits/ChrisParker-39..59.jpg`, and a copy of the marketing material. **`input/` is gitignored**; the web-sized copies live in `public/images/photoshoot/`. `WebsiteSettings.jpg` is a screenshot of the Hostinger DNS records and isn't used on the site.
- **Photo map (redesign branch):** home hero is `chris-portrait-smile` (KW-45, the blue-shirt photo that matches the billboard). Home "Meet Chris" is `chris-porch-residents` (KW-47). 3 Reasons shows `chris-and-heather` (DSC03857). The Volunteer section background is `chris-garden-group` (DSC03839) under a navy overlay. The social share image is `og-image.jpg` (1200×630, from KW-44).
  - **About** hero: `community/chris-portrait-about.jpg` (client's `forAboutPage.jpg`). "In the Community" gallery has 7 tiles (flex-wrap, last row centered): Listening to neighbors (photoshoot porch), Time with the community ×2 (community lunches), Out in the neighborhood (I-74 opening), Chris and Heather (event), Working with community leaders, Supporting first responders (horizontal fire truck).
  - **Issues** (`issue.image` in `lib/data/issues.ts`): Fiscal = `chris-as-commissioner` (Utility Commission dais), Safety = `chris-with-fire-truck-vertical`, Education = `chris-ftcc-graduation` (caption "Trustee, Forsyth Technical Community College"), Housing = photoshoot neighborhood walk (placeholder until client sends another), Community Services = `chris-dss-lobby` (DSS kiosk; `dss ribbon cutting.jpg` is the unused 16:9 alternative). Portrait images (height > width) render in a centered `aspect-[3/4]` frame (max-w-sm); optional `objectPosition` per image.
  - Client photos 2026-09-29 came from `input/NewPhotos/More photos/`; web copies in `public/images/community/` (EXIF-rotated, metadata/GPS stripped, ≤1800px, q80). Gotcha: `as Commissioner.jpg` is really a **HEIC** file — needs `pillow-heif` to read. Unused client photos there: I-74 ribbon cutting (`IMG_20260928_0946*`), Bank of America breakfast (`IMG_20260928_221430`), group photo (`IMG_20260928_221445`), `presenting to residents.jpg`, `seimens.jpg`.
- Photos no longer used but kept in `public/images/`: `Candidacy_edit.png` (old hero; the similar `candidacy-announcement.jpg` is still used by a news post), `chris-parker-portrait.webp` (old About portrait), `SittingAtDeskClean.png`, and photoshoot files `chris-portrait-flag-tie`, `chris-portrait-suit`, `chris-fire-truck`, `chris-fire-station`, `chris-garden-conversation`, `chris-garden-walk`, `chris-library-visit`, `chris-reading-group`, `chris-and-heather-laughing`. Heather's four bio photos (2×2 grid) are unchanged.
- **Local dev gotcha:** `next.config.mjs` has `turbopack.root: '../'`, which resolves to `D:\` locally and breaks Tailwind resolution. Use `npx next dev --webpack` / `npx next build --webpack` locally. The config was left unchanged because Vercel may depend on it.
- **Temporary preview hosting:** https://chrisparker-preview.vercel.app runs in Vercel project `chrisparker-preview`, under account `miguelcebollero-6953` (team `miguelcebollero-6953s-projects`). It is deployed from the local folder with the CLI and is **not** connected to Git. The live campaign site is **not** in this Vercel account.
  - Redeploy: `npx vercel@latest deploy --prod --yes`. That is the preview project's own "production" and doesn't affect the live site.
  - `.vercel/project.json` links the folder to that project and is gitignored. `.vercelignore` keeps `input/`, `.env*`, and `*.docx` out of uploads.
  - `vercel.json` pins `"framework": "nextjs"`. It's needed because a project created with `vercel project add` has no framework preset, and without it every page returned 404.
  - No env vars are set on the preview, so forms won't send email or save to Supabase there. Note that the Supabase keys (`NEXT_PUBLIC_SUPABASE_URL`/`_ANON_KEY`) aren't in the local `.env` either.
- The remote has several stale branches (`v0/miceboll-1038-*`, `fiscal-responsibility-header`, `master`, etc.).

## Open Items

- [ ] Review the `redesign-mailer-refresh` branch, then merge it to `main` (merging deploys to production).
- [ ] When the branch is merged, delete the temporary Vercel project `chrisparker-preview`.
- [ ] Confirm whether form email (SMTP) delivery works in production.
- [ ] Mailer copy typos to flag to the designer: "Chris **Partner**" (Piece 1 back), plus boilerplate text "Paid for by official funds authorized by the House of Representatives / 1032 Longworth HOB". Neither was used on the site.
- [ ] Confirm that people other than Chris and Heather who appear in the photo shoot (Vienna Village residents, neighbors) have agreed to appear on the website. Their faces are visible in `chris-library-visit`, `chris-garden-walk`, `chris-porch-residents`, and a few other photos.
- [ ] Domain inconsistency: the site metadata uses `www.votechrisparker.com`, but the mailers print **ElectChrisParker.org** and the DNS screenshot shows `electchrisparker.org`. Confirm which domain is canonical and update `metadataBase`/`openGraph.url` in `app/layout.tsx` to match.
- [ ] Minor inconsistency: About page Quick Facts says "resident since 1995", but the bio says 1994.
- [ ] Priority 4 (Housing) photo is a placeholder — client will send a replacement.
- [ ] Copy that still says Chris "served" (past tense) at Forsyth Tech: About page Quick Facts ("Served on local boards…") — client now says he currently *serves*; confirm wording.
- [ ] Confirm consent for other people visible in the new client photos (community lunches, DSS lobby, community leaders, I-74 opening).

---

## Session Log

<!-- Newest entries on top. Template:
### YYYY-MM-DD — short title
- **Changed:** ...
- **New:** ...
- **Decisions / notes:** ...
- **HEAD at end:** `abc1234`
-->

### 2026-09-29 — Client copy + photo revisions (branch `redesign-mailer-refresh`)
- **Changed (copy):** Home "Meet Chris" 2nd paragraph now opens "Chris serves as a trustee at Forsyth Tech and as a board member of the YMCA. He has chaired the local utility commission." 3 Reasons text replaced with client's wording. Schools Plan intro is now two paragraphs (Student Success Committee chair; President of Vienna Village) and the 3rd bullet is "Create community collaboration…". Removed "Increase teacher pay" from the Education issue priorities.
- **Changed (photos):** About hero, About gallery (removed "Visiting with residents", added community lunches ×2, community leaders, new Chris & Heather, fire truck), and Issues photos for priorities 1, 2, 3, 5 — see Current State photo map. Issues page now supports portrait photos.
- **New:** `public/images/community/` (11 web-sized client photos).
- **Verified:** `tsc` clean; `next dev --webpack` renders home/about/issues; screenshots checked.
- **Notes:** Preview site (chrisparker-preview.vercel.app) not redeployed yet this session.
- **HEAD at end:** tip of `redesign-mailer-refresh` (commit "Apply client copy and photo revisions"). Not pushed.

### 2026-09-27: Temporary Vercel preview deployed
- **New:**
  - `.vercelignore` and `vercel.json` (`framework: nextjs`).
  - Vercel project `chrisparker-preview`, live at https://chrisparker-preview.vercel.app. All main pages return 200.
- **Changed:**
  - The Vercel CLI added `.vercel` and `.env*` to `.gitignore`. I added `!.env.example` so the template stays tracked.
- **Notes:** The first deploy returned 404 on every page because the framework preset was missing. `vercel.json` fixed it.
- **HEAD at end:** tip of `redesign-mailer-refresh` (commit "Add Vercel preview deployment config"). Not pushed to GitHub.

### 2026-09-27 — Pro photo shoot integrated (branch `redesign-mailer-refresh`)
- **Source:** `input/From PhotoShot/` (94 photos). I preferred the photographer's retouched `KWedits` selects where they exist.
- **New:**
  - 15 web-sized photos plus `og-image.jpg` in `public/images/photoshoot/`, resized to 1400–2000px on the long edge at JPEG q80 (about 3.8 MB total). They were resized only, with no retouching. The Open Graph image is the one crop.
  - An "In the Community" gallery on the About page.
  - Optional `image` field on each issue, shown above its priorities card on the Issues page.
  - Open Graph and Twitter share image, plus `metadataBase`.
- **Changed:**
  - The home hero now uses the billboard-matching blue-shirt portrait.
  - The home "Meet Chris" photo is now the porch conversation. The old utility commission desk photo moved to the Fiscal Responsibility issue.
  - The Chris & Heather photo was added to 3 Reasons.
  - The Volunteer CTA now has a photo background.
  - The About hero uses the new flag-tie portrait.
  - `input/` was added to `.gitignore`.
- **HEAD at end:** tip of `redesign-mailer-refresh` (commit "Add professional photo shoot images"). Not pushed.

### 2026-09-27 — Redesign from new mailers/billboards (branch `redesign-mailer-refresh`)
- **Source:** `input/` billboards (red-striped and sky-blue versions) and mailer pieces 1–3.
- **Changed:**
  - Theme colors in `app/globals.css` now use navy/red/sky/slate. Fonts switched from Inter to Bebas Neue + Montserrat (`app/layout.tsx`). All page `h1`s restyled as Bebas uppercase.
  - Hero (`components/sections/hero.tsx`) now has a billboard look: red stripes, a navy circle behind the same portrait (`Candidacy_edit.png`), "CHRIS PARKER / County Commissioner / Reasonable. Reliable. Respected."
  - Announcement bar is red and reads "Vote early starting Thursday, October 15 | Find your polling place at ncsbe.gov". On the client it switches to "Early voting is underway" from Oct 15–31 and to "Election Day" afterwards.
  - About preview and About page hero use the mailer bio copy (with the "Partner" typo corrected). The About bio ending now uses the bipartisan wording.
  - Workforce/Education issue priorities now include the mailer's schools plan.
  - Home issues grid changed to a 2×2 layout. Footer shows the slogan. The updates-signup button is now red; it was invisible (navy on navy) in the footer.
  - `campaignInfo` gained `tagline`, `earlyVotingStart*`, `pollingPlaceUrl`, and `donateUrl`, and the slogan changed.
- **New:** `components/sections/three-reasons.tsx`, `schools-plan.tsx`, `vote-early.tsx`. Home page order is now Hero → About → 3 Reasons → Issues → Schools Plan → Facebook → Volunteer → Donate → Vote Early.
- **Photos:** none modified, replaced, or added.
- **Verified:** `tsc` clean. `next build --webpack` succeeds. Screenshots were checked on desktop.
- **HEAD at end:** tip of `redesign-mailer-refresh` (commit "Redesign site using new mailer/billboard branding", based on `5fa8636`). Not pushed.

### 2026-09-27 — Memory file created
- **New:** `MEMORY.md` (this file) and `.github/copilot-instructions.md` (tells Copilot to read/update this file each session).
- **Changed:** No site code changed.
- **Notes:** Baseline snapshot of repo taken at `5fa8636`. Recent history before this session:
  - 2026-06-03 — Updated Facebook and all social media links.
  - 2026-05-21 — SMTP form fix attempted, then reverted.
  - 2026-05-08 — Added SMTP info for forms.
  - Earlier — hero photo update, biography 2x2 photos, more photos site-wide (per Heather), domain changed to `www.votechrisparker.com`, visibility flags, Facebook CTA section.
- **HEAD at end:** `5fa8636`
