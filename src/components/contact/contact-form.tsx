'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Send, CheckCircle } from 'lucide-react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="relative overflow-hidden border-slate-200 shadow-xl bg-gradient-to-br from-green-50 to-white">
        <div className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-slate-900">
              Message Sent Successfully!
            </h3>
            <p className="text-slate-600 font-light">
              Thank you for reaching out. We'll get back to you within 24-48 hours.
            </p>
          </div>
        </div>
      </Card>
      )
    }

  return (
    <Card className="relative overflow-hidden border-slate-200 shadow-xl bg-white/90 backdrop-blur-sm">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-950/5 rounded-full blur-2xl" />
      
      <div className="relative p-8">
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-light text-slate-900 leading-tight tracking-tight">
              Send Us a
              <span className="block font-medium text-indigo-950">
                Message
              </span>
            </h3>
            <p className="text-slate-600 font-light leading-relaxed">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className="bg-slate-50 border-slate-200 focus:border-indigo-400"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-slate-50 border-slate-200 focus:border-indigo-400"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium text-slate-700">
                Subject *
              </Label>
              <Select onValueChange={(value) => handleInputChange('subject', value)}>
                <SelectTrigger className="bg-slate-50 border-slate-200 focus:border-indigo-400">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="speaking">Speaking Request</SelectItem>
                  <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                  <SelectItem value="media">Media/Interview Request</SelectItem>
                  <SelectItem value="book">Book-Related Question</SelectItem>
                  <SelectItem value="research">Research Collaboration</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                Message *
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us more about your inquiry..."
                className="bg-slate-50 border-slate-200 focus:border-indigo-400 min-h-[120px]"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-medium py-3 transition-all duration-300"
              size="lg"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending Message...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </div>
              )}
            </Button>

            {/* Privacy Note */}
            <p className="text-xs text-slate-500 leading-relaxed pt-2">
              By submitting this form, you agree to our privacy policy. We'll only use 
              your information to respond to your inquiry and will never share it with third parties.
            </p>
          </form>
        </div>
      </div>
    </Card>
  )
}