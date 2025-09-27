import { Metadata } from 'next'
import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { EditorialLayout, EditorialSection } from '@/components/editorial'
import { ArrowRight, BookOpen, FileText, Users, Calendar, ExternalLink, Mail, Quote } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Alan Hirsch — Author, Speaker, Missional Architect',
  description: 'Missional theology and tools for leadership, discipleship, and movement. Explore books, resources, events, and courses.',
}

// TODO: Replace with actual API calls to /api/books and /api/posts
const featuredBooks = [
  {
    id: 1,
    title: "The Forgotten Ways",
    subtitle: "Reactivating Apostolic Movements",
    coverImage: "/images/books/forgotten-ways.jpg",
    description: "Rediscover the revolutionary nature of early Christianity and how its principles can transform today's church.",
    slug: "forgotten-ways"
  },
  {
    id: 2, 
    title: "5Q: Reactivating the Original Intelligence and Capacity of the Body of Christ",
    subtitle: "The APEST Framework",
    coverImage: "/images/books/5q.jpg", 
    description: "Unlock the fivefold ministry gifts to create healthy, multiplying Christian communities.",
    slug: "5q"
  },
  {
    id: 3,
    title: "The Permanent Revolution",
    subtitle: "Apostolic Imagination and Practice",
    coverImage: "/images/books/permanent-revolution.jpg",
    description: "How apostolic leadership can catalyze ongoing transformation in the church.",
    slug: "permanent-revolution"
  }
]

const featuredArticles = [
  {
    id: 1,
    title: "Movemental Discipleship in a Post-Christendom World",
    excerpt: "Why missional imagination matters more than ever in our current cultural context. Exploring the intersection of discipleship, culture, and movement dynamics.",
    publishedAt: "2024-02-15",
    readTime: "8 min read",
    slug: "movemental-discipleship"
  },
  {
    id: 2,
    title: "The Future of Leadership Development",
    excerpt: "Moving beyond traditional hierarchical models to organic, movement-oriented leadership formation that multiplies disciples and communities.",
    publishedAt: "2024-01-28", 
    readTime: "12 min read",
    slug: "future-leadership-development"
  }
]

const featuredResources = [
  {
    title: "APEST Assessment",
    description: "Discover your fivefold ministry profile and team dynamics",
    type: "Assessment Tool",
    icon: Users
  },
  {
    title: "Movement DNA Framework", 
    description: "Diagnostic tool for evaluating missional health and potential",
    type: "Strategic Framework",
    icon: FileText
  },
  {
    title: "Community Formation Guide",
    description: "Practical steps for building authentic Christian community",
    type: "Implementation Guide", 
    icon: BookOpen
  }
]

