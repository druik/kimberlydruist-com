const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#thinking", label: "Thinking" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[980px] flex-col gap-10 px-6 py-14 md:flex-row md:items-center md:gap-8 md:px-8 md:pb-10 md:pt-24">
      <div className="order-2 min-w-0 flex-1 md:order-1">
        <h1 className="font-serif text-3xl font-semibold leading-tight text-accent md:text-4xl">
          Kimberly Druist, <span className="whitespace-nowrap">RN, MSN</span>
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
      <div className="order-1 mx-auto w-full max-w-[160px] shrink-0 md:order-2 md:mx-0 md:max-w-[200px]">
        <img
          src="/photo.png"
          alt="Portrait of Kimberly Druist"
          className="h-auto w-full"
        />
      </div>
    </header>
  );
}
