import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star, ArrowRight, BookOpen, Users } from 'lucide-react'
import Link from 'next/link'

export function FeaturedBook() {
  return (
    <section className="px-8 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase mb-4">
            <Star className="w-4 h-4" />
            Featured Book
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-slate-900 leading-tight tracking-tight">
            Latest Release
          </h2>
        </div>

        <Card className="relative overflow-hidden border-slate-200 shadow-2xl bg-gradient-to-br from-white via-indigo-50/20 to-white">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-950/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-900/5 rounded-full blur-2xl" />
          
          <div className="relative grid lg:grid-cols-2 gap-12 p-8 lg:p-16">
            {/* Left: Book Cover */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="w-80 h-[480px] relative shadow-2xl rounded-lg overflow-hidden transform group-hover:scale-105 transition-all duration-500 bg-gradient-to-br from-slate-100 to-slate-200">
                  {/* Placeholder for book cover - replace with actual image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                    <div className="text-center p-8">
                      <div className="text-slate-600 font-light text-sm mb-2">ON THE VERGE</div>
                      <div className="text-slate-500 text-xs">Book Cover Image</div>
                      <div className="text-slate-400 text-xs mt-2">Add: /books/on-the-verge.jpg</div>
                    </div>
                  </div>
                </div>
                
                {/* Shadow Effect */}
                <div className="absolute -bottom-6 -right-6 w-80 h-[480px] bg-indigo-950/10 rounded-lg blur-xl -z-10" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl lg:text-4xl font-light text-slate-900 leading-tight tracking-tight">
                    On the Verge
                  </h3>
                  <p className="text-lg text-slate-600 font-light">
                    A Journey into the Apostolic Future of the Church
                  </p>
                  <div className="text-sm text-slate-500">
                    By Alan Hirsch & Dave Ferguson
                  </div>
                </div>

                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  A groundbreaking exploration of how churches can reclaim their apostolic 
                  identity and engage in transformative mission. This book challenges 
                  conventional thinking about church growth and presents a radical vision 
                  for the future of Christian community.
                </p>

                {/* Key Points */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600 font-light">Reimagining church as a missional movement</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600 font-light">Practical frameworks for apostolic leadership</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-950 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600 font-light">Real-world case studies and applications</span>
                  </div>
                </div>
              </div>

              {/* Stats & Social Proof */}
              <div className="grid grid-cols-2 gap-6 py-6 border-t border-slate-200">
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-1 mb-1 justify-center lg:justify-start">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-slate-600">4.8/5 rating</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-2 mb-1 justify-center lg:justify-start">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span className="font-medium text-slate-900">15K+</span>
                  </div>
                  <div className="text-sm text-slate-600">readers</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-indigo-950 hover:bg-indigo-900 text-white font-medium px-8 py-3"
                  size="lg"
                >
                  <Link href="/books/on-the-verge" className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Read Online
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="px-8 py-3 font-medium"
                  size="lg"
                >
                  Purchase Book
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Publisher Info */}
              <div className="text-sm text-slate-500 pt-4 border-t border-slate-100">
                Published by Zondervan • 2023 • 320 pages
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}