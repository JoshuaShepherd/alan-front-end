export function ArchiveHero() {
  return (
    <section className="relative px-8 py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50/30">
      {/* Sophisticated background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.indigo.950/0.04),transparent_50%)]" />
      
      {/* Academic grid overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="w-full h-full bg-grid-slate-900/[0.04] bg-[size:80px_80px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          {/* Breadcrumb-style navigation */}
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 tracking-wide">
            <span>Research</span>
            <div className="w-1 h-1 bg-slate-400 rounded-full" />
            <span>Archive</span>
            <div className="w-1 h-1 bg-slate-400 rounded-full" />
            <span className="text-indigo-950">20,000+ Insights</span>
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-light text-slate-900 leading-[1.05] tracking-tight">
              The Alan Hirsch
              <span className="block font-medium text-indigo-950 mt-2">
                Archive
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
              20,000+ notes, quotes, and research insights distilled for leaders 
              navigating missional transformation.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-2xl font-light text-indigo-950">20K+</div>
              <div className="text-sm text-slate-600 font-medium tracking-wide">Research Notes</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-light text-indigo-950">500+</div>
              <div className="text-sm text-slate-600 font-medium tracking-wide">Key Themes</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-light text-indigo-950">30+</div>
              <div className="text-sm text-slate-600 font-medium tracking-wide">Years Span</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-light text-indigo-950">1000+</div>
              <div className="text-sm text-slate-600 font-medium tracking-wide">Sources</div>
            </div>
          </div>

          {/* Description */}
          <div className="pt-8 max-w-2xl mx-auto">
            <p className="text-slate-500 font-light leading-relaxed">
              Decades of scholarly research, field observations, and practical insights 
              organized and searchable. From ancient church movements to contemporary 
              organizational theory—all contextualized for today's missional leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}