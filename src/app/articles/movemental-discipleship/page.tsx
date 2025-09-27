import { Metadata } from 'next'
import { ArticleHero } from '@/components/article/article-hero'
import { ArticleBody } from '@/components/article/article-body'
import { ArticleSidebar } from '@/components/article/article-sidebar'
import { ArticleEndMatter } from '@/components/article/article-end-matter'

export const metadata: Metadata = {
  title: 'Movemental Discipleship in a Post-Christendom World | Alan Hirsch',
  description: 'Why missional imagination matters more than ever in our post-Christendom context. Exploring the intersection of discipleship, culture, and movement dynamics.',
}

export default function ArticleDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <ArticleHero />
        
        <div className="px-8 py-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <ArticleBody />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ArticleSidebar />
            </div>
          </div>
        </div>
        
        <ArticleEndMatter />
      </div>
    </div>
  )
}