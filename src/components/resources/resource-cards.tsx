import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FileText, Download, ExternalLink } from 'lucide-react'

export function ResourceCards() {
  const resources = [
    {
      id: 1,
      title: "APEST Assessment Worksheet",
      description: "Comprehensive self-assessment tool to identify your primary and secondary APEST giftings within the fivefold ministry framework.",
      format: "PDF",
      downloadUrl: "/resources/apest-assessment.pdf",
      tags: ["Assessment", "APEST", "Personal Development"],
      featured: true
    },
    {
      id: 2,
      title: "Team Formation Canvas",
      description: "Visual framework for mapping team dynamics, identifying gift distribution, and planning developmental pathways.",
      format: "PDF",
      downloadUrl: "/resources/team-formation-canvas.pdf",
      tags: ["Team Building", "Leadership", "Strategy"],
      featured: false
    },
    {
      id: 3,
      title: "Movement DNA Assessment",
      description: "Diagnostic tool for evaluating the health and potential of missional movements within your organization or community.",
      format: "MDX",
      downloadUrl: "/resources/movement-dna-assessment",
      tags: ["Movement", "Assessment", "Strategy"],
      featured: true
    },
    {
      id: 4,
      title: "Community Covenant Template",
      description: "Editable template for establishing shared values, commitments, and behavioral agreements within missional communities.",
      format: "PDF",
      downloadUrl: "/resources/community-covenant-template.pdf",
      tags: ["Community", "Covenant", "Formation"],
      featured: false
    },
    {
      id: 5,
      title: "Discipleship Pathway Guide",
      description: "Step-by-step framework for creating contextual discipleship processes that move people toward spiritual maturity and mission.",
      format: "PDF",
      downloadUrl: "/resources/discipleship-pathway-guide.pdf",
      tags: ["Discipleship", "Formation", "Process"],
      featured: false
    },
    {
      id: 6,
      title: "Leadership Development Matrix",
      description: "Comprehensive tool for identifying, developing, and deploying leaders at various stages of organizational growth.",
      format: "MDX",
      downloadUrl: "/resources/leadership-development-matrix",
      tags: ["Leadership", "Development", "Matrix"],
      featured: true
    }
  ]

  const featuredResources = resources.filter(resource => resource.featured)
  const regularResources = resources.filter(resource => !resource.featured)

  return (
    <section className="py-24 px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Featured Resources */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-muted-foreground">
              Essential tools for missional leaders and teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <Card key={resource.id} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      <Badge variant={resource.format === 'PDF' ? 'default' : 'secondary'} className="text-xs">
                        {resource.format}
                      </Badge>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Featured
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {resource.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-6">
                    {resource.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {resource.format === 'PDF' ? 'Download PDF' : 'View Resource'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Resources */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              All Resources
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete library of practical tools and guides
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularResources.map((resource) => (
              <Card key={resource.id} className="bg-card border-border hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <Badge variant="outline" className="text-xs">
                        {resource.format}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-border hover:bg-accent"
                    size="sm"
                  >
                    {resource.format === 'PDF' ? (
                      <>
                        <Download className="w-3 h-3 mr-2" />
                        Download
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-3 h-3 mr-2" />
                        View
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}