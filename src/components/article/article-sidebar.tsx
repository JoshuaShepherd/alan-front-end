import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ArticleSidebar() {
  const relatedTags = [
    'Missional',
    'APEST',
    'Discipleship', 
    'Post-Christendom',
    'Cultural Engagement',
    'Movement Dynamics'
  ]

  const startHereArticles = [
    {
      title: "Understanding the APEST Framework",
      readTime: "12 min read",
      href: "/articles/apest-framework"
    },
    {
      title: "From Attractional to Missional",
      readTime: "8 min read", 
      href: "/articles/attractional-to-missional"
    },
    {
      title: "The Forgotten Ways Revisited",
      readTime: "15 min read",
      href: "/articles/forgotten-ways-revisited"
    }
  ]

  return (
    <div className="space-y-8">
      {/* About the Author */}
      <Card className="p-6 border-slate-200 shadow-sm bg-slate-50/30">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-indigo-950/20 rounded-full" />
            </div>
            <div>
              <h3 className="font-medium text-slate-900">Alan Hirsch</h3>
              <p className="text-sm text-slate-600">Author & Thought Leader</p>
            </div>
          </div>
          
          <p className="text-sm text-slate-600 leading-relaxed font-light">
            Alan is the founder of Forge Mission Training Network and a leading 
            voice in the missional church movement. He has authored over 20 books 
            and works globally to equip leaders for transformational mission.
          </p>
          
          <div className="space-y-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-indigo-950 rounded-full" />
              <span>20+ Published Books</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-indigo-950 rounded-full" />
              <span>40+ Countries Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-indigo-950 rounded-full" />
              <span>Adjunct Professor, Fuller Seminary</span>
            </div>
          </div>
          
          <Button variant="outline" size="sm" className="w-full mt-4">
            View Full Bio
          </Button>
        </div>
      </Card>

      {/* Related Tags */}
      <Card className="p-6 border-slate-200 shadow-sm">
        <div className="space-y-4">
          <h3 className="font-medium text-slate-900">Related Topics</h3>
          <div className="flex flex-wrap gap-2">
            {relatedTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-slate-300 text-slate-600 hover:border-indigo-950/30 hover:text-indigo-950 cursor-pointer transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <Button variant="ghost" size="sm" className="w-full justify-start text-slate-600 hover:text-slate-900">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Browse All Topics
          </Button>
        </div>
      </Card>

      {/* Start Here Collection */}
      <Card className="p-6 border-slate-200 shadow-sm">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-950/10 rounded flex items-center justify-center">
              <svg className="w-3 h-3 text-indigo-950" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 10.793a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-medium text-slate-900">Start Here</h3>
          </div>
          
          <p className="text-sm text-slate-600 font-light">
            New to missional thinking? These foundational articles provide 
            essential context for understanding the broader framework.
          </p>
          
          <div className="space-y-3">
            {startHereArticles.map((article, index) => (
              <Link 
                key={index}
                href={article.href}
                className="group block p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 transition-all duration-200"
              >
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-slate-900 group-hover:text-indigo-950 leading-tight">
                    {article.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {article.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <Button variant="ghost" size="sm" className="w-full justify-start text-slate-600 hover:text-slate-900">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            View Full Collection
          </Button>
        </div>
      </Card>

      {/* Reading Progress (Sticky) */}
      <Card className="p-4 border-slate-200 shadow-sm bg-white sticky top-24">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Reading Progress</span>
            <span className="text-slate-900 font-medium">65%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-1.5">
            <div className="bg-indigo-950 h-1.5 rounded-full transition-all duration-300" style={{ width: '65%' }} />
          </div>
          <div className="text-xs text-slate-500">
            About 3 minutes remaining
          </div>
        </div>
      </Card>

      {/* Newsletter Signup */}
      <Card className="p-6 border-slate-200 shadow-sm bg-gradient-to-br from-indigo-950/5 to-slate-50">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium text-slate-900">Stay Updated</h3>
            <p className="text-sm text-slate-600 font-light">
              Get weekly insights on missional leadership and church transformation.
            </p>
          </div>
          <Button className="w-full bg-indigo-950 hover:bg-indigo-900 text-white">
            Subscribe to Newsletter
          </Button>
          <p className="text-xs text-slate-500 text-center">
            Join 15,000+ leaders • Unsubscribe anytime
          </p>
        </div>
      </Card>
    </div>
  )
}