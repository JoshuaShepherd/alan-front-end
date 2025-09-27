import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  MapPin, 
  Video, 
  ExternalLink,
  Clock,
  Globe
} from 'lucide-react'

const upcomingEvents = [
  {
    id: 'missional-leadership-intensive-2025',
    title: 'Missional Leadership Intensive',
    description: 'A comprehensive 3-day intensive exploring the foundations of missional leadership and apostolic imagination.',
    date: '2025-03-15',
    endDate: '2025-03-17',
    time: '9:00 AM - 5:00 PM',
    location: 'Melbourne, Australia',
    venue: 'Forge Mission Training Network',
    type: 'in-person',
    price: 'AUD $450',
    capacity: 50,
    registered: 32,
    tags: ['Leadership', 'Intensive', 'APEST'],
    featured: true
  },
  {
    id: 'church-planting-webinar-series',
    title: 'Church Planting Webinar Series',
    description: 'Four-part series on organic church planting principles and practices for the 21st century.',
    date: '2025-02-20',
    endDate: '2025-03-13',
    time: '7:00 PM - 8:30 PM EST',
    location: 'Virtual',
    venue: 'Zoom Platform',
    type: 'virtual',
    price: 'USD $89',
    capacity: 200,
    registered: 156,
    tags: ['Church Planting', 'Webinar', 'Virtual'],
    featured: false
  },
  {
    id: 'apest-workshop-london',
    title: 'APEST Workshop: Discovering Your Calling',
    description: 'Interactive workshop helping participants discover and develop their APEST gifts for ministry.',
    date: '2025-04-12',
    endDate: '2025-04-12',
    time: '10:00 AM - 4:00 PM',
    location: 'London, UK',
    venue: 'St. Mellitus College',
    type: 'in-person',
    price: 'GBP £125',
    capacity: 80,
    registered: 23,
    tags: ['APEST', 'Workshop', 'Calling'],
    featured: false
  },
  {
    id: 'forgotten-ways-masterclass',
    title: 'The Forgotten Ways Masterclass',
    description: 'Deep dive into the six elements of Apostolic Genius with practical application for your context.',
    date: '2025-05-08',
    endDate: '2025-05-09',
    time: '9:30 AM - 4:30 PM',
    location: 'Virtual + In-Person',
    venue: 'Hybrid Event',
    type: 'hybrid',
    price: 'USD $175',
    capacity: 150,
    registered: 89,
    tags: ['Apostolic Genius', 'Masterclass', 'Hybrid'],
    featured: true
  },
  {
    id: 'theological-reflection-retreat',
    title: 'Theological Reflection Retreat',
    description: 'A contemplative retreat focusing on missional theology and spiritual formation for leaders.',
    date: '2025-06-15',
    endDate: '2025-06-18',
    time: 'Residential',
    location: 'Blue Mountains, Australia',
    venue: 'Carrington Retreat Centre',
    type: 'in-person',
    price: 'AUD $380',
    capacity: 30,
    registered: 18,
    tags: ['Retreat', 'Theology', 'Spiritual Formation'],
    featured: false
  },
  {
    id: 'global-missions-conference',
    title: 'Global Missions Conference 2025',
    description: 'Annual conference bringing together missional leaders from around the world.',
    date: '2025-07-22',
    endDate: '2025-07-25',
    time: 'Full Conference',
    location: 'Cape Town, South Africa',
    venue: 'International Conference Centre',
    type: 'in-person',
    price: 'USD $299',
    capacity: 500,
    registered: 278,
    tags: ['Conference', 'Global', 'Missions'],
    featured: true
  }
]

export function EventsFeed() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'virtual':
        return <Video className="w-4 h-4" />
      case 'hybrid':
        return <Globe className="w-4 h-4" />
      default:
        return <MapPin className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'virtual':
        return 'bg-blue-100 text-blue-800'
      case 'hybrid':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-green-100 text-green-800'
    }
  }

  return (
    <section className="px-8 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase mb-4">
            <Calendar className="w-4 h-4" />
            Event Calendar
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-slate-900 leading-tight tracking-tight mb-4">
            Join Us at These
            <span className="block font-medium text-indigo-950">
              Upcoming Events
            </span>
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Connect with fellow leaders, deepen your understanding of missional principles, 
            and discover practical tools for transformation.
          </p>
        </div>

        <div className="space-y-8">
          {upcomingEvents.map((event) => (
            <Card 
              key={event.id} 
              className={`group relative overflow-hidden transition-all duration-500 ${
                event.featured 
                  ? 'border-indigo-200 shadow-2xl bg-gradient-to-br from-white via-indigo-50/20 to-white' 
                  : 'border-slate-200 hover:shadow-xl bg-white'
              }`}
            >
              {event.featured && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-700" />
              )}
              
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-4 gap-8 items-start">
                  {/* Date & Time */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-2xl font-light text-slate-900">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-sm text-slate-600 font-medium uppercase tracking-wide">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </div>
                    </div>
                    
                    {event.endDate !== event.date && (
                      <div className="text-xs text-slate-500">
                        until {formatDate(event.endDate)}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock className="w-4 h-4" />
                      <span className="font-light">{event.time}</span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <h3 className="text-xl lg:text-2xl font-medium text-slate-900 leading-tight">
                          {event.title}
                        </h3>
                        {event.featured && (
                          <Badge className="bg-indigo-100 text-indigo-800 text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-slate-600 font-light leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Location & Type */}
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        {getTypeIcon(event.type)}
                        <span className="font-light">{event.location}</span>
                      </div>
                      <Badge className={`text-xs ${getTypeColor(event.type)}`}>
                        {event.type === 'virtual' ? 'Virtual' : event.type === 'hybrid' ? 'Hybrid' : 'In-Person'}
                      </Badge>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Registration */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-lg font-medium text-slate-900">
                        {event.price}
                      </div>
                      <div className="text-sm text-slate-600">
                        {event.registered}/{event.capacity} registered
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button 
                        className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-medium"
                        size="lg"
                      >
                        Register Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full text-sm"
                        size="sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        More Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center pt-16">
          <Button variant="outline" className="px-8 py-3 font-medium">
            View All Upcoming Events
          </Button>
        </div>
      </div>
    </section>
  )
}