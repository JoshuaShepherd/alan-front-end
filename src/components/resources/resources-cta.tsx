import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Users, BookOpen, Target } from 'lucide-react'
import Link from 'next/link'

export function ResourcesCTA() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <Card className="bg-primary text-primary-foreground border-0 shadow-lg">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">
                  Get the Complete Team Kit
                </h2>
                <p className="text-lg mb-8 opacity-90">
                  Access our comprehensive APEST Team Kit with assessments, worksheets, and implementation guides. 
                  Everything you need to build and deploy effective ministry teams.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 min-w-48"
                    asChild
                  >
                    <Link href="/resources/team-kit">
                      Get Team Kit
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="lg"
                    className="text-primary-foreground hover:bg-primary-foreground/10 min-w-48"
                    asChild
                  >
                    <Link href="/contact">
                      Ask Questions
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional CTAs */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-border hover:shadow-md transition-all duration-300 text-center group">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Team Training
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Schedule customized training sessions for your leadership team using these resources.
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/contact?subject=team-training">
                  Schedule Training
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-md transition-all duration-300 text-center group">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Study Guides
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Access companion study guides that complement Alan's books and teachings.
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/books">
                  Browse Books
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-md transition-all duration-300 text-center group">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Custom Solutions
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Need something specific? We can create custom resources for your unique context.
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/contact?subject=custom-resources">
                  Get Custom Tools
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}