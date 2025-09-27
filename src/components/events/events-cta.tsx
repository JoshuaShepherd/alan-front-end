import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Calendar, 
  Users, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin
} from 'lucide-react'

export function EventsCTA() {
  return (
    <section className="px-8 py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Host an Event */}
          <Card className="relative overflow-hidden border-slate-200 shadow-xl bg-white/90 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-950/5 rounded-full blur-2xl" />
            
            <div className="relative p-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
                    <Calendar className="w-4 h-4" />
                    Host an Event
                  </div>
                  
                  <h3 className="text-2xl font-light text-slate-900 leading-tight tracking-tight">
                    Bring Alan to
                    <span className="block font-medium text-indigo-950">
                      Your Community
                    </span>
                  </h3>
                  
                  <p className="text-slate-600 font-light leading-relaxed">
                    Invite Alan Hirsch to speak at your conference, lead a workshop, 
                    or facilitate an intensive training for your organization.
                  </p>
                </div>

                {/* Event Types */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="w-3 h-3 text-indigo-700" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Conference Speaking</div>
                      <div className="text-xs text-slate-600">Keynotes and workshop sessions</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Calendar className="w-3 h-3 text-indigo-700" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Training Intensives</div>
                      <div className="text-xs text-slate-600">Multi-day leadership development</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Globe className="w-3 h-3 text-indigo-700" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Virtual Events</div>
                      <div className="text-xs text-slate-600">Online workshops and consultations</div>
                    </div>
                  </div>
                </div>

                {/* Quick Form */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="space-y-3">
                    <Input
                      placeholder="Your organization name"
                      className="bg-slate-50 border-slate-200 focus:border-indigo-400"
                    />
                    <Input
                      placeholder="Event date (approximate)"
                      className="bg-slate-50 border-slate-200 focus:border-indigo-400"
                    />
                    <Textarea
                      placeholder="Tell us about your event and what you'd like Alan to cover..."
                      className="bg-slate-50 border-slate-200 focus:border-indigo-400 min-h-[80px]"
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-medium"
                    size="lg"
                  >
                    Submit Event Inquiry
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We'll respond within 48 hours with availability and next steps.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Right: Why Host an Event */}
          <div className="space-y-8">
            {/* Benefits */}
            <Card className="border-slate-200 shadow-lg bg-white">
              <div className="p-8">
                <div className="space-y-6">
                  <h4 className="text-xl font-medium text-slate-900">
                    Why Host an Event with Alan?
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 mb-1">Proven Impact</div>
                        <div className="text-sm text-slate-600 font-light leading-relaxed">
                          Over 500 successful events worldwide with consistently high ratings 
                          and lasting transformation in communities.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 mb-1">Customized Content</div>
                        <div className="text-sm text-slate-600 font-light leading-relaxed">
                          Every presentation is tailored to your specific context, challenges, 
                          and organizational goals.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 mb-1">Practical Tools</div>
                        <div className="text-sm text-slate-600 font-light leading-relaxed">
                          Participants receive actionable frameworks and resources they 
                          can immediately implement in their contexts.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 mb-1">Global Perspective</div>
                        <div className="text-sm text-slate-600 font-light leading-relaxed">
                          Insights from decades of work across 40+ countries with diverse 
                          cultural and organizational contexts.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="border-slate-200 shadow-lg bg-gradient-to-br from-white to-indigo-50/20">
              <div className="p-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-slate-900">
                    Direct Contact
                  </h4>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-slate-400" />
                      <div className="text-sm text-slate-600">
                        <div className="font-medium text-slate-900">Speaking Inquiries</div>
                        <a href="mailto:speaking@alanhirsch.org" className="text-indigo-700 hover:text-indigo-800 transition-colors">
                          speaking@alanhirsch.org
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-slate-400" />
                      <div className="text-sm text-slate-600">
                        <div className="font-medium text-slate-900">Travel from</div>
                        <div>Melbourne, Australia</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-sm text-slate-500 leading-relaxed">
                      For complex events or multi-day engagements, we recommend 
                      scheduling a brief consultation call to discuss your specific needs.
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-light text-slate-900 mb-1">500+</div>
                <div className="text-sm text-slate-600 font-light">Events Hosted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-slate-900 mb-1">40+</div>
                <div className="text-sm text-slate-600 font-light">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-slate-900 mb-1">4.9/5</div>
                <div className="text-sm text-slate-600 font-light">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Context */}
        <div className="text-center pt-16">
          <p className="text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            All events are designed to bridge academic rigor with practical application, 
            providing participants with both theoretical foundations and actionable strategies 
            for missional leadership and community transformation.
          </p>
        </div>
      </div>
    </section>
  )
}