export function BooksHero() {
  return (
    <section className="relative pt-32 pb-20 px-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-indigo-950/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-slate-900/5 rounded-full blur-2xl" />
        
        {/* Abstract Bookshelf Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <div className="grid grid-cols-8 gap-1 h-full pt-32">
            {Array.from({ length: 40 }).map((_, i) => (
              <div 
                key={i}
                className="bg-slate-900 rounded-sm"
                style={{ 
                  height: `${Math.random() * 60 + 20}%`,
                  marginTop: `${Math.random() * 20}%`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
                <div className="w-8 h-px bg-indigo-950" />
                Library
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-light text-slate-900 leading-tight tracking-tight">
                  Books by
                  <span className="block font-medium text-indigo-950">
                    Alan Hirsch
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 font-light leading-relaxed max-w-lg">
                  Resources that shape leaders and communities through decades 
                  of research, field experience, and biblical scholarship.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-light text-slate-900 mb-1">15+</div>
                <div className="text-sm text-slate-600 font-light">Published Books</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-light text-slate-900 mb-1">500K+</div>
                <div className="text-sm text-slate-600 font-light">Copies Sold</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-light text-slate-900 mb-1">25+</div>
                <div className="text-sm text-slate-600 font-light">Languages</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 py-3 bg-indigo-950 hover:bg-indigo-900 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Browse All Books
              </button>
              <button className="px-6 py-3 border border-slate-300 hover:border-slate-400 text-slate-700 font-medium rounded-lg transition-all duration-300">
                Free Resources
              </button>
            </div>
          </div>

          {/* Right: Abstract Book Display */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 rotate-3 scale-95">
              {/* Book Spines */}
              <div className="space-y-2">
                <div className="h-32 bg-gradient-to-b from-indigo-900 to-indigo-950 rounded shadow-lg transform -rotate-1" />
                <div className="h-24 bg-gradient-to-b from-slate-700 to-slate-800 rounded shadow-lg transform rotate-2" />
                <div className="h-28 bg-gradient-to-b from-indigo-800 to-indigo-900 rounded shadow-lg transform -rotate-1" />
              </div>
              <div className="space-y-2 mt-4">
                <div className="h-28 bg-gradient-to-b from-slate-600 to-slate-700 rounded shadow-lg transform rotate-1" />
                <div className="h-36 bg-gradient-to-b from-indigo-950 to-black rounded shadow-lg transform -rotate-2" />
                <div className="h-20 bg-gradient-to-b from-slate-800 to-slate-900 rounded shadow-lg transform rotate-1" />
              </div>
              <div className="space-y-2 mt-2">
                <div className="h-26 bg-gradient-to-b from-indigo-700 to-indigo-800 rounded shadow-lg transform -rotate-1" />
                <div className="h-32 bg-gradient-to-b from-slate-800 to-slate-900 rounded shadow-lg transform rotate-2" />
                <div className="h-24 bg-gradient-to-b from-indigo-900 to-indigo-950 rounded shadow-lg transform -rotate-1" />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-100 rounded-full opacity-40 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-slate-200 rounded-full opacity-60 animate-pulse delay-300" />
          </div>
        </div>
      </div>
    </section>
  )
}