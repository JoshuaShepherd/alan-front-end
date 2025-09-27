'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Mock data for demonstration
const mockArchiveItems = [
  {
    id: 1,
    title: "The Five-Fold Typology and Organizational Health",
    excerpt: "When organizations align their structure with the APEST framework, they create space for every member to contribute according to their God-given design. This isn't merely about roles—it's about organizational DNA.",
    tags: ["APEST", "Leadership", "Organizational Change"],
    author: "Alan Hirsch",
    era: "Contemporary (1950+)",
    difficulty: "Intermediate",
    lastUpdated: "2024-03-15",
    saves: 156,
    category: "Missional Church"
  },
  {
    id: 2,
    title: "Roland Allen's Spontaneous Expansion Principles",
    excerpt: "Allen observed that the most vital church movements throughout history shared common characteristics: simplicity of structure, indigenous leadership, and organic multiplication. These principles remain as relevant today as they were in first-century Antioch.",
    tags: ["Movement Dynamics", "History", "Church Planting"],
    author: "Roland Allen",
    era: "Modern (1800-1950)",
    difficulty: "Advanced",
    lastUpdated: "2024-03-12",
    saves: 89,
    category: "Movement Dynamics"
  },
  {
    id: 3,
    title: "Contextualization Without Compromise",
    excerpt: "The gospel must be both culturally relevant and prophetically challenging. True contextualization doesn't dilute the message—it makes it more potent by speaking directly into the heart of cultural assumptions.",
    tags: ["Contextualization", "Missiology", "Cultural Engagement"],
    author: "Lesslie Newbigin",
    era: "Contemporary (1950+)",
    difficulty: "Foundational",
    lastUpdated: "2024-03-10",
    saves: 234,
    category: "Contextualization"
  },
  {
    id: 4,
    title: "The Discipleship Crisis in Western Christianity",
    excerpt: "We have manufactured consumers, not disciples. The early church's catechumenate process lasted three years—we give people a six-week course and expect transformation. Something must change.",
    tags: ["Discipleship", "Western Church", "Formation"],
    author: "Alan Hirsch",
    era: "Contemporary (1950+)",
    difficulty: "Intermediate",
    lastUpdated: "2024-03-08",
    saves: 178,
    category: "Discipleship"
  },
  {
    id: 5,
    title: "Ancient Monasticism and Modern Missional Communities",
    excerpt: "The monastic movements understood what we've forgotten: spiritual formation happens in community, under rule, with purpose. Benedict's Rule offers surprising insights for contemporary missional community design.",
    tags: ["Monasticism", "Community", "Spiritual Formation"],
    author: "Various",
    era: "Ancient (0-500)",
    difficulty: "Scholarly",
    lastUpdated: "2024-03-05",
    saves: 67,
    category: "Ecclesiology"
  },
  {
    id: 6,
    title: "The Entrepreneurial Spirit in Apostolic Ministry",
    excerpt: "Apostolic leaders are essentially entrepreneurs of the kingdom—they see opportunities where others see obstacles, create where others consume, and build movements where others build monuments.",
    tags: ["Apostolic", "Entrepreneurship", "Innovation"],
    author: "Michael Frost",
    era: "Contemporary (1950+)",
    difficulty: "Intermediate",
    lastUpdated: "2024-03-03",
    saves: 145,
    category: "Leadership"
  }
]

export function ArchiveResults() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Foundational':
        return 'bg-green-100 text-green-800'
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800'
      case 'Advanced':
        return 'bg-orange-100 text-orange-800'
      case 'Scholarly':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-slate-100 text-slate-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-light text-slate-900">
            Research Insights
          </h2>
          <p className="text-slate-600 font-light">
            {mockArchiveItems.length.toLocaleString()} results found
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
            className={viewMode === 'list' ? 'bg-indigo-950 hover:bg-indigo-900' : ''}
          >
            List
          </Button>
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className={viewMode === 'grid' ? 'bg-indigo-950 hover:bg-indigo-900' : ''}
          >
            Grid
          </Button>
        </div>
      </div>

      {/* Results Grid/List */}
      <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-4'}>
        {mockArchiveItems.map((item) => (
          <Card
            key={item.id}
            className={`p-6 border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group ${
              selectedItem === item.id ? 'ring-2 ring-indigo-950/20 border-indigo-950/30' : 'hover:border-slate-300'
            }`}
            onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium text-slate-900 leading-tight group-hover:text-indigo-950 transition-colors">
                    {item.title}
                  </h3>
                  <Badge className={`text-xs font-medium ${getDifficultyColor(item.difficulty)} shrink-0`}>
                    {item.difficulty}
                  </Badge>
                </div>
                
                <p className="text-slate-600 leading-relaxed font-light">
                  {item.excerpt}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs border-slate-300 text-slate-600 hover:border-indigo-950/30 hover:text-indigo-950"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Metadata */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="font-medium">{item.author}</span>
                  <span>•</span>
                  <span>{item.era}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span>{item.saves} saves</span>
                  <span>•</span>
                  <span>{new Date(item.lastUpdated).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Actions */}
              {selectedItem === item.id && (
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <Button size="sm" className="bg-indigo-950 hover:bg-indigo-900 text-white">
                    Add to Reading List
                  </Button>
                  <Button size="sm" variant="outline">
                    Share
                  </Button>
                  <Button size="sm" variant="outline">
                    View Full Context
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" className="px-8">
          Load More Results
        </Button>
      </div>

      {/* Empty State (commented out since we have mock data) */}
      {/* 
      <div className="text-center py-16">
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-slate-300 rounded-full" />
          </div>
          <h3 className="text-xl font-light text-slate-900">No matches found</h3>
          <p className="text-slate-600 font-light">
            Try broader filters or different search terms to discover more insights.
          </p>
          <Button variant="outline" onClick={clearAllFilters}>
            Clear All Filters
          </Button>
        </div>
      </div>
      */}
    </div>
  )
}