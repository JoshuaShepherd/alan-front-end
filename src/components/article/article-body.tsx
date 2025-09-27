import { Card } from '@/components/ui/card'

export function ArticleBody() {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      {/* Opening paragraph */}
      <p className="text-xl leading-relaxed text-slate-700 font-light mb-8">
        In our rapidly shifting cultural landscape, the traditional models of discipleship—
        forged in the fires of Christendom—are proving inadequate for the missional challenges 
        of our time. We find ourselves in need of what I call "movemental discipleship": 
        a dynamic, adaptive approach that forms disciples capable of thriving in complexity 
        and catalyzing kingdom movements.
      </p>

      {/* Section 1 */}
      <h2 className="text-3xl font-light text-slate-900 mt-12 mb-6 tracking-tight">
        The Christendom <span className="text-indigo-950 font-medium">Inheritance</span>
      </h2>

      <p>
        For over fifteen centuries, Western Christianity operated within the protective 
        framework of Christendom—a cultural synthesis where church and society existed 
        in mutual support. Discipleship in this context could assume certain cultural 
        foundations: shared values, common narratives, and institutional backing for 
        Christian formation.
      </p>

      {/* Pull Quote */}
      <Card className="my-12 p-8 border-l-4 border-l-indigo-950 border-r-0 border-t-0 border-b-0 rounded-none bg-slate-50/50 backdrop-blur-sm">
        <blockquote className="text-2xl font-light text-slate-800 leading-relaxed italic text-center">
          "The disciples were first called Christians at Antioch not because they 
          attended church, but because their way of life was so distinctive that 
          it required a new category."
        </blockquote>
        <footer className="mt-6 text-center text-sm text-slate-500 font-medium tracking-wide">
          — Acts 11:26, Author's Paraphrase
        </footer>
      </Card>

      <p>
        This discipleship model—which I term "attractional discipleship"—worked 
        remarkably well within its cultural context. People came to faith through 
        institutional channels, were formed through established programs, and lived 
        out their faith within supportive Christian communities.
      </p>

      {/* Section 2 */}
      <h2 className="text-3xl font-light text-slate-900 mt-12 mb-6 tracking-tight">
        The Post-Christendom <span className="text-indigo-950 font-medium">Reality</span>
      </h2>

      <p>
        But Christendom is over. We now inhabit what Charles Taylor calls "a secular age"—
        not merely a time when religious belief has declined, but when the very 
        <em>conditions of belief</em> have fundamentally shifted. Faith is no longer 
        the default assumption but one option among many in what Peter Berger 
        described as the "marketplace of ideas."
      </p>

      {/* Callout Box */}
      <div className="my-12 p-8 bg-indigo-950/5 rounded-xl border border-indigo-950/10">
        <h3 className="text-xl font-medium text-indigo-950 mb-4">
          Key Insight: The Plausibility Problem
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          In pre-modern societies, religious worldviews were largely taken for granted. 
          In our hyper-pluralistic context, every belief system must constantly justify 
          its existence and relevance.
        </p>
        <p className="text-slate-700 leading-relaxed">
          This shift demands disciples who can not only <em>hold</em> their faith 
          but <em>translate</em> it compellingly across cultural boundaries.
        </p>
      </div>

      <p>
        This cultural earthquake has profound implications for discipleship. We can 
        no longer assume that new believers will be naturally surrounded by Christian 
        influence. Instead, they often find themselves as minorities within secular 
        institutions, navigating complex ethical terrain without clear Christian 
        consensus to guide them.
      </p>

      {/* Section 3 */}
      <h2 className="text-3xl font-light text-slate-900 mt-12 mb-6 tracking-tight">
        Toward <span className="text-indigo-950 font-medium">Movemental Discipleship</span>
      </h2>

      <p>
        Movemental discipleship represents a paradigm shift from attractional to 
        incarnational formation. Rather than drawing people into established Christian 
        spaces, it focuses on forming disciples who can embody the gospel authentically 
        within their existing cultural contexts.
      </p>

      <h3 className="text-xl font-medium text-slate-900 mt-8 mb-4">
        Four Essential Characteristics
      </h3>

      <div className="space-y-6 my-8">
        <div className="flex gap-4">
          <div className="w-8 h-8 bg-indigo-950/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-sm font-bold text-indigo-950">1</span>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Adaptive Learning</h4>
            <p className="text-slate-700">
              Movemental disciples are equipped with learning methodologies rather than 
              just fixed content. They can discern God's activity in new contexts and 
              respond faithfully to unprecedented challenges.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-8 h-8 bg-indigo-950/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-sm font-bold text-indigo-950">2</span>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Cultural Translation</h4>
            <p className="text-slate-700">
              They possess what Lesslie Newbigin called "missionary encounter"—the 
              ability to engage other worldviews respectfully while maintaining 
              gospel integrity.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-8 h-8 bg-indigo-950/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-sm font-bold text-indigo-950">3</span>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Network Thinking</h4>
            <p className="text-slate-700">
              Rather than institutional loyalty, they cultivate movement thinking—
              understanding how ideas, practices, and communities spread organically 
              through relational networks.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-8 h-8 bg-indigo-950/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-sm font-bold text-indigo-950">4</span>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Entrepreneurial Spirit</h4>
            <p className="text-slate-700">
              They approach ministry with what Peter Drucker called "systematic 
              innovation"—constantly seeking new ways to embody ancient truths 
              in contemporary forms.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <h2 className="text-3xl font-light text-slate-900 mt-12 mb-6 tracking-tight">
        Practical <span className="text-indigo-950 font-medium">Implications</span>
      </h2>

      <p>
        This shift toward movemental discipleship requires fundamental changes in how 
        we approach Christian formation. We must move beyond information transfer to 
        transformation catalyst, beyond program delivery to community cultivation.
      </p>

      <p>
        The early church provides our clearest model. In Acts, we see disciples who 
        were simultaneously deeply rooted in their Jewish heritage and remarkably 
        adaptive to Gentile contexts. They maintained theological integrity while 
        demonstrating cultural flexibility—exactly what our post-Christendom context demands.
      </p>

      {/* Final Pull Quote */}
      <Card className="my-12 p-8 border-l-4 border-l-indigo-950 border-r-0 border-t-0 border-b-0 rounded-none bg-slate-50/50 backdrop-blur-sm">
        <blockquote className="text-2xl font-light text-slate-800 leading-relaxed italic text-center">
          "The future belongs to those who can hold the gospel with conviction 
          while engaging culture with curiosity."
        </blockquote>
      </Card>

      {/* Conclusion */}
      <h2 className="text-3xl font-light text-slate-900 mt-12 mb-6 tracking-tight">
        The Path <span className="text-indigo-950 font-medium">Forward</span>
      </h2>

      <p>
        Movemental discipleship is not about abandoning traditional spiritual disciplines 
        or theological foundations. Rather, it's about contextualizing these timeless 
        elements within contemporary frameworks that honor both gospel integrity and 
        cultural relevance.
      </p>

      <p>
        As we navigate this post-Christendom landscape, we need disciples who are 
        comfortable with ambiguity, skilled in cultural translation, and committed 
        to the long-term work of movement building. The question is not whether the 
        church will adapt to these new realities, but whether it will do so faithfully 
        and fruitfully.
      </p>

      <p className="text-lg text-slate-600 font-light leading-relaxed mt-12 pt-8 border-t border-slate-200">
        The movemental approach to discipleship offers hope for authentic Christian 
        formation in our complex cultural moment. By learning from both ancient wisdom 
        and contemporary insights, we can form disciples ready for the challenges and 
        opportunities of our time.
      </p>

      {/* Footnotes */}
      <div className="mt-16 pt-8 border-t border-slate-200">
        <h3 className="text-lg font-medium text-slate-900 mb-6">References & Further Reading</h3>
        <div className="space-y-3 text-sm text-slate-600">
          <p>
            <sup>1</sup> Taylor, Charles. <em>A Secular Age</em>. Cambridge, MA: Harvard University Press, 2007.
          </p>
          <p>
            <sup>2</sup> Berger, Peter L. <em>The Sacred Canopy: Elements of a Sociological Theory of Religion</em>. New York: Anchor Books, 1990.
          </p>
          <p>
            <sup>3</sup> Newbigin, Lesslie. <em>The Gospel in a Pluralist Society</em>. Grand Rapids: Eerdmans, 1989.
          </p>
          <p>
            <sup>4</sup> Drucker, Peter F. <em>Innovation and Entrepreneurship</em>. New York: Harper Business, 2006.
          </p>
        </div>
      </div>
    </article>
  )
}