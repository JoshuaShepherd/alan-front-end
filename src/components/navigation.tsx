import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-950 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full opacity-90" />
            </div>
            <span className="text-xl font-light text-slate-900 tracking-tight">
              Alan Hirsch
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-slate-600 hover:text-slate-900 font-light transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-slate-600 hover:text-slate-900 font-light transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/archive" 
              className="text-slate-600 hover:text-slate-900 font-light transition-colors duration-200"
            >
              Archive
            </Link>
            <Link 
              href="/assessment" 
              className="text-slate-600 hover:text-slate-900 font-light transition-colors duration-200"
            >
              Assessment
            </Link>
            <Link 
              href="/articles" 
              className="text-slate-600 hover:text-slate-900 font-light transition-colors duration-200"
            >
              Articles
            </Link>
            <Link 
              href="/books" 
              className="text-slate-600 hover:text-slate-900 font-light transition-colors duration-200"
            >
              Books
            </Link>
            <Link 
              href="/events" 
              className="text-slate-600 hover:text-slate-900 font-light transition-colors duration-200"
            >
              Events
            </Link>
            <Link 
              href="/speaking" 
              className="text-slate-600 hover:text-slate-900 font-light transition-colors duration-200"
            >
              Speaking
            </Link>
            <Link 
              href="/resources" 
              className="text-slate-600 hover:text-slate-900 font-light transition-colors duration-200"
            >
              Resources
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-indigo-950 hover:bg-indigo-900 text-white text-sm font-medium px-6 py-2 transition-all duration-300"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  )
}