import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BookOpen, ExternalLink, Star } from 'lucide-react'
import Link from 'next/link'

const books = [
  {
    id: 'the-forgotten-ways',
    title: 'The Forgotten Ways',
    subtitle: 'Reactivating Apostolic Movements',
    author: 'Alan Hirsch',
    image: '/books/the-forgotten-ways.jpg',
    description: 'A seminal work exploring the DNA of apostolic movements and how to reactivate them in contemporary contexts.',
    rating: 4.9,
    readers: '25K+',
    year: 2016,
    pages: 368,
    available: true
  },
  {
    id: 'the-forgotten-ways-handbook',
    title: 'The Forgotten Ways Handbook',
    subtitle: 'A Practical Guide for Developing Missional Churches',
    author: 'Alan Hirsch with Darryn Altclass',
    image: '/books/the-forgotten-ways-handbook.jpg',
    description: 'The practical companion to The Forgotten Ways, providing concrete tools and exercises for implementation.',
    rating: 4.7,
    readers: '12K+',
    year: 2009,
    pages: 224,
    available: true
  },
  {
    id: 'the-permanent-revolution',
    title: 'The Permanent Revolution',
    subtitle: 'Apostolic Imagination and Practice for the 21st Century Church',
    author: 'Alan Hirsch & Tim Catchim',
    image: '/books/the-permanent-revolution.jpg',
    description: 'An exploration of apostolic leadership and its role in creating sustainable church movements.',
    rating: 4.8,
    readers: '18K+',
    year: 2012,
    pages: 304,
    available: true
  },
  {
    id: 'untamed',
    title: 'Untamed',
    subtitle: 'Reactivating a Missional Form of Discipleship',
    author: 'Alan Hirsch & Debra Hirsch',
    image: '/books/untamed.jpg',
    description: 'A powerful call to embrace the wild, untamed nature of authentic Christian discipleship.',
    rating: 4.6,
    readers: '14K+',
    year: 2010,
    pages: 256,
    available: true
  },
  {
    id: 'the-shaping-of-things-to-come',
    title: 'The Shaping of Things to Come',
    subtitle: 'Innovation and Mission for the 21st Century Church',
    author: 'Michael Frost & Alan Hirsch',
    image: '/books/the-shaping-of-things-to-come.jpg',
    description: 'A visionary look at how churches can adapt and thrive in an increasingly post-Christian world.',
    rating: 4.5,
    readers: '20K+',
    year: 2003,
    pages: 284,
    available: true
  },
  {
    id: 'right-here-right-now',
    title: 'Right Here, Right Now',
    subtitle: 'Everyday Mission for Everyday People',
    author: 'Alan Hirsch & Lance Ford',
    image: '/books/right-here-right-now.jpg',
    description: 'Practical guidance for living missionally in everyday contexts and ordinary circumstances.',
    rating: 4.4,
    readers: '16K+',
    year: 2011,
    pages: 240,
    available: true
  },
  {
    id: 'rejesus',
    title: 'ReJesus',
    subtitle: 'A Wild Messiah for a Missional Church',
    author: 'Michael Frost & Alan Hirsch',
    image: '/books/rejesus.jpg',
    description: 'A fresh exploration of Jesus as the foundation for missional church and authentic Christian living.',
    rating: 4.7,
    readers: '22K+',
    year: 2009,
    pages: 272,
    available: true
  },
  {
    id: 'the-faith-of-leap',
    title: 'The Faith of Leap',
    subtitle: 'Embracing a Theology of Risk, Adventure, and Courage',
    author: 'Michael Frost & Alan Hirsch',
    image: '/books/the-faith-of-leap.jpg',
    description: 'An invitation to embrace risk and adventure as essential elements of faithful Christian living.',
    rating: 4.3,
    readers: '13K+',
    year: 2011,
    pages: 288,
    available: true
  }
]

export function BooksGrid() {
  return (
    <section className="px-8 py-24 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase mb-4">
            <BookOpen className="w-4 h-4" />
            Complete Library
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-slate-900 leading-tight tracking-tight mb-4">
            Essential Resources for
            <span className="block font-medium text-indigo-950">
              Missional Leaders
            </span>
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Explore decades of research and practical wisdom across 15+ published works, 
            translated into 25+ languages and read by leaders worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <Card key={book.id} className="group relative overflow-hidden border-slate-200 hover:shadow-2xl transition-all duration-500 bg-white">
              <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                {/* Placeholder for book cover - replace with actual images */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                  <div className="text-center p-4">
                    <div className="text-slate-600 font-light text-xs mb-1 line-clamp-2">{book.title.toUpperCase()}</div>
                    <div className="text-slate-500 text-xs">Cover Image</div>
                  </div>
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="space-y-3">
                    <Button 
                      asChild
                      className="bg-white text-slate-900 hover:bg-slate-100 font-medium"
                      size="sm"
                    >
                      <Link href={`/books/${book.id}`} className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Read Online
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-white text-white hover:bg-white hover:text-slate-900"
                      size="sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Purchase
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-slate-900 leading-tight line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-light line-clamp-2">
                    {book.subtitle}
                  </p>
                  <p className="text-xs text-slate-500">
                    {book.author}
                  </p>
                </div>

                <p className="text-sm text-slate-600 font-light leading-relaxed line-clamp-3">
                  {book.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-slate-600">{book.rating}</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    {book.readers} readers
                  </div>
                </div>

                {/* Year & Pages */}
                <div className="text-xs text-slate-400 pt-2">
                  {book.year} • {book.pages} pages
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center pt-16">
          <Button variant="outline" className="px-8 py-3 font-medium">
            View Complete Bibliography
          </Button>
        </div>
      </div>
    </section>
  )
}