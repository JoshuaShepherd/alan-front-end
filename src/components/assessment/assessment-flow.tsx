'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

// Mock assessment questions (simplified for demo)
const assessmentQuestions = [
  {
    id: 1,
    question: "I am naturally drawn to starting new initiatives and exploring uncharted territory.",
    category: "apostolic"
  },
  {
    id: 2, 
    question: "I feel compelled to speak truth even when it's uncomfortable or unpopular.",
    category: "prophetic"
  },
  {
    id: 3,
    question: "I get energized by sharing the gospel and recruiting others to the mission.",
    category: "evangelistic"
  },
  {
    id: 4,
    question: "I naturally notice when people are hurting and feel called to care for them.",
    category: "shepherding"
  },
  {
    id: 5,
    question: "I love organizing complex information and helping others understand it clearly.",
    category: "teaching"
  },
  {
    id: 6,
    question: "I see systems and structures that others miss and know how to build them.",
    category: "apostolic"
  },
  {
    id: 7,
    question: "I have strong convictions about justice and righteousness that drive my actions.",
    category: "prophetic"
  },
  {
    id: 8,
    question: "I can easily connect with strangers and make them feel welcomed.",
    category: "evangelistic"
  },
  {
    id: 9,
    question: "I prioritize creating safe, nurturing environments for others to grow.",
    category: "shepherding"
  },
  {
    id: 10,
    question: "I enjoy researching topics deeply and synthesizing complex concepts.",
    category: "teaching"
  }
]

type AssessmentState = 'intro' | 'questions' | 'results'
type ScaleValue = 1 | 2 | 3 | 4 | 5

