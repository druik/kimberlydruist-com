const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#thinking", label: "Thinking" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:pb-12 md:pt-28">
      <div className="order-2 md:order-1">
        <h1 className="font-serif text-5xl font-semibold leading-tight text-accent md:text-7xl">
          Kimberly Druist, RN, MSN
        </h1>
        <p className="mt-5 max-w-copy text-xl md:text-2xl">
          I&apos;m a nurse in health tech, focused on what happens after go-live,
          not the launch party.
        </p>
        <nav aria-label="Primary" className="mt-10">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="font-semibold text-accent" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <img
        src="/photo.png"
        alt="Portrait of Kimberly Druist"
        className="order-1 w-full max-w-[300px] self-start md:order-2 md:max-w-[320px] md:self-end"
      />
    </header>
  );
}
