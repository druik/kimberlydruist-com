const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#thinking", label: "Thinking" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-20 md:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] md:items-end md:px-8 md:py-28">
      <div>
        <h1 className="font-serif text-5xl font-semibold leading-tight text-accent md:text-7xl">
          Kimberly Druist
        </h1>
        <p className="mt-5 max-w-copy text-xl md:text-2xl">
          TK: positioning statement
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
        src="/photo-placeholder.jpg"
        alt="TK: photo alt text"
        className="aspect-[3/4] w-full max-w-[300px] justify-self-start rounded-lg object-cover md:justify-self-end"
      />
    </header>
  );
}
