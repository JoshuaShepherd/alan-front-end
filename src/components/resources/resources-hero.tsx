import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ResourcesHero() {
  return (
    <section className="py-24 px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">
          Leader Toolkits
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Practical worksheets and guides for team formation.
        </p>
      </div>
    </section>
  )
}