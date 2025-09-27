import { Metadata } from 'next'
import { AssessmentHero } from '@/components/assessment/assessment-hero'
import { AssessmentOverview } from '@/components/assessment/assessment-overview'
import { AssessmentFlow } from '@/components/assessment/assessment-flow'

export const metadata: Metadata = {
  title: 'APEST Assessment | Discover Your Fivefold Ministry Profile',
  description: 'Discover your unique calling within the fivefold ministry framework. Professional assessment tool based on Alan Hirsch\'s research into Apostolic, Prophetic, Evangelistic, Shepherding, and Teaching gifts.',
}

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto">
        <AssessmentHero />
        <AssessmentOverview />
        <AssessmentFlow />
      </div>
    </div>
  )
}