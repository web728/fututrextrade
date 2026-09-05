# Verification Record

Date: 2026-09-02

## Passed locally

- Required App Router page files: passed.
- Required form API Route Handlers: passed.
- No `any` usage found in `src/`: passed.
- No `NEXT_PUBLIC_` secret namespaces found: passed.
- No hardcoded MongoDB SRV URI/private-key patterns found: passed.
- Temporary TypeScript syntax/internal-architecture check with local declaration shims: passed.
- `npm run verify:structure`: passed (`21 required files`, `89 source files`).

## Blocked by execution environment

- `npm install`: blocked; npm registry requests timed out.
- `npm run build`: attempted, but dependencies are unavailable, resulting in `next: not found`.
- MongoDB Atlas connection test: blocked; `MONGODB_URI` / `MONGODB_DB` are not present in the runtime environment.
- Google Sheets append test: blocked; Google service-account and sheet variables are not present.
- SMTP delivery to both notification addresses: blocked; SMTP/recipient variables are not present.

## Required deployment sign-off

Run in the actual deployment environment after credentials are configured:

1. `npm install`
2. `npm run verify:structure`
3. `npm run typecheck`
4. `npm run lint`
5. `npm run build`
6. Verify every public route at desktop/tablet/mobile widths.
7. Submit contact, enquiry, exhibitor, visitor and sponsor forms.
8. Confirm each submission persists in MongoDB.
9. Confirm the correct Google Sheet tab receives each row.
10. Confirm both notification recipients receive each email.
11. Test validation, honeypot, rate limit and provider-failure behavior.
12. Confirm no secrets appear in browser bundles, rendered HTML, logs or source control.
