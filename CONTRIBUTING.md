# Contributing

This project is a public progress site for the 50 Apps plan. Keep contributions focused on public-facing progress, app metadata, copy, assets, and static site improvements.

## Code Style

- Use Astro + TypeScript.
- Keep data in `src/data/apps.ts` and site-wide config in `src/data/site.ts`.
- Keep components small and presentational unless interactivity is needed.
- Do not add a backend unless the project explicitly needs one.
- Do not commit secrets, private schedules, internal registry files, or server deployment scripts.

## App Data Rules

Every app entry should be public-safe:

- Clear name and one-sentence tagline.
- Public status only: `idea`, `design`, `building`, `testing`, `released`, or `paused`.
- No internal sprint names, private repository paths, credentials, customer data, or unreleased business details.
- Icon and screenshot assets must be owned by the project or cleared for public use.

## Verification

Run this before pushing:

```bash
npm run verify
```

Use this when formatting is needed:

```bash
npm run format
```

## Wishlist Submissions

The wishlist is public. Treat submitted ideas as public input that may be summarized, edited, or moved into the public candidate pool. Do not ask submitters for passwords, private accounts, phone numbers, addresses, keys, or unlicensed assets.
