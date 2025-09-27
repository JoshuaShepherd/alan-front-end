import { Metadata } from 'next'
import { ArchiveHero } from '@/components/archive/archive-hero'
import { ArchiveFilters } from '@/components/archive/archive-filters'
import { ArchiveResults } from '@/components/archive/archive-results'
import { ArchiveCTA } from '@/components/archive/archive-cta'

export const metadata: Metadata = {
  title: 'The Alan Hirsch Archive | 20K+ Research Notes & Insights',
  description: 'Explore decades of missional research, quotes, and insights from Alan Hirsch. Searchable archive of 20,000+ notes organized by theme, era, and APEST framework.',
}

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <ArchiveHero />
        <div className="px-8 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <ArchiveFilters />
            </div>
            
            {/* Results Area */}
            <div className="lg:col-span-3">
              <ArchiveResults />
            </div>
          </div>
        </div>
        <ArchiveCTA />
      </div>
    </div>
  )
}