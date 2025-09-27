import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  Mail, 
  BookOpen, 
  Download, 
  Users, 
  Bell,
  ArrowRight 
} from 'lucide-react'

export function BooksCTA() {
  return (
    <section className="px-8 py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Newsletter Signup */}
          <Card className="relative overflow-hidden border-slate-200 shadow-xl bg-white/90 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-950/5 rounded-full blur-2xl" />
            
            <div className="relative p-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
                    <Mail className="w-4 h-4" />
                    Stay Updated
                  </div>
                  
                  <h3 className="text-2xl font-light text-slate-900 leading-tight tracking-tight">
                    New Book
                    <span className="block font-medium text-indigo-950">
                      Notifications
                    </span>
                  </h3>
                  
                  <p className="text-slate-600 font-light leading-relaxed">
                    Be the first to know about new releases, exclusive excerpts, 
                    and special offers on Alan's latest books.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <Input
                      placeholder="Enter your email address"
                      className="bg-slate-50 border-slate-200 focus:border-indigo-400"
                    />
                    <Button 
                      className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-medium"
                      size="lg"
                    >
                      <Bell className="w-4 h-4 mr-2" />
                      Subscribe for Updates
                    </Button>
                  </div>
                  
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Join 25,000+ leaders receiving book updates and exclusive content. 
                    Unsubscribe anytime.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Early access to new releases and drafts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Exclusive author insights and commentary</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Special discounts and promotional offers</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Right: Book Reader Access */}
          <Card className="relative overflow-hidden border-slate-200 shadow-xl bg-gradient-to-br from-white via-indigo-50/20 to-white">
            <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-950/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-slate-900/5 rounded-full blur-2xl" />
            
            <div className="relative p-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 tracking-wide uppercase">
                    <BookOpen className="w-4 h-4" />
                    Digital Library
                  </div>
                  
                  <h3 className="text-2xl font-light text-slate-900 leading-tight tracking-tight">
                    Start Reading
                    <span className="block font-medium text-indigo-950">
                      Online Today
                    </span>
                  </h3>
                  
                  <p className="text-slate-600 font-light leading-relaxed">
                    Access selected chapters and complete books through our 
                    integrated reading experience with note-taking and sharing features.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <BookOpen className="w-3 h-3 text-indigo-700" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Interactive Reading</div>
                      <div className="text-xs text-slate-600">Adjustable fonts, themes, and bookmarks</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="w-3 h-3 text-indigo-700" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Community Features</div>
                      <div className="text-xs text-slate-600">Share notes and discuss with other readers</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Download className="w-3 h-3 text-indigo-700" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Offline Access</div>
                      <div className="text-xs text-slate-600">Download chapters for reading anywhere</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4">
                  <Button 
                    className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-medium"
                    size="lg"
                  >
                    Browse Free Chapters
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    size="lg"
                  >
                    Learn About Premium Access
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  <div className="text-center">
                    <div className="text-lg font-medium text-slate-900">150+</div>
                    <div className="text-xs text-slate-600">Chapters Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-medium text-slate-900">12K+</div>
                    <div className="text-xs text-slate-600">Active Readers</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12">
          <Button variant="outline" className="px-6">
            View Reading Guides
          </Button>
          <Button variant="outline" className="px-6">
            Book Discussion Groups
          </Button>
          <Button variant="outline" className="px-6">
            Academic Resources
          </Button>
        </div>

        {/* Academic Context */}
        <div className="text-center pt-12">
          <p className="text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            All books are grounded in rigorous academic research, field experience, 
            and biblical scholarship. Each work contributes to the broader conversation 
            about missional leadership and church transformation in the 21st century.
          </p>
        </div>
      </div>
    </section>
  )
}