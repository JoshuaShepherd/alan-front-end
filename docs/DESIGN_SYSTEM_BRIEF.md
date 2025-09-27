# Alan Hirsch Design System Brief
*A Modern Academic/Editorial Design System for Next.js + Tailwind CSS + shadcn/ui*

## Project Overview

### **Design Philosophy**
This design system embodies a sophisticated academic and editorial aesthetic, balancing scholarly authority with modern accessibility. It serves as a digital platform for thought leadership in missional church studies, featuring:

- **Editorial Excellence**: Clean typography and generous whitespace that honors written content
- **Academic Authority**: Professional color palette and structured layouts that build trust
- **Modern Accessibility**: Full dark mode support and responsive design patterns
- **Scalable Architecture**: Token-based design system that adapts across contexts

---

## Technical Foundation

### **Core Stack**
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with CSS custom properties
- **Components**: shadcn/ui ("new-york" style) with Radix UI primitives
- **Icons**: Lucide React
- **Package Manager**: pnpm (never npm/yarn)
- **Build Tool**: Turbopack for dev and production

### **Key Dependencies**
```json
{
  "next": "15.5.4",
  "react": "19.1.0",
  "tailwindcss": "^4",
  "tw-animate-css": "^1.4.0",
  "next-themes": "^0.4.6",
  "lucide-react": "^0.544.0",
  "class-variance-authority": "^0.7.1",
  "tailwind-merge": "^3.3.1",
  "clsx": "^2.1.1"
}
```

---

## Design Token System

### **Color Philosophy**
The system uses a sophisticated neutral palette with selective accent colors, designed for optimal readability and professional presentation.

### **CSS Custom Properties Structure**
```css
:root {
  /* Core Surfaces */
  --background: oklch(1 0 0);                    /* Pure white */
  --foreground: oklch(0.145 0 0);                /* Near black */
  --card: oklch(1 0 0);                          /* Card background */
  --card-foreground: oklch(0.145 0 0);           /* Card text */
  
  /* Interactive Elements */
  --primary: oklch(0.205 0 0);                   /* Dark charcoal */
  --primary-foreground: oklch(0.985 0 0);        /* Off-white */
  --secondary: oklch(0.97 0 0);                  /* Light gray */
  --secondary-foreground: oklch(0.205 0 0);      /* Dark text */
  
  /* Content Hierarchy */
  --muted: oklch(0.97 0 0);                      /* Subtle background */
  --muted-foreground: oklch(0.556 0 0);          /* Secondary text */
  --accent: oklch(0.97 0 0);                     /* Accent background */
  --accent-foreground: oklch(0.205 0 0);         /* Accent text */
  
  /* System Colors */
  --destructive: oklch(0.577 0.245 27.325);      /* Error red */
  --border: oklch(0.922 0 0);                    /* Border gray */
  --input: oklch(0.922 0 0);                     /* Input border */
  --ring: oklch(0.708 0 0);                      /* Focus ring */
  
  /* Component Spacing */
  --radius: 0.625rem;                            /* Base border radius */
}
```

### **Dark Mode Tokens**
```css
.dark {
  --background: oklch(0.145 0 0);                /* Near black */
  --foreground: oklch(0.985 0 0);                /* Off-white */
  --card: oklch(0.205 0 0);                      /* Dark card */
  --card-foreground: oklch(0.985 0 0);           /* Light card text */
  --primary: oklch(0.922 0 0);                   /* Light primary */
  --primary-foreground: oklch(0.205 0 0);        /* Dark primary text */
  --secondary: oklch(0.269 0 0);                 /* Dark secondary */
  --secondary-foreground: oklch(0.985 0 0);      /* Light secondary text */
  --muted: oklch(0.269 0 0);                     /* Dark muted */
  --muted-foreground: oklch(0.708 0 0);          /* Gray muted text */
  --border: oklch(1 0 0 / 10%);                  /* Subtle dark border */
  --input: oklch(1 0 0 / 15%);                   /* Dark input border */
  --ring: oklch(0.556 0 0);                      /* Dark focus ring */
}
```

---

## Typography System

### **Font Stack**
```css
/* Primary Body Font */
--font-geist-sans: "Geist", ui-sans-serif, system-ui, sans-serif;

/* Monospace Font */
--font-geist-mono: "Geist Mono", ui-monospace, monospace;

/* Display/Heading Font (Academic Context) */
--font-display: ui-serif, Georgia, serif;
```

### **Typography Hierarchy**
```css
/* Editorial headings (serif for authority) */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display, ui-serif, Georgia, serif);
  font-weight: 700;
  letter-spacing: -0.01em;
}

h1 { font-size: 3.5rem; line-height: 1.2; }
h2 { font-size: 2.5rem; line-height: 1.3; }

/* Body text (sans-serif for readability) */
body {
  font-family: var(--font-geist-sans, ui-sans-serif, system-ui);
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}
```

---

## Component Architecture

### **shadcn/ui Configuration**
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide"
}
```

### **Button System**
```tsx
// Primary Button Pattern
<Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
  Primary Action
</Button>

// Secondary Button Pattern
<Button variant="secondary" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground">
  Secondary Action
</Button>

// Outline Button Pattern
<Button variant="outline" className="border bg-background hover:bg-accent">
  Outline Action
</Button>
```

### **Card System**
```tsx
// Standard Card Pattern
<Card className="bg-card border-border text-card-foreground">
  <CardHeader>
    <CardTitle className="text-foreground">Card Title</CardTitle>
    <CardDescription className="text-muted-foreground">
      Supporting text
    </CardDescription>
  </CardHeader>
  <CardContent>
    {/* Card content */}
  </CardContent>
