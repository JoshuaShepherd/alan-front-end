import { Metadata } from 'next'
import { 
  ResourcesHero,
  ResourceCollections,
  ResourceCards,
  ResourcesCTA 
} from '@/components/resources'

export const metadata: Metadata = {
  title: 'Leader Toolkits & Resources | Alan Hirsch',
  description: 'Practical worksheets and guides for team formation. Access APEST Team Kits, Movement Playbooks, and Community Formation Guides.',
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <ResourcesHero />
        <ResourceCollections />
        <ResourceCards />
        <ResourcesCTA />
      </div>
    </div>
  )
}