export function EventsHero() {
  return (
    <section className="relative pt-32 pb-20 px-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-indigo-950/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-slate-900/5 rounded-full blur-2xl" />
        
        {/* Abstract Calendar/Event Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="relative h-full">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600">
              {/* Calendar Grid Pattern */}
              <defs>
                <pattern id="calendar" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="30" cy="30" r="3" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#calendar)" />
              {/* Event markers */}
              <circle cx="100" cy="150" r="8" fill="currentColor" opacity="0.6" />
              <circle cx="250" cy="200" r="6" fill="currentColor" opacity="0.4" />
              <circle cx="180" cy="300" r="10" fill="currentColor" opacity="0.8" />
              <circle cx="320" cy="350" r="7" fill="currentColor" opacity="0.5" />
            </svg>
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
                Events & Gatherings
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-light text-slate-900 leading-tight tracking-tight">
                  Upcoming
                  <span className="block font-medium text-indigo-950">
                    Events
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 font-light leading-relaxed max-w-lg">
                  Gatherings, workshops, and intensives focused on missional 
                  leadership, church transformation, and community development.
                </p>
              </div>
            </div>

            {/* Event Types */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="text-2xl font-light text-slate-900">12+</div>
                <div className="text-sm text-slate-600 font-light">Upcoming Events</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-light text-slate-900">Global</div>
                <div className="text-sm text-slate-600 font-light">Virtual Access</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 py-3 bg-indigo-950 hover:bg-indigo-900 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Events
              </button>
              <button className="px-6 py-3 border border-slate-300 hover:border-slate-400 text-slate-700 font-medium rounded-lg transition-all duration-300">
                Host an Event
              </button>
            </div>
          </div>

          {/* Right: Abstract Event Visualization */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 rotate-2 scale-95">
              {/* Event Cards Visualization */}
              <div className="space-y-3">
                <div className="h-24 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg shadow-lg p-4 transform -rotate-1">
                  <div className="w-12 h-2 bg-indigo-400 rounded mb-2" />
                  <div className="w-8 h-1 bg-indigo-300 rounded mb-1" />
                  <div className="w-16 h-1 bg-indigo-300 rounded" />
                </div>
                <div className="h-28 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg shadow-lg p-4 transform rotate-2">
                  <div className="w-10 h-2 bg-slate-400 rounded mb-2" />
                  <div className="w-6 h-1 bg-slate-300 rounded mb-1" />
                  <div className="w-14 h-1 bg-slate-300 rounded" />
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="h-32 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-lg shadow-lg p-4 transform rotate-1">
                  <div className="w-14 h-2 bg-indigo-500 rounded mb-2" />
                  <div className="w-10 h-1 bg-indigo-400 rounded mb-1" />
                  <div className="w-18 h-1 bg-indigo-400 rounded" />
                </div>
                <div className="h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg shadow-lg p-4 transform -rotate-2">
                  <div className="w-8 h-2 bg-slate-500 rounded mb-2" />
                  <div className="w-12 h-1 bg-slate-400 rounded" />
                </div>
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