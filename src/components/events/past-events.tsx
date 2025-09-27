import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Play, 
  Download, 
  Users, 
  Calendar,
  FileText,
  Video
} from 'lucide-react'

const pastEvents = [
  {
    id: 'missional-church-summit-2024',
    title: 'Missional Church Summit 2024',
    description: 'A comprehensive gathering exploring the future of missional communities in post-pandemic contexts.',
    date: '2024-11-15',
    location: 'Sydney, Australia',
    attendees: 280,
    type: 'conference',
    recordings: {
      available: true,
      sessions: 8,
      totalDuration: '12 hours'
    },
    resources: {
      slides: true,
      transcripts: true,
      workbook: true
    },
    tags: ['Conference', 'Missional Church', 'Community']
  },
  {
    id: 'apest-masterclass-series-2024',
    title: 'APEST Masterclass Series',
    description: 'Six-part virtual series diving deep into each of the five-fold ministry gifts and their application.',
    date: '2024-09-10',
    location: 'Virtual Event',
    attendees: 450,
    type: 'series',
    recordings: {
      available: true,
      sessions: 6,
      totalDuration: '18 hours'
    },
    resources: {
      slides: true,
      transcripts: true,
      workbook: true
    },
    tags: ['APEST', 'Virtual', 'Masterclass']
  },
  {
    id: 'church-planting-intensive-2024',
    title: 'Church Planting Intensive',
    description: 'Practical training for church planters focusing on organic and missional approaches.',
    date: '2024-06-20',
    location: 'Portland, Oregon',
    attendees: 120,
    type: 'intensive',
    recordings: {
      available: true,
      sessions: 12,
      totalDuration: '24 hours'
    },
    resources: {
      slides: true,
      transcripts: false,
      workbook: true
    },
    tags: ['Church Planting', 'Intensive', 'Practical']
  },
  {
    id: 'theological-reflection-2024',
    title: 'Theological Reflection on Mission',
    description: 'Academic symposium exploring the theological foundations of missional engagement.',
    date: '2024-04-08',
    location: 'Fuller Seminary, Pasadena',
    attendees: 85,
    type: 'symposium',
    recordings: {
      available: true,
      sessions: 4,
      totalDuration: '8 hours'
    },
    resources: {
      slides: true,
      transcripts: true,
      workbook: false
    },
    tags: ['Theology', 'Academic', 'Mission']
  }
]

export function PastEvents() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'conference':
        return 'bg-blue-100 text-blue-800'
      case 'series':
        return 'bg-purple-100 text-purple-800'
      case 'intensive':
        return 'bg-green-100 text-green-800'
      case 'symposium':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-slate-100 text-slate-800'
    }
  }

  return (
    <section className="px-8 py-24 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 tracking-wide uppercase mb-4">
            <Video className="w-4 h-4" />
            Past Events
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-slate-900 leading-tight tracking-tight mb-4">
            Access Previous
            <span className="block font-medium text-indigo-950">
              Event Content
            </span>
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Couldn't attend a previous event? Access recordings, slides, and resources 
            from our recent gatherings and training sessions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pastEvents.map((event) => (
            <Card key={event.id} className="group relative overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-500 bg-white">
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-medium text-slate-900 leading-tight">
                      {event.title}
                    </h3>
                    <Badge className={`text-xs ${getTypeColor(event.type)}`}>
                      {event.type}
                    </Badge>
                  </div>
                  
                  <p className="text-slate-600 font-light leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                </div>

                {/* Event Info */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-light">{formatDate(event.date)}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="w-4 h-4" />
                      <span className="font-light">{event.attendees} attendees</span>
                    </div>
                  </div>
                  <div className="col-span-2 text-sm text-slate-500 font-light">
                    {event.location}
                  </div>
                </div>

                {/* Content Available */}
                {event.recordings.available && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-slate-900">Available Content</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Play className="w-4 h-4 text-indigo-600" />
                          <span>{event.recordings.sessions} recordings</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-indigo-600" />
                          <span>{event.recordings.totalDuration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-wrap gap-2">
                      {event.resources.slides && (
                        <Badge variant="outline" className="text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Slides
                        </Badge>
                      )}
                      {event.resources.transcripts && (
                        <Badge variant="outline" className="text-xs">
                          <FileText className="w-3 h-3 mr-1" />
                          Transcripts
                        </Badge>
                      )}
                      {event.resources.workbook && (
                        <Badge variant="outline" className="text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Workbook
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2">
                  <Button 
                    className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-medium"
                    size="lg"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Access Recordings
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-sm"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resources
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Archive Access */}
        <div className="text-center pt-16">
          <Card className="max-w-2xl mx-auto border-slate-200 shadow-lg bg-gradient-to-br from-white to-indigo-50/20">
            <div className="p-8 space-y-4">
              <h3 className="text-xl font-medium text-slate-900">
                Complete Event Archive
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Access our complete library of over 50 past events, workshops, 
                and conferences with recordings dating back to 2018.
              </p>
              <Button className="bg-indigo-950 hover:bg-indigo-900 text-white font-medium">
                Browse Full Archive
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}