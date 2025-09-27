import { Metadata } from 'next'
import { BookHeader } from '@/components/books/book-header'
import { ReaderBody } from '@/components/books/reader-body'
import { ReaderTools } from '@/components/books/reader-tools'
import { ReaderCTA } from '@/components/books/reader-cta'

// This would typically come from your CMS or database
const getBookData = (slug: string) => {
  // Mock data - replace with actual data fetching
  return {
    title: "The Forgotten Ways",
    author: "Alan Hirsch",
    currentChapter: 3,
    totalChapters: 12,
    progress: 25,
    content: `# Chapter 3: Apostolic Environment

## The DNA of Missional Movements

In this pivotal chapter, we explore the fundamental elements that create an environment where apostolic movements can flourish. The question is not whether God wants to use us in mission, but rather whether we are creating the conditions that allow His missional purposes to be realized through us.

### The Organic Nature of Movements

Movements are not manufactured; they emerge from the right conditions. Like a garden that provides the optimal environment for growth, apostolic communities must cultivate the soil in which God's mission can take root and flourish.

> "The church does not have a mission; the mission has a church." - Tim Dearborn

This fundamental shift in perspective changes everything about how we approach church, leadership, and community formation. We begin to see ourselves not as the primary actors, but as participants in God's already-active mission in the world.

### Creating Apostolic Culture

The development of apostolic culture requires intentional cultivation of several key elements:

**1. Missional Orientation**
Every aspect of community life must be oriented toward God's mission in the world. This is not about adding mission as a program, but about recognizing that mission is the very essence of what it means to be God's people.

**2. Organic Leadership Development**
Leadership emerges naturally from within the community as people discover and develop their God-given gifts and callings. This is fundamentally different from importing leadership from external institutions.

**3. Contextual Engagement**
True apostolic movements are deeply contextual, engaging with the specific culture, needs, and opportunities of their environment while maintaining fidelity to the gospel.

### The Role of Apostolic Leaders

Apostolic leaders serve as catalysts for movement formation. They create environments where others can discover their calling and step into their God-given roles. This requires a fundamental shift from hierarchical control to organic empowerment.

The apostolic leader asks not "How can I build my ministry?" but rather "How can I create conditions where God's mission can flourish through many others?"

### Practical Implications

This understanding of apostolic environment has profound implications for how we:

- Structure our communities
- Develop leaders
- Engage with culture
- Measure success
- Allocate resources

The goal is not to create another church program, but to foster a way of being that naturally generates missional engagement and multiplication.

### Moving Forward

As we consider the implications of creating apostolic environment, we must ask ourselves: What conditions currently exist in our context? What needs to change? How can we begin to cultivate the soil for God's mission to take root and flourish?

The next chapter will explore the specific practices and rhythms that help create and sustain these environments over time.`,
    chapters: [
      { id: 1, title: "The Missional Renaissance", slug: "missional-renaissance" },
      { id: 2, title: "Apostolic Genius", slug: "apostolic-genius" },
      { id: 3, title: "Apostolic Environment", slug: "apostolic-environment" },
      { id: 4, title: "Jesus is Lord", slug: "jesus-is-lord" },
      { id: 5, title: "Disciple Making", slug: "disciple-making" },
      { id: 6, title: "Missional-Incarnational Impulse", slug: "missional-incarnational" },
      { id: 7, title: "Apostolic Leadership", slug: "apostolic-leadership" },
      { id: 8, title: "Organic Systems", slug: "organic-systems" },
      { id: 9, title: "Communitas", slug: "communitas" },
      { id: 10, title: "Liminality", slug: "liminality" },
      { id: 11, title: "The Way Forward", slug: "way-forward" },
      { id: 12, title: "Conclusion", slug: "conclusion" }
    ]
  }
}

interface BookPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const book = getBookData(params.slug)
  
  return {
    title: `${book.title} - Chapter ${book.currentChapter} | Alan Hirsch`,
    description: `Read ${book.title} by ${book.author}. Explore deep insights on missional leadership and church transformation.`,
  }
}

export default function BookReaderPage({ params }: BookPageProps) {
  const book = getBookData(params.slug)

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <BookHeader 
        title={book.title}
        author={book.author}
        progress={book.progress}
        currentChapter={book.currentChapter}
        totalChapters={book.totalChapters}
      />

      {/* Reader Tools - Fixed Sidebar */}
      <ReaderTools />

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-8">
          <ReaderBody 
            content={book.content}
            chapters={book.chapters}
            currentChapter={book.currentChapter}
          />
        </div>
      </div>

      {/* Call to Action */}
      <ReaderCTA />
    </div>
  )
}