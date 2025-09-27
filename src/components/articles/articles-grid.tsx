'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Mock articles data
const mockArticles = [
  {
    id: 1,
    title: "The APEST Framework: Equipping Every Saint for Ministry",
    excerpt: "Understanding how the fivefold ministry gifts create healthy, balanced leadership teams capable of navigating complex organizational challenges.",
    author: "Alan Hirsch",
    date: "March 12, 2024",
    readTime: "12 min read",
    category: "APEST Framework",
    tags: ["Leadership", "Ministry", "Organizational Health"],
    href: "/articles/apest-framework"
  },
  {
    id: 2,
    title: "Contextualizing the Gospel Without Compromise",
    excerpt: "Navigating the tension between cultural relevance and biblical fidelity in mission. How authentic contextualization serves both gospel integrity and cultural engagement.",
    author: "Alan Hirsch",
    date: "March 8, 2024",
    readTime: "10 min read",
    category: "Missional Theology",
    tags: ["Contextualization", "Gospel", "Culture"],
    href: "/articles/contextualization"
  },
  {
    id: 3,
    title: "From Attractional to Missional: A Paradigm Shift",
    excerpt: "The fundamental differences between attractional and missional approaches to church and ministry, and why the shift matters for contemporary disciples.",
    author: "Alan Hirsch",
    date: "March 5, 2024",
    readTime: "15 min read",
    category: "Church Transformation",
    tags: ["Missional", "Church", "Transformation"],
    href: "/articles/attractional-to-missional"
  },
  {
    id: 4,
    title: "Leadership in a Post-Christendom Context",
    excerpt: "How Christian leadership must adapt to operate effectively in increasingly secular societies while maintaining prophetic witness and cultural relevance.",
    author: "Alan Hirsch",
    date: "February 28, 2024",
    readTime: "11 min read",
    category: "Leadership",
    tags: ["Post-Christendom", "Leadership", "Cultural Engagement"],
    href: "/articles/post-christendom-leadership"
  },
  {
    id: 5,
    title: "The Forgotten Ways: Ancient Church Movements",
    excerpt: "Lessons from the early church movements that achieved remarkable growth and cultural transformation. What can we learn from their approaches today?",
    author: "Alan Hirsch",
    date: "February 24, 2024",
    readTime: "18 min read",
    category: "Movement Dynamics",
    tags: ["History", "Church Growth", "Movements"],
    href: "/articles/forgotten-ways"
  },
  {
    id: 6,
    title: "Discipleship Beyond the Classroom Model",
    excerpt: "Moving from information transfer to transformation catalyst. How movemental discipleship creates authentic spiritual formation in complex cultural contexts.",
    author: "Alan Hirsch",
    date: "February 20, 2024",
    readTime: "14 min read",
    category: "Discipleship",
    tags: ["Formation", "Learning", "Community"],
    href: "/articles/discipleship-beyond-classroom"
  },
  {
    id: 7,
    title: "Innovation and the Entrepreneurial Church",
    excerpt: "Why entrepreneurial thinking is essential for church renewal and how apostolic leaders can foster cultures of systematic innovation and adaptive change.",
    author: "Alan Hirsch",
    date: "February 16, 2024",
    readTime: "13 min read",
    category: "Organizational Change",
    tags: ["Innovation", "Entrepreneurship", "Change"],
    href: "/articles/entrepreneurial-church"
  },
  {
    id: 8,
    title: "The Prophetic Voice in Secular Societies",
    excerpt: "How prophetic ministry functions in pluralistic contexts. Maintaining truth-telling capacity while engaging respectfully with diverse worldviews.",
    author: "Alan Hirsch",
    date: "February 12, 2024",
    readTime: "9 min read",
    category: "Cultural Engagement",
    tags: ["Prophetic", "Society", "Truth"],
    href: "/articles/prophetic-voice-secular"
  }
]

export function ArticlesGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 6
  const totalPages = Math.ceil(mockArticles.length / articlesPerPage)
  
  const currentArticles = mockArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  )

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'APEST Framework': 'bg-blue-100 text-blue-800',
      'Missional Theology': 'bg-indigo-100 text-indigo-800',
      'Church Transformation': 'bg-green-100 text-green-800',
      'Leadership': 'bg-orange-100 text-orange-800',
      'Movement Dynamics': 'bg-purple-100 text-purple-800',
      'Discipleship': 'bg-pink-100 text-pink-800',
      'Organizational Change': 'bg-yellow-100 text-yellow-800',
      'Cultural Engagement': 'bg-teal-100 text-teal-800'
    }
    return colors[category] || 'bg-slate-100 text-slate-800'
  }

  return (
    <div className="space-y-8">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-light text-slate-900">
            Recent Articles
          </h2>
          <p className="text-slate-600 font-light">
            {mockArticles.length} articles found
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
        {currentArticles.map((article) => (
          <Link key={article.id} href={article.href} className="group">
            <Card className="p-6 border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="space-y-4 h-full flex flex-col">
                {/* Category and Meta */}
                <div className="flex items-center justify-between">
                  <Badge className={`text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </Badge>
                  <span className="text-xs text-slate-500">{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-slate-900 group-hover:text-indigo-950 transition-colors leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 leading-relaxed font-light flex-grow">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-slate-300 text-slate-600 hover:border-indigo-950/30 hover:text-indigo-950"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Author and Date */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-indigo-950/20 rounded-full" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium text-slate-900">{article.author}</div>
                    </div>
                  </div>
                  <span className="text-sm text-slate-500">{article.date}</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </Button>

          <div className="flex items-center gap-1">
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1
              return (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 p-0 ${
                    currentPage === page ? 'bg-indigo-950 hover:bg-indigo-900' : ''
                  }`}
                >
                  {page}
                </Button>
              )
            })}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      )}

      {/* Empty State (for demonstration) */}
      {/* 
      <div className="text-center py-16">
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-xl font-light text-slate-900">No Articles Found</h3>
          <p className="text-slate-600 font-light">
            Try adjusting your search terms or clearing your filters to discover more content.
          </p>
          <Button variant="outline">
            Clear All Filters
          </Button>
        </div>
      </div>
      */}
    </div>
  )
}