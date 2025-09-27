import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { 
  Share2, 
  MessageSquare, 
  Crown, 
  BookOpen, 
  Users, 
  Sparkles,
  ArrowRight 
} from 'lucide-react'

export function ReaderCTA() {
  return (
    <section className="px-8 py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Share Notes */}
          <Card className="relative overflow-hidden border-slate-200 shadow-xl bg-white/90 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-950/5 rounded-full blur-2xl" />
            
            <div className="relative p-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
                    <MessageSquare className="w-4 h-4" />
                    Share Your Insights
                  </div>
                  
                  <h3 className="text-2xl font-light text-slate-900 leading-tight tracking-tight">
                    Join the 
                    <span className="block font-medium text-indigo-950">
                      Conversation
                    </span>
                  </h3>
                  
                  <p className="text-slate-600 font-light leading-relaxed">
                    Share your thoughts, questions, and insights from this chapter. 
                    Connect with other readers and deepen your understanding together.
                  </p>
                </div>

                <div className="space-y-4">
                  <Textarea
                    placeholder="What resonated with you in this chapter? Share your thoughts..."
                    className="bg-slate-50 border-slate-200 focus:border-indigo-400 min-h-[100px]"
                  />
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 bg-indigo-950 hover:bg-indigo-900 text-white">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Share Notes
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Chapter
                    </Button>
                  </div>
                </div>

                {/* Community Stats */}
                <div className="pt-4 border-t border-slate-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-medium text-slate-900">2.4k</div>
                      <div className="text-xs text-slate-600">Readers</div>
                    </div>
                    <div>
                      <div className="text-lg font-medium text-slate-900">156</div>
                      <div className="text-xs text-slate-600">Notes</div>
                    </div>
                    <div>
                      <div className="text-lg font-medium text-slate-900">89</div>
                      <div className="text-xs text-slate-600">Discussions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Right: Membership Upsell */}
          <Card className="relative overflow-hidden border-slate-200 shadow-xl bg-gradient-to-br from-white via-indigo-50/20 to-white">
            <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-950/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-slate-900/5 rounded-full blur-2xl" />
            
            <div className="relative p-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 tracking-wide uppercase">
                    <Crown className="w-4 h-4" />
                    Premium Access
                  </div>
                  
                  <h3 className="text-2xl font-light text-slate-900 leading-tight tracking-tight">
                    Unlock the Full
                    <span className="block font-medium text-indigo-950">
                      Learning Experience
                    </span>
                  </h3>
                  
                  <p className="text-slate-600 font-light leading-relaxed">
                    Get access to all books, exclusive content, discussion groups, 
                    and direct interaction with Alan Hirsch.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <BookOpen className="w-3 h-3 text-indigo-700" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Complete Library Access</div>
                      <div className="text-xs text-slate-600">All books, articles, and exclusive content</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="w-3 h-3 text-indigo-700" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Private Community</div>
                      <div className="text-xs text-slate-600">Connect with like-minded leaders globally</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-indigo-700" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Live Q&A Sessions</div>
                      <div className="text-xs text-slate-600">Monthly discussions with Alan</div>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-4 pt-2">
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-light text-slate-900">
                      $29<span className="text-sm text-slate-600">/month</span>
                    </div>
                    <div className="text-xs text-slate-600">Cancel anytime</div>
                  </div>
                  
                  <Button 
                    className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-medium"
                    size="lg"
                  >
                    Start Premium Membership
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  
                  <div className="text-center">
                    <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                      Learn More About Premium
                    </Button>
                  </div>
                </div>

                {/* Trial offer */}
                <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-indigo-900">
                    7-Day Free Trial
                  </div>
                  <div className="text-xs text-indigo-700">
                    Full access, no commitment
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12">
          <Button variant="outline" className="px-6">
            View All Books
          </Button>
          <Button variant="outline" className="px-6">
            Download Chapter
          </Button>
          <Button variant="outline" className="px-6">
            Book Discussion
          </Button>
        </div>

        {/* Academic Context */}
        <div className="text-center pt-12">
          <p className="text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            This chapter is part of a comprehensive exploration of missional leadership 
            and church transformation. Each book builds upon decades of research, 
            field experience, and biblical scholarship.
          </p>
        </div>
      </div>
    </section>
  )
}