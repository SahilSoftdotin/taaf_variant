import { company, navLinks } from "../content";

export function Footer() {
  return (
    <footer className="bg-paper px-6 pb-10 pt-8">
      <div className="mx-auto max-w-[88rem] border-t border-black/10 pt-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img
              src="/brand/taaf-logo.png"
              alt={`${company.name} logo`}
              className="h-9 w-auto"
            />
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-2 text-xs text-black/45 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {company.name}. ABN {company.abn}. All
            rights reserved.
          </p>
          <p>
            Crafted by{" "}
            <a
              href="https://visiondigitallab.com/?ref=taaf-variant"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black/60 transition-colors hover:text-black"
            >
              Vision Digital Lab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
