const contactLinks = [
  {
    label: "Email",
    href: "mailto:druist.kim@gmail.com",
    text: "druist.kim@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kimberlydruist",
    text: "linkedin.com/in/kimberlydruist",
  },
  {
    label: "GitHub",
    href: "https://github.com/druik",
    text: "github.com/druik",
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-copy px-6 py-12 md:px-8">
      <h2 className="font-serif text-3xl font-semibold text-accent md:text-4xl">
        Contact
      </h2>
      <ul className="mt-8 flex flex-col gap-4">
        {contactLinks.map((link) => (
          <li key={link.href}>
            <span className="font-semibold">{link.label}: </span>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
