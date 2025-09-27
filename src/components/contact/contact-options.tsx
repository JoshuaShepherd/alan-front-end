import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Mic, 
  Handshake, 
  ArrowRight,
  Clock,
  Globe
} from 'lucide-react'
import Link from 'next/link'

export function ContactOptions() {
  return (
    <section className="px-8 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase mb-4">
            <Mail className="w-4 h-4" />
            Contact Options
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-slate-900 leading-tight tracking-tight">
            How Can We
            <span className="block font-medium text-indigo-950">
              Help You?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* General Inquiries */}
          <Card className="group relative overflow-hidden border-slate-200 hover:shadow-2xl transition-all duration-500 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-950/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-indigo-700" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-slate-900">
                    General Inquiries
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Questions about books, research, or general information about 
                    Alan's work and ministry.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="w-4 h-4" />
                  <span>Response within 24-48 hours</span>
                </div>
                
                <Button 
                  asChild
                  className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-medium group-hover:shadow-lg transition-all duration-300"
                >
                  <Link href="mailto:info@alanhirsch.org" className="flex items-center justify-center gap-2">
                    Send Email
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-sm text-slate-500 text-center">
                  info@alanhirsch.org
                </div>
              </div>
            </div>
          </Card>

          {/* Speaking Requests */}
          <Card className="group relative overflow-hidden border-slate-200 hover:shadow-2xl transition-all duration-500 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-950/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                  <Mic className="w-6 h-6 text-indigo-700" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-slate-900">
                    Speaking Requests
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Invite Alan to speak at your conference, church, or 
                    organizational event.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Globe className="w-4 h-4" />
                  <span>Global speaking availability</span>
                </div>
                
                <Button 
                  asChild
                  className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-medium group-hover:shadow-lg transition-all duration-300"
                >
                  <Link href="/speaking" className="flex items-center justify-center gap-2">
                    View Speaking Info
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-sm text-slate-500 text-center">
                  speaking@alanhirsch.org
                </div>
              </div>
            </div>
          </Card>

          {/* Partnership Inquiries */}
          <Card className="group relative overflow-hidden border-slate-200 hover:shadow-2xl transition-all duration-500 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-950/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                  <Handshake className="w-6 h-6 text-indigo-700" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-slate-900">
                    Partnership Inquiries
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Explore opportunities for collaboration, consulting, or 
                    strategic partnerships.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Handshake className="w-4 h-4" />
                  <span>Strategic collaborations</span>
                </div>
                
                <Button 
                  asChild
                  className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-medium group-hover:shadow-lg transition-all duration-300"
                >
                  <Link href="mailto:partnerships@alanhirsch.org" className="flex items-center justify-center gap-2">
                    Explore Partnership
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-sm text-slate-500 text-center">
                  partnerships@alanhirsch.org
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Note */}
        <div className="text-center pt-16">
          <p className="text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            For media inquiries, interview requests, or urgent matters, please use the 
            general contact form below and specify the nature of your request in the subject line.
          </p>
        </div>
      </div>
    </section>
  )
}