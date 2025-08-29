import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";

const researchExperiences = [
  {
    title: "johns hopkins apl",
    description:
      "designed a python package to analyze superconducting qubit stability and modeled time-dependent noise using ARMA models.",
  },
  {
    title: "tj qlab",
    description:
      "engineered a novel lab-scale interferometer for sptq photonic quantum computing protocols and published in ieee qce24 + qip 2025.",
    link: "https://ieeexplore.ieee.org/document/10821045", // replace with real link
  },
  {
    title: "deffner lab",
    description:
      "built half and full adder quantum circuits in qiskit and ran experiments on ibm’s superconducting qubit processors.",
  },
  {
    title: "georgetown physics",
    description:
      "worked with nanoscribe quantum x to design ultrasmall 3d nanostructures, studying voxel scaling and threshold effects.",
  },
  {
    title: "ordinal research institute",
    description:
      "enhanced the knot physics framework, applying unsupervised ml to analyze quasar data for redshift trends.",
  },
  {
    title: "van keuren lab",
    description:
      "optimized polymer-based nanoparticles for a novel cluster-nanocarrier system.",
  },
];

export default function Research() {
  return (
    <div className="content-container py-20">
      <AnimatedSection>
        <h1 className="gradient-text text-4xl md:text-5xl font-bold mb-8 text-center">
          research
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="text-center mb-10">
          <p className="text-lg text-muted-foreground">
            highlights from my journey through quantum, nanotech, and astro
          </p>
        </div>
      </AnimatedSection>


      <div className="space-y-8">
        {researchExperiences.map((experience, index) => (
          <AnimatedSection key={experience.title} delay={index * 0.1}>
            <div className="hover-lift p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-primary lowercase">
                  {experience.title}
                </h3>
                {experience.link && (
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {experience.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
