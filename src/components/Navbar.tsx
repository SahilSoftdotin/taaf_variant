import { navLinks, company } from "../content";

export function Navbar() {
  return (
    <nav className="absolute left-0 right-0 top-0 z-20 px-6 py-5">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/brand/taaf-logo.png"
            alt={`${company.name} logo`}
            className="h-9 w-auto"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium text-gray-700 transition-colors duration-200 hover:text-black"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-black px-7 py-2.5 text-base font-medium text-white transition-colors duration-200 hover:bg-gray-800"
        >
          Book a Session
        </a>
      </div>
    </nav>
  );
}
