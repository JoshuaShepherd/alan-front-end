import { Button } from '@/components/ui/button'

export function AssessmentHero() {
  return (
    <section className="relative px-8 py-24 lg:py-32 overflow-hidden">
      {/* Sophisticated background with geometric patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/30 to-indigo-50/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,theme(colors.indigo.950/0.05),transparent_50%)]" />
      
      {/* Academic grid overlay - five-fold pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full bg-grid-slate-900/[0.04] bg-[size:100px_100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="space-y-12">
          {/* Academic badge */}
          <div className="inline-flex items-center gap-3 text-sm font-medium text-slate-600 tracking-wide uppercase">
            <div className="w-8 h-px bg-indigo-950" />
            <span>Professional Assessment</span>
            <div className="w-8 h-px bg-indigo-950" />
          </div>

          {/* Main heading */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-light text-slate-900 leading-[1.05] tracking-tight">
              Discover Your
              <span className="block font-medium text-indigo-950 mt-2">
                Fivefold Profile
              </span>
            </h1>

            {/* APEST Framework Display */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8 text-lg lg:text-xl text-slate-600 font-light">
              <span className="relative">
                <span className="text-indigo-950 font-medium">Apostle</span>
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-indigo-950/20" />
              </span>
              <span className="text-slate-400">·</span>
              <span className="relative">
                <span className="text-indigo-950 font-medium">Prophet</span>
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-indigo-950/20" />
              </span>
              <span className="text-slate-400">·</span>
              <span className="relative">
                <span className="text-indigo-950 font-medium">Evangelist</span>
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-indigo-950/20" />
              </span>
              <span className="text-slate-400">·</span>
              <span className="relative">
                <span className="text-indigo-950 font-medium">Shepherd</span>
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-indigo-950/20" />
              </span>
              <span className="text-slate-400">·</span>
              <span className="relative">
                <span className="text-indigo-950 font-medium">Teacher</span>
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-indigo-950/20" />
              </span>
            </div>

            <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
              Understand your unique calling and contribution within the biblical framework 
              of fivefold ministry gifts.
            </p>
          </div>

          {/* Assessment Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-indigo-950">50K+</div>
              <div className="text-sm text-slate-600 font-medium tracking-wide">Assessments Taken</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-indigo-950">60</div>
              <div className="text-sm text-slate-600 font-medium tracking-wide">Research Questions</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-indigo-950">15</div>
              <div className="text-sm text-slate-600 font-medium tracking-wide">Minutes</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-indigo-950">95%</div>
              <div className="text-sm text-slate-600 font-medium tracking-wide">Accuracy Rate</div>
            </div>
          </div>

          {/* Academic credentials */}
          <div className="pt-8 max-w-3xl mx-auto">
            <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-200">
              <p className="text-slate-600 font-light leading-relaxed">
                <span className="font-medium text-slate-900">Research-Based Assessment:</span> 
                {" "}Developed through extensive field research and validated across 
                40+ countries. Based on Ephesians 4:11-16 and decades of organizational 
                development insights.
              </p>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="pt-8">
            <Button 
              size="lg"
              className="bg-indigo-950 hover:bg-indigo-900 text-white px-12 py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-950/25"
            >
              Begin Assessment
            </Button>
            <p className="text-sm text-slate-500 mt-4">
              Free • No registration required • Instant results
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}