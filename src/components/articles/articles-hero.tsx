export function ArticlesHero() {
  return (
    <section className="relative px-8 py-20 lg:py-28 overflow-hidden">
      {/* Sophisticated background with editorial motif */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/40 to-slate-100/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,theme(colors.indigo.950/0.04),transparent_50%)]" />
      
      {/* Abstract editorial pattern - sophisticated grid */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="w-full h-full bg-grid-slate-900/[0.04] bg-[size:100px_100px]" />
      </div>

      {/* Editorial lines pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-32 left-1/4 w-48 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        <div className="absolute top-48 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        <div className="absolute bottom-40 left-1/3 w-64 h-px bg-gradient-to-r from-transparent via-indigo-950/20 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Academic badge */}
            <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
              <div className="w-8 h-px bg-indigo-950" />
              <span>Scholarly Writing</span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-light text-slate-900 leading-[1.05] tracking-tight">
                Articles &
                <span className="block font-medium text-indigo-950 mt-2">
                  Essays
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed max-w-lg">
                Essays, reflections, and insights from decades of missional 
                research and practice.
              </p>
            </div>

            {/* Writing stats */}
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="text-2xl font-light text-indigo-950">200+</div>
                <div className="text-sm text-slate-600 font-medium tracking-wide">Published Articles</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-light text-indigo-950">50+</div>
                <div className="text-sm text-slate-600 font-medium tracking-wide">Research Topics</div>
              </div>
            </div>

            {/* Academic context */}
            <div className="pt-6">
              <p className="text-slate-500 font-light leading-relaxed">
                Explore rigorous analysis of contemporary missional challenges, 
                drawing from biblical theology, organizational theory, and 
                field research across five continents.
              </p>
            </div>
          </div>

          {/* Right: Abstract editorial illustration */}
          <div className="relative">
            <div className="aspect-[4/5] max-w-md mx-auto relative">
              {/* Main editorial frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-2xl shadow-slate-900/10" />
              
              {/* Abstract editorial elements */}
              <div className="absolute inset-8 bg-white rounded-xl overflow-hidden">
                {/* Title lines */}
                <div className="absolute top-6 left-6 right-6 space-y-3">
                  <div className="h-4 bg-indigo-950/80 rounded w-3/4" />
                  <div className="h-4 bg-indigo-950/60 rounded w-1/2" />
                </div>
                
                {/* Body text lines */}
                <div className="absolute top-20 left-6 right-6 space-y-2">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2 bg-slate-300 rounded ${
                        i === 5 || i === 11 ? 'w-1/3' : 'w-full'
                      }`} 
                    />
                  ))}
                </div>
                
                {/* Accent elements */}
                <div className="absolute bottom-8 left-6 w-16 h-12 bg-indigo-950/10 rounded" />
                <div className="absolute bottom-8 right-6 w-20 h-8 bg-slate-200 rounded" />
              </div>

              {/* Floating academic elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-950/10 rounded-full blur-sm" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-slate-900/5 rounded-full blur-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}