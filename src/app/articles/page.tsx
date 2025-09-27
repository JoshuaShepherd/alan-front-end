import { Metadata } from 'next'
import { ArticlesHero } from '@/components/articles/articles-hero'
import { FeaturedArticle } from '@/components/articles/featured-article'
import { ArticlesGrid } from '@/components/articles/articles-grid'
import { ArticlesFilters } from '@/components/articles/articles-filters'
import { ArticlesCTA } from '@/components/articles/articles-cta'

export const metadata: Metadata = {
  title: 'Articles & Essays | Alan Hirsch',
  description: 'Explore Alan Hirsch\'s latest essays, reflections, and insights on missional leadership, church transformation, and the APEST framework.',
}

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <ArticlesHero />
        <FeaturedArticle />
        
        <div className="px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <ArticlesFilters />
            </div>
            
            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <ArticlesGrid />
            </div>
          </div>
        </div>
        
        <ArticlesCTA />
      </div>
    </div>
  )
}