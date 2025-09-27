# New Form Prompt

## Goal
Create a new form using React Hook Form + Zod validation + server action pattern.

## Allowed Files
- `src/components/*.tsx` (new form component)
- `src/app/*/actions.ts` (server actions)
- `src/contracts/*.ts` (form validation schema)
- `tests/components/*.test.tsx` (component tests)
- `tests/contracts.*.test.ts` (schema validation tests)
- `docs/CONTRACTS.md` (update with form schema)

## Step Checklist
1. **Define Form Schema**
   - Create Zod schema in `src/contracts/`
   - Include client and server validation rules
   - Export form data type: `export type FormData = z.infer<typeof FormSchema>`

2. **Create Form Component**
   - Use React Hook Form with `zodResolver`
   - Import shadcn/ui form components
   - Handle loading states and error display
   - Follow accessibility patterns (labels, ARIA)

3. **Implement Server Action**
   - Validate input with Zod schema
   - Handle database operations with Drizzle
   - Return typed success/error responses
   - Implement proper error handling

4. **Add Form Styling**
   - Use shadcn/ui components (Form, FormField, FormItem, etc.)
   - Apply consistent spacing with Tailwind classes
   - Responsive design considerations
   - Focus states and validation styling

5. **Write Tests**
   - Schema validation tests (valid/invalid inputs)
   - Component rendering tests
   - Form submission tests
   - Error state handling tests

6. **Update Documentation**
   - Add form schema to `docs/CONTRACTS.md`
   - Document server action API
   - Include usage examples

## Deliverables
Return plan with:
- Form purpose and fields
- Validation rules and error messages
- Server action logic flow
- Component structure and styling approach
- Test cases to implement
- File diffs for all changes