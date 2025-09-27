import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Clock, Share } from 'lucide-react'

interface Chapter {
  id: number
  title: string
  slug: string
}

interface ReaderBodyProps {
  content: string
  chapters: Chapter[]
  currentChapter: number
}

export function ReaderBody({ content, chapters, currentChapter }: ReaderBodyProps) {
  const currentChapterData = chapters.find(ch => ch.id === currentChapter)
  const prevChapter = chapters.find(ch => ch.id === currentChapter - 1)
  const nextChapter = chapters.find(ch => ch.id === currentChapter + 1)

  if (!content || content.trim() === '') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Card className="max-w-md mx-auto p-8 text-center border-slate-200">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">
            Content Coming Soon
          </h3>
          <p className="text-slate-600 font-light leading-relaxed mb-6">
            This chapter is currently being prepared. Check back soon for the complete content, 
            or explore other available chapters.
          </p>
          <Button variant="outline" className="w-full">
            Browse Other Chapters
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {/* Chapter Header */}
      <div className="text-center space-y-4 py-8">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase">
          <div className="w-8 h-px bg-indigo-950" />
          Chapter {currentChapter}
          <div className="w-8 h-px bg-indigo-950" />
        </div>
        <h1 className="text-3xl lg:text-4xl font-light text-slate-900 leading-tight tracking-tight">
          {currentChapterData?.title}
        </h1>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
          <span>15 min read</span>
          <div className="w-1 h-1 bg-slate-300 rounded-full" />
          <Button variant="ghost" size="sm" className="h-auto p-0 text-slate-500 hover:text-slate-700">
            <Share className="w-4 h-4 mr-1" />
            Share
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-none">
        <div className="reader-content space-y-8 text-slate-700 leading-relaxed">
          <div className="prose-content space-y-6">
            {content.split('\n\n').map((paragraph, index) => {
              const trimmed = paragraph.trim()
              
              if (trimmed.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-2xl lg:text-3xl font-light text-slate-900 mb-6 mt-12 first:mt-0 tracking-tight">
                    {trimmed.replace('# ', '')}
                  </h1>
                )
              }
              
              if (trimmed.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl lg:text-2xl font-light text-slate-900 mb-4 mt-10 tracking-tight">
                    {trimmed.replace('## ', '')}
                  </h2>
                )
              }
              
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg lg:text-xl font-medium text-slate-900 mb-3 mt-8">
                    {trimmed.replace('### ', '')}
                  </h3>
                )
              }
              
              if (trimmed.startsWith('> ')) {
                return (
                  <blockquote key={index} className="border-l-4 border-indigo-950 pl-6 py-4 my-8 bg-slate-50/50 rounded-r-lg">
                    <div className="text-slate-700 font-light italic text-lg leading-relaxed">
                      {trimmed.replace('> ', '')}
                    </div>
                  </blockquote>
                )
              }
              
              if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                return (
                  <h4 key={index} className="text-base font-medium text-slate-900 mb-2 mt-6">
                    {trimmed.replace(/\*\*/g, '')}
                  </h4>
                )
              }
              
              if (trimmed.length > 0) {
                return (
                  <p key={index} className="mb-6 leading-relaxed text-slate-700 font-light">
                    {trimmed}
                  </p>
                )
              }
              
              return null
            })}
          </div>
        </div>
      </div>

      {/* Chapter Navigation */}
      <div className="border-t border-slate-200 pt-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Previous Chapter */}
          {prevChapter ? (
            <Card className="p-6 border-slate-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 group-hover:bg-indigo-50 rounded-full flex items-center justify-center transition-colors">
                  <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-indigo-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-slate-500 mb-1">Previous Chapter</div>
                  <div className="font-medium text-slate-900 truncate">
                    {prevChapter.title}
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            <div />
          )}

          {/* Next Chapter */}
          {nextChapter ? (
            <Card className="p-6 border-slate-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="flex-1 min-w-0 text-right">
                  <div className="text-sm text-slate-500 mb-1">Next Chapter</div>
                  <div className="font-medium text-slate-900 truncate">
                    {nextChapter.title}
                  </div>
                </div>
                <div className="w-10 h-10 bg-slate-100 group-hover:bg-indigo-50 rounded-full flex items-center justify-center transition-colors">
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-700" />
                </div>
              </div>
            </Card>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}