# Code Style and Conventions

## TypeScript Standards
- Use **strict mode** - all types must be explicit
- Prefer `interface` for object shapes, `type` for unions/intersections
- Export types alongside schemas: `export type User = z.infer<typeof UserSchema>`
- Use `const assertions` for immutable data: `as const`
- Avoid `any` - use `unknown` or proper typing

## Tailwind CSS Class Order
Follow this order for consistent, readable classes:
1. **Layout**: `flex`, `grid`, `block`, `inline`, `hidden`
2. **Positioning**: `relative`, `absolute`, `top-0`, `left-0`
3. **Sizing**: `w-full`, `h-screen`, `max-w-md`
4. **Spacing**: `p-4`, `m-2`, `gap-4`, `space-x-2`
5. **Typography**: `text-lg`, `font-bold`, `text-center`
6. **Colors**: `bg-blue-500`, `text-white`, `border-gray-200`
7. **Effects**: `shadow-lg`, `rounded-md`, `opacity-75`
8. **Responsive**: `sm:flex`, `md:grid`, `lg:w-1/2`
9. **State**: `hover:bg-blue-600`, `focus:ring-2`, `disabled:opacity-50`

## React Hook Form + Zod Pattern
```typescript
// Schema definition
const FormSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password too short"),
})
type FormData = z.infer<typeof FormSchema>

// Component usage
const form = useForm<FormData>({
  resolver: zodResolver(FormSchema),
  defaultValues: { email: "", password: "" }
})
```

## shadcn/ui Component Usage
- **Import from `@/components/ui/`** - never modify these files
- **Compose complex UIs** from shadcn primitives
- **Use `cn()` utility** for conditional classes: `cn("base-classes", conditionalClasses)`
- **Leverage Radix primitives** for accessibility
- **Customize via CSS variables** in `globals.css`

## File Organization
```
src/components/
├── ui/           # shadcn/ui (don't modify)
├── forms/        # Form components
├── layout/       # Layout components
└── feature/      # Feature-specific components
```

## Import Patterns
```typescript
// External dependencies first
import { z } from "zod"
import { useForm } from "react-hook-form"

// Internal imports with path aliases
import { Button } from "@/components/ui/button"
import { UserSchema } from "@/contracts/user"
import { cn } from "@/lib/utils"

// Relative imports last (avoid when possible)
import "./component.css"
```

## Component Structure Template
```typescript
interface ComponentProps {
  // Props interface
}

export function Component({ ...props }: ComponentProps) {
  // Hooks at top
  // Event handlers
  // Render logic
  
  return (
    <div className="layout-classes spacing-classes">
      {/* JSX content */}
    </div>
  )
}
```

## Error Handling Patterns
- **Server Actions**: Return typed success/error objects
- **Forms**: Use React Hook Form error handling
- **API Routes**: Return proper HTTP status codes
- **Client Components**: Use error boundaries for unexpected errors