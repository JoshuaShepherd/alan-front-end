'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function ArchiveFilters() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    theme: [],
    era: [],
    author: [],
    apest: [],
    difficulty: []
  })

  const filterCategories = {
    theme: {
      title: 'Theme',
      options: ['Missional Church', 'Leadership', 'Discipleship', 'Contextualization', 'Movement Dynamics', 'Organizational Change', 'Ecclesiology', 'Pneumatology']
    },
    era: {
      title: 'Era',
      options: ['Ancient (0-500)', 'Medieval (500-1500)', 'Reformation (1500-1800)', 'Modern (1800-1950)', 'Contemporary (1950+)']
    },
    author: {
      title: 'Source Author',
      options: ['Alan Hirsch', 'Michael Frost', 'Neil Cole', 'Lesslie Newbigin', 'Roland Allen', 'Donald McGavran', 'David Bosch', 'Darrell Guder']
    },
    apest: {
      title: 'APEST Focus',
      options: ['Apostolic', 'Prophetic', 'Evangelistic', 'Shepherding', 'Teaching']
    },
    difficulty: {
      title: 'Complexity',
      options: ['Foundational', 'Intermediate', 'Advanced', 'Scholarly']
    }
  }

  const toggleFilter = (category: string, option: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(option)
        ? prev[category].filter(item => item !== option)
        : [...prev[category], option]
    }))
  }

  const clearAllFilters = () => {
    setSelectedFilters({
      theme: [],
      era: [],
      author: [],
      apest: [],
      difficulty: []
    })
    setSearchQuery('')
  }

  const hasActiveFilters = Object.values(selectedFilters).some(filters => filters.length > 0) || searchQuery.length > 0

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card className="p-4 border-slate-200 shadow-sm">
        <div className="space-y-3">
          <h3 className="font-medium text-slate-900">Search Archive</h3>
          <Input
            placeholder="Search insights, quotes, themes..."
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
              {Object.entries(selectedFilters).map(([category, filters]) =>
                filters.map(filter => (
                  <Badge
                    key={`${category}-${filter}`}
                    variant="secondary"
                    className="bg-indigo-950/10 text-indigo-950 hover:bg-indigo-950/15 cursor-pointer"
                    onClick={() => toggleFilter(category, filter)}
                  >
                    {filter} ×
                  </Badge>
                ))
              )}
            </div>
          </div>
        </Card>
      )}

      {/* Filter Categories */}
      <div className="space-y-4">
        {Object.entries(filterCategories).map(([categoryKey, category]) => (
          <Card key={categoryKey} className="p-4 border-slate-200 shadow-sm">
            <div className="space-y-3">
              <h3 className="font-medium text-slate-900">{category.title}</h3>
              <div className="space-y-2">
                {category.options.map(option => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedFilters[categoryKey].includes(option)}
                      onChange={() => toggleFilter(categoryKey, option)}
                      className="rounded border-slate-300 text-indigo-950 focus:ring-indigo-950/20 focus:ring-offset-0"
                    />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Sort Options */}
      <Card className="p-4 border-slate-200 shadow-sm">
        <div className="space-y-3">
          <h3 className="font-medium text-slate-900">Sort By</h3>
          <div className="space-y-2">
            {['Relevance', 'Newest', 'Most Saved', 'Alphabetical'].map(option => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="radio"
                  name="sort"
                  defaultChecked={option === 'Relevance'}
                  className="border-slate-300 text-indigo-950 focus:ring-indigo-950/20 focus:ring-offset-0"
                />
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}