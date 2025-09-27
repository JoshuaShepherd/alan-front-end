import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function BiographySection() {
  return (
    <section className="px-8 py-24 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Title and subtitle */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
                <div className="w-8 h-px bg-indigo-950" />
                Biography
              </div>
              <h2 className="text-4xl font-light text-slate-900 tracking-tight">
                A Scholar's
                <span className="block font-medium text-indigo-950">
                  Journey
                </span>
              </h2>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Main narrative */}
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-slate-700 font-light">
                Alan Hirsch stands as one of the foremost authorities on missional church, 
                leadership, and organizational transformation. His academic rigor combined with 
                practical wisdom has shaped a generation of church leaders worldwide.
              </p>
              
              <p className="text-lg leading-relaxed text-slate-700 font-light">
                With a doctorate in missional leadership and decades of field experience across 
                five continents, Alan brings both theoretical depth and practical insight to the 
                critical questions facing the church today. His work bridges the gap between 
                scholarly research and grassroots application.
              </p>

              <p className="text-lg leading-relaxed text-slate-700 font-light">
                As founder of Forge Mission Training Network and co-founder of the Missional 
                Church Network, Alan has created learning communities that have equipped 
                thousands of leaders in over 40 countries.
              </p>
            </div>

            {/* Pull quote with academic styling */}
            <Card className="border-l-4 border-l-indigo-950 border-r-0 border-t-0 border-b-0 rounded-none bg-white/80 backdrop-blur-sm shadow-lg p-8">
              <blockquote className="text-2xl font-light text-slate-800 leading-relaxed italic">
                "The church is always being reformed according to the Word of God."
              </blockquote>
              <footer className="mt-4 text-sm text-slate-500 font-medium tracking-wide">
                — Core Conviction
              </footer>
            </Card>

            {/* Academic credentials and achievements */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-900">Academic Background</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span>Doctorate in Missional Leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span>Adjunct Professor, Fuller Seminary</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span>Research Fellow, University of South Africa</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-900">Published Works</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span>20+ books on missional leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span>Translated into 15+ languages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span>Peer-reviewed academic articles</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Button 
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-2"
              >
                Read Full Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}