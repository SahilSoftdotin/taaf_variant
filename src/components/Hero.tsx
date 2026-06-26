import { PillButton } from "./PillButton";
import { MarqueeLogos } from "./MarqueeLogos";
import { LazyVideo } from "./LazyVideo";
import { RotatingWords } from "./RotatingWords";
import { platforms, company } from "../content";

export function Hero() {
  return (
    <section className="flex flex-1 items-end px-6 pb-6 pt-20">
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{ height: "calc(100vh - 96px)" }}
      >
        <LazyVideo
          src="/video/hero-coin.mp4"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* light wash so dark text stays readable over the footage */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(245,245,245,0.9) 0%, rgba(245,245,245,0.7) 38%, rgba(245,245,245,0.28) 100%)",
          }}
        />

        <div className="relative z-10 flex h-full flex-col items-start justify-start p-8 pt-32 md:p-12 md:pt-36">
          <h1
            className="mb-4 max-w-2xl text-6xl font-medium leading-[0.98] text-black md:text-7xl lg:text-[5rem]"
            style={{ letterSpacing: "-0.04em" }}
          >
            Financial
            <br />
            <RotatingWords
              words={["confidence.", "independence.", "freedom.", "growth."]}
              className="font-serif italic text-black/90"
            />
          </h1>
          <p
            className="mb-8 max-w-md text-base leading-relaxed text-black/70 md:text-lg"
            style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
          >
            Transparent accounting, tax and financial advice for individuals,
            families and businesses across the Central Coast — your wealth,
            working harder.
          </p>
          <PillButton href="#contact">Book a session</PillButton>

          <div className="mt-20 w-full max-w-md md:mt-24">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-black/40">
              Works with
            </p>
            <MarqueeLogos items={platforms} />
          </div>
        </div>

        <span className="absolute bottom-6 right-8 z-10 hidden text-xs text-black/40 md:block">
          {company.accreditation} · Since {company.established}
        </span>
      </div>
    </section>
  );
}
