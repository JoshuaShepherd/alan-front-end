# Copilot Instructions

## Project Overview
Modern Next.js 15 application using TypeScript, shadcn/ui, Tailwind CSS, and pnpm. Architecture follows a structured approach with contracts (Zod schemas), components, and comprehensive testing.

## Key Technologies & Stack
- **Next.js 15** with App Router and Turbopack (`--turbopack` in dev/build scripts)
- **pnpm** for package management (never use npm/yarn commands)
- **shadcn/ui** with "new-york" style, Radix UI primitives, and Lucide icons
- **Drizzle ORM** with PostgreSQL for database operations
- **Vitest** for unit tests, **Playwright** for E2E tests
- **Supabase** for auth and database hosting (RLS patterns expected)
- **Zod** for schema validation and type inference
- **React Hook Form** with Zod resolvers for form handling

## Development Rules & Boundaries

### Database Migrations (Drizzle Only)
- ALL database changes go through Drizzle migrations
- Never modify database directly - always use `pnpm drizzle:gen` and `pnpm drizzle:push`
- Schema changes must be reflected in `docs/CONTRACTS.md`
- Test migrations with `pnpm drizzle:check` before pushing

### Contract-First Development
- `docs/CONTRACTS.md` is the source of truth for all Zod schemas
- All data validation schemas live in `src/contracts/`
- Export both schema and inferred type: `export type Article = z.infer<typeof ArticleSchema>`
- Update contracts documentation when adding/changing schemas

### Security Guardrails
- NEVER expose `SUPABASE_SERVICE_ROLE_KEY` or other service keys client-side
- Use `NEXT_PUBLIC_*` prefix only for truly public environment variables
- All server actions must validate input with Zod schemas
- Implement Row Level Security (RLS) for all user data

### File Modification Boundaries
- Do NOT modify files in `src/components/ui/` (shadcn/ui managed)
- Do NOT edit `node_modules/`, `pnpm-lock.yaml` directly
- ALWAYS propose a plan before making changes to multiple files
- Ask before modifying existing database schemas or API contracts

## Project Structure & Patterns

### Directory Architecture
```
src/
├── app/           # Next.js App Router pages and API routes
├── components/ui/ # shadcn/ui components (auto-generated, don't modify)
├── components/    # Custom reusable components
├── contracts/     # Zod schemas for validation (e.g., ArticleSchema)
├── hooks/         # Custom React hooks
└── lib/           # Utilities (contains cn() helper function)
```

### Path Aliases (configured in tsconfig.json and vitest.config.ts)
- `@/` → `./src/`
- Use absolute imports: `import { ArticleSchema } from "@/contracts/article"`

### Data Validation Pattern
- All data schemas defined in `src/contracts/` using Zod
- Export both schema and inferred TypeScript type:
  ```typescript
  export const ArticleSchema = z.object({...})
  export type Article = z.infer<typeof ArticleSchema>
  ```

## Development Workflow Commands

### Core Commands (always use pnpm)
```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Build for production with Turbopack  
pnpm typecheck    # Type checking without emit
pnpm test         # Run unit tests (Vitest)
pnpm test:ui      # Interactive test UI
pnpm e2e          # Run Playwright E2E tests
pnpm e2e:ui       # Playwright test UI
```

### Database Commands (Drizzle)
```bash
pnpm drizzle:gen     # Generate migrations
pnpm drizzle:push    # Push schema changes
pnpm drizzle:check   # Validate schema changes
```

### shadcn/ui Management
```bash
npx shadcn@latest add [component]  # Add new UI components
```

## Testing Strategy

### Unit Tests (Vitest)
- Contract validation tests in `tests/contracts.*.test.ts`
- Environment: Node.js (not jsdom for schema tests)
- Path aliases work via vitest.config.ts

### E2E Tests (Playwright)
- Full user flows in `tests/*.spec.ts`
- Test against `http://localhost:3000`
- Include auth flows and user interactions

### RLS Testing Pattern
- Database Row Level Security tests in `tests/rls.*.test.ts`
- Test user isolation and permission boundaries

### Testing Conventions
- **Unit Tests**: Vitest for contracts, utilities, pure functions
- **Integration Tests**: API routes and database operations
- **E2E Tests**: Playwright for full user flows
- Test files: `*.test.ts` for unit, `*.spec.ts` for E2E
- All new features require corresponding tests

## Database & Auth Architecture
- **Supabase** integration with RLS (Row Level Security)
- **Drizzle ORM** for type-safe database operations
- Auth patterns expect user-scoped data access
- Environment variables follow clear categorization (see .env.local structure)

## UI Component Conventions
- Use shadcn/ui components from `@/components/ui/`
- Styling with Tailwind CSS and `cn()` utility function
- CSS variables for theming (neutral base color)
- Compose complex components from shadcn primitives

## Important Files
- `components.json` - shadcn/ui configuration
- `vitest.config.ts` - Test environment and path resolution
- `.env.local` - Well-organized environment variables by service
- `.github/workflows/ci.yml` - CI pipeline with pnpm and type checking