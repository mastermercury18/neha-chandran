import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "uniqorn",
    description: "drag-and-drop photonic circuit composer",
    languages: ["swift", "python"],
    github: "https://github.com/mastermercury18/uniqorn",
    image: "/images/uniqorn.png",
  },
  {
    name: "planckton",
    description: "ai-powered quantum developer assistant",
    languages: ["jupyter", "javascript", "typescript", "html/css"],
    github: "https://github.com/mastermercury18/planckton",
    image: "/images/planckton.png",
  },
  {
    name: "nutri-genome",
    description: "quantum ai powered personalized nutrition for liver health",
    languages: ["typescript", "jupyter", "python", "html/css"],
    github: "https://github.com/mastermercury18/nutri-genome",
    image: "/images/nutri-genome.png",
  },
  {
    name: "qascade",
    description: "quantum optimized cell signaling pathway visualizer",
    languages: ["typescript", "html", "jupyter"],
    github: "https://github.com/mastermercury18/qascade",
    image: "/images/qascade.png",
  },
  {
    name: "saphron-quore",
    description: "quantum-enhanced rl agent for personalized, adaptive learning",
    languages: ["python", "javascript", "html/css"],
    github: "https://github.com/mastermercury18/saphron-quore",
    image: "/images/saphron-quore.png",
  },
  {
    name: "mango",
    description: "first ai agent for quantum dev ops",
    languages: ["coming soon"],
    github: "https://github.com/mastermercury18/mango",
    image: "/images/mango.png",
  }
  
];

export default function Projects() {
  return (
    <div className="content-container py-20">
      <AnimatedSection>
              <h1 className="gradient-text text-4xl md:text-5xl font-bold mb-8 text-center">
                projects
              </h1>
            </AnimatedSection>
      
            <AnimatedSection delay={0.2}>
              <div className="text-center mb-10">
                <p className="text-lg text-muted-foreground">
                  a snapshot of my favourite physics-themed github repos
                </p>
              </div>
            </AnimatedSection>
      
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <AnimatedSection key={project.name} delay={index * 0.1}>
            <div className="hover-lift p-6 rounded-xl bg-card border border-border group">
              
              {/* screenshot */}
              {project.image && (
                <div className="mb-4">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="rounded-lg w-full h-40 object-cover border border-border"
                  />
                </div>
              )}

              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-primary lowercase">
                  {project.name}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>

              {/* description */}
              <p className="text-muted-foreground leading-relaxed mb-3">
                {project.description}
              </p>

              {/* language badges */}
              <div className="flex flex-wrap gap-2">
                {project.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
