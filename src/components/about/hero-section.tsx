import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative px-8 py-24 lg:py-32 overflow-hidden">
      {/* Sophisticated background with subtle geometric patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/30 to-slate-100/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,theme(colors.indigo.950/0.05),transparent_50%)]" />
      
      {/* Academic grid overlay - subtle and sophisticated */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full bg-grid-slate-900/[0.04] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Subtitle with deep indigo accent */}
            <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
              <div className="w-8 h-px bg-indigo-950" />
              Academic Authority
            </div>

            {/* Main heading with sophisticated typography */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-light text-slate-900 leading-[1.1] tracking-tight">
                About
                <span className="block font-medium text-indigo-950 mt-2">
                  Alan Hirsch
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed max-w-lg">
                Equipping leaders to reimagine church and mission in the 21st century.
              </p>
            </div>

            {/* Scholarly credentials */}
            <div className="space-y-4 pt-4">
              <div className="flex flex-col space-y-2 text-sm text-slate-500">
                <span>Author • Thought Leader • Catalyst</span>
                <span>Founder of Forge Mission Training Network</span>
              </div>
            </div>

            {/* CTA with academic styling */}
            <div className="pt-8">
              <Button 
                className="bg-indigo-950 hover:bg-indigo-900 text-white px-8 py-3 text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-950/25"
                size="lg"
              >
                Explore His Work
              </Button>
            </div>
          </div>

          {/* Right: Abstract portrait illustration placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Abstract portrait frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-2xl shadow-slate-900/10" />
              
              {/* Geometric overlays for abstract effect */}
              <div className="absolute inset-6 bg-gradient-to-tr from-slate-50 to-white rounded-xl" />
              <div className="absolute top-12 right-12 w-32 h-32 bg-indigo-950/10 rounded-full blur-xl" />
              <div className="absolute bottom-16 left-16 w-24 h-24 bg-slate-900/5 rounded-full blur-lg" />
              
              {/* Placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-indigo-950/10 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-indigo-950/20 rounded-full" />
                  </div>
                  <p className="text-sm text-slate-400 font-light">Abstract Portrait</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}