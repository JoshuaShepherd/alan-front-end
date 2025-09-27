import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function CallToActionSection() {
  return (
    <section className="px-8 py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Sophisticated background patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-950/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-800/20 rounded-full blur-2xl" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 tracking-wide uppercase">
                <div className="w-8 h-px bg-indigo-400" />
                Join the Movement
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight">
                Shape the
                <span className="block font-medium text-indigo-300">
                  Future of Church
                </span>
              </h2>
              
              <p className="text-xl text-slate-300 font-light leading-relaxed">
                Stay connected with cutting-edge insights, research, and practical 
                resources for missional transformation.
              </p>
            </div>

            {/* Newsletter signup */}
            <Card className="bg-white/5 backdrop-blur-sm border-slate-700 p-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">Newsletter Subscription</h3>
                  <p className="text-slate-300 font-light">
                    Receive monthly insights, new research, and practical resources 
                    directly to your inbox.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <Input 
                    placeholder="Enter your email address" 
                    className="bg-white/10 border-slate-600 text-white placeholder:text-slate-400 focus:border-indigo-400 flex-1"
                  />
                  <Button 
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 shrink-0"
                  >
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-xs text-slate-400">
                  Join 15,000+ leaders receiving our research insights and practical resources.
                </p>
              </div>
            </Card>

            {/* Additional CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500"
              >
                Speaking Engagements
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500"
              >
                Browse Publications
              </Button>
            </div>
          </div>

          {/* Right: Academic testimonial or quote */}
          <div className="relative">
            <Card className="bg-white/5 backdrop-blur-sm border-slate-700 p-8 lg:p-10">
              <div className="space-y-6">
                {/* Quote */}
                <blockquote className="text-2xl font-light text-slate-200 leading-relaxed italic">
                  "Alan's work represents the finest synthesis of academic rigor 
                  and practical wisdom in contemporary missional scholarship."
                </blockquote>
                
                {/* Attribution */}
                <div className="space-y-2 pt-4 border-t border-slate-700">
                  <div className="text-slate-300 font-medium">Dr. Michael Frost</div>
                  <div className="text-sm text-slate-400">
                    Professor of Evangelism, Morling College
                  </div>
                </div>
                
                {/* Academic endorsements */}
                <div className="space-y-3 pt-4">
                  <div className="text-sm text-slate-400 font-medium">
                    Endorsed by leading academics:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Fuller Seminary', 'Duke Divinity', 'Wheaton College'].map((institution) => (
                      <span 
                        key={institution}
                        className="px-3 py-1 text-xs bg-slate-800/50 text-slate-300 rounded-full border border-slate-700"
                      >
                        {institution}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}