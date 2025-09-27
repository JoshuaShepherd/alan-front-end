import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function ArchiveCTA() {
  return (
    <section className="px-8 py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      <div className="max-w-4xl mx-auto">
        <Card className="relative overflow-hidden border-slate-200 shadow-xl bg-white/80 backdrop-blur-sm">
          {/* Sophisticated background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-950/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-900/5 rounded-full blur-2xl" />
          
          <div className="relative p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
                    <div className="w-8 h-px bg-indigo-950" />
                    Daily Insights
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-light text-slate-900 leading-tight tracking-tight">
                    Get Daily
                    <span className="block font-medium text-indigo-950">
                      Archive Insights
                    </span>
                  </h2>
                  
                  <p className="text-lg text-slate-600 font-light leading-relaxed">
                    Receive carefully curated insights from the archive delivered 
                    to your inbox. Each email includes context, application, and 
                    connections to deepen your understanding.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Personalized based on your reading history</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Weekly deep-dive research summaries</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Early access to new archive additions</span>
                  </div>
                </div>
              </div>

              {/* Right: Newsletter Signup */}
              <div className="space-y-6">
                <Card className="bg-slate-50/50 border-slate-200 p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-slate-900">
                        Archive Newsletter
                      </h3>
                      <p className="text-sm text-slate-600 font-light">
                        Join 12,000+ leaders receiving daily insights from 
                        decades of missional research.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <Input
                        placeholder="Enter your email address"
                        className="bg-white border-slate-200 focus:border-indigo-400"
                      />
                      <Button 
                        className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-medium"
                        size="lg"
                      >
                        Start Receiving Insights
                      </Button>
                    </div>
                    
                    <p className="text-xs text-slate-500 leading-relaxed">
                      By subscribing, you agree to receive daily insights and research updates. 
                      Unsubscribe anytime. Your email is never shared.
                    </p>
                  </div>
                </Card>

                {/* Social Proof */}
                <div className="space-y-3">
                  <div className="text-sm text-slate-600 font-medium">
                    Trusted by leaders from:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Fuller Seminary', 'Forge Network', 'Missional Church Network', 'Exponential'].map((org) => (
                      <span 
                        key={org}
                        className="px-3 py-1 text-xs bg-white text-slate-600 rounded-full border border-slate-200 shadow-sm"
                      >
                        {org}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button variant="outline" className="px-6">
            Browse All Categories
          </Button>
          <Button variant="outline" className="px-6">
            Advanced Search
          </Button>
          <Button variant="outline" className="px-6">
            Request Content
          </Button>
        </div>
      </div>
    </section>
  )
}