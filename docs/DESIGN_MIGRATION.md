# Design System Migration Guide

## Overview
This guide helps migrate components from hardcoded Tailwind colors to your design token system using CSS custom properties.

## Color Token Mapping

### Background Colors
```
OLD                     →  NEW
bg-white               →  bg-background
bg-gray-50             →  bg-muted
bg-gray-100            →  bg-muted
bg-slate-50            →  bg-muted
bg-slate-100           →  bg-secondary
bg-indigo-50           →  bg-muted
bg-indigo-950          →  bg-primary
```

### Text Colors
```
OLD                     →  NEW
text-black             →  text-foreground
text-gray-900          →  text-foreground
text-slate-900         →  text-foreground
text-gray-600          →  text-muted-foreground
text-slate-600         →  text-muted-foreground
text-gray-500          →  text-muted-foreground
text-indigo-950        →  text-primary
text-indigo-600        →  text-primary
text-white             →  text-primary-foreground (on dark bg)
```

### Border Colors
```
OLD                     →  NEW
border-gray-200        →  border-border
border-slate-200       →  border-border
border-gray-300        →  border-border
border-indigo-200      →  border-border
border-indigo-950      →  border-primary
```

### Interactive States
```
OLD                     →  NEW
hover:bg-gray-50       →  hover:bg-muted
hover:bg-indigo-900    →  hover:bg-primary/90
hover:text-slate-900   →  hover:text-foreground
focus:border-indigo-400 →  focus:border-ring
focus:ring-indigo-400  →  focus:ring-ring
```

### Button Styles
```
PRIMARY BUTTON (OLD):
bg-indigo-950 hover:bg-indigo-900 text-white

PRIMARY BUTTON (NEW):
bg-primary hover:bg-primary/90 text-primary-foreground

SECONDARY BUTTON (OLD):
bg-gray-100 hover:bg-gray-200 text-gray-900

SECONDARY BUTTON (NEW):
bg-secondary hover:bg-secondary/80 text-secondary-foreground
```

### Card/Surface Colors
```
OLD                     →  NEW
bg-white border-gray-200 → bg-card border-border text-card-foreground
bg-gray-50              →  bg-muted
```

## Component Patterns

### Hero Sections
```tsx
// OLD
<div className="bg-white py-24">
  <h1 className="text-4xl font-bold text-gray-900">
  <p className="text-lg text-gray-600">

// NEW  
<div className="bg-background py-24">
  <h1 className="text-4xl font-bold text-foreground">
  <p className="text-lg text-muted-foreground">
```

### Cards
```tsx
// OLD
<div className="bg-white border border-gray-200 rounded-lg p-6">
  <h3 className="text-lg font-semibold text-gray-900">
  <p className="text-gray-600">

// NEW
<div className="bg-card border border-border rounded-lg p-6 text-card-foreground">
  <h3 className="text-lg font-semibold text-foreground">
  <p className="text-muted-foreground">
```

### Forms
```tsx
// OLD
<input className="border border-gray-300 rounded-md px-3 py-2 focus:border-indigo-400 focus:ring-indigo-400">

// NEW
<input className="border border-input rounded-md px-3 py-2 bg-background text-foreground focus:border-ring focus:ring-ring">
```

## Dark Mode Support
All new tokens automatically support dark mode via the `.dark` class. No additional dark: prefixes needed when using design tokens.

## Migration Checklist
- [ ] Replace hardcoded background colors with bg-background, bg-card, bg-muted
- [ ] Replace text colors with text-foreground, text-muted-foreground
- [ ] Replace border colors with border-border, border-input
- [ ] Update button styles to use primary/secondary tokens
- [ ] Replace focus states with ring token
- [ ] Test in both light and dark modes
- [ ] Remove any hardcoded indigo/slate/gray classes