export function Thinking() {
  return (
    <section id="thinking" className="mx-auto w-full max-w-copy px-6 py-12 md:px-8">
      <h2 className="font-serif text-3xl font-semibold text-accent md:text-4xl">
        Thinking
      </h2>
      <div className="mt-8">
        <h3 className="font-serif text-2xl font-semibold text-foreground">
          Fifteen minutes after go-live
        </h3>
        <div className="prose-flow mt-4">
          <p>
            Every go-live is a party. Then the system goes live, and the people
            who built it move on to the next thing, and the people who have to
            use it every day start finding out what it actually does.
          </p>
          <p>
            My job was to know whether the data coming out of our system was
            right. The most important thing I learned is that data systems
            don&apos;t fail loudly. They fail quietly, and then they get trusted.
          </p>
          <p>
            One year, a production report had been producing numbers that looked
            plausible but were wrong. A cohort definition in the SQL didn&apos;t
            match the measure specification. The output passed review because it
            looked reasonable. The error had been misattributed for eighteen
            months, first to user data entry, then to nurse misinterpretation,
            before I traced it back to the logic itself.
          </p>
          <p>
            By the time we found it, the numbers had been used for program
            decisions, site-level performance reviews, and funder reporting.
            Agencies had used them to demonstrate program fidelity to the
            funders keeping their doors open. Nobody was doing anything wrong.
            The report was trusted because it had always been there.
          </p>
          <p>
            Fixing the SQL was the easy part. The harder work was the question
            it surfaced: what else might be quietly wrong, and who would notice?
          </p>
          <p>
            I built a kanban-style intake for custom data questions and
            validation requests. Centralized intake, visible prioritization, a
            repeatable process. It ran for almost a year while engineering
            incrementally fixed the underlying integration. It gave the field a
            way to ask questions about outputs they didn&apos;t trust, and it gave
            us a way to catch the next silent error before it became a year old.
          </p>
          <p>
            The part that stays with me is how long the error could exist
            without being seen. A system can be technically operational,
            formally reviewed, and producing numbers for people who depend on
            them, while being wrong in a way that nobody thinks to check.
            Go-lives get attention because they&apos;re events. The ongoing work
            of checking whether systems still do what we think they do
            doesn&apos;t.
          </p>
          <p>
            The problem wasn&apos;t the error. The problem was how long it could
            exist without being seen.
          </p>
        </div>
      </div>
    </section>
  );
}
