import { PillButton } from "./PillButton";
import { valueCards } from "../content";

export function Info() {
  const [feature, ...rest] = valueCards;
  return (
    <section id="why" className="bg-paper px-6 py-24">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-16 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div>
            <h2
              className="mb-8 text-4xl font-medium leading-tight text-black md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Meet TAAF.
            </h2>
            <PillButton href="#services">Discover services</PillButton>
          </div>
          <p className="text-2xl leading-relaxed text-black/70 md:text-3xl">
            TAAF is a local Central Coast practice that helps your money grow and
            stay protected — combining transparent accounting with genuine
            financial advice.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Feature card with image */}
          <div
            className="flex min-h-80 flex-col justify-between rounded-2xl p-7 lg:col-span-2"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(245,245,245,0.2), rgba(0,0,0,0.05)), url(${feature.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3
              className="text-2xl font-medium leading-snug text-black"
              style={{ letterSpacing: "-0.02em" }}
            >
              {feature.title}
            </h3>
            <p className="max-w-xs text-base text-black/70">{feature.body}</p>
          </div>

          {/* Dark cards */}
          {rest.map((c) => (
            <div
              key={c.title}
              className="flex min-h-80 flex-col justify-between rounded-2xl bg-night p-7"
            >
              <h3 className="whitespace-pre-line text-2xl font-medium leading-snug text-white">
                {c.title}
              </h3>
              <p className="text-base text-white/60">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
