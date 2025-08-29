import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <div className="content-container py-20">
      <AnimatedSection>
        <h1 className="gradient-text text-4xl md:text-5xl font-bold mb-8 text-center">
          about
        </h1>
      </AnimatedSection>
      
      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <AnimatedSection delay={0.2}>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              i'm a first year at uchicago studying molecular engineering (quantum track) with a minor in entrepreneurship & innovation. 
              i'm driven by the three forces of nature: <em>entropy, impermanence, and tension</em>. 
              my goal is to build the future of quantum technology by embracing these principles and turning uncertainty into possibility.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <div className="p-6 rounded-xl bg-card border border-border text-left">
            <div className="text-muted-foreground leading-relaxed space-y-6">
              <div>
                <h3 className="font-semibold mb-2">movie recs</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Good Will Hunting</li>
                  <li>The Theory of Everything</li>
                  <li>Forrest Gump</li>
                  <li>The Perks of Being a Wallflower</li>
                  <li>Eternal Sunshine of the Spotless Mind</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">book recs</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><em>The Fault in Our Stars</em></li>
                  <li><em>Frankenstein</em></li>
                  <li><em>Pale Blue Dot</em></li>
                  <li><em>A Brief History of Time</em></li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
