# Alan Hirsch - Official Website

A modern, professional website for Alan Hirsch - scholar, consultant, and thought leader on missional church, leadership, and organizational transformation.

## 🌐 Live Site

**Production:** https://alan-front-ch6imcd01-joshuashepherds-projects.vercel.app

## 🚀 Quick Start

```bash
# Clone the repository  
git clone https://github.com/JoshuaShepherd/alan-front-end.git
cd alan-front-end

# Install dependencies
pnpm install

# Start development
pnpm dev
```

## 🛠 Tech Stack

- **Next.js 15** with App Router and Turbopack
- **TypeScript** with strict mode
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Drizzle ORM** for database operations
- **Supabase** for auth and hosting
- **Zod** for schema validation
- **Vitest** for unit testing
- **Playwright** for E2E testing
- **pnpm** for package management

## 📁 Project Structure

```
src/
├── app/           # Next.js App Router pages and API routes
├── components/    # Custom reusable components
├── components/ui/ # shadcn/ui components (auto-managed)
├── contracts/     # Zod schemas for validation
├── hooks/         # Custom React hooks
└── lib/           # Utilities and helpers

docs/              # Project documentation
tests/            # Test files
.github/          # AI prompts and workflows
.cursor/          # Cursor AI rules
.continue/        # Continue AI rules
```

## 🤖 AI-First Development

This template is optimized for AI-assisted development:

- **Copilot Instructions**: `.github/copilot-instructions.md`
- **Prompt Library**: `.github/prompts/` for common tasks
- **AI Rules**: `.cursor/rules/` and `.continue/rules/`
- **Contract Documentation**: `docs/CONTRACTS.md` as source of truth

### Using the Prompts

```bash
# Add a new database table
# Reference: .github/prompts/add-table.md

# Create a new form
# Reference: .github/prompts/new-form.md

# Refactor components safely
# Reference: .github/prompts/refactor-component.md
```

## 📋 Available Commands

```bash
# Development
pnpm dev          # Start dev server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm typecheck    # Type checking

# Testing
pnpm test         # Run unit tests
pnpm test:ui      # Interactive test UI
pnpm e2e          # Run E2E tests
pnpm e2e:ui       # Playwright test UI

# Database (Drizzle)
pnpm drizzle:gen     # Generate migrations
pnpm drizzle:push    # Push schema changes
pnpm drizzle:check   # Validate migrations

# Linting
pnpm lint         # Run ESLint
```

## 🗄 Database Setup

1. **Set up Supabase project** or local PostgreSQL
2. **Update DATABASE_URL** in `.env.local`
3. **Create your first schema** in `src/db/schema/`
4. **Generate migration**: `pnpm drizzle:gen`
5. **Apply migration**: `pnpm drizzle:push`

## 🎨 UI Components

Uses shadcn/ui with "new-york" style:

```bash
# Add new components
npx shadcn@latest add button
npx shadcn@latest add form
npx shadcn@latest add dialog
```

Components are automatically added to `src/components/ui/`.

## 🧪 Testing Strategy

- **Unit Tests**: Vitest for contracts and utilities
- **E2E Tests**: Playwright for user flows
- **RLS Tests**: Database security validation

## 📖 Documentation

- `docs/ARCHITECTURE.md` - System architecture
- `docs/CONTRACTS.md` - Zod schemas and types
- `docs/MIGRATIONS.md` - Database migration guide
- `docs/CHECKLISTS.md` - Development workflows
- `docs/TASK.md` - Current work tracking

## 🔐 Security

- Environment variable validation
- Row Level Security (RLS) patterns
- Input validation with Zod
- No service keys on client-side

## 🚢 Deployment

Template is configured for:
- **Vercel** (recommended for Next.js)
- **Supabase** (database and auth)
- **CI/CD** via GitHub Actions

## 📝 License

This template is open source and available under the MIT License.

---

**Happy coding!** 🎉
