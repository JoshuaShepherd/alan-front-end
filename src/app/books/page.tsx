import { Metadata } from 'next'
import { BooksHero } from '@/components/books/books-hero'
import { FeaturedBook } from '@/components/books/featured-book'
import { BooksGrid } from '@/components/books/books-grid'
import { BooksCTA } from '@/components/books/books-cta'

export const metadata: Metadata = {
  title: 'Books by Alan Hirsch | Missional Leadership Resources',
  description: 'Explore Alan Hirsch\'s comprehensive library of books on missional leadership, church transformation, and the APEST framework. Resources that shape leaders and communities.',
}

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-background">
      <BooksHero />
      <FeaturedBook />
      <BooksGrid />
      <BooksCTA />
    </div>
  )
}