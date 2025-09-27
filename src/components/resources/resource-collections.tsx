import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export function ResourceCollections() {
  const collections = [
    {
      title: "APEST Team Kit",
      description: "Comprehensive toolkit for identifying and developing the fivefold ministry gifts within your team.",
      resourceCount: 12,
      type: "Digital Kit"
    },
    {
      title: "Movement Playbook", 
      description: "Strategic guides for catalyzing and sustaining missional movements in your context.",
      resourceCount: 8,
      type: "Playbook"
    },
    {
      title: "Community Formation Guides",
      description: "Practical frameworks for building authentic Christian community in the 21st century.",
      resourceCount: 15,
      type: "Guide Series"
    }
  ]

  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Resource Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated toolkits designed to equip leaders and teams for missional effectiveness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                    {collection.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {collection.resourceCount} resources
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {collection.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {collection.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}