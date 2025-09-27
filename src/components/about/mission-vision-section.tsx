import { Card } from '@/components/ui/card'

export function MissionVisionSection() {
  return (
    <section className="px-8 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
            <div className="w-8 h-px bg-indigo-950" />
            Purpose & Direction
            <div className="w-8 h-px bg-indigo-950" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
            Mission &
            <span className="block font-medium text-indigo-950">
              Vision
            </span>
          </h2>
        </div>

        {/* Mission and Vision cards */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Mission Card */}
          <Card className="group relative overflow-hidden border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            {/* Subtle background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-950/5 to-transparent rounded-full blur-2xl" />
            
            <div className="relative p-8 lg:p-10 space-y-6">
              {/* Icon */}
              <div className="w-12 h-12 bg-indigo-950/10 rounded-xl flex items-center justify-center group-hover:bg-indigo-950/15 transition-colors duration-300">
                <div className="w-6 h-6 bg-indigo-950 rounded-full opacity-70" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-slate-900">Mission</h3>
                <p className="text-lg leading-relaxed text-slate-600 font-light">
                  To catalyze missional movements across the globe.
                </p>
                <div className="pt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Equip leaders with transformative insights</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Foster learning communities worldwide</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Bridge theory and practice</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Vision Card */}
          <Card className="group relative overflow-hidden border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            {/* Subtle background pattern */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-slate-900/5 to-transparent rounded-full blur-2xl" />
            
            <div className="relative p-8 lg:p-10 space-y-6">
              {/* Icon */}
              <div className="w-12 h-12 bg-slate-900/10 rounded-xl flex items-center justify-center group-hover:bg-slate-900/15 transition-colors duration-300">
                <div className="w-6 h-6 bg-slate-900 rounded-full opacity-70" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-slate-900">Vision</h3>
                <p className="text-lg leading-relaxed text-slate-600 font-light">
                  A renewed, Jesus-centered, movemental church.
                </p>
                <div className="pt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Authentic discipleship communities</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Contextual mission engagement</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Organic multiplication</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom emphasis */}
        <div className="text-center mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-500 font-light italic max-w-2xl mx-auto">
            "Our vision extends beyond institutional reformation to the cultivation of 
            authentic spiritual movements that transform communities and cultures."
          </p>
        </div>
      </div>
    </section>
  )
}