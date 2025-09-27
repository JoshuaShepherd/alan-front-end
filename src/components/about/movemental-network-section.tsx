import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function MovementalNetworkSection() {
  return (
    <section className="px-8 py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
            <div className="w-8 h-px bg-indigo-950" />
            Network
            <div className="w-8 h-px bg-indigo-950" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
            Movemental
            <span className="block font-medium text-indigo-950">
              Network
            </span>
          </h2>
          <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
            A global community of scholars, practitioners, and leaders united in the pursuit 
            of authentic missional transformation.
          </p>
        </div>

        {/* Network description */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <Card className="p-8 border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-indigo-950/10 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-indigo-950/60 rounded-full" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">Global Reach</h3>
              <p className="text-slate-600 leading-relaxed">
                Active learning communities spanning 40+ countries, fostering local 
                contextualization within global coherence.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-indigo-950/10 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-indigo-950/60 rounded-full" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">Academic Rigor</h3>
              <p className="text-slate-600 leading-relaxed">
                Research-based methodologies grounded in biblical theology, 
                missiology, and organizational development.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-indigo-950/10 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-indigo-950/60 rounded-full" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">Practical Impact</h3>
              <p className="text-slate-600 leading-relaxed">
                Tangible transformation in communities through contextually 
                appropriate missional practices and leadership development.
              </p>
            </div>
          </Card>
        </div>

        {/* Partner organizations showcase */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-light text-slate-900 mb-4">Partner Organizations</h3>
            <p className="text-slate-600 font-light">
              Collaborating with leading institutions and networks worldwide
            </p>
          </div>

          {/* Partner logos grid - using placeholder boxes with sophisticated styling */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="aspect-square bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group"
              >
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 mx-auto bg-slate-200 rounded group-hover:bg-indigo-950/10 transition-colors duration-300" />
                  <div className="text-xs text-slate-400 font-light">Partner {i + 1}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Network stats */}
          <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-slate-200">
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-indigo-950">40+</div>
              <div className="text-sm text-slate-600 font-medium tracking-wide uppercase">Countries</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-indigo-950">10,000+</div>
              <div className="text-sm text-slate-600 font-medium tracking-wide uppercase">Leaders Equipped</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-light text-indigo-950">25+</div>
              <div className="text-sm text-slate-600 font-medium tracking-wide uppercase">Years Active</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-12">
            <Button 
              className="bg-indigo-950 hover:bg-indigo-900 text-white px-8 py-3 text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-950/25"
              size="lg"
            >
              Join the Movement
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}