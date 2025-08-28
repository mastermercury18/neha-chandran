import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";

const essays = [
  {
    title: "where's waldo?",
    description: "a quest through spacetime and the metaphysical realm",
    url: "https://www.notion.so/where-s-waldo-25c56e155b3a8021b16be15cceca5c5b?source=copy_link"
  },
  {
    title: "our little infinity",
    description: "the finitude of life by metaphorical renormalization",
    url: "https://www.notion.so/our-little-infinity-25c56e155b3a8055b148ed271177a82c?source=copy_link"
  },
  {
    title: "the geometric elegance of god",
    description: "a mantra of beauty binding roses, shells, and galaxies",
    url: "https://www.notion.so/the-geometric-elegance-of-god-25c56e155b3a8014a979c64bd75af7d0?source=copy_link"
  },
  {
    title: "between apples and oranges",
    description: "a whimsical fable with a powerful meaning",
    url: "https://www.notion.so/between-apples-and-oranges-25c56e155b3a804585ded3b77fe46f05?source=copy_link"
  },
  {
    title: "what is reality?",
    description: "my spiral through ai, schrodingers cat, kant, and calvinism",
    url: "https://www.notion.so/what-is-reality-25c56e155b3a80c9a80fe28f1bbfcd8a?source=copy_link"
  },
  {
    title: "tribute to late stage capitalism",
    description: "order through chaos, meaning through absurdity",
    url: "https://www.notion.so/tribute-to-late-stage-capitalism-25c56e155b3a8017acb6cdc3b71b3237?source=copy_link"
  },
];

export default function Writing() {
  return (
    <div className="content-container py-20">
      <AnimatedSection>
        {/* tighter spacing: mb-8 instead of mb-16 */}
        <h1 className="gradient-text text-4xl md:text-5xl font-bold mb-8 text-center">
          writing
        </h1>
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        {/* tighter spacing: mb-6 instead of mb-12 */}
        <div className="text-center mb-6">
          <p className="text-lg text-muted-foreground">
            a dreamy physicist's musings on life, the universe, and love
          </p>
        </div>
      </AnimatedSection>
      
      <div className="space-y-6 max-w-2xl mx-auto">
        {essays.map((essay, index) => (
          <AnimatedSection key={essay.title} delay={0.3 + index * 0.1}>
            <a
              href={essay.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover-lift p-5 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-primary lowercase">
                  {essay.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mt-1">{essay.description}</p>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
