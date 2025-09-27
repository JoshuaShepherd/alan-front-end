# Database Migrations Guide

## Migration Philosophy
All database changes MUST go through Drizzle migrations. Never modify the database directly in production.

## Commands Reference

### Generate Migration
```bash
pnpm drizzle:gen
```
- Analyzes schema changes in `src/db/schema/`
- Generates SQL migration files
- Creates timestamped migration in `drizzle/` directory

### Push Changes
```bash
pnpm drizzle:push
```
- Applies pending migrations to database
- Updates database to match current schema
- **DANGEROUS in production** - use with caution

### Validate Changes
```bash
pnpm drizzle:check
```
- Validates migration files without applying them
- Checks for syntax errors and conflicts
- **Always run before pushing to production**

### View Database
```bash
pnpm drizzle:studio
```
- Opens Drizzle Studio web interface
- Browse and edit database contents
- Useful for development and debugging

## Migration Workflow

### 1. Local Development
```bash
# Make schema changes in src/db/schema/
# Generate migration
pnpm drizzle:gen

# Review generated migration file
# Apply to local database
pnpm drizzle:push

# Test the changes
pnpm test
pnpm dev
```

### 2. Production Deployment
```bash
# Validate migration
pnpm drizzle:check

# Deploy code with migration
# Migration runs automatically on deployment
# Monitor logs for any issues
```

## Schema Organization

### File Structure
```
src/db/
├── schema/
│   ├── users.ts      # User-related tables
│   ├── articles.ts   # Article-related tables
│   └── index.ts      # Export all schemas
└── migrations/       # Generated migration files
```

### Schema Pattern
```typescript
// src/db/schema/articles.ts
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const articles = pgTable('articles', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})
```

## Migration Best Practices

### DO ✅
- **Always generate migrations** for schema changes
- **Review migration SQL** before applying
- **Test migrations locally** first
- **Keep migrations small** and focused
- **Add proper indexes** for performance
- **Include RLS policies** for user data

### DON'T ❌
- **Never edit migration files** manually
- **Don't push directly to production** database
- **Avoid large migrations** during peak hours
- **Don't forget to update contracts** after schema changes
- **Never skip migration validation**

## Troubleshooting

### Migration Conflicts
If you encounter migration conflicts:
1. **Stop development** - don't make more changes
2. **Coordinate with team** - ensure no one else is migrating
3. **Reset local database** if needed
4. **Regenerate migrations** with latest schema
5. **Test thoroughly** before pushing

### Failed Migrations
If a migration fails in production:
1. **Check logs** for specific error
2. **Don't panic** - database is likely intact
3. **Create hotfix migration** if possible
4. **Consider rollback** if hotfix isn't quick
5. **Document incident** for future prevention

### Common Errors
- **Column already exists**: Someone else added same column
- **Type mismatch**: Data doesn't match new schema
- **FK constraint violation**: Referential integrity issue
- **Permission denied**: Database user lacks privileges

## RLS (Row Level Security)

### When to Use RLS
- User-specific data (articles, profiles, etc.)
- Multi-tenant applications
- Sensitive data that needs access control

### RLS Policy Pattern
```sql
-- Enable RLS on table
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Policy for users to see only their articles
CREATE POLICY "Users can see own articles" ON articles
  FOR SELECT USING (auth.uid() = user_id);

-- Policy for users to insert their own articles
CREATE POLICY "Users can insert own articles" ON articles
  FOR INSERT WITH CHECK (auth.uid() = user_id);
```

## Monitoring and Maintenance

### Regular Tasks
- **Weekly**: Review migration logs
- **Monthly**: Analyze query performance
- **Quarterly**: Review and optimize indexes

### Performance Monitoring
- Track migration execution time
- Monitor database size growth
- Watch for slow queries after migrations
- Set up alerts for failed migrations