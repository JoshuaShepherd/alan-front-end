'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function ArticlesFilters() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const categories = [
    { name: 'Missional Theology', count: 45 },
    { name: 'Leadership', count: 38 },
    { name: 'Discipleship', count: 32 },
    { name: 'APEST Framework', count: 28 },
    { name: 'Church Transformation', count: 24 },
    { name: 'Cultural Engagement', count: 22 },
    { name: 'Movement Dynamics', count: 18 },
    { name: 'Organizational Change', count: 15 },
    { name: 'Post-Christendom', count: 12 },
    { name: 'Contextualization', count: 10 }
  ]

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSearchQuery('')
  }

  const hasActiveFilters = selectedCategories.length > 0 || searchQuery.length > 0

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card className="p-4 border-slate-200 shadow-sm">
        <div className="space-y-3">
          <h3 className="font-medium text-slate-900">Search Articles</h3>
          <Input
            placeholder="Search by title, content, or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-slate-50 border-slate-200 focus:border-indigo-400 focus:bg-white"
          />
        </div>
      </Card>

      {/* Active Filters */}
      {hasActiveFilters && (
        <Card className="p-4 border-slate-200 shadow-sm">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-slate-900">Active Filters</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-slate-500 hover:text-slate-700 h-auto p-1"
              >
                Clear all
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedCategories.map(category => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="bg-indigo-950/10 text-indigo-950 hover:bg-indigo-950/15 cursor-pointer"
                  onClick={() => toggleCategory(category)}
                >
                  {category} ×
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      )}

      {/* Categories */}
      <Card className="p-4 border-slate-200 shadow-sm">
        <div className="space-y-4">
          <h3 className="font-medium text-slate-900">Categories</h3>
          <div className="space-y-2">
            {categories.slice(0, 6).map((category) => (
              <label 
                key={category.name} 
                className="flex items-center justify-between cursor-pointer group hover:bg-slate-50 -mx-2 px-2 py-1 rounded"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.name)}
                    onChange={() => toggleCategory(category.name)}
                    className="rounded border-slate-300 text-indigo-950 focus:ring-indigo-950/20 focus:ring-offset-0"
                  />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                    {category.name}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {category.count}
                </span>
              </label>
            ))}
          </div>
          
          {/* Show More Categories */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start text-slate-600 hover:text-slate-900"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Show More Categories
          </Button>
        </div>
      </Card>

      {/* Sort Options */}
      <Card className="p-4 border-slate-200 shadow-sm">
        <div className="space-y-4">
          <h3 className="font-medium text-slate-900">Sort By</h3>
          <div className="space-y-2">
            {[
              { label: 'Latest First', value: 'date-desc' },
              { label: 'Oldest First', value: 'date-asc' },
              { label: 'Most Popular', value: 'popular' },
              { label: 'Alphabetical', value: 'alpha' }
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="radio"
                  name="sort"
                  value={option.value}
                  defaultChecked={option.value === 'date-desc'}
                  className="border-slate-300 text-indigo-950 focus:ring-indigo-950/20 focus:ring-offset-0"
                />
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </Card>

      {/* Archive by Year */}
      <Card className="p-4 border-slate-200 shadow-sm">
        <div className="space-y-4">
          <h3 className="font-medium text-slate-900">Archive</h3>
          <div className="space-y-2">
            {[
              { year: '2024', count: 24 },
              { year: '2023', count: 48 },
              { year: '2022', count: 42 },
              { year: '2021', count: 36 },
              { year: '2020', count: 30 }
            ].map((archive) => (
              <Button
                key={archive.year}
                variant="ghost"
                size="sm"
                className="w-full justify-between text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              >
                <span>{archive.year}</span>
                <span className="text-xs text-slate-400">{archive.count}</span>
              </Button>
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start text-slate-600 hover:text-slate-900"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            View Full Archive
          </Button>
        </div>
      </Card>
    </div>
  )
}