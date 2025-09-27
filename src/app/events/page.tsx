import { Metadata } from 'next'
import { EventsHero } from '@/components/events/events-hero'
import { EventsFeed } from '@/components/events/events-feed'
import { PastEvents } from '@/components/events/past-events'
import { EventsCTA } from '@/components/events/events-cta'

export const metadata: Metadata = {
  title: 'Upcoming Events | Alan Hirsch',
  description: 'Join Alan Hirsch at upcoming gatherings, workshops, and intensives focused on missional leadership and church transformation.',
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventsHero />
      <EventsFeed />
      <PastEvents />
      <EventsCTA />
    </div>
  )
}