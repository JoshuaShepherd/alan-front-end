import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export function ArticleEndMatter() {
  const relatedArticles = [
    {
      title: "The APEST Framework: Equipping Every Saint",
      excerpt: "Understanding how the fivefold ministry gifts create healthy, balanced leadership teams.",
      readTime: "12 min read",
      category: "Leadership",
      href: "/articles/apest-framework",
      isNext: true
    },
    {
      title: "Contextualizing the Gospel Without Compromise", 
      excerpt: "Navigating the tension between cultural relevance and biblical fidelity in mission.",
      readTime: "10 min read",
      category: "Missiology",
      href: "/articles/contextualization",
      isPrevious: true
    }
  ]

  return (
    <section className="border-t border-slate-200">
      {/* Newsletter CTA */}
      <div className="px-8 py-16 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-slate-200 shadow-lg bg-white/90 backdrop-blur-sm">
            {/* Sophisticated background */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-950/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-900/5 rounded-full blur-2xl" />
            
            <div className="relative p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left: Content */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
                      <div className="w-6 h-px bg-indigo-950" />
                      Weekly Insights
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-light text-slate-900 leading-tight tracking-tight">
                      Subscribe for
                      <span className="block font-medium text-indigo-950">
                        Weekly Insights
                      </span>
                    </h2>
                    
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                      Get the latest articles, research findings, and practical 
                      resources for missional leadership delivered to your inbox.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full flex-shrink-0" />
                      <span>Weekly articles on missional leadership</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full flex-shrink-0" />
                      <span>Exclusive research insights and case studies</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full flex-shrink-0" />
                      <span>Early access to new courses and resources</span>
                    </div>
                  </div>
                </div>

                {/* Right: Form */}
                <div className="space-y-6">
                  <Card className="bg-slate-50/50 border-slate-200 p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-slate-900">
                          Join 15,000+ Leaders
                        </h3>
                        <p className="text-sm text-slate-600 font-light">
                          Subscribe to receive weekly insights from decades 
                          of missional research and practice.
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
                          Subscribe Now
                        </Button>
                      </div>
                      
                      <p className="text-xs text-slate-500 leading-relaxed">
                        By subscribing, you agree to receive weekly insights. 
                        Unsubscribe anytime. Your email is never shared.
                      </p>
                    </div>
                  </Card>

                  {/* Social Proof */}
                  <div className="text-center space-y-2">
                    <div className="text-sm text-slate-600 font-medium">
                      Trusted by leaders from:
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {['Fuller Seminary', 'Forge Network', 'Exponential', 'Fresh Expressions'].map((org) => (
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
        </div>
      </div>

      {/* Article Navigation */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-light text-slate-900">Continue Reading</h2>
            <p className="text-slate-600 font-light">
              Explore related insights on missional leadership and church transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {relatedArticles.map((article, index) => (
              <Link 
                key={index}
                href={article.href}
                className="group"
              >
                <Card className="p-6 border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="space-y-4 h-full flex flex-col">
                    {/* Navigation Label */}
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      {article.isPrevious && (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                          <span>Previous</span>
                        </>
                      )}
                      {article.isNext && (
                        <>
                          <span>Next</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </div>

                    {/* Article Content */}
                    <div className="space-y-3 flex-grow">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-indigo-950 bg-indigo-950/10 px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <span className="text-xs text-slate-500">{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-medium text-slate-900 group-hover:text-indigo-950 transition-colors leading-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-slate-600 font-light leading-relaxed text-sm">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Read More */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center text-sm text-slate-600 group-hover:text-indigo-950 transition-colors">
                        <span className="font-medium">Read Article</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Discussion CTA */}
      <div className="px-8 py-16 bg-slate-50/50 border-t border-slate-200">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-light text-slate-900 tracking-tight">
              Discuss with Your
              <span className="block font-medium text-indigo-950">
                Team
              </span>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              These concepts are best explored in community. Use the questions 
              below to facilitate meaningful discussion with your leadership team.
            </p>
          </div>

          <Card className="p-8 border-slate-200 shadow-sm text-left">
            <div className="space-y-6">
              <h3 className="font-medium text-slate-900">Discussion Questions</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-indigo-950 font-medium">1.</span>
                  <p className="text-slate-700 font-light">
                    How has the shift from Christendom to post-Christendom affected 
                    discipleship in your context?
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-indigo-950 font-medium">2.</span>
                  <p className="text-slate-700 font-light">
                    What would "movemental discipleship" look like in your community 
                    or organization?
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-indigo-950 font-medium">3.</span>
                  <p className="text-slate-700 font-light">
                    Which of the four characteristics (adaptive learning, cultural 
                    translation, network thinking, entrepreneurial spirit) most 
                    challenges your current approach?
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Button variant="outline" className="px-8">
            Download Discussion Guide
          </Button>
        </div>
      </div>
    </section>
  )
}