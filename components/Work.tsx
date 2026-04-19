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
          summary="A regional health agency had run an evidence-based home visiting program for first-time mothers for years. During a public health emergency, the agency's nursing workforce was pulled into crisis response while the families enrolled in the program still needed care. The partnership held. Services continued. The workforce adapted to telehealth faster than anyone had a playbook for. What made it work wasn't a single intervention. It was holding three conversations at once: keeping frontline nurses connected to the reason they took the job, working with agency leadership on what the partnership could realistically sustain, and keeping the national organization from escalating a moment that needed de-escalation. The program came back stronger on the other side."
          context="San Diego, abstracted"
        />
        <CaseStudy
          title="Clinical Quality Measure Pipeline"
          summary="Medicare Advantage quality measures get explained at a high level, but they behave differently when you actually implement them. I built this project to work through that gap at the row level. It implements two Part C measures, applies frailty exclusions, calculates medication adherence with PDC methodology, and compares the same measure as specified by STARS and HEDIS. The specifications look identical on the surface. The results don't always match. That gap is where implementation work actually happens."
          githubUrl="https://github.com/druik/medicare-stars-pipeline"
        />
        <CaseStudy
          title="Cortex"
          summary={[
            "Most task systems assume you can do more than you actually can. Cortex was built on the opposite assumption. It's an ambient display paired with a triage app, Prefrontal.",
            "Prefrontal is where you review the backlog, approve what belongs on today's display, and defer the rest. Cortex is read-only: it shows the current time, the next calendar event, and the tasks you approved for today. Nothing else.",
            "No overdue counts, no notifications, no productivity shaming. The split between the two apps is the design: one surface for decisions, one surface for attention. Built for people whose cognitive capacity varies day to day, which is more of us than most software acknowledges.",
          ]}
          githubUrl="https://github.com/druik/cortex-display"
        />
      </div>
    </section>
  );
}