export function AssessmentFlow() {
  const [currentState, setCurrentState] = useState<AssessmentState>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<Record<number, ScaleValue>>({})
  const [results, setResults] = useState<Record<string, number>>({})

  const handleStartAssessment = () => {
    setCurrentState('questions')
  }

  const handleResponse = (questionId: number, value: ScaleValue) => {
    setResponses(prev => ({ ...prev, [questionId]: value }))
  }

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      calculateResults()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const calculateResults = () => {
    const scores: Record<string, number> = {
      apostolic: 0,
      prophetic: 0,
      evangelistic: 0,
      shepherding: 0,
      teaching: 0
    }

    assessmentQuestions.forEach(question => {
      const response = responses[question.id] || 0
      scores[question.category] += response
    })

    // Normalize to percentages
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0)
    const normalizedScores: Record<string, number> = {}
    
    Object.entries(scores).forEach(([key, value]) => {
      normalizedScores[key] = Math.round((value / total) * 100)
    })

    setResults(normalizedScores)
    setCurrentState('results')
  }

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100
  const currentQ = assessmentQuestions[currentQuestion]
  const currentResponse = responses[currentQ?.id]

  if (currentState === 'intro') {
    return (
      <section className="px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-8 border-slate-200 shadow-lg">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-slate-900">
                Ready to Begin?
              </h3>
              <div className="space-y-4 text-slate-600 font-light">
                <p>This assessment takes approximately 15 minutes and includes 60 research-based questions.</p>
                <p>For most accurate results, respond based on your natural inclinations rather than learned behaviors.</p>
                <p>There are no right or wrong answers—only insights into your unique design.</p>
              </div>
              <Button 
                onClick={handleStartAssessment}
                size="lg"
                className="bg-indigo-950 hover:bg-indigo-900 text-white px-8 py-3 text-base font-medium"
              >
                Start Assessment
              </Button>
            </div>
          </Card>
        </div>
      </section>
    )
  }

  if (currentState === 'questions') {
    return (
      <section className="px-8 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-600">
                Question {currentQuestion + 1} of {assessmentQuestions.length}
              </span>
              <span className="text-sm text-slate-600">
                {Math.round(progress)}% complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="p-8 border-slate-200 shadow-lg">
            <div className="space-y-8">
              <h3 className="text-xl font-light text-slate-900 leading-relaxed">
                {currentQ.question}
              </h3>

              {/* Likert Scale */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-600 font-light">
                  <span>Strongly Disagree</span>
                  <span>Strongly Agree</span>
                </div>
                
                <div className="flex items-center justify-between gap-4">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleResponse(currentQ.id, value as ScaleValue)}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                        currentResponse === value
                          ? 'bg-indigo-950 border-indigo-950 text-white'
                          : 'border-slate-300 text-slate-600 hover:border-indigo-950/30 hover:bg-indigo-950/5'
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </Button>
                
                <Button 
                  onClick={handleNext}
                  disabled={!currentResponse}
                  className="bg-indigo-950 hover:bg-indigo-900 text-white"
                >
                  {currentQuestion === assessmentQuestions.length - 1 ? 'Complete Assessment' : 'Next Question'}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    )
  }

  if (currentState === 'results') {
    const sortedResults = Object.entries(results)
      .sort(([,a], [,b]) => b - a)
      .map(([gift, score]) => ({ gift, score }))

    const primaryGift = sortedResults[0]
    const secondaryGift = sortedResults[1]

    return (
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Results Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
              <div className="w-8 h-px bg-indigo-950" />
              Your Results
              <div className="w-8 h-px bg-indigo-950" />
            </div>
            <h2 className="text-4xl font-light text-slate-900 tracking-tight">
              Your Fivefold
              <span className="block font-medium text-indigo-950 mt-2">
                Profile
              </span>
            </h2>
          </div>

          {/* Primary Results */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Radar Chart Placeholder */}
            <Card className="p-8 border-slate-200 shadow-lg">
              <h3 className="text-xl font-medium text-slate-900 mb-6">Profile Overview</h3>
              <div className="space-y-4">
                {sortedResults.map(({ gift, score }) => (
                  <div key={gift} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-900 capitalize">
                        {gift}
                      </span>
                      <span className="text-sm text-slate-600">{score}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-950 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Top Strengths */}
            <Card className="p-8 border-slate-200 shadow-lg">
              <h3 className="text-xl font-medium text-slate-900 mb-6">Your Top Strengths</h3>
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-indigo-950 text-white">Primary</Badge>
                    <span className="text-lg font-medium text-slate-900 capitalize">
                      {primaryGift.gift}
                    </span>
                  </div>
                  <p className="text-slate-600 font-light">
                    You demonstrate strong {primaryGift.gift} characteristics, showing natural ability 
                    in this area of ministry.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="border-slate-300">Secondary</Badge>
                    <span className="text-lg font-medium text-slate-900 capitalize">
                      {secondaryGift.gift}
                    </span>
                  </div>
                  <p className="text-slate-600 font-light">
                    Your secondary strength in {secondaryGift.gift} complements your primary gift 
                    and provides additional ministry capacity.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Growth Recommendations */}
          <Card className="p-8 border-slate-200 shadow-lg">
            <h3 className="text-xl font-medium text-slate-900 mb-6">Growth Recommendations</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-slate-900">Lean Into Your Strengths</h4>
                <p className="text-sm text-slate-600 font-light">
                  Seek opportunities to operate primarily in your {primaryGift.gift} gifting. 
                  This is where you'll have greatest impact and fulfillment.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-slate-900">Build Balanced Teams</h4>
                <p className="text-sm text-slate-600 font-light">
                  Partner with those strong in areas where you scored lower. 
                  Diverse teams achieve better outcomes than homogeneous ones.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-slate-900">Continue Learning</h4>
                <p className="text-sm text-slate-600 font-light">
                  Develop your secondary gifts and learn to appreciate the 
                  contributions of all five folds in healthy organizations.
                </p>
              </div>
            </div>
          </Card>

          {/* Next Steps */}
          <div className="text-center space-y-6 pt-8 border-t border-slate-200">
            <h3 className="text-2xl font-light text-slate-900">Next Steps</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="px-6">
                Build a Balanced Team
              </Button>
              <Button variant="outline" className="px-6">
                Course Recommendations
              </Button>
              <Button 
                className="bg-indigo-950 hover:bg-indigo-900 text-white px-6"
                disabled
              >
                Download PDF (Coming Soon)
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return null
}