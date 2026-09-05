# Futurex Global Exhibition Platform

Production-oriented Next.js + TypeScript rebuild of the Futurex Trade Fair & Events website. The approved dark cinematic Futurex visual direction is retained while the implementation has been migrated away from the original Vite/React single-file architecture into a typed, reusable Next.js App Router codebase.

## What changed

- Next.js App Router + TypeScript with strict mode.
- Server Components by default; Client Components are limited to navigation, motion, filtering, counters, gallery lightbox and forms.
- Reusable component architecture for layout, heroes, exhibitions, industries, services, sections, forms and UI primitives.
- Structured data files for exhibitions, industries, services, markets, testimonials, gallery, webinars and company information.
- Dynamic `/exhibitions/[slug]`, `/industries/[slug]` and `/services/[slug]` pages.
- Metadata, canonical URLs, sitemap, robots, Organization/Event/Breadcrumb structured data.
- Responsive mobile layouts and `prefers-reduced-motion` support.
- Production form pipeline with client + server Zod validation, honeypot protection, basic rate limiting, sanitization, MongoDB persistence, Google Sheets append and SMTP notifications to two configured recipients.
- Server-only integration modules; no credentials are exposed through `NEXT_PUBLIC_*` variables.

## Live Futurex content audit

The content/data structure was refreshed against `https://futurextrade.com/` on 2 September 2026. The implementation preserves verified Futurex company details, office network, services, group companies, testimonials, statistics and current/upcoming exhibition information. Futurex event logos are referenced from live Futurex assets where their URLs could be verified.

Because the live website contains some inconsistent legacy/alternate content, the structured data should be reviewed by the Futurex content owner before launch whenever event schedules change.

## Routes

- `/`
- `/about`
- `/exhibitions`
- `/exhibitions/[slug]`
- `/industries`
- `/industries/[slug]`
- `/services`
- `/services/[slug]`
- `/global-presence`
- `/participants`
- `/gallery`
- `/conferences`
- `/webinars`
- `/contact`

API Route Handlers:

- `POST /api/contact`
- `POST /api/enquiry`
- `POST /api/exhibitor-enquiry`
- `POST /api/visitor-enquiry`
- `POST /api/sponsor-enquiry`

## Form submission pipeline

```text
Browser form
  -> client Zod validation
  -> Next.js Route Handler
  -> server Zod validation
  -> honeypot + rate-limit checks
  -> sanitize input
  -> MongoDB Atlas (primary persistence)
  -> Google Sheets (secondary integration)
  -> SMTP notification to two recipients (secondary integration)
  -> safe success/error response
```

MongoDB is the primary persistence layer. A Google Sheets or email failure does not delete a successful MongoDB submission. Secondary failures are logged server-side and their status is saved back on the MongoDB document.

## Environment variables

Copy `.env.example` to `.env.local` and supply real server-side credentials. No secrets are included in this repository.

Required for form persistence:

```bash
MONGODB_URI=
MONGODB_DB=
```

Required for Google Sheets:

```bash
GOOGLE_CLIENT_EMAIL=
GOOGLE_PRIVATE_KEY=
GOOGLE_SHEET_ID=
GOOGLE_SHEET_TAB_CONTACT=Contact
GOOGLE_SHEET_TAB_ENQUIRY=Enquiries
GOOGLE_SHEET_TAB_EXHIBITOR=Exhibitors
GOOGLE_SHEET_TAB_VISITOR=Visitors
GOOGLE_SHEET_TAB_SPONSOR=Sponsors
```

`GOOGLE_PRIVATE_KEY` supports escaped newlines (`\\n`) and is normalized server-side. Share the target spreadsheet with `GOOGLE_CLIENT_EMAIL`.

Required for email notifications:

```bash
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=false
SMTP_USER=
SMTP_PASSWORD=
NOTIFICATION_EMAIL_1=
NOTIFICATION_EMAIL_2=
```

Optional rate-limit tuning:

```bash
FORM_RATE_LIMIT_MAX=6
FORM_RATE_LIMIT_WINDOW_MS=600000
```

Site URL:

```bash
NEXT_PUBLIC_SITE_URL=https://futurextrade.com
```

## Local development

```bash
npm install
cp .env.example .env.local
# fill in real credentials
npm run dev
```

Before deployment:

```bash
npm run verify:structure
npm run typecheck
npm run lint
npm run build
```

## Updating exhibitions

Edit `src/data/exhibitions.ts`. Each exhibition has typed fields for slug, title, edition, dates, venue, city, country, industry, image/logo assets, status, featured state, gallery and highlights. Dynamic event pages and exhibition filters consume this same data source.

## Security notes

- `.env.local` and all `.env.*.local` files are ignored by Git.
- MongoDB, Google and SMTP code is isolated in server-only modules.
- Secrets must never use `NEXT_PUBLIC_*` names.
- Inputs are validated on both client and server and sanitized before persistence/integration delivery.
- The included in-memory rate limiter is intentionally basic. For horizontally scaled/serverless production deployments, replace it with a shared Redis/KV-backed limiter without changing the form API contract.
- Error responses do not expose stack traces, credentials or raw provider errors.

## Verification status in this environment

`npm run verify:structure` passes and checks required routes/API handlers plus common exposed-secret patterns. A temporary TypeScript syntax/architecture pass also completed successfully using local declaration shims.

A real dependency install and Next.js production build could **not** be completed in this execution environment because outbound npm registry access timed out. `npm run build` therefore currently stops with `next: not found` because `node_modules` cannot be installed here. The supplied runtime environment also contains none of the required MongoDB, Google Sheets or SMTP variables, so those external integrations cannot be end-to-end tested here.

Do not treat the project as deployment-signed-off until `npm install`, `npm run typecheck`, `npm run lint`, `npm run build`, and live form integration tests pass in an environment with package-registry access and the real credentials.
