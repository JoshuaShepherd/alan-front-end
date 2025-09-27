# Development Checklists

## Definition of Done

### New Feature Checklist
- [ ] **Code Quality**
  - TypeScript types are explicit and correct
  - No console.log statements in production code
  - Code follows project style guidelines
  - Components are properly documented

- [ ] **Testing**
  - Unit tests for contracts/utilities
  - Component tests for UI logic
  - E2E tests for critical user flows
  - All tests pass: `pnpm test` and `pnpm e2e`

- [ ] **Database Changes**
  - Schema changes go through Drizzle migrations
  - Migrations tested with `pnpm drizzle:check`
  - RLS policies tested if user-scoped data
  - `docs/CONTRACTS.md` updated with new schemas

- [ ] **Documentation**
  - API changes documented
  - Breaking changes noted
  - Usage examples provided
  - README updated if needed

- [ ] **Security**
  - No service keys exposed client-side
  - Input validation with Zod schemas
  - Proper error handling without information leakage
  - RLS policies for user data

### Bug Fix Checklist
- [ ] Root cause identified and documented
- [ ] Fix addresses the core issue, not just symptoms
- [ ] Regression tests added to prevent reoccurrence
- [ ] Related code reviewed for similar issues
- [ ] Stakeholders notified of fix and timeline

---

## CI/CD Checks

### Automated Checks (GitHub Actions)
Our CI pipeline runs these checks on every PR:

1. **Dependencies**: `pnpm install --frozen-lockfile`
2. **Type Safety**: `pnpm typecheck`
3. **Unit Tests**: `pnpm test`
4. **Database**: `pnpm drizzle:check`
5. **Build**: `pnpm build`

### Manual Review Checklist
Before merging any PR:
- [ ] Code review completed by team member
- [ ] All CI checks passing
- [ ] No merge conflicts
- [ ] Breaking changes documented
- [ ] Database migrations tested locally

---

## Rollback Procedures

### Application Rollback
1. **Identify Issue**: Confirm deployment caused the problem
2. **Quick Fix vs Rollback**: Assess if hotfix is faster than rollback
3. **Execute Rollback**: 
   ```bash
   # For Vercel deployments
   vercel rollback [deployment-url]
   ```
4. **Verify**: Confirm application is working
5. **Communicate**: Notify team and stakeholders
6. **Post-Mortem**: Schedule review to prevent recurrence

### Database Rollback
1. **Stop Application**: Prevent further writes
2. **Identify Migration**: Find problematic migration
3. **Create Rollback Migration**: 
   ```bash
   pnpm drizzle:gen  # Create reverse migration
   pnpm drizzle:push # Apply rollback
   ```
4. **Verify Data Integrity**: Check data consistency
5. **Restart Application**: Resume normal operations
6. **Document**: Record rollback reason and steps

### Emergency Contacts
- **Database Issues**: [DBA Contact]
- **Infrastructure**: [DevOps Contact]
- **Security**: [Security Team]

---

## Code Review Standards

### What to Review
- [ ] **Functionality**: Does the code do what it's supposed to?
- [ ] **Security**: Any potential vulnerabilities?
- [ ] **Performance**: Any obvious performance issues?
- [ ] **Maintainability**: Is the code readable and well-structured?
- [ ] **Testing**: Are there adequate tests?

### Review Timeline
- **Small Changes** (< 50 lines): 24 hours
- **Medium Changes** (50-200 lines): 48 hours  
- **Large Changes** (> 200 lines): 72 hours
- **Critical Fixes**: 4 hours

### Approval Process
- At least 1 approval required for merge
- Original author cannot approve their own PR
- All CI checks must pass before merge