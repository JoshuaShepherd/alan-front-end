import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export function FeaturedArticle() {
  return (
    <section className="px-8 py-16 bg-slate-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
            <div className="w-8 h-px bg-indigo-950" />
            Featured
            <div className="w-8 h-px bg-indigo-950" />
          </div>
          <h2 className="text-3xl font-light text-slate-900 tracking-tight">
            Latest Insights
          </h2>
        </div>

        {/* Featured Article Card */}
        <Card className="overflow-hidden border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div className="relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-slate-200 via-slate-100 to-white overflow-hidden">
              {/* Abstract featured image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/5 via-transparent to-slate-900/5" />
                  
                  {/* Abstract geometric shapes representing editorial content */}
                  <div className="absolute inset-8 space-y-4">
                    <div className="h-8 bg-indigo-950/20 rounded w-4/5" />
                    <div className="h-6 bg-indigo-950/15 rounded w-3/5" />
                    <div className="mt-8 space-y-2">
                      {[...Array(8)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-3 bg-slate-300/60 rounded ${
                            i === 3 || i === 7 ? 'w-2/3' : 'w-full'
                          }`} 
                        />
                      ))}
                    </div>
                    <div className="mt-6 flex gap-2">
                      <div className="w-16 h-4 bg-indigo-950/10 rounded" />
                      <div className="w-20 h-4 bg-slate-300/60 rounded" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-indigo-950/0 group-hover:bg-indigo-950/5 transition-all duration-500" />
            </div>

            {/* Right: Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-indigo-950/10 text-indigo-950 hover:bg-indigo-950/15">
                  Missional Theology
                </Badge>
                <span className="text-sm text-slate-500">March 15, 2024</span>
                <span className="text-sm text-slate-500">•</span>
                <span className="text-sm text-slate-500">8 min read</span>
              </div>

              {/* Title */}
              <h3 className="text-3xl lg:text-4xl font-light text-slate-900 leading-tight tracking-tight group-hover:text-indigo-950 transition-colors">
                Movemental Discipleship in a
                <span className="block font-medium text-indigo-950 mt-1">
                  Post-Christendom World
                </span>
              </h3>

              {/* Excerpt */}
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Why missional imagination matters more than ever in navigating 
                the complexities of contemporary discipleship formation. 
                Exploring the intersection of cultural engagement and spiritual formation.
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-2">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-indigo-950/20 rounded-full" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-slate-900">Alan Hirsch</div>
                  <div className="text-xs text-slate-600">Founder, Forge Mission Training</div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button 
                  asChild
                  className="bg-indigo-950 hover:bg-indigo-900 text-white px-8 py-3 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-950/25"
                >
                  <Link href="/articles/movemental-discipleship">
                    Read Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Context */}
        <div className="text-center mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-500 font-light max-w-2xl mx-auto">
            This article explores the critical shift from traditional discipleship 
            models to adaptive, movement-oriented approaches necessary for 
            post-Christendom mission.
          </p>
        </div>
      </div>
    </section>
  )
}