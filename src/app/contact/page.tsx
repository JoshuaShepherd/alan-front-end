import { Metadata } from 'next'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactOptions } from '@/components/contact/contact-options'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'

export const metadata: Metadata = {
  title: 'Contact Alan Hirsch | Get in Touch',
  description: 'Connect with Alan Hirsch for speaking engagements, partnerships, or general inquiries. We\'d love to hear from you.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ContactHero />
      <ContactOptions />
      
      <div className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}