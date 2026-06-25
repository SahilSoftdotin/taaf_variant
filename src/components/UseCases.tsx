import { ArrowRight } from "lucide-react";
import { useCases } from "../content";

function Video({ src }: { src: string }) {
  return (
    <>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
    </>
  );
}

export function UseCases() {
  return (
    <section id="use-cases" className="bg-paper px-6 py-24">
      <div className="mx-auto max-w-[88rem]">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          {/* Intro */}
          <div className="md:pr-12 md:pt-2">
            <p className="mb-2 text-sm text-black/60">TAAF in practice</p>
            <h2
              className="mb-6 text-5xl font-medium leading-none text-black md:text-6xl"
              style={{ letterSpacing: "-0.04em" }}
            >
              How we help
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-black/60">
              One local team for individuals, families, businesses and investors
              — accounting that keeps you compliant and advice that helps you
              grow, all under one roof.
            </p>
          </div>

          {/* Featured video */}
          <div className="relative min-h-[560px] overflow-hidden rounded-3xl">
            <Video src="/video/cards/finance-meeting.mp4" />
            <div className="relative z-10 flex h-full flex-col justify-end p-10 md:p-12">
              <h3
                className="mb-5 text-4xl font-medium leading-tight text-white md:text-5xl"
                style={{ letterSpacing: "-0.03em" }}
              >
                Built around you
              </h3>
              <p className="mb-8 max-w-md text-base text-white/80">
                Every engagement starts with understanding where you are, then a
                clear plan and the work done for you — explained in plain English
                the whole way.
              </p>
              <a href="#contact" className="group inline-flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur transition-colors group-hover:bg-white">
                  <ArrowRight className="h-4 w-4 text-black" />
                </span>
                <span className="text-base font-medium text-white">
                  Book a session
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Audience cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {useCases.map((u) => (
            <div
              key={u.title}
              className="group relative min-h-[340px] overflow-hidden rounded-3xl"
            >
              <Video src={u.video} />
              <div className="relative z-10 flex h-full flex-col justify-end p-7">
                <p className="text-xs uppercase tracking-wide text-white/70">
                  {u.audience}
                </p>
                <h3 className="mt-1 text-2xl font-medium text-white">
                  {u.title}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                  {u.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
