# Update DB Schema
- Edit db/schema.ts for new/changed column(s).
- Generate migration: pnpm drizzle:gen.
- Push migration locally: pnpm drizzle:push.
- Sync docs/CONTRACTS.md.
- Update affected server actions + tests.
