import { Metadata } from 'next'
import { HeroSection } from '@/components/about/hero-section'
import { BiographySection } from '@/components/about/biography-section'
import { MissionVisionSection } from '@/components/about/mission-vision-section'
import { MovementalNetworkSection } from '@/components/about/movemental-network-section'
import { CallToActionSection } from '@/components/about/call-to-action-section'

export const metadata: Metadata = {
  title: 'About Alan Hirsch | Equipping Leaders for Missional Movement',
  description: 'Discover Alan Hirsch\'s journey of reimagining church and mission in the 21st century. Join the movemental network catalyzing renewal across the globe.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Academic grid structure with sophisticated spacing */}
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <BiographySection />
        <MissionVisionSection />
        <MovementalNetworkSection />
        <CallToActionSection />
      </div>
    </div>
  )
}