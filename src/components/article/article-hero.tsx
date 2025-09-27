import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function ArticleHero() {
  return (
    <section className="relative px-8 py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50/30">
      {/* Sophisticated background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,theme(colors.indigo.950/0.03),transparent_50%)]" />
      
      {/* Academic grid overlay */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="w-full h-full bg-grid-slate-900/[0.04] bg-[size:120px_120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <div className="w-8 h-px bg-indigo-950" />
              <span className="font-medium tracking-wide uppercase">Missional Theology</span>
            </div>
            <Badge variant="outline" className="border-slate-300 text-slate-600">
              8 min read
            </Badge>
            <span className="text-slate-500">Published March 15, 2024</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 leading-[1.1] tracking-tight">
              Movemental Discipleship in a
              <span className="block font-medium text-indigo-950 mt-2">
                Post-Christendom World
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl">
              Why missional imagination matters more than ever in navigating 
              the complexities of contemporary discipleship formation.
            </p>
          </div>

          {/* Byline and Sharing */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-slate-200">
            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-indigo-950/20 rounded-full" />
              </div>
              <div className="space-y-1">
                <div className="font-medium text-slate-900">Alan Hirsch</div>
                <div className="text-sm text-slate-600">Founder, Forge Mission Training Network</div>
              </div>
            </div>

            {/* Share Icons */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600 font-medium">Share:</span>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-9 h-9 p-0 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-9 h-9 p-0 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-9 h-9 p-0 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-9 h-9 p-0 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}