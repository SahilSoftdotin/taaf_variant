import type { Logo } from "../content";

export function MarqueeLogos({
  items,
  className = "",
}: {
  items: Logo[];
  className?: string;
}) {
  const loop = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track will-change-transform">
        {loop.map((l, i) => (
          <span
            key={`${l.name}-${i}`}
            className="mx-6 flex h-9 shrink-0 items-center"
          >
            <img
              src={l.src}
              alt={l.name}
              loading="lazy"
              className="max-h-7 w-auto max-w-[110px] object-contain opacity-50 grayscale transition duration-300 hover:opacity-90 hover:grayscale-0"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export function MarqueeText({
  items,
  styles,
}: {
  items: string[];
  styles: (i: number) => React.CSSProperties;
}) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className="backers-track will-change-transform">
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="mx-10 shrink-0 whitespace-nowrap text-black/50"
            style={styles(i % items.length)}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
