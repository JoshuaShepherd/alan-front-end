import { cn } from '@/lib/utils'

interface EditorialSectionProps {
  children: React.ReactNode
  className?: string
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'default' | 'muted' | 'card' | 'primary'
}

const spacingClasses = {
  sm: 'py-12',
  md: 'py-16', 
  lg: 'py-24',
  xl: 'py-32'
}

const backgroundClasses = {
  default: 'bg-background',
  muted: 'bg-muted/30',
  card: 'bg-card',
  primary: 'bg-primary'
}

export function EditorialSection({ 
  children, 
  className, 
  spacing = 'lg',
  background = 'default'
}: EditorialSectionProps) {
  return (
    <section className={cn(
      spacingClasses[spacing],
      backgroundClasses[background],
      className
    )}>
      {children}
    </section>
  )
}