</Card>
```

---

## Layout Patterns

### **Page Structure Template**
```tsx
export default function PageTemplate() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="py-24 px-8">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Page Title
          </h1>
          <p className="text-lg text-muted-foreground">
            Supporting description
          </p>
        </section>
        
        {/* Content Sections */}
        <section className="py-16 px-8">
          {/* Section content */}
        </section>
      </div>
    </div>
  )
}
```

### **Navigation Pattern**
```tsx
<nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
  <div className="max-w-7xl mx-auto px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-primary-foreground rounded-full opacity-90" />
        </div>
        <span className="text-xl font-light text-foreground tracking-tight">
          Brand Name
        </span>
      </Link>
      
      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <Link className="text-muted-foreground hover:text-foreground font-light transition-colors duration-200">
          Nav Item
        </Link>
      </div>
      
      {/* CTA Button */}
      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
        Get in Touch
      </Button>
    </div>
  </div>
</nav>
```

---

## Responsive Design System

### **Breakpoint Strategy**
```css
/* Mobile-first approach using Tailwind's default breakpoints */
sm: 640px    /* Small tablets */
md: 768px    /* Tablets */
lg: 1024px   /* Laptops */
xl: 1280px   /* Desktops */
2xl: 1536px  /* Large screens */
```

### **Layout Patterns**
```tsx
// Grid System Example
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Grid items */}
</div>

// Sidebar Layout Example
<div className="grid lg:grid-cols-4 gap-12">
  <div className="lg:col-span-1">
    {/* Sidebar */}
  </div>
  <div className="lg:col-span-3">
    {/* Main content */}
  </div>
</div>
```

---

## Accessibility & Motion

### **Focus Management**
```css
:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
  border-radius: max(2px, var(--radius));
}
```

### **Reduced Motion Support**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
  
  /* Keep opacity transitions but remove transforms */
  .transition-all,
  .transition-transform {
    transition: opacity 0s !important;
  }
}
```

### **Dark Mode Implementation**
```tsx
// Automatic dark mode support through next-themes
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

---

## Advanced Features

### **Utility Classes**
```css
/* Skeleton Loading */
.skeleton {
  border-radius: calc(var(--radius) - 2px);
  background: linear-gradient(
    90deg,
    hsl(var(--muted)) 25%,
    hsl(var(--muted) / 0.6) 37%,
    hsl(var(--muted)) 63%
  );
  background-size: 400% 100%;
  animation: skeleton-shimmer 1.2s ease-in-out infinite;
}

/* Page Transitions */
.page-fade-in {
  animation: fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.page-slide-up {
  animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}
```

### **Scrollbar Styling**
```css
* {
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--muted-foreground) / 0.4) transparent;
}

*::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: hsl(var(--muted-foreground) / 0.4);
  border-radius: 9999px;
  border: 2px solid transparent;
  background-clip: content-box;
}
```

---

## File Structure

### **Required Directory Structure**
```
src/
├── app/
│   ├── globals.css           # Design system tokens
│   ├── layout.tsx            # Root layout with navigation
│   └── page.tsx              # Home page
├── components/
│   ├── ui/                   # shadcn/ui components (auto-generated)
│   └── navigation.tsx        # Custom navigation component
├── lib/
│   └── utils.ts              # cn() utility function
└── types/
    └── css.d.ts              # CSS module declarations
```

### **Essential Files**

#### **globals.css** (Complete design token system)
- All CSS custom properties for light/dark modes
- Base element styling
- Utility classes and animations
- Responsive breakpoints

#### **utils.ts** (Utility function)
```tsx
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

#### **css.d.ts** (TypeScript declarations)
```tsx
declare module "*.css" {
  const content: any;
  export default content;
}
```

---

## Implementation Guide

### **1. Project Setup**
```bash
# Create Next.js project
npx create-next-app@latest project-name --typescript --tailwind --eslint --app

# Install shadcn/ui
npx shadcn@latest init

# Configure with "new-york" style, CSS variables, neutral base color
```

### **2. Design System Installation**
1. Replace `globals.css` with the complete token system
2. Add `css.d.ts` for TypeScript support
3. Update `components.json` configuration
4. Install required dependencies

### **3. Component Development Pattern**
```tsx
// Always use design tokens instead of hardcoded colors
// ❌ Don't do this
<div className="bg-white text-gray-900 border-gray-200">

// ✅ Do this
<div className="bg-background text-foreground border-border">

// ❌ Don't do this
<button className="bg-indigo-600 hover:bg-indigo-700">

// ✅ Do this
<Button className="bg-primary hover:bg-primary/90">
```

---

## Quality Assurance

### **Testing Strategy**
- **Unit Tests**: Vitest for component logic
- **E2E Tests**: Playwright for user flows
- **Accessibility**: Built-in focus management and ARIA patterns
- **Cross-browser**: Tested on modern browsers with CSS custom property support

### **Performance Optimizations**
- CSS custom properties for runtime theme switching
- Tailwind CSS purging for optimal bundle size
- Next.js 15 with Turbopack for fast development
- Minimal JavaScript footprint with server components

---

## Migration from Other Systems

### **From Traditional Tailwind**
Use the provided migration guide to convert hardcoded color classes:
- `bg-white` → `bg-background`
- `text-gray-900` → `text-foreground`
- `text-gray-600` → `text-muted-foreground`
- `border-gray-200` → `border-border`

### **From Other Design Systems**
1. Map existing color tokens to the OKLCH system
2. Adapt component variants to match the button/card patterns
3. Implement the CSS custom property architecture
4. Test dark mode functionality across all components

---

This design system provides a complete foundation for sophisticated, accessible, and maintainable React applications with academic/editorial design requirements. The token-based architecture ensures consistency while enabling easy customization and theming.