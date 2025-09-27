import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, BookOpen, User } from 'lucide-react'
import Link from 'next/link'

interface BookHeaderProps {
  title: string
  author: string
  progress: number
  currentChapter: number
  totalChapters: number
}

export function BookHeader({ title, author, progress, currentChapter, totalChapters }: BookHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Back Button */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-slate-600 hover:text-slate-900"
            >
              <Link href="/books" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Books
              </Link>
            </Button>
            
            <div className="w-px h-6 bg-slate-200" />
            
            {/* Book Icon */}
            <div className="w-8 h-8 bg-indigo-950 rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Center: Book Info */}
          <div className="hidden md:flex items-center gap-6 flex-1 max-w-2xl mx-8">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-lg font-medium text-slate-900 truncate">
                  {title}
                </h1>
                <div className="flex items-center gap-1 text-sm text-slate-500">
                  <User className="w-3 h-3" />
                  <span>{author}</span>
                </div>
              </div>
              
              {/* Progress */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Chapter {currentChapter} of {totalChapters}</span>
                  <span>{progress}% complete</span>
                </div>
                <Progress value={progress} className="h-1.5 bg-slate-100">
                  <div className="h-full bg-indigo-950 rounded-full transition-all duration-300" 
                       style={{ width: `${progress}%` }} />
                </Progress>
              </div>
            </div>
          </div>

          {/* Right: Chapter Navigation */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentChapter <= 1}
              className="hidden sm:flex"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={currentChapter >= totalChapters}
              className="hidden sm:flex"
            >
              Next
            </Button>
            
            {/* Mobile Chapter Info */}
            <div className="md:hidden text-sm text-slate-600 bg-slate-50 px-3 py-2 rounded-lg">
              {currentChapter}/{totalChapters}
            </div>
          </div>
        </div>

        {/* Mobile Book Info */}
        <div className="md:hidden pb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-base font-medium text-slate-900 truncate">
                {title}
              </h1>
              <span className="text-sm text-slate-500">by {author}</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Chapter {currentChapter} of {totalChapters}</span>
                <span>{progress}% complete</span>
              </div>
              <Progress value={progress} className="h-1.5 bg-slate-100">
                <div className="h-full bg-indigo-950 rounded-full transition-all duration-300" 
                     style={{ width: `${progress}%` }} />
              </Progress>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}