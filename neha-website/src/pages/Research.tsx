import AnimatedSection from "@/components/AnimatedSection";

const researchExperiences = [

  {
    title: "johns hopkins apl",
    description: "designed a python package to analyze superconducting qubit stability and modeled time-dependent noise using ARMA models."
  },
  {
    title: "tj qlab",
    description: "engineered a novel lab-scale interferometer for sptq photonic quantum computing protocols and published in ieee qce24 + qip 2025."
  },
  {
    title: "deffner lab",
    description: "built half and full adder quantum circuits in qiskit and ran experiments on ibm’s superconducting qubit processors."
  },
  {
    title: "georgetown physics",
    description: "worked with nanoscribe quantum x to design ultrasmall 3d nanostructures, studying voxel scaling and threshold effects."
  },
  {
    title: "ordinal research institute",
    description: "enhanced the knot physics framework, applying unsupervised ml to analyze quasar data for redshift trends."
  },
  {
    title: "van keuren lab",
    description: "optimized polymer-based nanoparticles for a novel cluster-nanocarrier system."
  }
  
];

export default function Research() {
  return (
    <div className="content-container py-20">
      <AnimatedSection>
        <h1 className="gradient-text text-4xl md:text-5xl font-bold mb-16 text-center">
          research
        </h1>
      </AnimatedSection>
      
      <div className="space-y-8">
        {researchExperiences.map((experience, index) => (
          <AnimatedSection key={experience.title} delay={index * 0.1}>
            <div className="hover-lift p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-3 text-primary lowercase">
                {experience.title}
              </h3>
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