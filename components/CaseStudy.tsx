type CaseStudyProps = {
  title: string;
  summary: string | string[];
  githubUrl?: string;
  context?: string;
};

export function CaseStudy({
  title,
  summary,
  githubUrl,
  context,
}: CaseStudyProps) {
  const summaryParagraphs = Array.isArray(summary) ? summary : [summary];

  return (
    <article className="border-t border-accent/20 py-8">
      <h3 className="font-serif text-2xl font-semibold text-foreground">
        {title}
      </h3>
      {context ? (
        <p className="mt-2 text-sm italic text-foreground/70">{context}</p>
      ) : null}
      <div className="mt-4 space-y-4">
        {summaryParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {githubUrl ? (
        <a
          className="mt-4 inline-flex items-center gap-2 font-semibold text-accent"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            focusable="false"
            viewBox="0 0 16 16"
          >
            <path
              d="M5 3h8v8M13 3 3 13"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </a>
      ) : null}
    </article>
  );
}
