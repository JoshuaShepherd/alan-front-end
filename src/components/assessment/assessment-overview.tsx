import { Card } from '@/components/ui/card'

export function AssessmentOverview() {
  const fivefoldGifts = [
    {
      name: "Apostolic",
      icon: "🚀",
      description: "Pioneers who establish and extend the kingdom through innovation and strategic vision.",
      characteristics: ["Visionary leadership", "Strategic thinking", "Entrepreneurial spirit", "System building"]
    },
    {
      name: "Prophetic", 
      icon: "👁️",
      description: "Truth-tellers who discern God's heart and call people to authentic alignment.",
      characteristics: ["Spiritual discernment", "Justice advocacy", "Authentic worship", "Cultural critique"]
    },
    {
      name: "Evangelistic",
      icon: "📢", 
      description: "Communicators who passionately share the gospel and recruit for the kingdom.",
      characteristics: ["Passionate communication", "Recruiting ability", "Hope-filled outlook", "Relationship building"]
    },
    {
      name: "Shepherding",
      icon: "🛡️",
      description: "Carers who nurture, protect, and create safe spaces for community flourishing.",
      characteristics: ["Pastoral care", "Community building", "Emotional intelligence", "Protective instincts"]
    },
    {
      name: "Teaching",
      icon: "📚",
      description: "Educators who bring clarity, wisdom, and systematic understanding to complex truths.",
      characteristics: ["Systematic thinking", "Knowledge synthesis", "Clear communication", "Wisdom development"]
    }
  ]

  return (
    <section className="px-8 py-24 bg-slate-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
            <div className="w-8 h-px bg-indigo-950" />
            The Framework
            <div className="w-8 h-px bg-indigo-950" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
            Why This Matters
            <span className="block font-medium text-indigo-950 mt-2">
              For Teams
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              High-performing teams require all five gifts working in harmony. 
              Understanding your profile helps you contribute authentically while 
              recognizing the essential value of others.
            </p>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-slate-700 font-light leading-relaxed italic">
                "When each part is working properly, the whole body grows and builds 
                itself up in love." — Ephesians 4:16
              </p>
            </div>
          </div>
        </div>

        {/* The Five Gifts */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-light text-slate-900 mb-8">
              The Five Essential Gifts
            </h3>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {fivefoldGifts.map((gift, _) => (
              <Card 
                key={gift.name}
                className="group p-6 border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className="text-3xl mb-3">
                    {gift.icon}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-lg font-medium text-slate-900 group-hover:text-indigo-950 transition-colors">
                    {gift.name}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    {gift.description}
                  </p>
                  
                  {/* Characteristics */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="space-y-2">
                      {gift.characteristics.map((char) => (
                        <div key={char} className="flex items-center gap-2 text-xs text-slate-500">
                          <div className="w-1 h-1 bg-indigo-950/60 rounded-full flex-shrink-0" />
                          <span>{char}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Balance Insight */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-slate-900">
                Team Balance Matters
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Most teams are imbalanced, over-representing some gifts while 
                lacking others. This assessment helps identify gaps and optimize 
                team composition.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-slate-900">
                Individual Clarity
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Understanding your primary and secondary gifts provides clarity 
                on where you thrive, what energizes you, and how you naturally 
                contribute to kingdom work.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-slate-900">
                Organizational Health
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Organizations aligned with the fivefold framework experience 
                greater innovation, healthier culture, and more sustainable 
                growth patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}