// Loading components
function BooksSkeleton() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {[...Array(3)].map((_, i) => (
        <Card key={i} className="bg-card border-border">
          <CardContent className="p-6">
            <Skeleton className="h-48 w-full mb-4 rounded-md" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function ArticlesSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {[...Array(2)].map((_, i) => (
        <Card key={i} className="bg-card border-border">
          <CardContent className="p-6">
            <Skeleton className="h-6 w-3/4 mb-3" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3 mb-4" />
            <Skeleton className="h-4 w-24" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// Error components
function ContentError({ message }: { message: string }) {
  return (
    <Alert>
      <AlertDescription>
        {message} <button className="underline">Try again</button>
      </AlertDescription>
    </Alert>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <EditorialSection spacing="xl" className="relative overflow-hidden">
        <EditorialLayout maxWidth="6xl">
          <div className="text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              Welcome
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Reimagining Church for a 
              <span className="block text-primary">Missional Future</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Alan Hirsch is a leading voice in mission and movement, equipping leaders with frameworks 
              and practices for multiplying disciples and communities.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-48" asChild>
                <Link href="/books">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Books
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="border-border hover:bg-accent min-w-48">
                <Mail className="w-5 h-5 mr-2" />
                Join Newsletter
              </Button>
            </div>
          </div>
        </EditorialLayout>
      </EditorialSection>

      {/* Featured Books */}
      <EditorialSection background="muted">
        <EditorialLayout maxWidth="6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Books that Shape Movements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alan's writings have helped thousands of leaders rediscover the heart of mission.
            </p>
          </div>

          <Suspense fallback={<BooksSkeleton />}>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {featuredBooks.map((book) => (
                <Card key={book.id} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="aspect-[3/4] bg-muted rounded-md mb-4 flex items-center justify-center">
                      {/* TODO: Replace with actual book cover images */}
                      <BookOpen className="w-12 h-12 text-muted-foreground" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-1 font-medium">
                      {book.subtitle}
                    </p>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {book.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Suspense>

          <div className="text-center">
            <Button variant="outline" className="border-border hover:bg-accent" asChild>
              <Link href="/books">
                View All Books
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </EditorialLayout>
      </EditorialSection>

      {/* Featured Articles */}
      <EditorialSection>
        <EditorialLayout maxWidth="6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Insights & Reflections
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Missional imagination, cultural analysis, and leadership praxis.
            </p>
          </div>

          <Suspense fallback={<ArticlesSkeleton />}>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Suspense>

          <div className="text-center">
            <Button variant="outline" className="border-border hover:bg-accent" asChild>
              <Link href="/articles">
                Read Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </EditorialLayout>
      </EditorialSection>

      {/* Speaking & Events */}
      <EditorialSection background="muted">
        <EditorialLayout maxWidth="6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Invite Alan to Speak
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Keynotes, workshops, and leadership intensives tailored for your context.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Leadership Intensives</h4>
                    <p className="text-sm text-muted-foreground">Multi-day transformational experiences</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Team Workshops</h4>
                    <p className="text-sm text-muted-foreground">Practical APEST and movement training</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Conference Keynotes</h4>
                    <p className="text-sm text-muted-foreground">Inspiring vision for missional transformation</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/speaking">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <Badge className="mb-4">Upcoming Event</Badge>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Movement Leadership Summit 2025
                </h3>
                <p className="text-muted-foreground mb-4">
                  Join leaders from around the world for an intensive exploration of apostolic leadership and movement formation.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>March 15-17, 2025 • Los Angeles, CA</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </EditorialLayout>
      </EditorialSection>

      {/* Resources */}
      <EditorialSection>
        <EditorialLayout maxWidth="6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Practical Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated frameworks and guides to help you design for mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredResources.map((resource, index) => {
              const IconComponent = resource.icon
              return (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 text-center group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    
                    <Badge variant="outline" className="mb-3">
                      {resource.type}
                    </Badge>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {resource.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {resource.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-border hover:bg-accent" asChild>
              <Link href="/resources">
                Explore Resources
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </EditorialLayout>
      </EditorialSection>

      {/* Movemental Network */}
      <EditorialSection background="card" className="border-t border-b border-border">
        <EditorialLayout maxWidth="4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Movemental Network
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              A learning hub for resources, dashboards, and collective content from the global missional movement.
            </p>
            
            <Button variant="outline" className="border-border hover:bg-accent" asChild>
              <Link href="https://movemental.com" target="_blank">
                Visit Movemental
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </EditorialLayout>
      </EditorialSection>

      {/* Social Proof */}
      <EditorialSection>
        <EditorialLayout maxWidth="4xl">
          <Card className="bg-card border-border">
            <CardContent className="p-12 text-center">
              <Quote className="w-8 h-8 text-primary mx-auto mb-6" />
              
              <blockquote className="text-xl text-foreground italic mb-6 leading-relaxed">
                "Alan Hirsch has been one of the most influential voices in helping the church rediscover its missional identity. His frameworks have transformed how we think about leadership and community formation."
              </blockquote>
              
              <cite className="text-muted-foreground not-italic">
                <strong className="text-foreground">Dr. Michael Frost</strong>
                <br />
                Author & Professor, Morling College
              </cite>
            </CardContent>
          </Card>
        </EditorialLayout>
      </EditorialSection>

      {/* Newsletter Signup */}
      <EditorialSection background="primary" className="text-primary-foreground">
        <EditorialLayout maxWidth="4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay in the Loop
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Monthly reflections, resources, and early access to events
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground text-primary placeholder:text-primary/60 border-0 focus:ring-2 focus:ring-primary-foreground/30"
              />
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </EditorialLayout>
      </EditorialSection>
    </div>
  )
}
