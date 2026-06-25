import { MarqueeLogos, MarqueeText } from "./MarqueeLogos";
import { credentials, banks } from "../content";

const credStyle = (i: number): React.CSSProperties => {
  const s: React.CSSProperties[] = [
    { fontFamily: "Times New Roman, serif", fontWeight: 400, letterSpacing: "0.02em", fontSize: 15 },
    { fontFamily: "Arial Black, sans-serif", fontWeight: 900, letterSpacing: "0.06em", fontSize: 15, textTransform: "uppercase" },
    { fontFamily: "Georgia, serif", fontWeight: 600, letterSpacing: "-0.02em", fontSize: 17 },
    { fontFamily: "Courier New, monospace", fontWeight: 700, letterSpacing: "0.12em", fontSize: 13, textTransform: "uppercase" },
    { fontFamily: "Palatino, Book Antiqua, serif", fontWeight: 500, letterSpacing: "0.03em", fontSize: 16 },
    { fontFamily: "Verdana, sans-serif", fontWeight: 700, letterSpacing: "0.04em", fontSize: 13, textTransform: "uppercase" },
    { fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 700, letterSpacing: "-0.01em", fontSize: 15 },
    { fontFamily: "Impact, Arial Narrow, sans-serif", fontWeight: 400, letterSpacing: "0.05em", fontSize: 16 },
  ];
  return s[i % s.length];
};

export function TrustStrip() {
  return (
    <section className="bg-paper px-6 py-12">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-8 md:grid-cols-4">
        <p className="text-base leading-relaxed text-black/70">
          Trusted across the Central Coast by individuals, families and
          businesses.
        </p>
        <div className="md:col-span-3">
          <MarqueeText items={credentials} styles={credStyle} />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[88rem]">
        <MarqueeLogos items={banks} />
      </div>
    </section>
  );
}
