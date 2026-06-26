import { useEffect, useState } from "react";

/**
 * Cycles through words in place, restarting the CSS swap animation on each
 * change via the `key` remount. Holds on the first word under reduced motion.
 */
export function RotatingWords({
  words,
  interval = 2200,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  return (
    <span
      key={i}
      className={`inline-block animate-word-swap [transform-style:preserve-3d] ${
        className ?? ""
      }`}
    >
      {words[i]}
    </span>
  );
}
