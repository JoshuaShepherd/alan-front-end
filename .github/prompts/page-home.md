# Page: Home

## Meta
- Title: Alan Hirsch — Author, Speaker, Missional Architect
- Description: Missional theology and tools for leadership, discipleship, and movement. Explore books, resources, events, and courses.

## Hero
- Eyebrow: Welcome
- H1: Reimagining Church for a Missional Future
- Subhead: Alan Hirsch is a leading voice in mission and movement, equipping leaders with frameworks and practices for multiplying disciples and communities.
- Primary CTA: Explore Books
- Secondary CTA: Join Newsletter
- Visual: Editorial portrait background + subtle motion/texture

## Featured Sections

### Books (Carousel/Grid)
- Heading: Books that Shape Movements
- Subhead: Explore Alan’s key works on missional theology and ecclesiology.
- CTA: View All Books
- Content: 3–4 featured books (cover image, title, quick blurb)

### Articles/Blog
- Heading: Insights & Reflections
- Subhead: Missional imagination, cultural analysis, and leadership praxis.
- CTA: Read Articles
- Content: 2–3 recent featured posts (title, excerpt, read more)

### Speaking & Events
- Heading: Invite Alan to Speak
- Subhead: Keynotes, workshops, and leadership intensives tailored for your context.
- CTA: Learn More
- Content: Highlight 1 upcoming event or sample speaking topic

### Resources
- Heading: Practical Tools
- Subhead: Curated frameworks and guides to help you design for mission.
- CTA: Explore Resources
- Content: Grid of 3 cards (Toolkit, Framework, Guide)

### Movemental (Cross-Link)
- Heading: Movemental Network
- Subhead: A learning hub for resources, dashboards, and collective content.
- CTA: Visit Movemental

## Social Proof
- Testimonial pull-quote (1–2 sentences)
- Attribution: Leader name + organization

## Newsletter Callout
- Heading: Stay in the Loop
- Subhead: Monthly reflections, resources, and early access to events
- Input + Button: “Subscribe”

## Footer
- Global footer w/ navigation + socials

## States
- Loading: Skeleton cards for books + blog
- Error: Inline alert (“Couldn’t load content. Try again.”)
- Empty: Show fallback copy (“New resources are on the way!”)

## Copy (Starter)
Hero H1: Reimagining Church for a Missional Future  
Subhead: Equipping leaders with frameworks and practices for multiplying disciples and communities.  
Books subcopy: “Alan’s writings have helped thousands of leaders rediscover the heart of mission.”  

## Notes for Build
- Use `EditorialLayout` and `EditorialSection` where possible (like homepage prototype)
- Book + Blog sections can pull from `/api/books` and `/api/posts` (later)
- Keep sections modular: each is a slice with header, subhead, and CTA
- Track CTA clicks as `view_events` and `conversion_events(kind='signup')`