import { ArrowUpRight } from "lucide-react";
import { divisions } from "../content";

export function Services() {
  return (
    <section id="services" className="bg-paper px-6 py-24">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 text-sm text-black/60">Accounting & advice</p>
          <h2
            className="text-5xl font-medium leading-none text-black md:text-6xl"
            style={{ letterSpacing: "-0.04em" }}
          >
            Everything your
            <br />
            finances need
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {divisions.map((div) => (
            <div
              key={div.name}
              className="rounded-2xl border border-black/8 bg-white p-7"
            >
              <div className="mb-6 border-b border-black/8 pb-5">
                <h3
                  className="text-2xl font-medium text-black"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {div.name}
                </h3>
                <p className="mt-1 text-base text-black/60">{div.blurb}</p>
              </div>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {div.services.map((s) => (
                  <div
                    key={s.slug}
                    className="group flex cursor-default items-center gap-3.5 rounded-xl p-2.5 transition-colors duration-200 hover:bg-paper"
                  >
                    <img
                      src={`/images/services/${s.slug}.jpg`}
                      alt={s.title}
                      loading="lazy"
                      className="h-14 w-14 shrink-0 rounded-xl object-cover ring-1 ring-black/5"
                    />
                    <div className="min-w-0">
                      <p className="flex items-center gap-1 text-base font-medium text-black">
                        {s.title}
                        <ArrowUpRight className="h-3.5 w-3.5 text-black/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-black" />
                      </p>
                      <p className="mt-0.5 text-sm leading-snug text-black/55">
                        {s.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
