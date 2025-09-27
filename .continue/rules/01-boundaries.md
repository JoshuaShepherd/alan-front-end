# File Boundaries and Planning Rules

## File Modification Scope
- **NEVER** modify files in `src/components/ui/` - these are managed by shadcn/ui
- **NEVER** edit `node_modules/`, `pnpm-lock.yaml`, or generated files directly
- **ASK FIRST** before modifying database schemas or API contracts
- **ASK FIRST** before changing `package.json`, `tsconfig.json`, or configuration files

## Plan-First Approach
Before making changes to multiple files:
1. **Analyze** the current state and requirements
2. **Propose** a detailed plan with file changes
3. **Wait** for confirmation before proceeding
4. **Execute** changes systematically with clear commit messages

## Change Categories
### ✅ Safe to Modify
- `src/app/` - Next.js pages and API routes
- `src/components/` (custom components only)
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utilities and helpers
- `tests/` - Test files
- `docs/` - Documentation

### ⚠️ Modify with Caution
- `src/contracts/` - Zod schemas (update docs/CONTRACTS.md)
- `src/db/` - Database schemas (requires migration)
- `.env.local` - Environment variables
- Configuration files (ask first)

### ❌ Never Modify
- `src/components/ui/` - shadcn/ui components
- `node_modules/` - Dependencies
- `.next/` - Build output
- Generated migration files (use Drizzle commands)

## Planning Template
For multi-file changes, always provide:
```
## Goal
[What we're trying to achieve]

## Files to Modify
- file1.ts - [specific changes]
- file2.tsx - [specific changes]

## Impact Analysis
- Breaking changes: [list any]
- Dependencies affected: [list any]
- Tests required: [list any]

## Execution Steps
1. [Step 1]
2. [Step 2]
3. [Verification step]
```