export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 px-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-64 h-64 bg-indigo-950/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-slate-900/5 rounded-full blur-2xl" />
        
        {/* Abstract Communication Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="relative h-full">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600">
              <defs>
                <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
              <path d="M50,100 Q200,50 350,150 T350,400" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M100,200 Q250,150 300,300 T400,500" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
              <div className="w-8 h-px bg-indigo-950" />
              Get in Touch
              <div className="w-8 h-px bg-indigo-950" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-light text-slate-900 leading-tight tracking-tight">
                Contact
              </h1>
              
              <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
                We'd love to hear from you. Whether you're interested in speaking 
                engagements, partnerships, or have questions about missional leadership.
              </p>
            </div>
          </div>

          {/* Response Promise */}
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-slate-700 font-light">
              Typically respond within 24-48 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}