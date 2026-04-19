import { CaseStudy } from "./CaseStudy";

export function Work() {
  return (
    <section id="work" className="mx-auto w-full max-w-copy px-6 py-24 md:px-8">
      <h2 className="font-serif text-3xl font-semibold text-accent md:text-4xl">
        Work
      </h2>
      <div className="mt-8">
        <CaseStudy
          title="Partnership Under Pressure"
          summary="TK: case study 1 summary"
          context="San Diego, abstracted"
        />
        <CaseStudy
          title="Clinical Quality Measure Pipeline"
          summary="TK: case study 2 summary"
          githubUrl="https://github.com/druik/medicare-stars-pipeline"
        />
        <CaseStudy
          title="Cortex"
          summary="TK: case study 3 summary"
          githubUrl="https://github.com/druik/cortex-display"
        />
      </div>
    </section>
  );
}
