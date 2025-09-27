# Contracts Documentation

This document serves as the **source of truth** for all data validation schemas in the application. All Zod schemas and their inferred TypeScript types are documented here.

## Schema Organization

All schemas are located in `src/contracts/` and follow this pattern:
```typescript
export const EntitySchema = z.object({
  // schema definition
})
export type Entity = z.infer<typeof EntitySchema>
```

## Current Schemas

### ArticleSchema
**Location**: `src/contracts/article.ts`

```typescript
export const ArticleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
})
export type Article = z.infer<typeof ArticleSchema>
```

**Usage**:
- Article creation and editing forms
- API validation for article endpoints
- Database validation before persistence

**Business Rules**:
- Title cannot be empty
- Content cannot be empty
- Both fields are required for article creation

---

## Schema Guidelines

### When Adding New Schemas
1. Create schema file in `src/contracts/`
2. Export both schema and inferred type
3. Add documentation section above
4. Update this contracts documentation
5. Add validation tests in `tests/contracts.*.test.ts`

### Schema Naming Conventions
- Schema: `EntitySchema` (PascalCase + Schema suffix)
- Type: `Entity` (inferred from schema)
- File: `entity.ts` (kebab-case)

### Validation Rules
- Use descriptive error messages
- Include business logic in schemas
- Validate both client and server side
- Test edge cases and boundary conditions

---

## TODO: Schemas to Add
- [ ] UserSchema (authentication and profile data)
- [ ] CommentSchema (article comments)
- [ ] TagSchema (article categorization)
- [ ] AuthSchema (login/signup forms)

*Last updated: [Date when schema was added/modified]*