import { Card } from '@/components/ui/card'
import { 
  Clock, 
  Shield, 
  MapPin, 
  Phone,
  Mail,
  Globe
} from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Office Information */}
      <Card className="relative overflow-hidden border-slate-200 shadow-xl bg-gradient-to-br from-white via-indigo-50/20 to-white">
        <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-950/5 rounded-full blur-3xl" />
        
        <div className="relative p-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-light text-slate-900 leading-tight tracking-tight">
                Office
                <span className="block font-medium text-indigo-950">
                  Information
                </span>
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Our team is here to help connect you with the right resources 
                and opportunities for your missional journey.
              </p>
            </div>

            <div className="space-y-4">
              {/* Response Time */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-indigo-700" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900 mb-1">Response Time</div>
                  <div className="text-sm text-slate-600 font-light leading-relaxed">
                    We typically respond to all inquiries within 24-48 hours during business days. 
                    Urgent matters will receive priority attention.
                  </div>
                </div>
              </div>

              {/* Privacy */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-5 h-5 text-indigo-700" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900 mb-1">Privacy & Security</div>
                  <div className="text-sm text-slate-600 font-light leading-relaxed">
                    Your information is secure with us. We never share personal details 
                    with third parties and use your data only to respond to your inquiry.
                  </div>
                </div>
              </div>

              {/* Global Reach */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Globe className="w-5 h-5 text-indigo-700" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900 mb-1">Global Ministry</div>
                  <div className="text-sm text-slate-600 font-light leading-relaxed">
                    While based in Australia, we work with leaders and organizations 
                    worldwide. Virtual consultations and speaking engagements available.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Contact Details */}
      <Card className="border-slate-200 shadow-lg bg-white">
        <div className="p-8">
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-slate-900">
              Direct Contact
            </h4>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-400" />
                <div className="text-sm text-slate-600">
                  <div className="font-medium text-slate-900">General Inquiries</div>
                  <a href="mailto:info@alanhirsch.org" className="text-indigo-700 hover:text-indigo-800 transition-colors">
                    info@alanhirsch.org
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-400" />
                <div className="text-sm text-slate-600">
                  <div className="font-medium text-slate-900">Speaking Requests</div>
                  <a href="mailto:speaking@alanhirsch.org" className="text-indigo-700 hover:text-indigo-800 transition-colors">
                    speaking@alanhirsch.org
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-slate-400" />
                <div className="text-sm text-slate-600">
                  <div className="font-medium text-slate-900">Location</div>
                  <div>Melbourne, Australia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* FAQ */}
      <Card className="border-slate-200 shadow-lg bg-white">
        <div className="p-8">
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-slate-900">
              Frequently Asked
            </h4>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="font-medium text-slate-900 text-sm">
                  How far in advance should I book speaking engagements?
                </div>
                <div className="text-sm text-slate-600 font-light leading-relaxed">
                  We recommend booking 6-12 months in advance for optimal scheduling, 
                  though we can sometimes accommodate shorter timelines.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-medium text-slate-900 text-sm">
                  Do you offer virtual speaking engagements?
                </div>
                <div className="text-sm text-slate-600 font-light leading-relaxed">
                  Yes, we offer virtual presentations, workshops, and consultations 
                  worldwide via video conferencing platforms.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-medium text-slate-900 text-sm">
                  Can I request a specific topic or customize content?
                </div>
                <div className="text-sm text-slate-600 font-light leading-relaxed">
                  Absolutely. Alan tailors his presentations to meet your organization's 
                  specific needs and context.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}