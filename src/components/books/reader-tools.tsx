'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { 
  Type, 
  Sun, 
  Moon, 
  Bookmark, 
  BookmarkCheck, 
  Settings, 
  Minus, 
  Plus 
} from 'lucide-react'
import { useState } from 'react'

export function ReaderTools() {
  const [fontSize, setFontSize] = useState(16)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const increaseFontSize = () => {
    if (fontSize < 24) setFontSize(fontSize + 2)
  }

  const decreaseFontSize = () => {
    if (fontSize > 12) setFontSize(fontSize - 2)
  }

  return (
    <>
      {/* Mobile Tools Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-6 right-6 z-40 lg:hidden w-12 h-12 rounded-full bg-indigo-950 hover:bg-indigo-900 shadow-lg"
        size="sm"
      >
        <Settings className="w-5 h-5 text-white" />
      </Button>

      {/* Tools Panel */}
      <div className={`
        fixed right-6 top-24 z-40 transition-all duration-300
        ${isExpanded ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        <Card className="w-64 lg:w-56 bg-white/95 backdrop-blur-sm border-slate-200 shadow-xl">
          <div className="p-4 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-900">
                Reading Tools
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="lg:hidden w-6 h-6 p-0"
              >
                ×
              </Button>
            </div>

            {/* Font Size */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Type className="w-4 h-4" />
                <span>Font Size</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 12}
                  className="w-8 h-8 p-0"
                >
                  <Minus className="w-3 h-3" />
                </Button>
                <div className="flex-1 text-center text-sm text-slate-600 bg-slate-50 py-1 rounded">
                  {fontSize}px
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={increaseFontSize}
                  disabled={fontSize >= 24}
                  className="w-8 h-8 p-0"
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                <span>Theme</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant={!isDarkMode ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsDarkMode(false)}
                  className="flex items-center gap-2"
                >
                  <Sun className="w-3 h-3" />
                  Light
                </Button>
                <Button
                  variant={isDarkMode ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsDarkMode(true)}
                  className="flex items-center gap-2"
                >
                  <Moon className="w-3 h-3" />
                  Dark
                </Button>
              </div>
            </div>

            {/* Bookmark */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                <span>Bookmark</span>
              </div>
              <Button
                variant={isBookmarked ? "default" : "outline"}
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="w-full flex items-center gap-2"
              >
                {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                {isBookmarked ? 'Bookmarked' : 'Add Bookmark'}
              </Button>
            </div>

            {/* Reading Progress */}
            <div className="space-y-3 pt-3 border-t border-slate-200">
              <div className="text-sm text-slate-700">
                Reading Progress
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>This Chapter</span>
                  <span>65%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <div className="bg-indigo-950 h-1.5 rounded-full transition-all duration-300" 
                       style={{ width: '65%' }} />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2 pt-3 border-t border-slate-200">
              <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                Share Chapter
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                Table of Contents
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                Export as PDF
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Apply font size to content */}
      <style jsx global>{`
        .reader-content {
          font-size: ${fontSize}px;
          line-height: ${fontSize * 1.6}px;
        }
        
        ${isDarkMode ? `
          .reader-content {
            color: #e2e8f0;
          }
          .reader-content h1,
          .reader-content h2,
          .reader-content h3,
          .reader-content h4 {
            color: #f1f5f9;
          }
        ` : ''}
      `}</style>
    </>
  )
}